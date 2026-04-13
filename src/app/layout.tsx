import { poppins } from "@/lib/fonts";
import { ThemeProvider } from "../providers/ThemeProvider";
import { Children } from "@/types";
import "@/styles/globals.css";
import "@/styles/custom.css";
import { Metadata } from "next";
import generateMetaTags from "@/seo/generateMetaTags";
import NextTopLoader from "nextjs-toploader";

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <NextTopLoader color="#00E699" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

// SEO 
export const metadata: Metadata = generateMetaTags({
  title: "Digital Twin Energy LLC - AI-Driven Energy Optimization Solutions",
  description:
    "Digital Twin Energy LLC specializes in AI-driven optimization strategies for energy production systems across solar, wind, and oil & gas sectors. Founded and led by Mr. Saikot, we are redefining smart energy innovation.",
  keywords:
    "Digital Twin Energy, AI energy optimization, renewable energy AI, solar energy optimization, wind energy solutions, oil and gas AI, energy production technology, energy efficiency, smart energy solutions, Mr. Saikot, clean energy AI, digital energy systems",
});

