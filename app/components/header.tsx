import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import { commonColors } from "@nextui-org/react";
import { builder } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/sdk';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { useEffect } from "react";

interface Link {
    url: string,
    label: string
}

interface Size {
    width: number,
    height: number
}

export function Header() {
    const links = [
            {
              "url": "/",
              "label": "Home"
            },
            {
              "url": "/events",
              "label": "What's On"
            },
            {
              "url": "/info",
              "label": "Theatre and Ticket Information"
            },
            {
              "url": "/weddings",
              "label": "Weddings & Packages"
            },
            {
              "url": "/about",
              "label": "About Us"
            },
            {
              "url": "/contact",
              "label": "Contact"
            }
          ]
    return (
        <Navbar isBordered className='dark text-foreground bg-background'>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p>Logo</p>
                </NavbarBrand>
                {links.map((link, index) => (
                    <NavbarItem>
                        <Link key={index} color="foreground" href={link.url}>
                            {link.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}
export default function NavHeader({ links, image, size} : {links: [key: Link], image: string, size: Size}) {
    return (
        <Navbar isBordered className='dark text-foreground bg-background'>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p>Logo</p>
                </NavbarBrand>
                {links.map((link, index) => (
                    <NavbarItem>
                        <Link key={index} color="foreground" href={link.url}>
                            {link.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}
