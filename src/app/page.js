import Carousel from "@/components/3D Rotating Carousel/Carousel";
import AboutFavy from "@/components/AboutFavy";
import MainHeader from "@/components/MainHeader";
import OurProducts from "@/components/OurProducts";
import Reviews from "@/components/Reviews";
import LandingPage from "@components/LandingPage";
import Image from "next/image";

export default async function Home() {

  const slides = [
    { id: 0, pic: '/images/image1.png', placeholderImg: '/images/small-image1.png' },
    { id: 1, pic: '/images/image2.png', placeholderImg: '/images/small-image2.png' },
    { id: 2, pic: '/images/image3.png', placeholderImg: '/images/small-image3.png' },
    { id: 3, pic: '/images/image4.png', placeholderImg: '/images/small-image4.png' },
    { id: 4, pic: '/images/image5.png', placeholderImg: '/images/small-image5.png' }
  ]
  // const slides = [
  //   { id: 0, pic: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fimage1.png?alt=media&token=1f39709e-bf83-4bf3-b00e-60ffa38fd32c',
  //    placeholderImg: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fsmall-image1.png?alt=media&token=45c8826f-1176-4885-9a38-dc4f86bfc787' },
  //   { id: 1, pic: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fimage2.png?alt=media&token=1f39709e-bf83-4bf3-b00e-60ffa38fd32c', 
  //   placeholderImg: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fsmall-image2.png?alt=media&token=ad5b465f-e0e6-4f9b-933a-8305a1bb48fd' },
  //   { id: 2, pic: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fimage3.png?alt=media&token=7c1cb6c2-3dee-44ce-8458-d27da038596f',
  //   placeholderImg: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fsmall-image3.png?alt=media&token=fc1a63ee-3c1b-4065-9e88-97a0978e9c35' },
  //   { id: 3, pic: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fimage4.png?alt=media&token=9facb9f1-7ba9-4e45-8795-55cde2f32b07',
  //   placeholderImg: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fsmall-image4.png?alt=media&token=e5e72253-b069-4bc4-a76c-cf5855b8bd84' },
  //   { id: 4, pic: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fimage5.png?alt=media&token=b9d4f6ff-7c15-4e5e-8e1f-7d58b14aa9b9',
  //   placeholderImg: 'https://firebasestorage.googleapis.com/v0/b/favyscentproject.appspot.com/o/public%2Fsmall-image5.png?alt=media&token=2c4841cc-7ced-449c-b9f3-d085c7fca30d' },
  // ]
  return (
    <main className="flex container max-w-full min-h-screen
     flex-col items-center justify-between bg-black 
     overflow-hidden xsm-max-[400px]:p-2">
      <div className="container z-20 max-w-full fixed"><MainHeader/></div>
      <LandingPage slides={slides}/>
      <div className='mt-[70px] w-full mx-auto xsm:max-sm:scale-50 sm:max-md:scale-60'><Carousel/></div>
      <OurProducts/>
      <AboutFavy/>
      <Reviews/>
    </main>
  );
}
