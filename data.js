// 가상의 동네 카페 '모퉁이 작은카페' 30일 × 메뉴 5종 매출 데이터
// Fictional Neighborhood Cafe 'Corner Little Cafe' 30-day × 5-menu sales dataset

const CAFE_INFO = {
  name: "모퉁이 작은카페",
  subtitle: "동네 골목 로스터리 · 30일 매출 대시보드",
  period: "2026-11-01 ~ 2026-11-30 (30일)",
  currency: "KRW"
};

const MENU_ITEMS = [
  { id: "americano", name: "아메리카노", price: 4000, color: "#6F4E37" },
  { id: "latte", name: "카페라떼", price: 4800, color: "#A67B5B" },
  { id: "vanilla", name: "바닐라빈 라떼", price: 5300, color: "#D4A373" },
  { id: "matcha", name: "말차 크림 라떼", price: 5800, color: "#588157" },
  { id: "lemonade", name: "수제 레몬에이드", price: 5500, color: "#E9C46A" }
];

// 30일 일별 × 메뉴 5종 판매량(qty) 및 매출(revenue) 데이터
// 2026-11-01은 일요일(일)부터 2026-11-30 월요일(월)까지
const DAILY_SALES = [
  {
    date: "2026-11-01", dayOfWeek: "일",
    sales: {
      americano: { qty: 68, revenue: 272000 },
      latte: { qty: 45, revenue: 216000 },
      vanilla: { qty: 32, revenue: 169600 },
      matcha: { qty: 24, revenue: 139200 },
      lemonade: { qty: 20, revenue: 110000 }
    }
  },
  {
    date: "2026-11-02", dayOfWeek: "월",
    sales: {
      americano: { qty: 54, revenue: 216000 },
      latte: { qty: 32, revenue: 153600 },
      vanilla: { qty: 18, revenue: 95400 },
      matcha: { qty: 12, revenue: 69600 },
      lemonade: { qty: 10, revenue: 55000 }
    }
  },
  {
    date: "2026-11-03", dayOfWeek: "화",
    sales: {
      americano: { qty: 56, revenue: 224000 },
      latte: { qty: 34, revenue: 163200 },
      vanilla: { qty: 20, revenue: 106000 },
      matcha: { qty: 14, revenue: 81200 },
      lemonade: { qty: 11, revenue: 60500 }
    }
  },
  {
    date: "2026-11-04", dayOfWeek: "수",
    sales: {
      americano: { qty: 60, revenue: 240000 },
      latte: { qty: 36, revenue: 172800 },
      vanilla: { qty: 22, revenue: 116600 },
      matcha: { qty: 15, revenue: 87000 },
      lemonade: { qty: 13, revenue: 71500 }
    }
  },
  {
    date: "2026-11-05", dayOfWeek: "목",
    sales: {
      americano: { qty: 58, revenue: 232000 },
      latte: { qty: 35, revenue: 168000 },
      vanilla: { qty: 21, revenue: 111300 },
      matcha: { qty: 16, revenue: 92800 },
      lemonade: { qty: 12, revenue: 66000 }
    }
  },
  {
    date: "2026-11-06", dayOfWeek: "금",
    sales: {
      americano: { qty: 72, revenue: 288000 },
      latte: { qty: 44, revenue: 211200 },
      vanilla: { qty: 28, revenue: 148400 },
      matcha: { qty: 21, revenue: 121800 },
      lemonade: { qty: 18, revenue: 99000 }
    }
  },
  {
    date: "2026-11-07", dayOfWeek: "토",
    sales: {
      americano: { qty: 80, revenue: 320000 },
      latte: { qty: 52, revenue: 249600 },
      vanilla: { qty: 36, revenue: 190800 },
      matcha: { qty: 27, revenue: 156600 },
      lemonade: { qty: 23, revenue: 126500 }
    }
  },
  {
    date: "2026-11-08", dayOfWeek: "일",
    sales: {
      americano: { qty: 71, revenue: 284000 },
      latte: { qty: 47, revenue: 225600 },
      vanilla: { qty: 33, revenue: 174900 },
      matcha: { qty: 25, revenue: 145000 },
      lemonade: { qty: 19, revenue: 104500 }
    }
  },
  {
    date: "2026-11-09", dayOfWeek: "월",
    sales: {
      americano: { qty: 52, revenue: 208000 },
      latte: { qty: 30, revenue: 144000 },
      vanilla: { qty: 17, revenue: 90100 },
      matcha: { qty: 11, revenue: 63800 },
      lemonade: { qty: 9, revenue: 49500 }
    }
  },
  {
    date: "2026-11-10", dayOfWeek: "화",
    sales: {
      americano: { qty: 55, revenue: 220000 },
      latte: { qty: 33, revenue: 158400 },
      vanilla: { qty: 19, revenue: 100700 },
      matcha: { qty: 13, revenue: 75400 },
      lemonade: { qty: 12, revenue: 66000 }
    }
  },
  {
    date: "2026-11-11", dayOfWeek: "수",
    sales: {
      americano: { qty: 63, revenue: 252000 },
      latte: { qty: 39, revenue: 187200 },
      vanilla: { qty: 25, revenue: 132500 },
      matcha: { qty: 18, revenue: 104400 },
      lemonade: { qty: 14, revenue: 77000 }
    }
  },
  {
    date: "2026-11-12", dayOfWeek: "목",
    sales: {
      americano: { qty: 59, revenue: 236000 },
      latte: { qty: 36, revenue: 172800 },
      vanilla: { qty: 22, revenue: 116600 },
      matcha: { qty: 15, revenue: 87000 },
      lemonade: { qty: 11, revenue: 60500 }
    }
  },
  {
    date: "2026-11-13", dayOfWeek: "금",
    sales: {
      americano: { qty: 74, revenue: 296000 },
      latte: { qty: 46, revenue: 220800 },
      vanilla: { qty: 30, revenue: 159000 },
      matcha: { qty: 22, revenue: 127600 },
      lemonade: { qty: 17, revenue: 93500 }
    }
  },
  {
    date: "2026-11-14", dayOfWeek: "토",
    sales: {
      americano: { qty: 84, revenue: 336000 },
      latte: { qty: 55, revenue: 264000 },
      vanilla: { qty: 38, revenue: 201400 },
      matcha: { qty: 29, revenue: 168200 },
      lemonade: { qty: 24, revenue: 132000 }
    }
  },
  {
    date: "2026-11-15", dayOfWeek: "일",
    sales: {
      americano: { qty: 73, revenue: 292000 },
      latte: { qty: 48, revenue: 230400 },
      vanilla: { qty: 34, revenue: 180200 },
      matcha: { qty: 26, revenue: 150800 },
      lemonade: { qty: 21, revenue: 115500 }
    }
  },
  {
    date: "2026-11-16", dayOfWeek: "월",
    sales: {
      americano: { qty: 50, revenue: 200000 },
      latte: { qty: 29, revenue: 139200 },
      vanilla: { qty: 16, revenue: 84800 },
      matcha: { qty: 12, revenue: 69600 },
      lemonade: { qty: 8, revenue: 44000 }
    }
  },
  {
    date: "2026-11-17", dayOfWeek: "화",
    sales: {
      americano: { qty: 57, revenue: 228000 },
      latte: { qty: 35, revenue: 168000 },
      vanilla: { qty: 20, revenue: 106000 },
      matcha: { qty: 14, revenue: 81200 },
      lemonade: { qty: 10, revenue: 55000 }
    }
  },
  {
    date: "2026-11-18", dayOfWeek: "수",
    sales: {
      americano: { qty: 61, revenue: 244000 },
      latte: { qty: 37, revenue: 177600 },
      vanilla: { qty: 23, revenue: 121900 },
      matcha: { qty: 16, revenue: 92800 },
      lemonade: { qty: 13, revenue: 71500 }
    }
  },
  {
    date: "2026-11-19", dayOfWeek: "목",
    sales: {
      americano: { qty: 62, revenue: 248000 },
      latte: { qty: 38, revenue: 182400 },
      vanilla: { qty: 24, revenue: 127200 },
      matcha: { qty: 17, revenue: 98600 },
      lemonade: { qty: 12, revenue: 66000 }
    }
  },
  {
    date: "2026-11-20", dayOfWeek: "금",
    sales: {
      americano: { qty: 76, revenue: 304000 },
      latte: { qty: 47, revenue: 225600 },
      vanilla: { qty: 31, revenue: 164300 },
      matcha: { qty: 23, revenue: 133400 },
      lemonade: { qty: 19, revenue: 104500 }
    }
  },
  {
    date: "2026-11-21", dayOfWeek: "토",
    sales: {
      americano: { qty: 86, revenue: 344000 },
      latte: { qty: 56, revenue: 268800 },
      vanilla: { qty: 40, revenue: 212000 },
      matcha: { qty: 30, revenue: 174000 },
      lemonade: { qty: 25, revenue: 137500 }
    }
  },
  {
    date: "2026-11-22", dayOfWeek: "일",
    sales: {
      americano: { qty: 75, revenue: 300000 },
      latte: { qty: 49, revenue: 235200 },
      vanilla: { qty: 35, revenue: 185500 },
      matcha: { qty: 26, revenue: 150800 },
      lemonade: { qty: 22, revenue: 121000 }
    }
  },
  {
    date: "2026-11-23", dayOfWeek: "월",
    sales: {
      americano: { qty: 53, revenue: 212000 },
      latte: { qty: 31, revenue: 148800 },
      vanilla: { qty: 18, revenue: 95400 },
      matcha: { qty: 13, revenue: 75400 },
      lemonade: { qty: 9, revenue: 49500 }
    }
  },
  {
    date: "2026-11-24", dayOfWeek: "화",
    sales: {
      americano: { qty: 58, revenue: 232000 },
      latte: { qty: 35, revenue: 168000 },
      vanilla: { qty: 21, revenue: 111300 },
      matcha: { qty: 15, revenue: 87000 },
      lemonade: { qty: 11, revenue: 60500 }
    }
  },
  {
    date: "2026-11-25", dayOfWeek: "수",
    sales: {
      americano: { qty: 64, revenue: 256000 },
      latte: { qty: 40, revenue: 192000 },
      vanilla: { qty: 24, revenue: 127200 },
      matcha: { qty: 17, revenue: 98600 },
      lemonade: { qty: 14, revenue: 77000 }
    }
  },
  {
    date: "2026-11-26", dayOfWeek: "목",
    sales: {
      americano: { qty: 61, revenue: 244000 },
      latte: { qty: 37, revenue: 177600 },
      vanilla: { qty: 23, revenue: 121900 },
      matcha: { qty: 16, revenue: 92800 },
      lemonade: { qty: 13, revenue: 71500 }
    }
  },
  {
    date: "2026-11-27", dayOfWeek: "금",
    sales: {
      americano: { qty: 78, revenue: 312000 },
      latte: { qty: 48, revenue: 230400 },
      vanilla: { qty: 32, revenue: 169600 },
      matcha: { qty: 24, revenue: 139200 },
      lemonade: { qty: 20, revenue: 110000 }
    }
  },
  {
    date: "2026-11-28", dayOfWeek: "토",
    sales: {
      americano: { qty: 88, revenue: 352000 },
      latte: { qty: 58, revenue: 278400 },
      vanilla: { qty: 41, revenue: 217300 },
      matcha: { qty: 31, revenue: 179800 },
      lemonade: { qty: 26, revenue: 143000 }
    }
  },
  {
    date: "2026-11-29", dayOfWeek: "일",
    sales: {
      americano: { qty: 77, revenue: 308000 },
      latte: { qty: 50, revenue: 240000 },
      vanilla: { qty: 36, revenue: 190800 },
      matcha: { qty: 27, revenue: 156600 },
      lemonade: { qty: 21, revenue: 115500 }
    }
  },
  {
    date: "2026-11-30", dayOfWeek: "월",
    sales: {
      americano: { qty: 56, revenue: 224000 },
      latte: { qty: 34, revenue: 163200 },
      vanilla: { qty: 19, revenue: 100700 },
      matcha: { qty: 14, revenue: 81200 },
      lemonade: { qty: 10, revenue: 55000 }
    }
  }
];

