import Navbar from "@/components/templates/Navbar/Navbar";
import Hero from "@/components/templates/hero/Hero";
import InsuranceCalculation from "@/components/templates/insuranceCalculation/InsuranceCalculation";
import InsuranceProcess from "@/components/templates/insuranceProcess/InsuranceProcess";
import Services from "@/components/templates/service/Services";
import About from "@/components/templates/aboutme/About";
import Section from "@/components/templates/section/Section";
import Footer from "@/components/templates/footer/Footer";


export default function Home() {
  return (
    <div className="relative  ">
      <Navbar />
      <Hero />
      <Services />
      <InsuranceCalculation/>
      <InsuranceProcess/>
      <Section/>
      <Footer/>
    </div>
  );
}
