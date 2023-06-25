"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkmode/DarkModeToggle";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        StellerScript
      </Link>
      <ul className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url} className={styles.link}>
              {link.title}
            </Link>
          </li>
        ))}
        <button
          className={styles.logout}
          onClick={() => console.log("logged out")}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
