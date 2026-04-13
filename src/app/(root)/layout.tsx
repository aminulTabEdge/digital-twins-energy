import Footer from "@/components/layouts/Footer/Footer";
import DesktopNavbar from "@/components/layouts/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/layouts/Navbar/MobileNavbar";
import { Metadata } from "next";
import { Children } from "@/types";
import generateMetaTags from "@/seo/generateMetaTags";

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions",
  description:
    "Digital Twin Energy LLC specializes in AI-driven optimization strategies for energy production systems across solar, wind, and oil & gas sectors. Founded and led by Mr. Saikot, we are redefining smart energy innovation.",
  keywords:
    "Digital Twin Energy, AI energy optimization, renewable energy AI, solar energy optimization, wind energy solutions, oil and gas AI, energy production technology, energy efficiency, smart energy solutions, Mr. Saikot, clean energy AI, digital energy systems",
});


const MainLayout = ({ children }: Children) => {
  return (
    <div className="flex min-h-screen flex-col">
      <DesktopNavbar />
      <MobileNavbar />
      <main className="min-h-[calc(100vh-276px)] mt-[63px] lg:mt-[68px] ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
