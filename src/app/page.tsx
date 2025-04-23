import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import ProductListSection from "@/components/ProductListSection";



async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', // ensures SSR happens every time
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
    </div>
  );
}
