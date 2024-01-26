import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import { builder } from '@builder.io/react';
import type { BuilderContent } from '@builder.io/sdk';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { BuilderComponentProps } from "@builder.io/react/dist/types/src/components/builder-component.component";
import { Key } from "react";


export default function header({ props } : {props: BuilderComponentProps}) {
    const { links, image } = props.data;
    return (
        <Navbar>
        <NavbarBrand>
            <Image
              width={300}
              height={200}
              alt="Kings Playhouse Logo"
              src={image.data?.src}
            />
            <p className="font-bold text-inherit">Kings Playhouse</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {links.map((link: { url: string, label:string}, index: Key | null | undefined) => (
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
