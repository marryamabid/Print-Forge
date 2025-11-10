"use client";
import Link from "next/link";
import { NavLinkProps } from "../types";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`px-4 py-3 text-gray-700  transition-colors rounded-md ${
          pathname === href ? "text-orange-500" : "hover:text-orange-500"
        } 
          cursor-pointer`}
      >
        {children}
      </Link>
    </li>
  );
}
