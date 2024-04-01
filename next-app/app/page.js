import Navbar from "@/utils/components/navbar/navbar";
import "./page.css";
import { HeroSection } from "@/utils/components/hero-section/hero-section";

export default function Home() {
  return (
    <div className="main">
      <HeroSection />
      <p className="title">home sweet home</p>
    </div>
  );
}
