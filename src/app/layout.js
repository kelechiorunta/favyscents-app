import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import AppContext from "@/components/AppContext";
// import { Provider } from "react-redux";
// import store from "@/utils/redux/store";

import "./globals.css";
import Template from "./template";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight:'400' });
const great_vibes = Great_Vibes({subsets: ['latin'], weight: '400'})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
/**
 * 
 * @param {*} The Template helps to re-render the animation across the children(child components)
 * @returns 
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${great_vibes.className} `}>
        <AppContext>
         
          <div className="container z-20 max-w-full fixed"><MainHeader/></div>
          <Template> 
            {children}
          </Template>
          <div><MainFooter/></div>
          {/* </Provider> */}
        </AppContext>
      </body>
    </html>
  );
}
