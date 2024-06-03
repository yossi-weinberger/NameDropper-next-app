import SiteTitle from "@/utils/components/siteTitle/siteTitle";
import "./page.css";
import { HeroSection } from "@/utils/components/hero-section/hero-section";
import ThemeSwitcher from "@/utils/components/dark-mode/dark-mode";
// import { Popup } from "@/utils/components/popup/popup";
// import Map from "@/utils/components/siteMap/siteMap"

export default function Home() {
  return (
    <div className="main">
      <SiteTitle />
      <HeroSection />
      {/* <ThemeSwitcher /> */}
    </div>
  );
}
