import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../sass/layouts/home.module.scss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import React, { useState } from "react";

import services from "../../services.json";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(services[0].id);

  const handleServiceSelect = (id) => {
    setSelectedItem(id);
  };
  return (
    <>
      <Head>
        <title>VNV Solutions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vnv.png" />
      </Head>
      <Header onServiceSelect={handleServiceSelect} />
      <main className={`${inter} ${styles.main}`}>
        <Hero />
        <WhyUs />
        <Projects />

        <Services
          onServiceSelect={handleServiceSelect}
          selectedItem={selectedItem}
        />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
