import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div>
          <Link href="/" passHref>
            <div className="flex  flex-col gap-3">
              <Image
                src="/logo.svg"
                alt="Digital Twin Energy LLC logo"
                width={96}
                height={96}
                style={{ height: "auto" }}
              />
              <p className="text-2xl font-semibold text-white">
                Digital Twins Energy
              </p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mt-6">
            Bringing you the best solutions for your business. <br />
            Connect with us for a seamless experience.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/vision"
                className="hover:text-white transition-colors duration-200"
              >
                Vision
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center  gap-2">
              <Mail />
              <a
                href="mailto:info@digitaltwinsenergy.com"
                className="hover:text-white transition-colors duration-200 block"
              >
                info@digitaltwinsenergy.com
              </a>
            </li>
            <li className="flex items-center  gap-2">
              <Phone />
              <a
                href="tel:(+1) 605-592-6659"
                className="hover:text-white transition-colors duration-200 block"
              >
                (+1) 605-592-6659
              </a>
            </li>
            <li className="flex items-center  gap-2">
              <MapPin />
              <span>2319 Greenfield Pkwy Austin, TX 78741</span>
            </li>
          </ul>
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
};

export default Footer;
