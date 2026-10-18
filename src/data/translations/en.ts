import { Translations } from "./types";

export const en: Translations = {
  common: {
    siteName: "Namangan Technical College No. 3",
    siteShortName: "COLLEGE NO. 3",
    republic: "Republic of Uzbekistan",
    admissionBtn: "Admission",
    callUs: "Contact Us",
    moreInfo: "Learn More",
    close: "Close",
    send: "Send",
    sending: "Sending...",
    learnMore: "Get More Information",
    clickToEnlarge: "Click to enlarge →",
    prevImage: "Previous photo",
    nextImage: "Next photo",
    galleryMaterial: "Thematic visual material",
  },
  nav: {
    home: "Home",
    about: "About Us",
    directions: "Specialties",
    features: "Features",
    gallery: "Gallery",
    contact: "Contact",
  },
  hero: {
    badge: "State Professional Educational Institution",
    headline: "BUILD YOUR FUTURE WITH US!",
    subheadline:
      "Modern in-demand professions, practical expertise, and great opportunities — all at Namangan Technical College No. 3.",
    ctaPrimary: "Explore Specialties",
    ctaSecondary: "Get in Touch",
    stats: {
      practiceLabel: "Practical Training Ratio",
      practiceValue: "70%",
      specialtiesLabel: "Core Vocational Fields",
      specialtiesValue: "5 Majors",
      formatLabel: "Study Format",
      formatValue: "Full-time",
    },
  },
  about: {
    badge: "About College",
    title: "About Us",
    leadText:
      "Namangan Technical College No. 3 is a modern educational institution dedicated to cultivating in-demand skills and practical expertise. Our students gain mastery in top career fields, preparing them for successful and rewarding careers.",
    values: [
      {
        title: "Hands-on Practical Training",
        desc: "The majority of the curriculum is conducted inside state-of-the-art tech laboratories and workshops.",
      },
      {
        title: "Professional Excellence",
        desc: "Training qualified specialists who fully meet modern job market standards and industry demands.",
      },
      {
        title: "Dedicated Mentorship",
        desc: "An individualized approach that nurtures every student's talents, creativity, and potential.",
      },
    ],
  },
  directions: {
    badge: "Our Specialties",
    title: "Professional Vocational Programs",
    subtitle:
      "Industry-aligned educational programs across 5 high-demand career tracks",
    skillsLabel: "Core Skills You Will Master",
    careersLabel: "Career Pathways for Graduates",
    curriculumLabel: "Curriculum Milestones",
    durationLabel: "Program Duration",
    formatLabel: "Training Mode",
    applyCta: "Apply for Admission",
    items: [
      {
        id: "dasturlash",
        title: "Software Engineering (Full-Stack Developer)",
        subtitle: "Full-Stack Web Development, Frontend, Backend & IT Engineering",
        description:
          "Programming, modern website creation, scalable web applications, and cutting-edge software development.",
        badge: "Full-Stack IT",
        duration: "Practical Course Curriculum",
        format: "Theory + Intensive IT Laboratory Practice",
        skills: [
          "Frontend: HTML5, CSS3, Tailwind CSS, JavaScript & React / Next.js",
          "Backend: Node.js, Express, Python & RESTful API Architecture",
          "Databases: Relational & NoSQL systems (PostgreSQL, MySQL, MongoDB)",
          "Git Version Control, Docker Containerization & Full-Stack Deployment",
        ],
        careers: [
          "Full-Stack Developer",
          "Frontend Web Developer",
          "Backend Engineer",
          "Software Application Specialist",
        ],
        curriculum: [
          "Programming Fundamentals, Algorithms & Data Structures",
          "Modern Frontend Frameworks (React, Next.js, Tailwind)",
          "Backend Architecture, APIs & Database Engineering",
          "Real-world Full-Stack Startup & Portfolio Projects",
        ],
      },
      {
        id: "kompyuter-grafikasi",
        title: "Computer Graphics & Visual Design",
        subtitle: "Digital Design, 3D Modeling & Media Content Creation",
        description:
          "Graphic design, digital illustration, 3D spatial modeling, and creative visual content production.",
        badge: "Design & Creative",
        duration: "Practical Course Curriculum",
        format: "Creative Studio & Computer Lab Sessions",
        skills: [
          "Industry-standard tools: Adobe Photoshop, Illustrator, Figma",
          "3D Spatial Modeling, Texturing & Rendering",
          "Brand Identity, Logo Design & Advertising Mockups",
          "Typography, Color Theory & Modern UI/UX Design Fundamentals",
        ],
        careers: [
          "Graphic Designer",
          "3D Visualizer / Artist",
          "Advertising & Branding Specialist",
          "Digital Media Content Creator",
        ],
        curriculum: [
          "Visual Composition & Color Harmony",
          "Vector & Raster Digital Graphics Technologies",
          "Introduction to 3D Modeling & Rendering",
          "Professional Portfolio Development",
        ],
      },
      {
        id: "avtomobilsozlik",
        title: "Automotive Engineering & Maintenance",
        subtitle: "Vehicle Diagnostics, Servicing & Mechanical Repair",
        description:
          "Automobile systems, computer diagnostic technology, servicing, and comprehensive automotive maintenance.",
        badge: "Engineering & Service",
        duration: "Practical Course Curriculum",
        format: "Training Workshop & Diagnostic Lab",
        skills: [
          "Combustion & Hybrid Engine Architecture and Mechanics",
          "Operating Advanced Computer Diagnostic Scanners & Software",
          "Vehicle Electrical Systems & Electronic Control Units (ECU)",
          "Chassis, Braking Systems, Suspension & Steering Repair",
        ],
        careers: [
          "Automotive Diagnostics Specialist",
          "Vehicle Maintenance Technician",
          "Service Center & Repair Shop Specialist",
          "Vehicle Inspection & Service Master",
        ],
        curriculum: [
          "Automotive Mechanics & Operating Principles",
          "Electronic Diagnostic Systems",
          "Mechanical Repair & Assembly Technologies",
          "Workplace Safety & On-site Industrial Internship",
        ],
      },
      {
        id: "oshpazlik",
        title: "Culinary Arts & Gastronomy",
        subtitle: "Gastronomy, Food Preparation & Restaurant Service",
        description:
          "International and national culinary techniques, chef artistry, food preparation, and gourmet plating.",
        badge: "Hospitality & Culinary",
        duration: "Practical Course Curriculum",
        format: "Professional Training Kitchen Practice",
        skills: [
          "Mastering National & International Culinary Recipes",
          "Primary Preparation, Cooking Standards & Thermal Processing",
          "Food Aesthetics, Plating & Contemporary Restaurant Service",
          "Hygiene, Sanitation & HACCP Food Safety Regulations",
        ],
        careers: [
          "Professional Chef / Cook",
          "Master Culinary Specialist",
          "Sous Chef in Restaurants & Hotels",
          "Event, Catering & Banquet Chef",
        ],
        curriculum: [
          "Culinary Science & Preparation Fundamentals",
          "Hot & Cold Cuisine Preparation",
          "Pastry, Baking & Plating Artistry",
          "Kitchen Operations & Practical Cooking Labs",
        ],
      },
      {
        id: "moda-va-tikuvchilik",
        title: "Fashion Design & Garment Technology",
        subtitle: "Apparel Design, Pattern Construction & Tailoring Artistry",
        description:
          "Fashion styling, pattern drafting, textile handling, and modern garment tailoring.",
        badge: "Fashion & Manufacturing",
        duration: "Practical Course Curriculum",
        format: "Tailoring Studio & Pattern-making Workshop",
        skills: [
          "Pattern Making, Garment Cutting & Construction Techniques",
          "Operating Industrial Sewing Machines & Sergers",
          "Textile Material Selection & Mechanical Properties",
          "Fashion Sketching for Contemporary & Cultural Garments",
        ],
        careers: [
          "Fashion Designer / Pattern Maker",
          "Professional Tailor & Seamstress",
          "Textile & Apparel Production Specialist",
          "Custom Tailoring Atelier Owner",
        ],
        curriculum: [
          "Pattern Construction & Fashion Modeling",
          "Sewing Equipment & Industrial Techniques",
          "Textile Sciences & Decorative Embellishments",
          "Tailoring a Capstone Collection",
        ],
      },
    ],
  },
  features: {
    badge: "Why Choose Us?",
    title: "Key Advantages of Our College",
    subtitle:
      "Modern learning environment, cutting-edge workshops, and abundant pathways to future careers",
    items: [
      {
        id: "amaliy-talim",
        title: "Practical Education",
        description:
          "Developing career competencies through hands-on practical exercises in modern workshops.",
      },
      {
        id: "zamonaviy-texnologiyalar",
        title: "Modern Technologies",
        description:
          "Hands-on training with contemporary equipment and exposure to leading technological trends.",
      },
      {
        id: "kasbiy-rivojlanish",
        title: "Career Growth",
        description:
          "Comprehensive preparation to enter the workforce with high competitiveness and confidence.",
      },
      {
        id: "tajribali-ustozlar",
        title: "Experienced Mentors",
        description:
          "Expert instructors and industry practitioners guiding students toward mastery.",
      },
    ],
  },
  gallery: {
    badge: "Photo Gallery",
    title: "Moments from College Life",
    subtitle:
      "Classroom theory, practical workshops, modern laboratories, and vibrant student activities",
    categories: [
      "Academic Process",
      "Computer Labs",
      "Auto Workshop",
      "Culinary Arts",
      "Fashion & Sewing",
      "Student Life",
    ],
    items: [
      {
        id: "gal-1",
        title: "Academic Process & Theoretical Studies",
        category: "Academic Process",
      },
      {
        id: "gal-2",
        title: "Modern Computer Laboratory",
        category: "Computer Labs",
      },
      {
        id: "gal-3",
        title: "Automotive Service & Diagnostic Workshop",
        category: "Auto Workshop",
      },
      {
        id: "gal-4",
        title: "Culinary Training & Cooking Masterclass",
        category: "Culinary Arts",
      },
      {
        id: "gal-5",
        title: "Sewing Workshop & Fashion Design Process",
        category: "Fashion & Sewing",
      },
      {
        id: "gal-6",
        title: "Student Community & Team Projects",
        category: "Student Life",
      },
    ],
  },
  admission: {
    badge: "Admissions Information",
    title: "Start Your Future Today!",
    text: "Select a career pathway that matches your goals and take the first decisive step toward mastery.",
    cta: "Inquire About Admissions",
    telegramCta: "Ask a Question via Telegram",
    stepLabel: "STEP ",
    step1Title: "Choose a Direction",
    step2Title: "Get a Consultation",
    step3Title: "Submit Documents",
    note: "Admission schedules, document checklists, and quota numbers are updated officially by college administration. You can leave an inquiry for counseling today.",
  },
  contact: {
    badge: "Contact",
    title: "Get in Touch With Us",
    subtitle:
      "Have questions or want detailed information? Call us directly or leave a message.",
    infoTitle: "Official Contact Information",
    addressLabel: "Address",
    phoneLabel: "Phone Numbers",
    phoneNote: "Admissions office and administration hotlines",
    emailLabel: "Email Address",
    workingHoursLabel: "Working Hours",
    restDayLabel: "Day Off",
    socialLabel: "Social Networks & Messengers",
    telegramChannelBtn: "Join Telegram Channel",
    mapTitle: "Location on Map",
    mapSubtitle: "Namangan, Uzbekistan",
    mapBtn: "Open in Google Maps",
    form: {
      title: "Have a Question or Looking to Enroll?",
      subtitle:
        "Fill out the form below and our counseling team will get back to you promptly.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+998 90 123 45 67",
      directionLabel: "Specialty of Interest",
      directionPlaceholder: "Select a specialty",
      messageLabel: "Your Message or Question",
      messagePlaceholder: "Write your question or inquiry here...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successTitle: "Your Inquiry Was Received!",
      successMessage:
        "Our counseling representatives will reach out to you shortly via the provided phone number.",
      errorMessage: "An error occurred while sending. Please try again.",
      resetBtn: "Submit another inquiry",
      privacyNote:
        "Submitted information is kept confidential and used solely for admissions counseling.",
      undecidedOption: "Haven't decided yet (need guidance)",
    },
  },
  footer: {
    description:
      "A hub for modern professions, practical knowledge, and fresh opportunities. High-quality education in Software Engineering, Computer Graphics, Automotive, Culinary, and Fashion.",
    quickLinks: "Quick Links",
    ourDirections: "Our Specialties",
    contactInfo: "Contact Details",
    rights: "All rights reserved.",
  },
};
