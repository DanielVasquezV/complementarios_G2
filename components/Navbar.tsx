"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Ej. 1: Hola Mundo", path: "/ejercicio1" },
    { name: "Ej. 2: Equipos", path: "/ejercicio2" },
    { name: "Ej. 3: Calculadora", path: "/ejercicio3" },
    { name: "Ej. 4: Tabla", path: "/ejercicio4" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${styles.navLink} ${pathname === link.path ? styles.active : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
