"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/writing", label: "writing" },
  { href: "/projects", label: "projects" },
  { href: "/templates", label: "templates" },
  { href: "/tools", label: "tools" },
  { href: "/reading", label: "reading" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="nav-logo">Cássia Almeida</Link>
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
