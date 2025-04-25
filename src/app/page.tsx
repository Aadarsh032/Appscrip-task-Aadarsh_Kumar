import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ProductListSection from "@/components/ProductListSection";
import Footer from "@/components/Footer";
import Head from "next/head";



export const metadata = {
  title: 'Appscrip Task Aadarsh Kumar',
  description: 'Next.js project fetching products from fakestoreapi.com.',
  icons: {
    icon: '/favicon.ico',
  },
};

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', {
    // As the fakeStore Api is Static so i am using force-caches , 
    // if it would have ben dynamic then i whould have used revalidate or cache
    cache: 'force-cache',
  });
  return res.json();
}

export default async function Home() {
  const productListData = await getData();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Appscrip Task Aadarsh Kumar",
    "description": "Next.js project fetching products from fakestoreapi.com.",
    "url": "https://appscrip-task-aadarsh-kumar.vercel.app/",
    "publisher": {
      "@type": "Organization",
      "name": "LOGO",
      "logo": {
        "@type": "ImageObject",
        "url": "/favicon.ico",
      }
    },
  };
  return (
    <div >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <Navbar />
      <HeroSection />
      <ProductListSection productListData={productListData} />
      <Footer />
    </div>
  );
}
