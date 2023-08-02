import {
    Badge,
    Group,
    Title,
    Text,
    SimpleGrid,
    Container, Card, rem,
} from '@mantine/core';
import useStyles from './Featured.styles';
import {IconPuzzle, IconGauge, Icon3dCubeSphere} from "@tabler/icons";

export function FeaturesCards() {
    const { classes, theme } = useStyles();

    const mockdata = [
        {
            title: 'Extreme performance',
            description:
                'The parallel processing capability of PNX enables it to make full use of multi-core CPU. You don\'t need to pursue high CPU frequency, and you can enjoy the huge performance improvement brought by multi-core CPU. At the same time, we use the world\'s leading graaljit compiler to dynamically convert java code into high-quality machine code most suitable for your CPU, so that Java code has high performance comparable to C++.',
            icon: IconGauge,
        },
        {
            title: 'Vanilla features',
            description:
                'PNX supports more vanilla features, including but not limited to all blocks, items, recipes, redstone, vanilla commands, water-logged blocks, etc. PNX is committed to providing a better survival mode game experience.',
            icon: Icon3dCubeSphere,
        },
        {
            title: 'Massive plugins',
            description:
                'PNX retains good plugin compatibility while adding many vanilla features, and can directly run Java plugins written targeting nukkitx and PowerMockito. In addition, PNX also implements the JSAPI of LiteLoader based on the built-in JS engine, which enables LLSE plugins to run on PNX with only a few changes.',
            icon: IconPuzzle,
        },
    ];

    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    Best Software
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Why choose PowerNukkitX ?
            </Title>

            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
