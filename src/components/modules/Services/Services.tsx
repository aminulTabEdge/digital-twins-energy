import servicesData from "@/constant/servicesData";
import Image from "next/image";
import Container from "../../ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Services = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {servicesData?.map((item, index) => {
          return (
            <ScrollReveal
              direction="fade-up"
              delay={index * 0.1}
              key={item.id}
              className="bg-slate-100 dark:bg-slate-900 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container - This part is commented out for now */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.service}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Displaying the Service Name */}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white/90 mb-4 px-5 pt-5">
                {item.service}
              </h2>

              {/* Optional: Render details */}
              <ul className="px-5 pb-10 text-gray-600 dark:text-white/80">
                {item.details.map((detail, index) => (
                  <li key={index} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          );
        })}
      </div>
    </Container>
  );
};

export default Services;

