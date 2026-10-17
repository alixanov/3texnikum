export interface DirectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  duration: string;
  format: string;
  skills: string[];
  careers: string[];
  curriculum: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: "square" | "wide" | "tall";
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "GraduationCap" | "Cpu" | "TrendingUp" | "Award";
}

export const siteConfig = {
  name: "Namangan 3-sonli texnikum",
  shortName: "3-TEXNIKUM",
  title: "Namangan 3-sonli texnikum — Rasmiy veb-sayti",
  description:
    "Namangan 3-sonli texnikumi — zamonaviy kasblar, amaliy bilimlar va yangi imkoniyatlar maskani. Dasturlash, kompyuter grafikasi, avtomobilsozlik, oshpazlik va moda yo‘nalishlari bo‘yicha sifatli ta’lim.",
  keywords: [
    "Namangan texnikum",
    "3-sonli texnikum",
    "kasbiy ta'lim",
    "dasturlash kurslari Namangan",
    "qabul 2025",
    "o‘rta maxsus ta’lim",
  ],

  // Aloqa va ma'lumotlar konfiguratsiyasi (tahrirlanadigan qism)
  contact: {
    address: "Namangan viloyati, Namangan shahri, Boburshoh ko‘chasi (aniq manzil ma'muriyat tomonidan tasdiqlanishi kutilmoqda)",
    region: "Namangan shahri, O‘zbekiston",
    phone: "+998972310081",
    phoneDisplay: "+998 97 231 00 81",
    phoneSecondary: "+998945070204",
    phoneSecondaryDisplay: "+998 94 507 02 04",
    phones: [
      { number: "+998972310081", display: "+998 97 231 00 81" },
      { number: "+998945070204", display: "+998 94 507 02 04" },
    ],
    email: "info@namangan3tex.uz",
    workingHours: "Dushanba — Shanba: 08:30 – 17:00",
    restDay: "Yakshanba — Dam olish kuni",
    telegramUsername: "namangantexniku",
    telegramUrl: "https://t.me/namangantexniku",
    instagramUrl: "https://instagram.com/namangantexniku",
    facebookUrl: "https://facebook.com/namangantexniku",
    youtubeUrl: "https://youtube.com",
    mapCoordinates: {
      lat: 40.9983,
      lng: 71.6726,
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96577.92556550742!2d71.5833076829774!3d40.99830004944985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4c9c22119939%3A0x6bfa332b2609be4!2sNamangan%2C%20Namangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s",
  },

  // Navigatsiya menyusi
  navLinks: [
    { label: "Bosh sahifa", href: "#hero" },
    { label: "Texnikum haqida", href: "#haqimizda" },
    { label: "Yo‘nalishlar", href: "#yonalishlar" },
    { label: "Imkoniyatlar", href: "#imkoniyatlar" },
    { label: "Galereya", href: "#galereya" },
    { label: "Aloqa", href: "#aloqa" },
  ],

  // Bosh sahifa Hero bloki matnlari
  hero: {
    badge: "Davlat professional ta’lim muassasasi",
    headline: "KELAJAGINGIZNI BIZ BILAN QURING!",
    subheadline:
      "Zamonaviy kasblar, amaliy bilimlar va yangi imkoniyatlar — barchasi Namangan 3-sonli texnikumida.",
    ctaPrimary: "Yo‘nalishlarni ko‘rish",
    ctaSecondary: "Biz bilan bog‘lanish",
    quickStats: [
      { label: "Amaliy ta’lim ulushi", value: "70%" },
      { label: "Asosiy mutaxassislik", value: "5 ta" },
      { label: "Ta’lim shakli", value: "Kunduzgi" },
    ],
    bgImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
  },

  // Texnikum haqida
  about: {
    sectionBadge: "Texnikum haqida",
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
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },

  // 5 ta asosiy mutaxassislik yo'nalishlari
  directions: [
    {
      id: "dasturlash",
      title: "Dasturlash (Full-Stack Developer)",
      subtitle: "Full-Stack veb-dasturlash, Frontend, Backend va IT injiniring",
      description:
        "Dasturlash, veb-saytlar yaratish, dasturiy ta’minot ishlab chiqish va zamonaviy IT texnologiyalarini o‘rganish.",
      badge: "Full-Stack IT",
      duration: "Amaliy kurs dasturi",
      format: "Nazariya + IT laboratoriya amaliyoti",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
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
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80",
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
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
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
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80",
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
      image:
        "https://images.unsplash.com/photo-1541883115841-18e1015eef8e?auto=format&fit=crop&w=1000&q=80",
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
  ] as DirectionItem[],

  // Imkoniyatlar (4 ta afzallik)
  features: [
    {
      id: "amaliy-talim",
      title: "Amaliy ta’lim",
      description:
        "Kasbiy ko‘nikmalarni amaliy mashg‘ulotlar va ustaxonalardagi bevosita mashqlar orqali rivojlantirish.",
      iconName: "GraduationCap",
    },
    {
      id: "zamonaviy-texnologiyalar",
      title: "Zamonaviy texnologiyalar",
      description:
        "Zamonaviy kasblar, innovatsion uskunalar va ilg‘or texnologik tendensiyalar bilan muntazam tanishish.",
      iconName: "Cpu",
    },
    {
      id: "kasbiy-rivojlanish",
      title: "Kasbiy rivojlanish",
      description:
        "Mustaqil faoliyat yuritish va kelajakdagi mehnat bozorida yuqori talabga ega bo‘lishga har tomonlama tayyorlanish.",
      iconName: "TrendingUp",
    },
    {
      id: "tajribali-ustozlar",
      title: "Tajribali ustozlar",
      description:
        "O‘quvchilarning bilim, ko‘nikma va kasb sirlarini mukammal egallashlariga ko‘maklashuvchi mutaxassis ustozlar.",
      iconName: "Award",
    },
  ] as FeatureItem[],

  // Galereya (Tematik rasmlar)
  gallery: [
    {
      id: "gal-1",
      title: "O‘quv jarayoni va nazariy mashg‘ulotlar",
      category: "O‘quv jarayoni",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      aspect: "wide",
    },
    {
      id: "gal-2",
      title: "Zamonaviy kompyuter sinfi",
      category: "Kompyuter sinflari",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
      aspect: "square",
    },
    {
      id: "gal-3",
      title: "Avtomobillarga texnik xizmat ko‘rsatish ustaxonasi",
      category: "Avtomobil ustaxonasi",
      image:
        "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80",
      aspect: "square",
    },
    {
      id: "gal-4",
      title: "Pazandachilik va taom tayyorlash amaliyoti",
      category: "Oshpazlik",
      image:
        "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=1200&q=80",
      aspect: "wide",
    },
    {
      id: "gal-5",
      title: "Tikuvchilik ustaxonasi va kiyim dizayni jarayoni",
      category: "Moda va tikuvchilik",
      image:
        "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?auto=format&fit=crop&w=1000&q=80",
      aspect: "square",
    },
    {
      id: "gal-6",
      title: "Talabalar hayoti va jamoaviy loyihalar",
      category: "Talabalar hayoti",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      aspect: "tall",
    },
  ] as GalleryItem[],

  // Qabul (Abituriyentlar bloki)
  admission: {
    badge: "Qabul ma’lumotlari",
    title: "Kelajagingizni bugundan boshlang!",
    text: "O‘zingizga mos kasbiy yo‘nalishni tanlang va yangi bilimlarni egallash sari ilk qadamni qo‘ying.",
    cta: "Qabul bo‘yicha murojaat",
    note: "Qabul sanalari, hujjatlar ro‘yxati va o‘rinlar soni rasmiy ma’lumotlar asosida ma’muriyat tomonidan yangilanadi. Hozirda konsultatsiya olish uchun so‘rov qoldirishingiz mumkin.",
  },
};
