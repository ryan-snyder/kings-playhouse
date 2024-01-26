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
export default function header({ links, image, size} : {links: [key: Link], image: string, size: Size}) {
    return (
        <Navbar isBordered className='dark text-foreground bg-background'>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Image
                    width={size.width}
                    height={size.height}
                    alt="Kings Playhouse Logo"
                    src={image}
                    />
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
