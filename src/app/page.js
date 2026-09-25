import FormSection from "@/components/home/FormSection";
import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Marquee";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Problems />
      <FormSection />

    </div>
  );
}
