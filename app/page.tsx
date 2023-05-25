import Navbar from './navbar';
import Image from 'next/image';
import styles from './page.module.css';
import SomeGuestsGrid from './grids/someguests';
import SomeEpisodesGrid from './grids/someepisodes';
import SomeSaucesGrid from './grids/somesauces';
import AboutGrid from './grids/about';
import FunFactsGrid from './grids/funfacts';
import Caliente from '../public/Caliente.png';

type Guests = {
  _id: string;
  name: string;
  profession: string;
  img: string;
  wallOfFlame: boolean;
  wallOfShame: boolean;
  episodes: string[];
  likes: number;
  totalWingsEaten: number;
  createdAt: string;
  updatedAt: string;
};

type Episode = {
  _id: string;
  title: string;
  season: string;
  overallEpisodeNumber: string;
  seasonEpisodeNumber: string;
  airDate: string;
  guests: string[];
  sauces: string[];
  success: boolean;
  guestDab: boolean;
  likes: number;
  carefulCount: number;
  createdAt: string;
  updatedAt: string;
};

const getGuests: () => Promise<{ guests: Guests[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/guests');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const getEpisodes: () => Promise<{ episodes: Episode[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/episodes');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const Home = async () => {
  const { guests } = await getGuests();
  const { episodes } = await getEpisodes();
  console.log(guests);

  function getRandomGuests(guests: any[], count: any) {
    const shuffledGuests = guests.sort(() => 0.5 - Math.random());
    return shuffledGuests.slice(0, count);
  }

  function getRandomEpisodes(episodes: any[], count: any) {
    const shuffledEpisodes = episodes.sort(() => 0.5 - Math.random());
    return shuffledEpisodes.slice(0, count);
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <header className={`${styles.header}`}>
      <div className={`${styles.headerImage}`}>
        <Image
          src="/Caliente.png"
          alt="Caliente logo that is a pepper breathing fire"
          width={200}
          height={200}
        />
           </div>
        <h1 className={`${styles.title}`} style={{ color: 'BLACK' }}>
          Calientes 🌶️: The website with Hot Facts and even Hotter Data
        </h1>
     
      </header>
      <AboutGrid />
      <FunFactsGrid />
      <SomeGuestsGrid />
      <SomeEpisodesGrid />
      <SomeSaucesGrid />

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Calientes: Hot Ones API. All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
