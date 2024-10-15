import AboutSection from "@/components/aboutsection";
import Blogsection from "@/components/blogsection";
import ClientsCarousel from "@/components/client";
import FAQ from "@/components/faq";
import HeroSlider from "@/components/hero";
import IndustriesSection from "@/components/industry";
import Milestone from "@/components/milestone";
import Newsletter from "@/components/newslatter";
import Portfolio from "@/components/portfolio";
import ServicesSection from "@/components/service";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
   <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <Milestone />
      <Portfolio />
      <ClientsCarousel />
      <Testimonial />
      <FAQ />
      <Blogsection />
      <Newsletter />
   </>
  );
}
