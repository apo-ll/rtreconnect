"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import { Logo } from "./RTRLogo";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();

  const menuItems = ["Home", "About Us", "Contact"];
  const Menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/About",
    },
    {
      name: "Contact",
      href: "/Contact",
    },
    {
      name: "Gallery",
      href: "/Gallery",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      isBordered
      isBlurred={false}
    >
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {Menu.map((items, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={items.href}
              className={`${
                pathName === items.href ? "text-[#F0A81D]" : "text-black"
              }`}
            >
              {items.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" radius="none" size="lg">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {Menu.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`${
                pathName === item.href ? "text-[#F0A81D]" : "text-black"
              } text-3xl py-4`}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
