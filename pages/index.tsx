import { Title, Skeleton, Text } from '@mantine/core';
import { Navbar } from '../components/NavBar/Navbar';
import { HeroHome } from '../components/Hero/HeroHome';
import { FeaturesCards } from '../components/Features/FeaturedCard';
import Contents from '../components/Contents/Contents';

import image from '../assets/Content1.png';
import { useBstatsPlayers } from '../libs/BStats/bstats';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
    const { data: playerData } = useBstatsPlayers();

  return (
    <>
      <Navbar links={[
          {
              label: 'Home',
              link: '/home',
          },
          {
              label: 'About',
              link: '/about',
          },
          {
              label: 'Plugins',
              link: '/plugins',
          },
      ]}
      />
      <HeroHome />
      <FeaturesCards />
      <Contents
        title={
          <Title>
              Used by over&nbsp;
              {playerData ? (
                  <Text inherit c="blue" component="span">
                      {Math.round(playerData[0][1])}
                  </Text>
              ) : (
                  <Skeleton className="w-30 h-6 inline-block" />
              )}
              &nbsp;players
          </Title>
      }
        description="PowerNukkitX's software powers Minecraft servers daily, from small single-server setups to massive Minecraft server networks. Designed for performance and utility to bring to the community"
        imageUrl={image.src}
      />
      <Footer data={[
          {
              title: 'About',
              links: [
                  {
                      label: 'Features',
                      link: '#',
                  },
                  {
                      label: 'Pricing',
                      link: '#',
                  },
                  {
                      label: 'Support',
                      link: '#',
                  },
                  {
                      label: 'Forums',
                      link: '#',
                  },
              ],
          },
      ]}
      />
    </>
  );
}
