import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactDetails = [
  { id: 1, icon: FaPhone, text: "(+1) 605-592-6659" },
  { id: 2, icon: FaEnvelope, text: " info@digitaltwinsenergy.com" },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    text: "2319 Greenfield Pkwy Austin, TX 78741 ",
  },
  { id: 4, icon: FaClock, text: "Mon - Sat : 9:00 AM - 6:00 PM" },
];

const ContactInfo = () => {
  return (
    <ScrollReveal direction="fade-right" className="py-10 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 text-center mb-8">
          Contact Information
        </h2>
        <ul className="space-y-6">
          {contactDetails.map(({ id, icon: Icon, text }) => (
            <li
              key={id}
              className="flex items-start sm:items-center gap-4 w-full"
            >
              <div className=" bg-blue-500/90 p-3 rounded-full text-white">
                {/* Responsive icon sizes */}
                <Icon size={10} />
              </div>
              <span className="text-gray-700 dark:text-white/70">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
};

export default ContactInfo;

