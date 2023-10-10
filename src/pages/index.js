import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../sass/layouts/home.module.scss";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import React, { useState } from "react";

import services from "../../services.json";
import Contacts from "@/components/Contacts";
import Network from "@/components/Network";

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
      <Header
        onServiceSelect={handleServiceSelect}
        selectedItem={selectedItem}
      />

      <main className={`${inter.className} ${styles.main}`}>
        <Hero />
        <WhyUs />
        <Services
          onServiceSelect={handleServiceSelect}
          selectedItem={selectedItem}
        />
        {/* <Contacts /> */}
        {/* <Network /> */}
      </main>
    </>
  );
}
