import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../sass/layouts/home.module.scss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>VNV Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vnv.png" />
      </Head>
      <Header />
      <main className={`${inter.className} ${styles.main}`}>
        <Hero />
        <WhyUs />
      </main>
    </>
  );
}
