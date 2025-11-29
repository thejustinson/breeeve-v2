import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  page?: string;
}

const Logo = ({ page }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={"/logo-no-bg.png"}
        alt="Logo"
        width={100}
        height={100}
        className="w-10"
      />
      <div className={page === "auth" ? "hidden" : "flex flex-col text-lg leading-none font-bold"}>
        <span className="text-primary">Breeeve</span>
        <span className="text-gray-500 text-xs">dotcom</span>
      </div>
    </Link>
  );
};

export default Logo;
