/* 12-week Data Analytics curriculum, reviewed against official learning paths and curated video chapters. */
window.ANALYTICS_WEEKS = [
  {
    "n": 1,
    "title": "Data Analytics asoslari va Excel bilan tanishuv",
    "track": "EXCEL · FOUNDATION",
    "hours": "8–10 soat",
    "video": 16121,
    "videoLabel": "Excel Pivot Tables — freeCodeCamp bootcamp",
    "goal": "Data Analyst vazifasini tushunish, biznes savolini o‘lchanadigan ko‘rsatkichga aylantirish va tartibli jadval tuzish.",
    "theory": [
      "Data → axborot → insight → qaror zanjiri.",
      "Qator — bitta kuzatuv; ustun — bitta belgi. Har bir ustun yagona ma’noni ifodalashi kerak.",
      "Excel Table, ma’lumot turi, sort, filter va ma’lumotlar validatsiyasi."
    ],
    "steps": [
      "Excel’da yangi workbook oching va Sales nomli sheet yarating.",
      "Quyidagi ustunlarni kiriting: OrderID, Date, Region, Product, Quantity, UnitPrice.",
      "Jadvalni Ctrl+T bilan Excel Table’ga aylantiring; sana, son va matn formatlarini tekshiring.",
      "Savol yozing: qaysi hududda tushum ko‘p? Qaysi mahsulot ko‘p sotilgan?"
    ],
    "code": "OrderID,Date,Region,Product,Quantity,UnitPrice\n1001,2026-01-03,Toshkent,Laptop,2,8500000\n1002,2026-01-04,Samarqand,Mouse,10,120000\n1003,2026-01-05,Toshkent,Monitor,3,2100000\n1004,2026-01-06,Buxoro,Keyboard,5,280000\n1005,2026-01-07,Samarqand,Laptop,1,8500000",
    "task": "5 qatorli jadvalni Excel’ga import qiling. Har bir ustunning ma’lumot turini to‘g‘ri belgilang, filter yoqing va Toshkent buyurtmalarini ajrating.",
    "pitfalls": [
      "Har bir qiymatni bitta katakka joylash; bir katakda bir nechta maydon bo‘lmasin.",
      "Sana va sonlarni matn ko‘rinishida saqlab yubormang.",
      "Bo‘sh qatorlar va birlashtirilgan kataklardan ma’lumot jadvalida foydalanmang."
    ],
    "ai": "Men Data Analyst mentoriman. Quyidagi savdo jadvali ustunlarini tahlil qilish uchun 5 ta biznes savoli, kerakli KPI va har bir KPI formulasini taklif qil. Ma’lumotni o‘zing to‘qib chiqma; faqat berilgan ustunlarga tayan.",
    "deliverable": "Tartibli Sales jadvali va 5 ta biznes savoli.",
    "check": "Excel Table yarata olasizmi? Sana va son turini ajrata olasizmi? Biznes savolini KPI bilan bog‘lay olasizmi?"
  },
  {
    "n": 2,
    "title": "Excel formulalari, Pivot Table va dashboard",
    "track": "EXCEL · ANALYSIS",
    "hours": "8–10 soat",
    "video": 17175,
    "videoLabel": "Excel formulas, XLOOKUP, Pivot Tables & charts",
    "goal": "Hisoblangan ustunlar, shartli formulalar, Pivot Table va sodda boshqaruv dashboardini qurish.",
    "theory": [
      "Nisbiy va absolyut katak manzili: A1 va $A$1.",
      "SUM, AVERAGE, COUNTIF, SUMIFS, IF, XLOOKUP.",
      "Pivot Table — ma’lumotni kesimlar bo‘yicha jamlash; chart — natijani ko‘rsatish."
    ],
    "steps": [
      "TotalSales ustunini Quantity*UnitPrice formulasi bilan yarating.",
      "SUMIFS orqali hudud kesimida savdo summasini hisoblang.",
      "Pivot Table yarating: Rows=Region, Columns=Product, Values=Sum of TotalSales.",
      "Pivot Chart va slicer qo‘shing; sarlavha, davr va valyutani ko‘rsating."
    ],
    "code": "TotalSales = [@Quantity]*[@UnitPrice]\n\n=SUMIFS(Sales[TotalSales],Sales[Region],A2)\n=COUNTIF(Sales[Product],\"Laptop\")\n=IF([@TotalSales]>=5000000,\"Yuqori\",\"Oddiy\")",
    "task": "Hududlar bo‘yicha tushum, mahsulot bo‘yicha sotuv va eng yuqori tushumli 3 buyurtmani ko‘rsatadigan bir sahifali dashboard yarating.",
    "pitfalls": [
      "SUMIFS diapazonlari bir xil o‘lchamda bo‘lishi kerak.",
      "XLOOKUP’da qidiruv kaliti noyobligini tekshiring.",
      "Grafikda birlik, sana oralig‘i va manbani yozing."
    ],
    "ai": "Excel formulalarimni tekshir: [formula]. Qaysi diapazonlar ishlatilayotganini tushuntir, xato ehtimollarini sanab ber va 3 ta test qiymat bilan natijani qo‘lda tekshirish usulini ko‘rsat.",
    "deliverable": "Excel dashboard: 3 KPI, 2 grafik, 1 Pivot Table.",
    "check": "SUMIFS va IF ishlaydimi? Pivot Table yangilanadimi? Grafik qaror qabul qilishga yordam beradimi?"
  },
  {
    "n": 3,
    "title": "SQL asoslari: SELECT, WHERE, ORDER BY",
    "track": "SQL · QUERYING",
    "hours": "8–10 soat",
    "video": 908,
    "videoLabel": "SQL Basics — SELECT, WHERE, GROUP BY",
    "goal": "Ma’lumotlar bazasidan kerakli qator va ustunlarni xavfsiz so‘rov bilan olish.",
    "theory": [
      "Database, table, row, column, primary key va foreign key.",
      "SELECT, FROM, WHERE, DISTINCT, ORDER BY, LIMIT.",
      "NULL oddiy qiymat emas; IS NULL orqali tekshiriladi."
    ],
    "steps": [
      "PostgreSQL o‘quv muhitida orders jadvalini yarating yoki berilgan sample jadvaldan foydalaning.",
      "Faqat kerakli ustunlarni SELECT qiling; SELECT * ni doimiy odat qilmang.",
      "WHERE bilan sana, hudud va mahsulotni filtrlang.",
      "ORDER BY va LIMIT orqali top natijalarni oling."
    ],
    "code": "SELECT region, product, quantity, unit_price\nFROM sales\nWHERE order_date >= DATE '2026-01-01'\n  AND region = 'Toshkent'\nORDER BY quantity DESC\nLIMIT 10;",
    "task": "2026-yil yanvaridagi Toshkent buyurtmalaridan miqdori 2 dan yuqori bo‘lganlarini toping va kamayish tartibida chiqaring.",
    "pitfalls": [
      "Matn qiymatini bitta tirnoq ichida yozing.",
      "AND va OR mantiqiy shartlarini qavs bilan aniqlashtiring.",
      "NULL qiymatni = NULL bilan emas, IS NULL bilan tekshiring."
    ],
    "ai": "Quyidagi SQL so‘rovni tushuntir va xato bo‘lishi mumkin bo‘lgan joylarni ko‘rsat: [SQL]. Yangi ustun yoki jadval nomini taxmin qilma. Avval sxemani so‘ra.",
    "deliverable": "10 ta mustaqil SELECT/WHERE so‘rovi va izohlangan natijalar.",
    "check": "Filtr, tartiblash va limitni mustaqil qo‘llay olasizmi?"
  },
  {
    "n": 4,
    "title": "SQL agregatsiya, JOIN va biznes KPI",
    "track": "SQL · ANALYTICS",
    "hours": "8–10 soat",
    "video": 2823,
    "videoLabel": "SQL JOIN, GROUP BY, HAVING, CTE",
    "goal": "Bir nechta jadvalni birlashtirish, guruhlash va biznes ko‘rsatkichlarini SQL orqali hisoblash.",
    "theory": [
      "COUNT, SUM, AVG, MIN, MAX agregat funksiyalari.",
      "GROUP BY va HAVING farqi; WHERE qatorlarni agregatsiyadan oldin filtrlaydi.",
      "INNER JOIN va LEFT JOIN; join key takrorlansa natija ko‘payishi mumkin."
    ],
    "steps": [
      "orders va customers jadvallarini customer_id orqali JOIN qiling.",
      "Hudud bo‘yicha tushum va buyurtma sonini hisoblang.",
      "HAVING bilan 5 tadan ko‘p buyurtmali hududlarni ajrating.",
      "CTE yordamida murakkab so‘rovni o‘qilishi oson qismlarga ajrating."
    ],
    "code": "SELECT c.region,\n       COUNT(o.order_id) AS orders_count,\n       SUM(o.quantity * o.unit_price) AS revenue\nFROM customers c\nJOIN orders o ON o.customer_id = c.customer_id\nGROUP BY c.region\nHAVING COUNT(o.order_id) > 5\nORDER BY revenue DESC;",
    "task": "Har bir hudud uchun buyurtma soni, tushum va o‘rtacha buyurtma qiymatini hisoblang. JOIN oldidan va keyin qatorlar sonini taqqoslang.",
    "pitfalls": [
      "JOIN key ustunlarining unikal yoki takroriy ekanini tekshiring.",
      "Agregat bo‘lmagan SELECT ustunlari GROUP BY’da bo‘lishi kerak.",
      "LEFT JOIN’dan keyin WHERE sharti NULL qatorlarni yo‘qotib yuborishi mumkin."
    ],
    "ai": "SQL natijamda qatorlar ko‘payib ketdi. JOIN cardinality va duplicate sabablarini tekshirish uchun diagnostik so‘rovlar yoz. Menga jadval kalitlari berilmaguncha aniq xulosa qilma.",
    "deliverable": "SQL fayl: 8 ta KPI so‘rovi va har biriga qisqa biznes izohi.",
    "check": "JOIN turi qachon kerakligini tushuntira olasizmi? KPI’larni to‘g‘ri agregatsiya qildingizmi?"
  },
  {
    "n": 5,
    "title": "Python asoslari va Jupyter Notebook",
    "track": "PYTHON · BASICS",
    "hours": "8–10 soat",
    "video": 39931,
    "videoLabel": "Python basics — variables, types, loops, functions",
    "goal": "Python muhitida ma’lumotni o‘qish va qayta ishlash uchun zarur sintaksis va funksiyalarni o‘rganish.",
    "theory": [
      "Jupyter Notebook: kod, natija va izohni bir joyda saqlash.",
      "O‘zgaruvchi, list, dict, string, son, boolean va None.",
      "if/else, for, funksiya, import va xatolik (exception)."
    ],
    "steps": [
      "Python va Jupyter yoki Google Colab muhitini oching.",
      "CSV faylni yuklab, fayl yo‘lini tekshiring.",
      "List va dict yordamida 5 ta savdo yozuvini ifodalang.",
      "Tushumni hisoblaydigan funksiya yozing va 3 ta test bajaring."
    ],
    "code": "orders = [\n    {\"product\": \"Laptop\", \"qty\": 2, \"price\": 8500000},\n    {\"product\": \"Mouse\", \"qty\": 10, \"price\": 120000},\n]\n\ndef revenue(order):\n    return order[\"qty\"] * order[\"price\"]\n\nfor order in orders:\n    print(order[\"product\"], revenue(order))",
    "task": "Kamida 10 ta buyurtma uchun umumiy tushum, eng katta buyurtma va mahsulot bo‘yicha jami miqdorni hisoblang.",
    "pitfalls": [
      "O‘zgaruvchi nomida katta-kichik harf farq qiladi.",
      "List indeksi 0 dan boshlanadi.",
      "Funksiya return qilmasa, natija None bo‘lishi mumkin."
    ],
    "ai": "Python kodimni junior Data Analyst darajasida code review qil. Xatolar, edge case, ma’lumot turi va testlarni ko‘rsat. Kodni to‘liq qayta yozishdan oldin muammoni tushuntir.",
    "deliverable": "Jupyter Notebook: 5 ta Python mashqi va testlar.",
    "check": "Funksiya yozish, list/dict aylanish va xatoni o‘qish mumkinmi?"
  },
  {
    "n": 6,
    "title": "Pandas bilan data cleaning va tahlil",
    "track": "PYTHON · PANDAS",
    "hours": "8–10 soat",
    "video": 50433,
    "videoLabel": "Pandas — read, filter, groupby, merge, cleaning",
    "goal": "CSV/Excel ma’lumotini pandas DataFrame’ga yuklash, tozalash, birlashtirish va tahlil qilish.",
    "theory": [
      "DataFrame, Series, read_csv, head, info, describe.",
      "Missing value, duplicate, noto‘g‘ri data type va outlier.",
      "loc/iloc, groupby, agg, merge va datetime."
    ],
    "steps": [
      "pandas va matplotlib kutubxonalarini import qiling.",
      "CSV’ni o‘qing; shape, info va describe bilan tekshiring.",
      "Dublikatlar va bo‘sh qiymatlarni sanang; o‘chirish/to‘ldirish qarorini izohlang.",
      "groupby orqali region bo‘yicha tushumni hisoblang; natijani CSV’ga saqlang."
    ],
    "code": "import pandas as pd\n\nsales = pd.read_csv(\"sales.csv\", parse_dates=[\"Date\"])\nprint(sales.shape)\nprint(sales.isna().sum())\n\nsales = sales.drop_duplicates()\nsales[\"Revenue\"] = sales[\"Quantity\"] * sales[\"UnitPrice\"]\nsummary = sales.groupby(\"Region\", as_index=False)[\"Revenue\"].sum()\nprint(summary.sort_values(\"Revenue\", ascending=False))",
    "task": "Kamida 100 qatorli datasetni tozalang. Oldin/keyin qatorlar sonini yozing, bo‘sh qiymatlar bo‘yicha qaroringizni izohlang va region kesimida hisobot chiqaring.",
    "pitfalls": [
      "Missing value’ni tekshirmasdan 0 bilan to‘ldirmang.",
      "Sana ustunini datetime turiga o‘tkazing.",
      "Dublikatni o‘chirishdan oldin u haqiqiy takror ekanini tekshiring."
    ],
    "ai": "Pandas cleaning rejamni tekshir. Missing value, duplicate va outlier uchun alohida diagnostika kodini taklif qil. Qaysi qatorlarni o‘chirishni o‘zing hal qilma; qaror mezonlarini yoz.",
    "deliverable": "Tozalangan CSV va qayta bajariladigan Jupyter Notebook.",
    "check": "Tozalashdan oldingi/keyingi farqni izohlay olasizmi? Natija takror ishlab chiqiladimi?"
  },
  {
    "n": 7,
    "title": "Statistika, KPI va ma’lumotdan xulosa chiqarish",
    "track": "ANALYTICS · STATISTICS",
    "hours": "8–10 soat",
    "video": 0,
    "videoLabel": "Microsoft Learn — data concepts & analytics",
    "goal": "O‘rtacha qiymat, median, tarqalish, foiz o‘zgarishi va korrelyatsiyani to‘g‘ri talqin qilish.",
    "theory": [
      "Mean, median, mode, min/max, standard deviation va percentiles.",
      "KPI: revenue, order count, average order value, conversion rate.",
      "Korrelyatsiya sabab-oqibatni isbotlamaydi; sample bias va outlier xavfi."
    ],
    "steps": [
      "Excel yoki pandas’da mean va median’ni hisoblang.",
      "Outlier bor/yo‘qligini boxplot yoki percentiles orqali tekshiring.",
      "Oyma-oy o‘sish foizini hisoblang: (joriy-oldingi)/oldingi.",
      "Har bir topilma uchun dalil, cheklov va ehtimoliy sababni alohida yozing."
    ],
    "code": "import pandas as pd\n\ns = pd.Series([120, 125, 128, 130, 900])\nprint(\"Mean:\", s.mean())\nprint(\"Median:\", s.median())\nprint(\"Q1/Q3:\", s.quantile([0.25, 0.75]).to_dict())\n\nmonthly_growth = (520 - 480) / 480 * 100\nprint(f\"Growth: {monthly_growth:.1f}%\")",
    "task": "Dataset uchun 5 ta KPI hisoblang. Mean va median farqini outlier bilan izohlang; kamida 3 ta dalilli insight yozing.",
    "pitfalls": [
      "O‘rtacha qiymat har doim tipik qiymat emas.",
      "Foiz o‘zgarishida oldingi davr 0 bo‘lsa formula alohida ko‘riladi.",
      "Korrelyatsiyani sabab sifatida taqdim etmang."
    ],
    "ai": "Quyidagi KPI va statistik xulosalarni tanqidiy tekshir: [natija]. Hisoblash formulasini qayta yoz, noto‘g‘ri talqinlarni aniqlab, ma’lumot yetishmayotgan joylarni ko‘rsat.",
    "deliverable": "KPI lug‘ati va 1 sahifali statistik insight hisoboti.",
    "check": "Mean/median farqi, foiz o‘zgarishi va korrelyatsiya cheklovlarini tushuntira olasizmi?"
  },
  {
    "n": 8,
    "title": "Power BI: ma’lumotni yuklash va model qurish",
    "track": "POWER BI · MODEL",
    "hours": "8–10 soat",
    "video": 31982,
    "videoLabel": "Power BI — install, Power Query, relationships, DAX",
    "goal": "Bir nechta manbani Power Query’da tozalash va to‘g‘ri data model qurish.",
    "theory": [
      "Power Query — extract, transform, load jarayoni.",
      "Fact va dimension jadvallar; star schema tamoyili.",
      "Relationship cardinality, filter direction va date table."
    ],
    "steps": [
      "Excel/CSV fayllarni Power BI Desktop’ga import qiling.",
      "Power Query’da ustun nomi, data type, null va dublikatlarni tekshiring.",
      "Sales fact va Date/Product/Region dimension jadvallarini ajrating.",
      "Relationship’larni bir-to-ko‘p ko‘rinishida ulang va modelni tekshiring."
    ],
    "code": "-- DAX measure misoli\nTotal Revenue =\nSUMX(Sales, Sales[Quantity] * Sales[UnitPrice])\n\nOrder Count = DISTINCTCOUNT(Sales[OrderID])\nAverage Order Value = DIVIDE([Total Revenue], [Order Count])",
    "task": "Sales model yarating: kamida bitta fact va ikkita dimension jadval. Relationship diagram va 3 ta DAX measure tayyorlang.",
    "pitfalls": [
      "Fact jadvalni dimension bilan noto‘g‘ri many-to-many bog‘lamang.",
      "Date ustuni haqiqiy Date turida bo‘lsin.",
      "Calculated column va measure farqini aralashtirmang."
    ],
    "ai": "Power BI modelimni ko‘rib chiqish uchun tekshiruv ro‘yxati tuz: grain, primary key, relationship cardinality, filter direction va measure. Men yuborgan sxemadan tashqari jadvalni taxmin qilma.",
    "deliverable": "Power BI data model va 3 ta tekshirilgan DAX measure.",
    "check": "Fact/dimension farqini tushuntira olasizmi? Relationship’lar duplicate keltirmaydimi?"
  },
  {
    "n": 9,
    "title": "Power BI dashboard va data storytelling",
    "track": "POWER BI · REPORTING",
    "hours": "8–10 soat",
    "video": 37374,
    "videoLabel": "Power BI visualizations & guided project",
    "goal": "KPI, vaqt dinamikasi, hudud va mahsulot kesimida interaktiv dashboard qurish va natijani tushuntirish.",
    "theory": [
      "Vizual tanlash: trend uchun line, taqqoslash uchun bar, ulush uchun ehtiyotkorlik bilan 100% stacked.",
      "Slicer, drill-through, tooltip va cross-filter.",
      "Dashboard auditoriya savoliga javob berishi kerak; ortiqcha bezakdan qoching."
    ],
    "steps": [
      "Bir sahifaga 3–5 asosiy KPI kartasini joylashtiring.",
      "Oylar bo‘yicha tushum trendi va hududlar bo‘yicha bar chart qo‘shing.",
      "Product va Region slicer yarating.",
      "Sarlavha, vaqt oralig‘i, o‘lchov birligi va ma’lumot manbasini yozing; foydalanuvchi bilan test qiling."
    ],
    "code": "-- DAX: davr bo‘yicha o‘tgan yilga nisbatan o‘zgarish\nRevenue LY =\nCALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))\n\nRevenue YoY % =\nDIVIDE([Total Revenue] - [Revenue LY], [Revenue LY])",
    "task": "Savdo rahbari uchun bitta interaktiv dashboard qiling. 3 savolga javob bersin: savdo qanday o‘zgardi, qayerda yuqori/past, qaysi mahsulot yetakchi?",
    "pitfalls": [
      "Bir sahifada juda ko‘p grafik qo‘ymang.",
      "KPI ta’rifi va davrini yashirmang.",
      "YoY taqqoslashda date table uzluksiz va to‘g‘ri belgilangan bo‘lsin."
    ],
    "ai": "Dashboardim uchun rahbar ko‘zi bilan usability review qil. Har bir vizual qaysi savolga javob berishini so‘ra, keraksiz grafiklarni aniqlashga yordam ber va xulosani faqat ko‘rsatilgan raqamlarga tayantir.",
    "deliverable": "Interaktiv Power BI dashboard va 3 daqiqalik taqdimot.",
    "check": "Dashboard 3 biznes savoliga aniq javob beradimi? Filtrlar to‘g‘ri ishlaydimi?"
  },
  {
    "n": 10,
    "title": "Sun’iy intellektni Data Analytics’da mas’uliyatli qo‘llash",
    "track": "AI · ANALYST WORKFLOW",
    "hours": "8–10 soat",
    "video": 0,
    "videoLabel": "Great Learning — AI-assisted analytics with ChatGPT",
    "goal": "AI’dan formulalar, SQL, Python, tahlil rejasini tezlashtirish uchun foydalanish, lekin natijani mustaqil tekshirish.",
    "theory": [
      "AI — yordamchi; analitik fikrlash va javobgarlikni almashtirmaydi.",
      "Prompt: rol, kontekst, vazifa, cheklov, chiqish formati va tekshiruv mezoni.",
      "Maxfiy ma’lumot, shaxsiy ma’lumot va kompaniya sirlarini ruxsatsiz AI’ga yubormang.",
      "AI hallucination: ustun, manba, formula va faktlarni asl dataset bilan tekshiring."
    ],
    "steps": [
      "AI’dan biznes savollar va KPI taklif qilishni so‘rang.",
      "Excel formula, SQL query yoki pandas kodini yaratishni so‘rang.",
      "Har bir kodni kichik test datasetda bajaring; natijani qo‘lda tekshiring.",
      "AI tayyorlagan xulosani manba, hisob va cheklov bilan tasdiqlang."
    ],
    "code": "PROMPT SHABLONI:\nRol: Sen tajribali Data Analyst mentorsan.\nKontekst: Men savdo datasetini tahlil qilyapman.\nUstunlar: Date, Region, Product, Quantity, UnitPrice.\nVazifa: 5 ta tekshiriladigan KPI taklif qil.\nCheklov: Mavjud bo‘lmagan ustunlarni taxmin qilma.\nNatija: Formula, biznes mazmuni, tekshirish usuli.",
    "task": "AI yordamida 3 ta SQL so‘rov va 2 ta Python kodini ishlab chiqing. Har birini ishga tushiring, kamida bitta xatoni aniqlab tuzating va AI javobi bilan real natijani taqqoslang.",
    "pitfalls": [
      "AI yaratgan kodni tekshirmasdan ishlab chiqarishga qo‘ymang.",
      "Shaxsiy yoki maxfiy ma’lumotni ruxsatsiz promptga joylamang.",
      "AI taxminini fakt deb ko‘rsatmang; manba va hisobni tekshiring."
    ],
    "ai": "Bu kursdagi AI’dan foydalanish qoidalarini tekshir: ma’lumot maxfiyligi, uydirma ustunlar, kod xavfsizligi, hisobni mustaqil tekshirish va manba ko‘rsatish. Javobni audit checklist shaklida ber.",
    "deliverable": "Prompt kutubxonasi, tekshirilgan kodlar va AI audit checklist.",
    "check": "AI natijasini mustaqil tekshirish va maxfiylik xavfini aniqlash mumkinmi?"
  },
  {
    "n": 11,
    "title": "Yakuniy loyiha I: savdo ma’lumotlarini tayyorlash",
    "track": "CAPSTONE · DATA PIPELINE",
    "hours": "8–10 soat",
    "video": 50433,
    "videoLabel": "Pandas cleaning + SQL/Excel project chapters",
    "goal": "Excel, SQL va Python’ni yagona analitik jarayonga ulash: savol, ma’lumot, tozalash va tahlil.",
    "theory": [
      "Loyiha brief: muammo, stakeholder, savollar, KPI va muvaffaqiyat mezoni.",
      "Data dictionary, manba, grain, sifat tekshiruvi va reproducibility.",
      "ETL: olish, tozalash, transformatsiya va saqlash."
    ],
    "steps": [
      "Retail savdo datasetini tanlang yoki sintetik dataset yarating (kamida 500 qator tavsiya).",
      "Data dictionary yozing: ustun, turi, ta’rifi, null/unique qoidalari.",
      "Excel’da dastlabki profil; SQL’da join/aggregation; Python’da cleaning va EDA qiling.",
      "Har bir o‘zgarishni notebook yoki SQL faylda hujjatlashtiring."
    ],
    "code": "# Data quality checks\nassert sales[\"OrderID\"].notna().all()\nassert (sales[\"Quantity\"] > 0).all()\nassert (sales[\"UnitPrice\"] >= 0).all()\n\nsales[\"Revenue\"] = sales[\"Quantity\"] * sales[\"UnitPrice\"]\nprint(\"Rows:\", len(sales))\nprint(\"Duplicate OrderID:\", sales[\"OrderID\"].duplicated().sum())",
    "task": "Loyiha papkasida raw/, cleaned/, sql/, notebooks/, dashboard/ va report/ kataloglarini yarating. Data quality hisobotini yozing va 5 ta biznes savolga javob toping.",
    "pitfalls": [
      "Raw ma’lumotni o‘zgartirib yubormang; nusxada ishlang.",
      "Har bir o‘chirilgan/to‘ldirilgan qiymat qarorini hujjatlashtiring.",
      "Dataset litsenziyasi va manbasini qayd qiling."
    ],
    "ai": "Mening capstone loyiha brief’imni tekshir. Biznes savollari o‘lchanadimi, dataset ularni javoblay oladimi, KPI formulalari aniqmi, data quality risklari bormi? Yetishmayotgan ma’lumotni taxmin qilma.",
    "deliverable": "Tozalangan dataset, data dictionary, SQL fayl, Python notebook va EDA hisobot.",
    "check": "Tahlilni boshidan qayta bajarish mumkinmi? Har bir qaror dalil bilan hujjatlashtirilganmi?"
  },
  {
    "n": 12,
    "title": "Yakuniy loyiha II: dashboard, xulosa va tavsiyalar",
    "track": "CAPSTONE · PRESENTATION",
    "hours": "8–10 soat",
    "video": 33200,
    "videoLabel": "Power BI full guided project + presentation",
    "goal": "Tahlilni rahbariyat tushunadigan dashboard, xulosa va amalga oshirish mumkin bo‘lgan tavsiyaga aylantirish.",
    "theory": [
      "Insight = kuzatuv + dalil + biznes ta’siri.",
      "Tavsiya aniq, ustuvor, o‘lchanadigan va mas’ul egaga ega bo‘lishi kerak.",
      "Cheklovlar, noaniqlik va keyingi tekshiruvlarni ochiq ko‘rsatish."
    ],
    "steps": [
      "Power BI’da 1–2 sahifali interaktiv dashboardni yakunlang.",
      "5 ta topilmani yozing: raqam, davr, segment, ehtimoliy sabab va cheklov.",
      "3 ta tavsiya bering: kutiladigan ta’sir, xarajat/xavf, KPI va muddat.",
      "5–7 slaydli taqdimot tayyorlang; 5 daqiqada loyiha hikoyasini ayting.",
      "Notebook, SQL, Excel, dashboard va README’ni portfolio sifatida tartiblang."
    ],
    "code": "YAKUNIY HISOBOT SHABLONI\n1. Muammo va biznes savol\n2. Ma’lumot manbasi va davri\n3. Tozalash va sifat tekshiruvlari\n4. KPI ta’riflari va metodologiya\n5. 3–5 ta dalilli insight\n6. 3 ta ustuvor tavsiya\n7. Cheklovlar va keyingi qadamlar",
    "task": "Yakuniy loyihani taqdim qiling. Bitta biznes muammosi, kamida 5 KPI, SQL tahlil, Python notebook, Excel tekshiruvi, Power BI dashboard, 3 tavsiya va cheklovlar bo‘lishi shart.",
    "pitfalls": [
      "Korrelyatsiyadan sabab-oqibat xulosasini chiqarmang.",
      "Tavsiyani umumiy gap bilan cheklamang; egasi, muddati va KPI belgilang.",
      "Dashboarddagi raqamlar SQL/Python natijasi bilan mosligini tekshiring."
    ],
    "ai": "Yakuniy analitik hisobotimni skeptik rahbar sifatida bahola. Har bir xulosaga dalil, ta’sir, cheklov va keyingi harakat talab qil. Asossiz sabab-oqibat da’volarini belgila.",
    "deliverable": "Portfolio loyiha: Excel workbook, SQL script, Python notebook, Power BI dashboard, PDF hisobot va taqdimot.",
    "check": "Loyiha qayta bajariladimi? Raqamlar manbaga mosmi? Tavsiyalar aniq va o‘lchanadimi?"
  }
];
