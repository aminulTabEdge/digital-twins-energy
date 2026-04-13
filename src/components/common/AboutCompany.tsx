import Image from "next/image";
import { Leaf, Home } from "lucide-react";
import Container from "../ui/Container";
import images from "@/constant/images";
import ScrollReveal from "../ui/ScrollReveal";

const imageSources = [
  { src: images.about.about1, alt: "Solar Workers" },
  { src: images.about.about2, alt: "Solar Field" },
  { src: images.about.about3, alt: "Solar House" },
  { src: images.about.about4, alt: "Solar Panel" },
];

const features = [
  {
    icon: <Leaf className="text-green-600 w-6 h-6" />,
    label: "Solar In Agriculture Farm",
  },
  {
    icon: <Home className="text-green-600 w-6 h-6" />,
    label: "Solar In Residential Areas",
  },
];

const AboutCompany = () => {
  return (
    <Container className="grid md:grid-cols-2 gap-12 items-center py-16">
      {/* Diamond Image Grid */}
      <div className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center ">
        <div className="absolute transform rotate-45 grid grid-cols-2  md:w-[360px] md:h-[360px]">
          {imageSources.map((image, index) => (
            <ScrollReveal
              direction="fade-right"
              delay={index * 0.1}
              key={index}
              className="overflow-hidden border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover transform -rotate-45"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <ScrollReveal direction="fade-left">
        <p className="text-muted-foreground text-sm font-semibold uppercase mb-2">
          About Our Company
        </p>
        <h2 className="text-3xl font-bold mb-4">Simplicity & Efficiency</h2>
        <p className="text-blue-600 text-lg font-medium mb-4">
          Experience The Power of The Sun at its Finest.
        </p>
        <p className="text-muted-foreground mb-4">
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power off choice is untrammelled and when nothing
          prevents our being able to do what we like best—every pleasure.
        </p>
        <p className="text-muted-foreground mb-6">
          Perfectly simple and easy to distinguish. In a free hour, when our
          power choice is untrammelled and when nothing prevents, we give best.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-sm font-semibold text-blue-700 hover:underline flex items-center gap-2"
          >
            More About Solartech →
          </a>
        </div>
      </ScrollReveal>
    </Container>
  );
};

export default AboutCompany;

