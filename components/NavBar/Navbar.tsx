import {Header, Group, ActionIcon, Container, Burger, Image, Text} from '@mantine/core';
import {IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandDiscord} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useStyles from './Navbar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { MantineLogo } from '@mantine/ds';

interface HeaderMiddleProps {
    links: { link: string; label: string }[];
}

export function Navbar({ links }: HeaderMiddleProps) {
    const { classes, cx } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
            }}
        >
            {link.label}
        </a>
    ));
    return (
        <>
            <Header height={58} mb={120}>
                <Container className={classes.inner}>
                    <Group className={classes.links} spacing={4}>
                        <Image src="https://avatars.githubusercontent.com/u/99014792?s=200&v=4" maw={28} />
                        <Text maw={27}>PowerNukkitX</Text>
                    </Group>
                    <Group className={classes.links} spacing={4}>
                        {items}
                    </Group>

                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                    <Group spacing={3} className={classes.social} position="right" noWrap>
                        <ActionIcon size="lg">
                            <IconBrandTwitter size="1.1rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <IconBrandYoutube size="1.1rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg">
                            <IconBrandDiscord size="1.1rem" stroke={1.5} href="https://discord.gg/9ygGndMvaB" />
                        </ActionIcon>

                        <ColorSchemeToggle />
                    </Group>
                </Container>
            </Header>
        </>
    );
}
