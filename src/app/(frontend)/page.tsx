import Banner from "@/components/frontend/body/home/Banner";
import BestSellerSection from "@/components/frontend/body/home/BestSellerSection";
import Features from "@/components/frontend/body/home/Features";
import GaurenteeSection from "@/components/frontend/body/home/GaurenteeSection";
import Hero from "@/components/frontend/body/home/Hero";
import Offers from "@/components/frontend/body/home/Offers";
import ProductsSection from "@/components/frontend/body/home/ProductsSection";
import TestimonialSection from "@/components/frontend/body/home/TestimonialSection";
import VegetableProducts from "@/components/frontend/body/home/VegetableProducts";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Hero />
        <Features />
        <ProductsSection />
        <Offers />
        <VegetableProducts />
        <Banner />
        <BestSellerSection />
        <GaurenteeSection />
        <TestimonialSection />
      </div>
  );
}
