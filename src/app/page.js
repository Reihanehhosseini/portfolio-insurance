import Navbar from "@/components/templates/Navbar/Navbar";
import Hero from "@/components/templates/hero/Hero";
import InsuranceCalculation from "@/components/templates/insuranceCalculation/InsuranceCalculation";
import InsuranceProcess from "@/components/templates/insuranceProcess/InsuranceProcess";
import Services from "@/components/templates/service/Services";
import Section from "@/components/templates/section/Section";
import Footer from "@/components/templates/footer/Footer";
import Whyme from "@/components/templates/whyme/Whyme";

export default function Home() {
  return (
    <div className="relative  ">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InsuranceCalculation />
        <InsuranceProcess />
        <Section />
        <Whyme />
      </main>
      <Footer />
    </div>
  );
}
