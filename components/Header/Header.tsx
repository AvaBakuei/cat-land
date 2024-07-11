import { Button } from "@mantine/core";
import Link from "next/link";

import { IconPawFilled } from "@tabler/icons-react";
import classes from "./Header.module.css";

const navItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Favorites",
    url: "/favorites",
  },
];

export function Header() {
  return (
    <header className={classes.header}>
      <IconPawFilled style={{ width: 50, height: 50 }} color="#FFC078" />
      <nav className={classes.nav}>
        {navItems.map((item) => (
          <Link href={item.url} key={item.label} className={classes.link}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Button variant="filled" color="orange.3">
        Sign Up
      </Button>
    </header>
  );
}
