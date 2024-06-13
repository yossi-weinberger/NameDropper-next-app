import Image from "next/image";
import "./siteTitle.css";

export default function SiteTitle() {
  return (
    <div className="background_title">
      <div className="title_logo">
        <Image
          className="logo-title"
          width={100}
          height={100}
          src="/pics/round-logo.png"
          alt="logo"
        />
      </div>
      <div className="title_text">
        <h1 className="title">Name dropper</h1>
        <h3 className="subtitle">המפה שלך לעולם הפיתוח</h3>
      </div>
    </div>
  );
}
