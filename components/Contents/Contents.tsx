import React from 'react';
import { Container, Grid, Image, Text, TitleProps} from '@mantine/core';

interface ContentsProps {
    title: TitleProps;
    description: string;
    imageUrl: string;
}

const Contents: React.FC<ContentsProps> = ({ title, description, imageUrl }) => (
    <Container size="lg" py="xl">
        <Grid>
            <Grid.Col span={5} m={30}>
                <>
                {title}
                </>
                <Text pt={30} fw={500} c="dark.2">
                    {description}
                </Text>
            </Grid.Col>
            <Grid.Col span={4}>
                <Image src={imageUrl} radius="sm" height={350} width={580} mr={350} />
            </Grid.Col>
        </Grid>
    </Container>
);

export default Contents;
