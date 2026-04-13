import { Flame, Sun } from "lucide-react";
import TypeWritter from "./TypeWritter";
import Image from "next/image";
import images from "@/constant/images";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-md relative ">
      <div className="container mx-auto py-6 px-4">
        {/* header */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
          <div className="w-full lg:w-[45%]">
            <TypeWritter />
          </div>
          <div>
            <ScrollReveal direction="fade-up" duration={2}>
              <Image
                src={images.solar.solar}
                alt="image of Solar and gas line "
                height={400}
                width={800}
                className="object-cover"
                priority
              />
            </ScrollReveal>
          </div>
        </header>
        {/* Services */}
        <div className="pb-[30px] mt-8">
          <h2 className="text-xl font-semibold">Our Service</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <ScrollReveal direction="fade-right">
              <Sun className="w-14 h-14 text-yellow-500" />
              <h3 className="text-lg mt-3 dark:text-white/90">Solar Energy</h3>
              <p className="text-sm text-gray-600 dark:text-white/60 mt-1">
                Optimize solar energy systems through simulation, predictive
                analytics, and real-time monitoring.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="fade-left">
              <Flame className="w-14 h-14 text-orange-600" />
              <h3 className="text-lg mt-3 dark:text-white/90">Oil & Gas</h3>
              <p className="text-sm text-gray-600 dark:text-white/60 mt-1">
                Enhance safety, efficiency, and maintenance of oil and gas
                infrastructure using digital twin modeling.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* right blur shadow */}
        <div className="w-[80px] h-[80px] bg-[#DC0155] blur-[70px] absolute bottom-10 right-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;

