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
export default function header({ links, image} : {links: [key: Link], image: string}) {
    return (
        <Navbar isBordered className='bg-green-500'>
        <NavbarBrand>
            <Image
              width={300}
              height={200}
              alt="Kings Playhouse Logo"
              src={image}
            />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
