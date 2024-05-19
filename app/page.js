import Navbar from "@/utils/components/navbar/navbar";
import "./page.css";
import { HeroSection } from "@/utils/components/hero-section/hero-section";
import { Popup } from "@/utils/components/popup/popup";

export default function Home() {
  return (
    <div className="main">
      <HeroSection />
    </div>
  );
}
