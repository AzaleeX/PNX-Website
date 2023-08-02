import { Container, Anchor, Group, Image, Text } from '@mantine/core';
import useStyles from './Footer.styles';
import image from '../../assets/powernukkitX.png';

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

export function Footer({ data }: FooterLinksProps) {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image src={image.src} maw={150} />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Software for Bedrock edition in java to create your own server
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 PowerNukkitX. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}
