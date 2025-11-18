import { Hero } from '@/components/organisms/Hero';
import {
  AboutSection,
  ProductsSection,
  ServicesSection,
  ClientsSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
