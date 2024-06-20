import { Button, NavLink } from '@mantine/core';

import { IconPawFilled } from '@tabler/icons-react';
import classes from './Header.module.css';

const navItems = [
  {

    label: 'Home',
    url: '/',
  },
  {

    label: 'About Us',
    url: '/about',
  },
  {

    label: 'Sevice',
    url: '/service',
  },
  {

    label: 'Food',
    url: '/food',
  },
  {

    label: 'Favorites',
    url: '/favorite',
  },
];

export function Header() {
  return (
    <header className={classes.header}>
      <IconPawFilled style={{ width: 50, height: 50, }} color="#FFC078" />
      <nav className={classes.nav}>
        {navItems.map((item) => (
          <NavLink
            href={item.url}
            label={item.label}
            key={item.label}
            className={classes.link}
          />
        ))}
      </nav>
      <Button variant="filled" color="orange.3">Sign Up</Button>
    </header>
  );
}