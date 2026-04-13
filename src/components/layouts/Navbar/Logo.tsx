import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Digital Twins Energy LLC logo"
          width={36}
          height={36}


        />

        <p className="text-xl lg:text-2xl font-semibold text-white">
          Digital Twins Energy
        </p>
      </div>
    </Link>
  );
};

export default Logo;
