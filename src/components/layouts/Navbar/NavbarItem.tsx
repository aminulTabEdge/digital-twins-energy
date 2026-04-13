"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavbarItemProps {
  name: string;
  href: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  isMobile?: boolean;
}

const NavbarItem = ({
  name,
  href,
  icon: Icon,
  onClick,
  className,
  activeClassName,
  isMobile,
}: NavbarItemProps) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  const defaultDesktopClass = "flex items-center gap-2 transition-all duration-300 hover:text-blue-500";
  const defaultMobileClass = "flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-all";

  return (
    <Link href={href} onClick={onClick}>
      <div
        className={cn(
          isMobile ? defaultMobileClass : defaultDesktopClass,
          isActive 
            ? activeClassName || "text-blue-500 font-medium" 
            : isMobile ? "text-gray-700 dark:text-white/80" : "text-white",
          className
        )}
      >
        {Icon && <Icon className={cn("w-5 h-5", isMobile ? "text-blue-500" : "")} />}
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default NavbarItem;
