import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    if (locale === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [locale]);

  return <Component {...pageProps} />;
}

export default MyApp;
