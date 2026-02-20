"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();
  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((l) => (
          <li key={l.href}>
            <Link className="" href={l.href}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
