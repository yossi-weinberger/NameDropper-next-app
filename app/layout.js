"use client"; // סמן את הקובץ כ-Client Component

import { Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/components/navbar/navbar";
import { HeroSection } from "@/utils/components/hero-section/hero-section";
import ThemeSwitcher from "@/utils/components/dark-mode/dark-mode";
// import { metadata } from "./metadata"; // ייבא את ה-metadata מהקובץ החדש

const varela_Round = Varela_Round({ subsets: ["hebrew"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varela_Round.className}>
        <Navbar />
        {/* <ThemeSwitcher /> */}
        {children}
      </body>
    </html>
  );
}

// import { Varela_Round } from "next/font/google";
// import "./globals.css";
// // import { NavigateBefore } from "@mui/icons-material";
// import Navbar from "@/utils/components/navbar/navbar";

// // import SiteTitle from "@/utils/components/siteTitle/siteTitle";

// import { HeroSection } from "@/utils/components/hero-section/hero-section";
// import ThemeSwitcher from "@/utils/components/dark-mode/dark-mode";

// const varela_Round = Varela_Round({ subsets: ["hebrew"], weight: "400" });

// export const metadata = {
//   title: "NameDropper",
//   description: "m&y 2024",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={varela_Round.className}>
//         <Navbar />
//         {/* <ThemeSwitcher /> */}
//         {children}
//       </body>
//     </html>
//   );
// }
