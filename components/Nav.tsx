"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/writing", label: "writing" },
  { href: "/projects", label: "projects" },
  { href: "/tools-templates", label: "tools / templates" },
  { href: "/reading", label: "reading" },
  { href: "/good", label: "good" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="nav-links">
        {links.map(({ href, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link href={href} className={isActive ? "active" : ""}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
