export type Language = "uz" | "ru" | "en";

export interface NavLink {
  label: string;
  href: string;
}

export interface DirectionItemTranslation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  duration: string;
  format: string;
  skills: string[];
  careers: string[];
  curriculum: string[];
}

export interface FeatureItemTranslation {
  id: string;
  title: string;
  description: string;
}

export interface GalleryItemTranslation {
  id: string;
  title: string;
  category: string;
}

export interface Translations {
  common: {
    siteName: string;
    siteShortName: string;
    republic: string;
    admissionBtn: string;
    callUs: string;
    moreInfo: string;
    close: string;
    send: string;
    sending: string;
    learnMore: string;
    clickToEnlarge: string;
    prevImage: string;
    nextImage: string;
    galleryMaterial: string;
  };
  nav: {
    home: string;
    about: string;
    directions: string;
    features: string;
    gallery: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      practiceLabel: string;
      practiceValue: string;
      specialtiesLabel: string;
      specialtiesValue: string;
      formatLabel: string;
      formatValue: string;
    };
  };
  about: {
    badge: string;
    title: string;
    leadText: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
  };
  directions: {
    badge: string;
    title: string;
    subtitle: string;
    skillsLabel: string;
    careersLabel: string;
    curriculumLabel: string;
    durationLabel: string;
    formatLabel: string;
    applyCta: string;
    items: DirectionItemTranslation[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: FeatureItemTranslation[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    categories: string[];
    items: GalleryItemTranslation[];
  };
  admission: {
    badge: string;
    title: string;
    text: string;
    cta: string;
    telegramCta: string;
    stepLabel: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    note: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    infoTitle: string;
    addressLabel: string;
    phoneLabel: string;
    phoneNote: string;
    emailLabel: string;
    workingHoursLabel: string;
    restDayLabel: string;
    socialLabel: string;
    telegramChannelBtn: string;
    mapTitle: string;
    mapSubtitle: string;
    mapBtn: string;
    form: {
      title: string;
      subtitle: string;
      namePlaceholder: string;
      nameLabel: string;
      phonePlaceholder: string;
      phoneLabel: string;
      directionPlaceholder: string;
      directionLabel: string;
      messagePlaceholder: string;
      messageLabel: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      errorMessage: string;
      resetBtn: string;
      privacyNote: string;
      undecidedOption: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    ourDirections: string;
    contactInfo: string;
    rights: string;
  };
}
