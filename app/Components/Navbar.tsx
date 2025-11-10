import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/printforge-logo.png";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between items-center px-4 py-6">
        <div className="relative">
          <Link href={"/"}>
            <Image src={logoImage} alt="PrintForge Logo" width={150} />
          </Link>
        </div>
        <ul className="flex items-center gap-3">
          <NavLink href={"/3d-models"}>
            <li>3D Models</li>
          </NavLink>
          <NavLink href={"/about"}>
            <li>About</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
