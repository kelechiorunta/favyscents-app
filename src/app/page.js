import AboutFavy from "@/components/AboutFavy";
import MainHeader from "@/components/MainHeader";
import OurProducts from "@/components/OurProducts";
import LandingPage from "@components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-w-full min-h-screen flex-col items-center justify-between bg-black">
      <div className="container z-20 max-w-full fixed"><MainHeader/></div>
      <LandingPage/>
      <OurProducts/>
      <AboutFavy/>
    </main>
  );
}
