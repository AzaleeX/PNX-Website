import { Title, Text } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit c="blue" component="span">
          PowerNukkitX
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This is a Java software for Minecraft Pocket Edition servers,
          offering a new experience,
          powerful and rich in new features.
          Its implementation is similar to that of the vanilla version,
          thus guaranteeing an authentic and immersive gaming experience.
          {/* eslint-disable-next-line max-len */}
          With PowernukkitX,
          discover an exciting universe where creativity and possibilities are limitless.
      </Text>
    </>
  );
}
