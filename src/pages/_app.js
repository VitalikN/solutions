import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    // Очистка, коли компонент знищується
    return () => {
      window.onbeforeunload = null;
    };
  }, []);
  return <Component {...pageProps} />;
}
