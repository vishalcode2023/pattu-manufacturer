import HeroSection from "../components/HeroSection";
import RegionalNames from "../components/RegionalNames";
import ProductCategories from "../components/ProductCategories";
import ManufacturingSection from "../components/ManufacturingSection";
import CraftsmanshipSection from "../components/CraftsmanshipSection";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalSupplySection from "../components/GlobalSupplySection";
import BusinessCustomers from "../components/BusinessCustomers";
import RetailCounter from "../components/RetailCounter";
import InstagramSection from "../components/InstagramSection";
import CTASection from "../components/CTASection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandIntro from "../components/BrandIntro";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
      <RegionalNames />
      <BrandIntro />
      <ProductCategories />
      <ManufacturingSection />
      <CraftsmanshipSection />
      <WhyChooseUs />
      <GlobalSupplySection />
      <BusinessCustomers />
      <RetailCounter />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
