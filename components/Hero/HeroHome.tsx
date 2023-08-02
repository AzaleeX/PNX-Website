import {
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem, Box,
} from '@mantine/core';

import { IconBookmark, IconBrandGithub, IconCheck, IconDownload } from '@tabler/icons-react';
import useStyles from './HeroHome.styles';
import image from '../../assets/hero.png';

export function HeroHome() {
    const { classes } = useStyles();
    return (
        <div>
            <Container size="lg" py="xl">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A <Text inherit c="blue" component="span">
                            modern
                              </Text> Software <br /> Bedrock Edition
                        </Title>
                        <Text color="dimmed" mt="md">
                            PowerNukkitX enhances Minecraft with its fast and secure software and extraordinary API,
                            providing the latest version of Minecraft Bedrock quickly,
                            responsive and efficient support, and stable performance.
                        </Text>

                        <List
                          mt={30}
                          spacing="sm"
                          size="sm"
                          icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={rem(12)} stroke={1.5} />
                                </ThemeIcon>
                        }
                        >
                            <List.Item>
                                <b>Java based</b> – easy to build is supper easy to use for new/old developer great for developers
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all the project has an MIT license, you can use PowerNukkitX to create any server
                            </List.Item>
                            <List.Item>
                                <b>Quick Support</b> – an incredible team behind this project, with fast and efficient support
                                keyboard
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Button component="a" variant="default" radius="md" size="md" className={classes.control} leftIcon={<IconBookmark />}>
                                Documentation
                            </Button>
                            <Button component="a" href="https://github.com/PowerNukkitX/PowerNukkitX" target="_blank" variant="default" radius="md" size="md" className={classes.control} leftIcon={<IconBrandGithub />}>
                                Source code
                            </Button>
                            <Box w={476}>
                                <Button component="a" href="https://github.com/PowerNukkitX/PowerNukkitX/releases/download/1.20.10-r1/powernukkitx.jar" fullWidth radius="md" size="md" leftIcon={<IconDownload />}>
                                    Download
                                </Button>
                            </Box>
                        </Group>
                    </div>
                    <Image src={image.src} className={classes.image} height={547} width={663} radius="xl" ml={30}/>
                </div>
            </Container>
        </div>
    );
}
