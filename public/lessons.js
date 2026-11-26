/* Curated topic-specific YouTube lessons. */
window.LESSON_CONTENT = [
  {
    "id": "01",
    "title": "SQL bilan tanishuv",
    "level": "Boshlang‘ich",
    "time": "8 daqiqa",
    "summary": "Ma’lumotlar bazasi, jadval, qator, ustun va SQL so‘rovi qanday ishlashini tushuning.",
    "video": "zpnHsWOy0RY",
    "start": 0,
    "videoTitle": "SQL Introduction — W3Schools",
    "goal": "SQL — ma’lumotlar bazasidagi ma’lumotlarni o‘qish va boshqarish uchun ishlatiladigan til. Jadval ustunlardan va qatorlardan tashkil topadi. Har bir so‘rov ma’lumotlar bazasiga aniq buyruq beradi.",
    "steps": [
      "departments — bo‘limlar jadvali; har bir qator bitta bo‘lim.",
      "employees — xodimlar jadvali; department_id bo‘limga bog‘laydi.",
      "SELECT — ma’lumotni o‘qiydi; FROM — qaysi jadvaldan olishni bildiradi."
    ],
    "good": "SELECT * FROM departments;",
    "bad": "SELEC * FORM departments;",
    "why": "SELEC va FORM SQL kalit so‘zlari noto‘g‘ri yozilgan. SQL buyruqlari aniq yozilishi kerak.",
    "fix": "SELECT * FROM departments;",
    "task": "employees jadvalidan barcha ustunlarni chiqaring.",
    "solution": "SELECT * FROM employees;",
    "extra": "Faqat full_name va role ustunlarini tanlang. Keyin projects jadvalidan barcha loyihalarni ko‘ring.",
    "expected": "departments jadvalidida 4 ta bo‘lim; employees jadvalidida 7 ta xodim bor.",
    "tips": [
      "SELECT dan keyin * barcha ustunlarni bildiradi.",
      "Har bir buyruqni nuqtali vergul (;) bilan tugatish yaxshi odat.",
      "Jadval nomini FROM dan keyin yozing."
    ]
  },
  {
    "id": "02",
    "title": "SELECT va ustunlar",
    "level": "Boshlang‘ich",
    "time": "7 daqiqa",
    "summary": "Kerakli ustunlarni tanlash, alias (AS) va DISTINCT bilan takrorlarni kamaytirish.",
    "video": "af4LckivJT8",
    "start": 0,
    "videoTitle": "SQL SELECT Statement — W3Schools",
    "goal": "SELECT natijada qaysi ustunlar ko‘rinishini belgilaydi. * o‘rniga ustun nomlarini yozish natijani ixcham va tushunarli qiladi. AS ustunga vaqtinchalik nom beradi.",
    "steps": [
      "SELECT full_name, role — faqat ikki ustun.",
      "AS employee_name — natijadagi ustun sarlavhasini o‘zgartiradi.",
      "DISTINCT takroriy qiymatlarni olib tashlaydi."
    ],
    "good": "SELECT full_name AS employee_name, role\nFROM employees;",
    "bad": "SELECT fullname, role FROM employees;",
    "why": "Jadvalda fullname emas, full_name nomli ustun bor. Ustun nomi sxemadagi nom bilan aynan mos bo‘lishi kerak.",
    "fix": "SELECT full_name, role FROM employees;",
    "task": "Xodimlarning ism-familiyasi va maoshini salary_uzs nomi bilan chiqaring.",
    "solution": "SELECT full_name, salary AS salary_uzs\nFROM employees;",
    "extra": "Xodimlar jadvalidagi takrorlanmaydigan role qiymatlarini DISTINCT bilan chiqaring.",
    "expected": "7 qator: full_name va salary_uzs ustunlari.",
    "tips": [
      "Ustun nomlarida katta-kichik harf odatda farqlanmaydi (qo‘shtirnoqsiz).",
      "Matn qiymati emas, ustun nomi yozilayotganini tekshiring.",
      "Alias faqat natija sarlavhasini o‘zgartiradi, jadval tuzilishini emas."
    ]
  },
  {
    "id": "03",
    "title": "WHERE — filtrlash",
    "level": "Boshlang‘ich",
    "time": "8 daqiqa",
    "summary": "Faqat shartga mos qatorlarni olish: taqqoslash, AND, OR, IN va matn qiymatlari.",
    "video": "L9GBpVXq-zc",
    "start": 0,
    "videoTitle": "SQL WHERE Clause — W3Schools",
    "goal": "WHERE har bir qatorni shart bo‘yicha tekshiradi va faqat moslarini qaytaradi. Sonlar qo‘shtirnoqsiz, matn qiymatlari esa bir tirnoq ichida yoziladi.",
    "steps": [
      "salary > 16000000 — 16 milliondan yuqori maosh.",
      "AND ikkala shart ham rost bo‘lishini talab qiladi.",
      "OR shartlardan kamida bittasi rost bo‘lsa yetarli.",
      "NULL ni tekshirishda IS NULL ishlatiladi, = NULL emas."
    ],
    "good": "SELECT full_name, salary\nFROM employees\nWHERE salary > 16000000\n  AND department_id = 1;",
    "bad": "SELECT * FROM employees WHERE role = Backend Developer;",
    "why": "Backend Developer matn qiymati, shuning uchun bir tirnoq ichida bo‘lishi kerak. Aks holda PostgreSQL uni ustun yoki identifikator deb talqin qiladi.",
    "fix": "SELECT * FROM employees WHERE role = 'Backend Developer';",
    "task": "Maoshi 15 000 000 dan kam bo‘lgan xodimlarni toping.",
    "solution": "SELECT full_name, salary\nFROM employees\nWHERE salary < 15000000;",
    "extra": "Engineering bo‘limidagi 17 milliondan yuqori maosh oladigan xodimlarni AND bilan toping.",
    "expected": "Asosiy mashqda 15 milliondan kam maoshli xodimlar chiqadi.",
    "tips": [
      "= teng; <> teng emas; > katta; < kichik.",
      "Matn uchun 'single quotes' ishlating.",
      "AND/OR bilan murakkab shartlarda qavs qo‘llash natijani aniq qiladi."
    ]
  },
  {
    "id": "04",
    "title": "ORDER BY va LIMIT",
    "level": "Boshlang‘ich",
    "time": "6 daqiqa",
    "summary": "Natijani o‘sish yoki kamayish tartibida saralash va kerakli qatorlar sonini olish.",
    "video": "uUO-ynRJKo0",
    "start": 0,
    "videoTitle": "SQL ORDER BY — W3Schools",
    "goal": "ORDER BY natijani tartiblaydi. ASC — o‘sish tartibi (standart), DESC — kamayish tartibi. LIMIT qaytariladigan qatorlar sonini cheklaydi.",
    "steps": [
      "ORDER BY salary DESC — eng yuqori maosh birinchi.",
      "ORDER BY full_name ASC — ism bo‘yicha A dan Z gacha.",
      "LIMIT 5 — faqat dastlabki beshta qator."
    ],
    "good": "SELECT full_name, salary\nFROM employees\nORDER BY salary DESC\nLIMIT 3;",
    "bad": "SELECT full_name, salary FROM employees LIMIT 3 ORDER BY salary DESC;",
    "why": "ORDER BY LIMIT dan oldin kelishi kerak. SQL operatorlarining yozilish tartibi muhim.",
    "fix": "SELECT full_name, salary FROM employees ORDER BY salary DESC LIMIT 3;",
    "task": "Eng kam maosh oladigan 2 nafar xodimni toping.",
    "solution": "SELECT full_name, salary\nFROM employees\nORDER BY salary ASC\nLIMIT 2;",
    "extra": "Eng yangi ishga kirgan 3 xodimni hired_at bo‘yicha kamayish tartibida chiqaring.",
    "expected": "2 qator: eng kam maoshli xodimlar.",
    "tips": [
      "DESC — kamayish; ASC — o‘sish.",
      "Teng qiymatlar bo‘lsa, ikkinchi ustun bilan qo‘shimcha saralash mumkin.",
      "LIMIT dan oldin ORDER BY yoziladi."
    ]
  },
  {
    "id": "05",
    "title": "Agregat funksiyalar",
    "level": "O‘rta",
    "time": "9 daqiqa",
    "summary": "COUNT, SUM, AVG, MIN va MAX yordamida ma’lumotlardan statistik ko‘rsatkich olish.",
    "video": "pXGCaDAgyiI",
    "start": 0,
    "videoTitle": "PostgreSQL Aggregate Functions — Thapa Technical",
    "goal": "Agregat funksiyalar bir nechta qator qiymatini bitta hisoblangan natijaga aylantiradi. COUNT qatorlarni sanaydi, SUM yig‘adi, AVG o‘rtacha qiymatni, MIN eng kichik, MAX eng katta qiymatni beradi.",
    "steps": [
      "COUNT(*) barcha qatorlarni sanaydi.",
      "AVG(salary) o‘rtacha maoshni hisoblaydi.",
      "SUM(budget) loyiha budjetlarini jamlaydi.",
      "NULL qiymatlar COUNT(*) dan tashqari ko‘p agregatlarda hisobga olinmaydi."
    ],
    "good": "SELECT\n  COUNT(*) AS employee_count,\n  ROUND(AVG(salary), 2) AS average_salary,\n  MIN(salary) AS min_salary,\n  MAX(salary) AS max_salary\nFROM employees;",
    "bad": "SELECT full_name, AVG(salary) FROM employees;",
    "why": "Bu so‘rovda oddiy ustun (full_name) va agregat (AVG) aralashtirilgan. Har bir xodim kesimida hisoblash kerak bo‘lsa GROUP BY qo‘shiladi; umumiy o‘rtacha kerak bo‘lsa full_name olib tashlanadi.",
    "fix": "SELECT AVG(salary) AS average_salary FROM employees;",
    "task": "Barcha loyihalar budjetining umumiy yig‘indisi va eng katta budjetni hisoblang.",
    "solution": "SELECT SUM(budget) AS total_budget, MAX(budget) AS largest_budget\nFROM projects;",
    "extra": "Xodimlar soni, o‘rtacha va eng yuqori maoshni bitta so‘rovda chiqaring.",
    "expected": "Bitta qator va total_budget, largest_budget ustunlari.",
    "tips": [
      "COUNT(*) qatorlarni sanaydi; COUNT(column) NULL bo‘lmagan qiymatlarni sanaydi.",
      "AVG faqat sonli ustunlarda ishlatiladi.",
      "Natijani yaxlitlash uchun ROUND ishlatish mumkin."
    ]
  },
  {
    "id": "06",
    "title": "GROUP BY — guruhlash",
    "level": "O‘rta",
    "time": "8 daqiqa",
    "summary": "Xodimlar yoki loyihalarni bo‘lim, holat kabi belgilar bo‘yicha guruhlab hisoblash.",
    "video": "FsTXg74UJzE",
    "start": 0,
    "videoTitle": "PostgreSQL GROUP BY & HAVING — Thapa Technical",
    "goal": "GROUP BY bir xil qiymatli qatorlarni guruhlarga ajratadi. Agregat funksiya har bir guruh uchun alohida hisoblanadi.",
    "steps": [
      "department_id bo‘yicha xodimlarni guruhlaymiz.",
      "COUNT(e.id) har bir bo‘limdagi xodimlarni sanaydi.",
      "SELECT ichidagi agregat bo‘lmagan ustunlar GROUP BY da bo‘lishi kerak."
    ],
    "good": "SELECT department_id, COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_id\nORDER BY department_id;",
    "bad": "SELECT department_id, full_name, COUNT(*) FROM employees GROUP BY department_id;",
    "why": "full_name guruhlanmagan va agregat funksiyaga kiritilmagan. Har bir guruhda bir nechta ism bo‘lishi mumkin, shu sababli DB qaysi ismni ko‘rsatishni bilmaydi.",
    "fix": "SELECT department_id, COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_id;",
    "task": "Har bir loyiha statusi bo‘yicha loyihalar sonini hisoblang.",
    "solution": "SELECT status, COUNT(*) AS project_count\nFROM projects\nGROUP BY status;",
    "extra": "Har bir bo‘lim bo‘yicha o‘rtacha maoshni hisoblang. Natijani yuqoridan pastga saralang.",
    "expected": "active va planning statuslari bo‘yicha alohida sonlar.",
    "tips": [
      "GROUP BY agregat funksiyalar bilan ko‘p ishlatiladi.",
      "SELECT dagi oddiy ustunlar GROUP BY da ko‘rsatilishi kerak.",
      "Guruhlar sonini kamaytirish uchun avval WHERE bilan qatorlarni filtrlash mumkin."
    ]
  },
  {
    "id": "07",
    "title": "HAVING — guruhlarni filtrlash",
    "level": "O‘rta",
    "time": "7 daqiqa",
    "summary": "GROUP BY dan keyin hosil bo‘lgan guruhlarni agregat shartlar bilan filtrlash.",
    "video": "rCTLPam9TeU",
    "start": 0,
    "videoTitle": "SQL HAVING Clause — Mohamed Tahsin",
    "goal": "WHERE guruhlashdan oldin alohida qatorlarni filtrlab beradi. HAVING esa GROUP BY dan keyin guruhlarning agregat natijasini tekshiradi.",
    "steps": [
      "WHERE salary > 10000000 — avval xodim qatorlarini tanlaydi.",
      "GROUP BY department_id — bo‘limlar bo‘yicha guruhlaydi.",
      "HAVING COUNT(*) > 1 — faqat 1 nafardan ko‘p xodimli guruhlarni qoldiradi."
    ],
    "good": "SELECT department_id, COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 1;",
    "bad": "SELECT department_id, COUNT(*) FROM employees WHERE COUNT(*) > 1 GROUP BY department_id;",
    "why": "WHERE ichida COUNT(*) kabi agregat funksiyani ishlatib bo‘lmaydi. Agregat natija uchun HAVING ishlatiladi.",
    "fix": "SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 1;",
    "task": "Faqat kamida 2 ta loyiha mavjud bo‘lgan statuslarni chiqaring.",
    "solution": "SELECT status, COUNT(*) AS project_count\nFROM projects\nGROUP BY status\nHAVING COUNT(*) >= 2;",
    "extra": "Avval 16 milliondan yuqori maoshli xodimlarni WHERE bilan tanlang, keyin har bir bo‘limda kamida 2 nafari bor guruhlarni HAVING bilan chiqaring.",
    "expected": "2 yoki undan ko‘p loyiha bo‘lgan statuslar.",
    "tips": [
      "WHERE — qatorlar uchun; HAVING — guruhlar uchun.",
      "HAVING odatda GROUP BY dan keyin yoziladi.",
      "Agregat shartlar COUNT, SUM, AVG kabi funksiyalar bilan ifodalanadi."
    ]
  },
  {
    "id": "08",
    "title": "INNER JOIN — jadvallarni bog‘lash",
    "level": "O‘rta",
    "time": "9 daqiqa",
    "summary": "Bog‘langan jadvallardagi ma’lumotlarni bitta natijada ko‘rsatish.",
    "video": "bKllF9-RMCg",
    "start": 0,
    "videoTitle": "PostgreSQL INNER JOIN — Thapa Technical",
    "goal": "JOIN ikki jadvaldagi mos qatorlarni bog‘laydi. INNER JOIN faqat ON shartiga mos kelgan qatorlarni qaytaradi. Jadvalga alias berish so‘rovni ixcham qiladi.",
    "steps": [
      "employees.department_id — departments.id bilan bog‘lanadi.",
      "ON sharti qaysi ustunlar mosligini belgilaydi.",
      "e va d aliaslari so‘rovni qisqartiradi."
    ],
    "good": "SELECT e.full_name, d.name AS department\nFROM employees e\nINNER JOIN departments d\n  ON e.department_id = d.id;",
    "bad": "SELECT full_name, name FROM employees JOIN departments;",
    "why": "ON bog‘lanish sharti yo‘q. Bundan tashqari, ikkala jadvalda ham id kabi bir xil nomli ustunlar bo‘lishi mumkin; ustunlarni alias bilan aniqlashtirish kerak.",
    "fix": "SELECT e.full_name, d.name FROM employees e JOIN departments d ON e.department_id = d.id;",
    "task": "Har bir xodimning ismi va u ishlaydigan bo‘lim joylashuvini chiqaring.",
    "solution": "SELECT e.full_name, d.location\nFROM employees e\nJOIN departments d ON e.department_id = d.id;",
    "extra": "Loyiha nomi, loyiha rahbari va rahbarning lavozimini uchta jadvalni bog‘lab chiqaring.",
    "expected": "Xodimlar va ularga mos bo‘limlar ro‘yxati.",
    "tips": [
      "JOIN odatda ON bilan birga keladi.",
      "Har ikki jadvaldagi bir xil nomli ustunlarni alias bilan belgilang.",
      "INNER JOIN mos kelmagan qatorlarni natijaga kiritmaydi."
    ]
  },
  {
    "id": "09",
    "title": "LEFT JOIN — barcha chap qatorlar",
    "level": "O‘rta",
    "time": "8 daqiqa",
    "summary": "Chap jadvaldagi barcha qatorlarni, o‘ng jadvalda moslik bo‘lmasa ham saqlab qolish.",
    "video": "aFCZ8QiLU0o",
    "start": 0,
    "videoTitle": "PostgreSQL JOINs: INNER and LEFT — Ajay Yadav",
    "goal": "LEFT JOIN chap jadvaldagi barcha qatorlarni qaytaradi. O‘ng jadvalda mos qator topilmasa, uning ustunlari NULL bo‘ladi. Shu sababli bo‘limi yo‘q xodim yoki xodimi yo‘q bo‘limlarni aniqlash mumkin.",
    "steps": [
      "FROM departments d — chap jadval.",
      "LEFT JOIN employees e — o‘ng jadval.",
      "COUNT(e.id) mos xodimlarni sanaydi; COUNT(*) bo‘sh bo‘limda ham 1 bo‘lishi mumkin."
    ],
    "good": "SELECT d.name, COUNT(e.id) AS employee_count\nFROM departments d\nLEFT JOIN employees e ON e.department_id = d.id\nGROUP BY d.name\nORDER BY d.name;",
    "bad": "SELECT d.name, COUNT(*) FROM departments d LEFT JOIN employees e ON e.department_id=d.id GROUP BY d.name;",
    "why": "COUNT(*) mos xodimi bo‘lmagan bo‘lim uchun ham chap jadval qatorini sanab yuboradi. Xodimlarni sanashda COUNT(e.id) ishlating, chunki moslik bo‘lmasa e.id NULL bo‘ladi.",
    "fix": "SELECT d.name, COUNT(e.id) FROM departments d LEFT JOIN employees e ON e.department_id=d.id GROUP BY d.name;",
    "task": "Har bir bo‘lim nomini va unga biriktirilgan xodimlar sonini chiqaring. Xodimi yo‘q bo‘lim ham ko‘rinsin.",
    "solution": "SELECT d.name, COUNT(e.id) AS employee_count\nFROM departments d\nLEFT JOIN employees e ON e.department_id = d.id\nGROUP BY d.name;",
    "extra": "Xodimi bo‘lmagan bo‘limlarni topish uchun HAVING COUNT(e.id) = 0 qo‘shing.",
    "expected": "4 ta bo‘lim ko‘rinadi, har birida xodimlar soni.",
    "tips": [
      "LEFT JOIN chap jadvaldagi barcha qatorlarni saqlaydi.",
      "Moslik bo‘lmagan o‘ng jadval ustunlari NULL bo‘ladi.",
      "COUNT(e.id) va COUNT(*) farqiga e’tibor bering."
    ]
  },
  {
    "id": "10",
    "title": "INSERT va UPDATE",
    "level": "O‘rta",
    "time": "9 daqiqa",
    "summary": "Jadvalga yangi yozuv qo‘shish va mavjud yozuvni xavfsiz yangilash.",
    "video": "Dndsh1dcx-U",
    "start": 0,
    "videoTitle": "SQL INSERT INTO — W3Schools",
    "goal": "INSERT INTO yangi qator qo‘shadi. UPDATE mavjud qatorlarni o‘zgartiradi. UPDATE da WHERE bo‘lmasa, jadvaldagi barcha qatorlar yangilanishi mumkin.",
    "steps": [
      "INSERT INTO (ustunlar) VALUES (qiymatlar) tartibida yoziladi.",
      "Matn qiymatlari bir tirnoq ichida bo‘ladi.",
      "UPDATE ... SET ... WHERE ... aniq qatorni o‘zgartiradi.",
      "RETURNING qo‘shilgan yoki o‘zgargan qatorni qaytarishi mumkin (muhit qo‘llasa)."
    ],
    "good": "INSERT INTO departments (name, location)\nVALUES ('Support', 'Navoiy');\n\nUPDATE departments\nSET location = 'Toshkent'\nWHERE name = 'Support';",
    "bad": "UPDATE employees SET salary = 20000000;",
    "why": "WHERE sharti yo‘q. Bu buyruq barcha xodimlarning maoshini 20 millionga o‘zgartirishi mumkin.",
    "fix": "UPDATE employees SET salary = 20000000 WHERE id = 1;",
    "task": "departments jadvaliga 'Research' nomli, 'Andijon' joylashuvli bo‘lim qo‘shing.",
    "solution": "INSERT INTO departments (name, location)\nVALUES ('Research', 'Andijon');",
    "extra": "Yangi bo‘lim joylashuvini 'Farg‘ona' ga o‘zgartiring. UPDATE dan oldin SELECT bilan aynan shu qatorni tekshiring.",
    "expected": "INSERT 1 ta qator qo‘shadi; UPDATE faqat WHERE shartiga mos qatorni o‘zgartiradi.",
    "tips": [
      "INSERT da ustunlar va qiymatlar soni mos bo‘lishi kerak.",
      "UPDATE va DELETE dan oldin shu WHERE bilan SELECT sinab ko‘ring.",
      "Haqiqiy tizimda o‘zgarishdan oldin backup va tranzaksiya siyosatini biling."
    ],
    "relatedVideo": "i5aGjhTluxo",
    "relatedTitle": "SQL UPDATE — W3Schools"
  },
  {
    "id": "11",
    "title": "DELETE va tranzaksiya",
    "level": "O‘rta",
    "time": "8 daqiqa",
    "summary": "Keraksiz yozuvlarni o‘chirish, avval tekshirish va tranzaksiyaning maqsadini tushunish.",
    "video": "s7ehCYyEmVw",
    "start": 0,
    "videoTitle": "SQL DELETE — W3Schools",
    "goal": "DELETE jadvaldan qatorlarni o‘chiradi. WHERE bo‘lmasa barcha qatorlar o‘chadi. Tranzaksiya bir nechta amaliyotni bitta mantiqiy birlik sifatida bajarishga yordam beradi: COMMIT tasdiqlaydi, ROLLBACK bekor qiladi.",
    "steps": [
      "Avval SELECT ... WHERE bilan o‘chiriladigan qatorlarni ko‘ring.",
      "Keyin aynan shu shart bilan DELETE bajaring.",
      "BEGIN/COMMIT/ROLLBACK haqiqiy PostgreSQL tranzaksiyalaridir.",
      "Ushbu o‘quv sandboxida tranzaksiya xatti-harakati to‘liq PostgreSQL serveri bilan bir xil deb kafolatlanmaydi."
    ],
    "good": "SELECT * FROM projects WHERE status = 'planning';\n\nDELETE FROM projects\nWHERE status = 'planning';",
    "bad": "DELETE FROM projects;",
    "why": "WHERE yo‘q — projects jadvalidagi barcha qatorlar o‘chadi. Bu ko‘pincha tasodifiy ma’lumot yo‘qotishiga olib keladi.",
    "fix": "DELETE FROM projects WHERE status = 'planning';",
    "task": "status qiymati 'cancelled' bo‘lgan loyihalarni avval SELECT bilan toping, so‘ng o‘chiring.",
    "solution": "SELECT * FROM projects WHERE status = 'cancelled';\nDELETE FROM projects WHERE status = 'cancelled';",
    "extra": "Haqiqiy PostgreSQL serverida BEGIN; DELETE ...; natijani tekshiring; kerak bo‘lsa ROLLBACK;, to‘g‘ri bo‘lsa COMMIT; amallarini alohida sinab ko‘ring.",
    "expected": "Joriy namunaviy bazada cancelled loyihalar bo‘lmasligi mumkin; SELECT 0 qator qaytarishi xato emas.",
    "tips": [
      "DELETE dan oldin WHERE shartini SELECT bilan tekshiring.",
      "TRUNCATE va DELETE bir xil emas; TRUNCATE jadvaldagi barcha qatorlarni tez o‘chiradi.",
      "Tranzaksiya qo‘llab-quvvatlanishini haqiqiy PostgreSQL muhitida tekshiring."
    ],
    "relatedVideo": "chz_g0VfP4U",
    "relatedStart": 1628,
    "relatedTitle": "PostgreSQL Transactions — RoadsideCoder"
  },
  {
    "id": "12",
    "title": "Subquery va CTE",
    "level": "Yuqori",
    "time": "10 daqiqa",
    "summary": "Ichki so‘rov va WITH orqali katta so‘rovlarni mantiqiy qismlarga ajratish.",
    "video": "Y6fs0npILus",
    "start": 0,
    "videoTitle": "PostgreSQL Subqueries and CTEs",
    "goal": "Subquery — boshqa SQL so‘rovi ichida joylashgan so‘rov. CTE (WITH) esa murakkab so‘rovni nomlangan vaqtinchalik natija sifatida ajratib, o‘qishni osonlashtiradi.",
    "steps": [
      "Ichki SELECT avval o‘rtacha maoshni hisoblaydi.",
      "Tashqi SELECT maoshi shu o‘rtachadan yuqori xodimlarni tanlaydi.",
      "WITH avg_pay AS (...) CTE natijasini nomlaydi.",
      "CTE so‘rovni o‘qish va tekshirishni osonlashtiradi."
    ],
    "good": "WITH avg_pay AS (\n  SELECT AVG(salary) AS value\n  FROM employees\n)\nSELECT full_name, salary\nFROM employees\nWHERE salary > (SELECT value FROM avg_pay);",
    "bad": "SELECT full_name, salary FROM employees WHERE salary > AVG(salary);",
    "why": "WHERE ichida AVG(salary) ni to‘g‘ridan-to‘g‘ri ishlatib bo‘lmaydi. Agregatni subquery yoki CTE ichida hisoblab, tashqi so‘rovda foydalaning.",
    "fix": "SELECT full_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
    "task": "Budjeti barcha loyihalarning o‘rtacha budjetidan yuqori bo‘lgan loyihalarni toping.",
    "solution": "SELECT title, budget\nFROM projects\nWHERE budget > (SELECT AVG(budget) FROM projects);",
    "extra": "O‘rtacha maoshni CTE da hisoblang va undan yuqori maosh olgan xodimlarni department_id bilan chiqaring.",
    "expected": "O‘rtacha loyiha budjetidan yuqori loyihalar ro‘yxati.",
    "tips": [
      "Subquery qavs ichida yoziladi.",
      "Bitta qiymat qaytaradigan subquery bilan >, <, = kabi operatorlardan foydalanish mumkin.",
      "CTE nomi WITH dan keyin, qavs ichidagi so‘rov bilan aniqlanadi."
    ]
  }
];
