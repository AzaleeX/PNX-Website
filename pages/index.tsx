import { Welcome } from '../components/Welcome/Welcome';
import { Navbar } from '../components/NavBar/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar links={[
          {
              label: "Home",
              link: "/home",
          },
          {
              label: "About",
              link: "/about",
          },
          {
              label: "Plugins",
              link: "/plugins",
          },
      ]}
      />
      <Welcome />
    </>
  );
}
