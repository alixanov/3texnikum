import { Translations } from "./types";

export const uz: Translations = {
  common: {
    siteName: "Namangan 3-sonli texnikum",
    siteShortName: "3-TEXNIKUM",
    republic: "O‘zbekiston Respublikasi",
    admissionBtn: "Qabul",
    callUs: "Biz bilan bog‘lanish",
    moreInfo: "Batafsil ma’lumot",
    close: "Yopish",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    learnMore: "Batafsil ma’lumot olish",
    clickToEnlarge: "Kattalashtirish uchun bosing →",
    prevImage: "Oldingi rasm",
    nextImage: "Keyingi rasm",
    galleryMaterial: "Mavzuli ko‘rgazmali material",
  },
  nav: {
    home: "Bosh sahifa",
    about: "Texnikum haqida",
    directions: "Yo‘nalishlar",
    features: "Imkoniyatlar",
    gallery: "Galereya",
    contact: "Aloqa",
  },
  hero: {
    badge: "Davlat professional ta’lim muassasasi",
    headline: "KELAJAGINGIZNI BIZ BILAN QURING!",
    subheadline:
      "Zamonaviy kasblar, amaliy bilimlar va yangi imkoniyatlar — barchasi Namangan 3-sonli texnikumida.",
    ctaPrimary: "Yo‘nalishlarni ko‘rish",
    ctaSecondary: "Biz bilan bog‘lanish",
    stats: {
      practiceLabel: "Amaliy ta’lim ulushi",
      practiceValue: "70%",
      specialtiesLabel: "Asosiy mutaxassislik",
      specialtiesValue: "5 ta",
      formatLabel: "Ta’lim shakli",
      formatValue: "Kunduzgi",
    },
  },
  about: {
    badge: "Texnikum haqida",
    title: "Biz haqimizda",
    leadText:
      "Namangan 3-sonli texnikum — yoshlarning zamonaviy bilim va amaliy ko‘nikmalarini rivojlantirishga yo‘naltirilgan ta’lim muassasasi. Texnikumda talabalar turli kasbiy yo‘nalishlar bo‘yicha bilim olib, kelajakdagi faoliyatlari uchun zarur ko‘nikmalarni egallash imkoniyatiga ega.",
    values: [
      {
        title: "Amaliyotga tayangan ta’lim",
        desc: "O‘quv jarayonining asosiy qismi zamonaviy jihozlangan laboratoriya va ustaxonalarda kechadi.",
      },
      {
        title: "Kasbiy yetuklik",
        desc: "Mehnat bozori talablariga to‘liq javob beradigan malakali mutaxassislar tayyorlash.",
      },
      {
        title: "Doimiy qo‘llab-quvvatlash",
        desc: "Har bir o‘quvchining shaxsiy iqtidori va qobiliyatini rivojlantirishga qaratilgan yondashuv.",
      },
    ],
  },
  directions: {
    badge: "Bizning mutaxassisliklar",
    title: "Amaliy kasbiy ta’lim yo‘nalishlari",
    subtitle:
      "Mehnat bozorida yuqori talabga ega bo‘lgan 5 ta asosiy mutaxassislik bo‘yicha zamonaviy o‘quv dasturlari",
    skillsLabel: "O‘rganiladigan asosiy ko‘nikmalar",
    careersLabel: "Bitiruvchilarning kasbiy imkoniyatlari",
    curriculumLabel: "O‘quv dasturi bosqichlari",
    durationLabel: "Ta’lim shakli va muddati",
    formatLabel: "Mashg‘ulotlar tartibi",
    applyCta: "Qabul uchun ariza qoldirish",
    items: [
      {
        id: "dasturlash",
        title: "Dasturlash (Full-Stack Developer)",
        subtitle: "Full-Stack veb-dasturlash, Frontend, Backend va IT injiniring",
        description:
          "Dasturlash, veb-saytlar yaratish, dasturiy ta’minot ishlab chiqish va zamonaviy IT texnologiyalarini o‘rganish.",
        badge: "Full-Stack IT",
        duration: "Amaliy kurs dasturi",
        format: "Nazariya + IT laboratoriya amaliyoti",
        skills: [
          "Frontend: HTML5, CSS3, Tailwind CSS, JavaScript va React / Next.js",
          "Backend: Node.js, Express, Python va RESTful API ishlab chiqish",
          "Ma’lumotlar bazalari: PostgreSQL, MySQL va MongoDB bilan ishlash",
          "Git versiya boshqaruvi, Docker va to‘liq Full-Stack ilovalarni yaratish",
        ],
        careers: [
          "Full-Stack dasturchi",
          "Frontend dasturchi",
          "Backend dasturchi",
          "Veb-dasturiy ta’minot muhandisi",
        ],
        curriculum: [
          "Dasturlash asoslari, algoritmlar va ma’lumotlar tuzilmasi",
          "Zamonaviy Frontend texnologiyalari (React, Next.js, Tailwind)",
          "Backend server arxitekturasi va ma’lumotlar bazalari",
          "Haqiqiy Full-Stack startap va portfolio loyihalarini yaratish",
        ],
      },
      {
        id: "kompyuter-grafikasi",
        title: "Kompyuter grafikasi",
        subtitle: "Raqamli dizayn, 3D modellashtirish va media kontent",
        description:
          "Grafik dizayn, raqamli tasvirlar, 3D modellashtirish va vizual kontent yaratish ko‘nikmalarini rivojlantirish.",
        badge: "Dizayn & Kreativ",
        duration: "Amaliy kurs dasturi",
        format: "Ijodiy studiya va kompyuter grafikasi mashg‘ulotlari",
        skills: [
          "Grafik dasturlar: Adobe Photoshop, Illustrator, Figma",
          "3D fazoda modellashtirish va vizualizatsiya",
          "Brend identifikatsiyasi, logotip va reklama maketlari tayyorlash",
          "Tipografika, ranglar nazariyasi va zamonaviy UI asoslari",
        ],
        careers: [
          "Grafik dizayner",
          "3D vizualizator",
          "Reklama va brending mutaxassisi",
          "Raqamli kontent yaratuvchisi",
        ],
        curriculum: [
          "Vizual kompozitsiya va rangshunoslik",
          "Vektorli va rastrli grafika texnologiyalari",
          "3D modellashtirish asoslari",
          "Shaxsiy portfolioni shakllantirish",
        ],
      },
      {
        id: "avtomobilsozlik",
        title: "Avtomobilsozlik va avtomobillarga texnik xizmat ko‘rsatish",
        subtitle: "Avtotransport vositalari diagnostikasi va ta’mirlash",
        description:
          "Avtomobillarning tuzilishi, texnik diagnostika, ta’mirlash va avtomobillarga texnik xizmat ko‘rsatish.",
        badge: "Muhandislik & Servis",
        duration: "Amaliy kurs dasturi",
        format: "O‘quv ustaxonasi va bevosita texnik diagnostika",
        skills: [
          "Ichki yonuv va gibrid dvigatellarning tuzilishi va ishlash prinsiplari",
          "Kompyuterli texnik diagnostika uskunalari bilan ishlash",
          "Avtomobil elektr tizimlari va elektron bloklarni tekshirish",
          "Harakatlanuvchi qismlar, tormoz va boshqaruv mexanizmlari ta’miri",
        ],
        careers: [
          "Avtodiagnostika ustasi",
          "Avtomobil ta’mirlash chilangari",
          "Texnik xizmat ko‘rsatish markazi mutaxassisi",
          "Avtoservis ustasi",
        ],
        curriculum: [
          "Avtomobillar nazariyasi va tuzilishi",
          "Elektron diagnostika tizimlari",
          "Chilangarlik va ta’mirlash texnologiyasi",
          "Xavfsizlik texnikasi va ishlab chiqarish amaliyoti",
        ],
      },
      {
        id: "oshpazlik",
        title: "Oshpazlik",
        subtitle: "Gastronomiya, pazandachilik va restoran servisi",
        description:
          "Taom tayyorlash texnologiyalari, pazandachilik mahorati, mahsulotlar bilan ishlash va taomlarni bezatish.",
        badge: "Xizmat ko‘rsatish & San’at",
        duration: "Amaliy kurs dasturi",
        format: "Professional o‘quv oshxonasi amaliyoti",
        skills: [
          "Milliy va xorijiy taomlar retsepturasini o‘zlashtirish",
          "Oziq-ovqat mahsulotlarini birlamchi va issiqlik bilan qayta ishlash",
          "Taomlarni estetik bezatish va zamonaviy restoran servisi",
          "Sanitariya-gigiyena va oziq-ovqat xavfsizligi qoidalari",
        ],
        careers: [
          "Professional oshpaz",
          "Pazandachilik ustasi",
          "Restoran yoki kafe oshpaz yordamchisi",
          "Banket va tadbirlar oshpazi",
        ],
        curriculum: [
          "Pazandachilik texnologiyasi asoslari",
          "Issiq va sovuq taomlar tayyorlash",
          "Qandolatchilik va bezatish san’ati",
          "Oshxona boshqaruvi va amaliy taom tayyorlash",
        ],
      },
      {
        id: "moda-va-tikuvchilik",
        title: "Moda va tikuvchilik",
        subtitle: "Kiyim dizayni, konstruksiyalash va tikuvchilik mahorati",
        description:
          "Kiyim dizayni, bichish-tikish, matolar bilan ishlash va zamonaviy kiyim modellarini yaratish.",
        badge: "Moda & Ishlab chiqarish",
        duration: "Amaliy kurs dasturi",
        format: "Tikuvchilik ustaxonasi va modellashtirish stoli",
        skills: [
          "Kiyimlarni bichish, andozalar yasash va bichish-tikish texnologiyasi",
          "Sanoat va maishiy tikuv mashinalari bilan ishlash",
          "Matolarning fizik-mexanik xususiyatlarini to‘g‘ri tanlash",
          "Zamonaviy va milliy liboslar eskizlarini chizish",
        ],
        careers: [
          "Kiyim modelyer-konstruktori",
          "Professional tikuvchi-chevar",
          "To‘qimachilik korxonalari mutaxassisi",
          "Shaxsiy atelye ustasi",
        ],
        curriculum: [
          "Modellashtirish va konstruksiyalash",
          "Tikuvchilik jihozlari va texnologiyalari",
          "Matoshunoslik va kiyim bezaklari",
          "Tayyor liboslar kolleksiyasini tikish amaliyoti",
        ],
      },
    ],
  },
  features: {
    badge: "Nega aynan biz?",
    title: "Texnikumimizning asosiy afzalliklari",
    subtitle:
      "Zamonaviy o‘quv muhiti, innovatsion ustaxonalar va kelajak kasblari uchun barcha imkoniyatlar",
    items: [
      {
        id: "amaliy-talim",
        title: "Amaliy ta’lim",
        description:
          "Kasbiy ko‘nikmalarni amaliy mashg‘ulotlar va ustaxonalardagi bevosita mashqlar orqali rivojlantirish.",
      },
      {
        id: "zamonaviy-texnologiyalar",
        title: "Zamonaviy texnologiyalar",
        description:
          "Zamonaviy kasblar, innovatsion uskunalar va ilg‘or texnologik tendensiyalar bilan muntazam tanishish.",
      },
      {
        id: "kasbiy-rivojlanish",
        title: "Kasbiy rivojlanish",
        description:
          "Mustaqil faoliyat yuritish va kelajakdagi mehnat bozorida yuqori talabga ega bo‘lishga har tomonlama tayyorlanish.",
      },
      {
        id: "tajribali-ustozlar",
        title: "Tajribali ustozlar",
        description:
          "O‘quvchilarning bilim, ko‘nikma va kasb sirlarini mukammal egallashlariga ko‘maklashuvchi mutaxassis ustozlar.",
      },
    ],
  },
  gallery: {
    badge: "Foto galereya",
    title: "Texnikum hayotidan lavhalar",
    subtitle:
      "Nazariy darslar, amaliy mashg‘ulotlar, zamonaviy ustaxonalar va faol talabalik damlari",
    categories: [
      "O‘quv jarayoni",
      "Kompyuter sinflari",
      "Avtomobil ustaxonasi",
      "Oshpazlik",
      "Moda va tikuvchilik",
      "Talabalar hayoti",
    ],
    items: [
      {
        id: "gal-1",
        title: "O‘quv jarayoni va nazariy mashg‘ulotlar",
        category: "O‘quv jarayoni",
      },
      {
        id: "gal-2",
        title: "Zamonaviy kompyuter sinfi",
        category: "Kompyuter sinflari",
      },
      {
        id: "gal-3",
        title: "Avtomobillarga texnik xizmat ko‘rsatish ustaxonasi",
        category: "Avtomobil ustaxonasi",
      },
      {
        id: "gal-4",
        title: "Pazandachilik va taom tayyorlash amaliyoti",
        category: "Oshpazlik",
      },
      {
        id: "gal-5",
        title: "Tikuvchilik ustaxonasi va kiyim dizayni jarayoni",
        category: "Moda va tikuvchilik",
      },
      {
        id: "gal-6",
        title: "Talabalar hayoti va jamoaviy loyihalar",
        category: "Talabalar hayoti",
      },
    ],
  },
  admission: {
    badge: "Qabul ma’lumotlari",
    title: "Kelajagingizni bugundan boshlang!",
    text: "O‘zingizga mos kasbiy yo‘nalishni tanlang va yangi bilimlarni egallash sari ilk qadamni qo‘ying.",
    cta: "Qabul bo‘yicha murojaat",
    telegramCta: "Telegram orqali savol berish",
    stepLabel: "-QADAM",
    step1Title: "Yo‘nalishni tanlang",
    step2Title: "Konsultatsiya oling",
    step3Title: "Hujjatlarni taqdim eting",
    note: "Qabul sanalari, hujjatlar ro‘yxati va o‘rinlar soni rasmiy ma’lumotlar asosida ma’muriyat tomonidan yangilanadi. Hozirda konsultatsiya olish uchun so‘rov qoldirishingiz mumkin.",
  },
  contact: {
    badge: "Aloqa",
    title: "Biz bilan bog‘laning",
    subtitle:
      "Savollaringiz bormi yoki batafsil ma’lumot olmoqchimisiz? Bizga qo‘ng‘iroq qiling yoki xabar qoldiring.",
    infoTitle: "Rasmiy aloqa ma’lumotlari",
    addressLabel: "Manzil",
    phoneLabel: "Telefon raqamlari",
    phoneNote: "Qabul komissiyasi va ma’muriyat aloqa raqamlari",
    emailLabel: "Elektron pochta",
    workingHoursLabel: "Ish vaqti",
    restDayLabel: "Dam olish kuni",
    socialLabel: "Ijtimoiy tarmoqlar va messenjerlar",
    telegramChannelBtn: "Telegram kanaliga o‘tish",
    mapTitle: "Xaritadagi joylashuvi",
    mapSubtitle: "Namangan, O‘zbekiston",
    mapBtn: "Google xaritada ko‘rish",
    form: {
      title: "Savol yoki murojaatingiz bormi?",
      subtitle:
        "Quyidagi shaklni to‘ldiring, mutaxassislarimiz tez orada siz bilan bog‘lanishadi.",
      nameLabel: "Ismingiz",
      namePlaceholder: "Ismingizni kiriting",
      phoneLabel: "Telefon raqamingiz",
      phonePlaceholder: "+998 90 123 45 67",
      directionLabel: "Qiziqayotgan yo‘nalishingiz",
      directionPlaceholder: "Yo‘nalishni tanlang",
      messageLabel: "Xabaringiz yoki savolingiz",
      messagePlaceholder: "Qo‘shimcha savollaringiz bo‘lsa yozib qoldiring...",
      submitBtn: "Xabarni yuborish",
      submittingBtn: "Yuborilmoqda...",
      successTitle: "Murojaatingiz qabul qilindi!",
      successMessage:
        "Tez orada mas’ul xodimlarimiz ko‘rsatilgan telefon raqami orqali siz bilan bog‘lanishadi.",
      errorMessage: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.",
      resetBtn: "Yangi murojaat yuborish",
      privacyNote:
        "Taqdim etilgan ma’lumotlar maxfiy saqlanadi va faqat qabul konsultatsiyasi uchun foydalaniladi.",
      undecidedOption: "Hali bir qarorga kelmadim (maslahat kerak)",
    },
  },
  footer: {
    description:
      "Zamonaviy kasblar, amaliy bilimlar va yangi imkoniyatlar maskani. Dasturlash, kompyuter grafikasi, avtomobilsozlik, oshpazlik va moda yo‘nalishlari bo‘yicha sifatli ta’lim.",
    quickLinks: "Tezkor havolalar",
    ourDirections: "Bizning yo‘nalishlarimiz",
    contactInfo: "Aloqa ma’lumotlari",
    rights: "Barcha huquqlar himoyalangan.",
  },
};
