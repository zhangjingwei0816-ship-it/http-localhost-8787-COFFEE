// 모퉁이 작은카페 - Chart.js 대시보드 렌더링 스크립트

(function () {
  const formatKRW = (value) => "₩" + Math.round(value).toLocaleString("ko-KR");
  const formatNum = (value) => Math.round(value).toLocaleString("ko-KR");

  // 1. 데이터 집계
  const dailyTotals = DAILY_SALES.map((day) => {
    let qty = 0;
    let revenue = 0;
    for (const item of MENU_ITEMS) {
      const entry = day.sales[item.id];
      qty += entry.qty;
      revenue += entry.revenue;
    }
    return {
      date: day.date,
      shortDate: day.date.slice(5), // MM-DD
      dayOfWeek: day.dayOfWeek,
      qty,
      revenue
    };
  });

  const totalRevenue = dailyTotals.reduce((sum, d) => sum + d.revenue, 0);
  const totalQty = dailyTotals.reduce((sum, d) => sum + d.qty, 0);
  const avgDailyRevenue = totalRevenue / dailyTotals.length;
  const bestDay = dailyTotals.reduce((best, d) => (d.revenue > best.revenue ? d : best), dailyTotals[0]);

  // 헤더 및 KPI 카드 업데이트
  document.getElementById("cafe-name").textContent = CAFE_INFO.name;
  document.getElementById("cafe-subtitle").textContent = CAFE_INFO.subtitle;
  document.getElementById("cafe-period").textContent = CAFE_INFO.period;

  document.getElementById("kpi-total-revenue").textContent = formatKRW(totalRevenue);
  document.getElementById("kpi-total-qty").textContent = formatNum(totalQty) + "잔";
  document.getElementById("kpi-avg-daily").textContent = formatKRW(avgDailyRevenue);
  document.getElementById("kpi-best-day").textContent = formatKRW(bestDay.revenue);
  document.getElementById("kpi-best-day-sub").textContent = `${bestDay.date} (${bestDay.dayOfWeek})`;

  // 2. ① 일별 매출 꺾은선 차트
  const dailyCtx = document.getElementById("dailySalesChart").getContext("2d");
  const lineGradient = dailyCtx.createLinearGradient(0, 0, 0, 320);
  lineGradient.addColorStop(0, "rgba(111, 78, 55, 0.28)");
  lineGradient.addColorStop(1, "rgba(111, 78, 55, 0.01)");

  new Chart(dailyCtx, {
    type: "line",
    data: {
      labels: dailyTotals.map((d) => `${d.shortDate}(${d.dayOfWeek})`),
      datasets: [
        {
          label: "일별 매출 (원)",
          data: dailyTotals.map((d) => d.revenue),
          borderColor: "#6F4E37",
          backgroundColor: lineGradient,
          borderWidth: 2.5,
          pointRadius: 3.5,
          pointHoverRadius: 6,
          pointBackgroundColor: "#FAF6F1",
          pointBorderColor: "#6F4E37",
          pointBorderWidth: 2,
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#2C1E16",
          padding: 10,
          callbacks: {
            label: (ctx) => ` 매출: ${formatKRW(ctx.parsed.y)}`,
            afterLabel: (ctx) => ` 판매량: ${formatNum(dailyTotals[ctx.dataIndex].qty)}잔`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            maxRotation: 45,
            minRotation: 45,
            font: { size: 11 },
            color: "#6B5B51"
          }
        },
        y: {
          beginAtZero: false,
          grid: { color: "rgba(111, 78, 55, 0.08)" },
          ticks: {
            color: "#6B5B51",
            callback: (val) => (val / 10000).toFixed(0) + "만원"
          }
        }
      }
    }
  });

  // 3. ② 메뉴별 판매량 막대 차트
  const menuTotals = MENU_ITEMS.map((item) => {
    let qty = 0;
    let revenue = 0;
    for (const day of DAILY_SALES) {
      qty += day.sales[item.id].qty;
      revenue += day.sales[item.id].revenue;
    }
    return { ...item, qty, revenue };
  });

  const menuCtx = document.getElementById("menuSalesChart").getContext("2d");
  new Chart(menuCtx, {
    type: "bar",
    data: {
      labels: menuTotals.map((m) => m.name),
      datasets: [
        {
          label: "30일 누적 판매량 (잔)",
          data: menuTotals.map((m) => m.qty),
          backgroundColor: menuTotals.map((m) => m.color),
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#2C1E16",
          padding: 10,
          callbacks: {
            label: (ctx) => ` 판매량: ${formatNum(ctx.parsed.y)}잔`,
            afterLabel: (ctx) => ` 누적 매출: ${formatKRW(menuTotals[ctx.dataIndex].revenue)}`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#2C1E16", font: { size: 12, weight: "600" } }
        },
        y: {
          beginAtZero: true,
          grid: { color: "rgba(111, 78, 55, 0.08)" },
          ticks: {
            color: "#6B5B51",
            callback: (val) => formatNum(val) + "잔"
          }
        }
      }
    }
  });

  // 4. ③ 요일별 평균 매출 표
  const weekdayOrder = ["월", "화", "수", "목", "금", "토", "일"];
  const weekdayMap = {};
  for (const dayName of weekdayOrder) {
    weekdayMap[dayName] = { count: 0, totalQty: 0, totalRevenue: 0 };
  }
  for (const d of dailyTotals) {
    weekdayMap[d.dayOfWeek].count += 1;
    weekdayMap[d.dayOfWeek].totalQty += d.qty;
    weekdayMap[d.dayOfWeek].totalRevenue += d.revenue;
  }

  const weekdayStats = weekdayOrder.map((dayName) => {
    const stat = weekdayMap[dayName];
    const avgQty = stat.totalQty / stat.count;
    const avgRevenue = stat.totalRevenue / stat.count;
    return {
      dayName,
      count: stat.count,
      avgQty,
      avgRevenue
    };
  });

  const maxAvgRevenue = Math.max(...weekdayStats.map((w) => w.avgRevenue));
  const tbody = document.getElementById("weekday-table-body");

  weekdayStats.forEach((row) => {
    const isTop = row.avgRevenue === maxAvgRevenue;
    const ratioPct = ((row.avgRevenue / maxAvgRevenue) * 100).toFixed(1);
    const tr = document.createElement("tr");
    if (isTop) tr.classList.add("top-row");

    tr.innerHTML = `
      <td>
        <span class="day-badge ${row.dayName === "토" || row.dayName === "일" ? "weekend" : ""}">${row.dayName}요일</span>
        ${isTop ? '<span class="top-tag">최고</span>' : ""}
      </td>
      <td class="num">${row.count}일</td>
      <td class="num">${row.avgQty.toFixed(1)}잔</td>
      <td class="num strong">${formatKRW(row.avgRevenue)}</td>
      <td>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${ratioPct}%"></div>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
})();

