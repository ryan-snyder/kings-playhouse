import type { MetaFunction } from "@remix-run/cloudflare";
import { AppShell, Burger, Container, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './MobileNavbar.module.css';
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export default function Index() {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(links[0].link);


  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell
    header={{ height: 60 }}
    navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
    padding="md"
  >
    <AppShell.Header className={classes.header}>
      <Group h="100%" px="md" className={classes.inner} justify="center">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <MantineLogo size={30} />
        <Group justify="space-between" style={{ flex: 1 }}>
          <Group ml="xl" gap={0} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </Group>
    </AppShell.Header>

    <AppShell.Navbar py="md" px={4}>
      {items}
    </AppShell.Navbar>

    <AppShell.Main>
      Navbar is only visible on mobile, links that are rendered in the header on desktop are
      hidden on mobile in header and rendered in navbar instead.
    </AppShell.Main>
    <AppShell.Footer p="md">Footer</AppShell.Footer>
  </AppShell>
  );
}
