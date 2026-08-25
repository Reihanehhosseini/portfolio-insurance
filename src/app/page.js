import Navbar from "@/components/templates/Navbar/Navbar";
import Hero from "@/components/templates/hero/Hero";
import InsuranceCalculation from "@/components/templates/insuranceCalculation/InsuranceCalculation";
import Services from "@/components/templates/service/Services";


export default function Home() {
  return (
    <div className="relative  ">
      <Navbar />
      <Hero />
      <Services />
      <InsuranceCalculation/>
    </div>
  );
}
