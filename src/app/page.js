import Carousel from "@/components/3D Rotating Carousel/Carousel";
import AboutFavy from "@/components/AboutFavy";
import MainHeader from "@/components/MainHeader";
import OurProducts from "@/components/OurProducts";
import Reviews from "@/components/Reviews";
import LandingPage from "@components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex container max-w-full min-h-screen
     flex-col items-center justify-between bg-black 
     overflow-hidden xsm-max-[400px]:p-2">
      <div className="container z-20 max-w-full fixed"><MainHeader/></div>
      <LandingPage/>
      <div className='mt-8 w-full mx-auto xsm:max-sm:scale-50 sm:max-md:scale-60'><Carousel/></div>
      <OurProducts/>
      <AboutFavy/>
      <Reviews/>
    </main>
  );
}
