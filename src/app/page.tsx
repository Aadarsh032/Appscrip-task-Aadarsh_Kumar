import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ProductListSection from "@/components/ProductListSection";
import Footer from "@/components/Footer";



export const metadata = {
  title: 'Appscrip Task Aadarsh Kumar',
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
  return (
    <div >
      <Navbar />
      <HeroSection />
      <ProductListSection productListData={productListData} />
      <Footer />
    </div>
  );
}
