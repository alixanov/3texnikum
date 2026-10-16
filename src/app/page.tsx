import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DirectionsSection from "@/components/sections/DirectionsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GallerySection from "@/components/sections/GallerySection";
import AdmissionSection from "@/components/sections/AdmissionSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. Hero Asosiy Ekran */}
      <HeroSection />

      {/* 2. Texnikum haqida */}
      <AboutSection />

      {/* 3. Yo‘nalishlar (5 ta mutaxassislik) */}
      <DirectionsSection />

      {/* 4. Imkoniyatlar (4 ta afzallik) */}
      <FeaturesSection />

      {/* 5. Foto Galereya */}
      <GallerySection />

      {/* 6. Qabul ma’lumotlari */}
      <AdmissionSection />

      {/* 7. Aloqa va joylashuv */}
      <ContactSection />
    </>
  );
}
