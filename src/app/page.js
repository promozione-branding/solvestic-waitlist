import AirPodsGiveaway from "@/components/home/AirpodsSection";
import Certifications from "@/components/home/Certifications";
import FormSection from "@/components/home/FormSection";
import Founding100Section from "@/components/home/FounderSection";
import Hero from "@/components/home/Hero";
import Problems from "@/components/home/Marquee";
import SkinConcerns from "@/components/home/SkinConcerns";
import SocialCTA from "@/components/home/SocialCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problems />
      <FormSection />
      <SkinConcerns />
      <Founding100Section />
      <Certifications />
      <SocialCTA />
      <AirPodsGiveaway />
    </div>
  );
}
