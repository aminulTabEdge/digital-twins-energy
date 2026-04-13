import React from "react";
import { RiSecurePaymentLine, RiBankLine } from "react-icons/ri";
import { TbLicense } from "react-icons/tb";
import ScrollReveal from "../ui/ScrollReveal";

const features = [
  {
    id: 1,
    icon: <RiSecurePaymentLine className="text-5xl text-yellow-400" />,
    title: "Trusted & Transparent",
    description:
      "We maintain full transparency in our processes, ensuring trust at every stage of your energy journey.",
  },
  {
    id: 2,
    icon: <TbLicense className="text-5xl text-green-400" />,
    title: "Certified & Compliant",
    description:
      "Our operations are fully licensed and compliant with national energy and sustainability regulations.",
  },
  {
    id: 3,
    icon: <RiBankLine className="text-5xl text-blue-400" />,
    title: "Financially Backed",
    description:
      "We safeguard your investments through partnerships with top-tier financial institutions.",
  },
];

const WhyDigitalTwin = () => {
  return (
    <div className="relative bg-[url('/assets/background/bg-solar.png')] bg-cover bg-center md:bg-fixed min-h-[550px] py-16 md:py-24 2xl:py-44 px-4 sm:px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-white text-center">
        <div className="max-w-3xl mx-auto px-2 sm:px-4">
          <ScrollReveal direction="fade-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Digital Twin Energy LLC?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="fade-right">
            <p className="text-sm sm:text-base mb-10 text-gray-300">
              At Digital Twin Energy LLC, we combine advanced technology with
              sustainable solutions to deliver reliable and efficient energy
              systems. Our commitment to safety, compliance, and transparency sets
              us apart in the clean energy sector.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-2 sm:px-0">
          {features.map(({ id, icon, title, description }, index) => (
            <ScrollReveal
              direction="fade-up"
              key={id}
              delay={index * 0.1}
              className="flex flex-col items-center text-center bg-white/5 p-6 rounded-xl backdrop-blur-sm"
            >
              {icon}
              <h3 className="text-lg sm:text-xl mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-gray-200 text-sm sm:text-base">
                {description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDigitalTwin;

