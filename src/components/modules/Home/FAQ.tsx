import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqData = [
  {
    value: "item-1",
    question: "What industries does Digital Twin Energy LLC serve?",
    answer:
      "We specialize in providing digital twin solutions for the solar energy, oil, and gas industries to optimize operations and enhance decision-making.",
  },
  {
    value: "item-2",
    question:
      "What is a digital twin and how does it help in the energy sector?",
    answer:
      "A digital twin is a virtual model of a physical asset or system that enables real-time monitoring, predictive maintenance, and performance optimization, helping reduce downtime and improve efficiency.",
  },
  {
    value: "item-3",
    question: "Do you offer predictive maintenance solutions?",
    answer:
      "Yes, we offer AI-powered predictive maintenance tools that help identify issues before they cause failures, reducing operational costs and downtime.",
  },
  {
    value: "item-4",
    question: "Can your solutions be customized for specific energy projects?",
    answer:
      "Absolutely. Our digital twin platforms are fully customizable to fit unique project requirements in solar plants, oil fields, and gas pipelines.",
  },
  {
    value: "item-5",
    question: "Is your platform compatible with existing SCADA or IoT systems?",
    answer:
      "Yes, our solutions seamlessly integrate with existing SCADA, IoT, and sensor systems to provide a unified digital experience.",
  },
  {
    value: "item-6",
    question: "How can I get started with Digital Twin Energy LLC?",
    answer:
      "You can contact us through our website to schedule a consultation or request a demo of our digital twin platform tailored to your industry.",
  },
];

const FAQ = () => {
  return (
    <section className="container mx-auto py-16 2xl:py-24">
      <SectionTitle title="FAQ" />

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        {/* FAQ Image */}
        <div className="mx-auto">
          <ScrollReveal direction="fade-left">
            <Image
              src={"/assets/icon/FAQ.png"}
              width={500}
              height={500}
              alt="FAQ image of TabEdge"
              className="max-w-[80%] md:max-w-full"
            />
          </ScrollReveal>
        </div>

        {/* Accordion Content */}
        <div className="max-w-xl w-full px-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={item.value} value={item.value}>
                <ScrollReveal direction="fade-right" delay={index * 0.1}>
                  <AccordionTrigger>
                    {item.question}
                  </AccordionTrigger>
                </ScrollReveal>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

