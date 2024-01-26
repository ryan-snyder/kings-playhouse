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
export default function header({ links, image, image_size} : {links: [key: Link], image: string, image_size: Size}) {
    return (
        <Navbar isBordered className='dark text-foreground bg-background'>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Image
                    width={image_size.width}
                    height={image_size.height}
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
