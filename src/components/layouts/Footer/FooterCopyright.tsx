
import { Button } from "@/components/ui/button";
import Link from "next/link";


const FooterCopyright = () => {
  return (
    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 container mx-auto">
      &copy; {new Date().getFullYear()} Digital Twins Energy. All rights
      reserved. Developed by
      <Button variant="link" className="px-1" asChild>
        <Link href="https://www.aminuldev.site" target="_blank">
          Aminul Islam
        </Link>
      </Button>
    </div>
  );
};

export default FooterCopyright;
