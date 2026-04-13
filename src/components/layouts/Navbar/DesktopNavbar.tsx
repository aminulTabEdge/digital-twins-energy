"use client";

import Link from "next/link";
import { mainNavLinks } from "@/constant/navMenu";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { ModeToggle } from "./Toggle";
import Logo from "./Logo";
import NavbarItem from "./NavbarItem";

const DesktopNavbar = () => {
  return (
    <header className="hidden md:block w-full bg-slate-900 fixed z-50 py-2 top-0 border-b border-white/5 shadow-xl">
      <nav className="relative container mx-auto ">
        <div className="flex items-center justify-between px-6 py-3 ">
          <Logo />

          <ul className="flex items-center gap-10">
            {mainNavLinks.map((item) => (
              <li key={item.href}>
                <NavbarItem {...item} /> 
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <ModeToggle />
            <Link href="/contact">
              <Button variant="destructive" className="rounded-full px-6 font-semibold shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all">
                <PhoneCall className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;
