import {Header, Group, ActionIcon, Container, Image} from '@mantine/core';
import {
    IconBrandDiscord,
    IconBrandGithub,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import useStyles from './Navbar.styles';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import image from '../../assets/powernukkitX.png';

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
            <Header height={55} mb={70}>
                <Container className={classes.inner} fluid>
                    <Group className={classes.image}>
                        <Image src={image.src} maw={150} />
                    </Group>
                    <Group className={classes.links} spacing={5}>
                        {items}
                    </Group>

                    <Group spacing={3} className={classes.social} position="right" noWrap>
                        <ActionIcon size="lg" component={"a"} href="https://discord.gg/9ygGndMvaB" target="_blank">
                            <IconBrandDiscord size="1.1rem" stroke={1.5} />
                        </ActionIcon>
                        <ActionIcon size="lg" component={"a"} href="https://github.com/PowerNukkitX" target="_blank">
                            <IconBrandGithub size="1.1rem" stroke={1.5} />
                        </ActionIcon>

                        <ColorSchemeToggle />
                    </Group>
                </Container>
            </Header>
        </>
    );
}
