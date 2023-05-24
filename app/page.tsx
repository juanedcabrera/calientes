import Navbar from './navbar';
import styles from './page.module.css';
import SomeGuestsGrid from './grids/someguests';
import SomeEpisodesGrid from './grids/someepisodes';

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
      <header className="bg-dark text-light py-6">
        <h1 className="text-center">Calientes 🌶️: The Hot Ones Fan Site</h1>
      </header>
      <SomeGuestsGrid />
      <SomeEpisodesGrid />
      <section className="py-6">
        <div className="container">
          <h2>About Hot Ones</h2>
          <p>
            Hot Ones is a popular web series hosted by Sean Evans, where he
            interviews celebrities while they eat increasingly spicy hot wings.
            The show has gained a massive following, and each episode features a
            different guest facing the heat of the hot sauce lineup.
          </p>
        </div>
      </section>

      <section className="bg-light py-6">
        <div className="container">
          <h2>Fun Facts:</h2>
          <p>Discover fascinating statistics and data about Hot Ones:</p>
          <ul>
            <li>Number of episodes: [insert number]</li>
            <li>Number of seasons: [insert number]</li>
            <li>Total hot sauces featured: [insert number]</li>
            <li>Spiciest hot sauce on the show: [insert sauce name]</li>
            <li>Longest interview: [insert duration]</li>
            <li>Most viewed episode: [insert episode title]</li>
          </ul>
        </div>
      </section>

      <section className="bg-light py-6">
        <div className="container">
          <h2>Guests</h2>
          <p>Discover the celebrities who have appeared on Hot Ones:</p>
          {getRandomGuests(guests, 3).map((guest, index) => (
            <ul>
              <li>Name: {guest.name}</li>
              <li>Profession: {guest.profession}</li>
              {/* Add more guest names as needed */}
            </ul>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <h2>Seasons and Episodes</h2>
          <p>Explore the different seasons and episodes of Hot Ones:</p>
          <div>
            <h3>Season 1</h3>
            <ul>
              {getRandomEpisodes(episodes, 3).map((episode, index) => (
                <li key={index}>
                  Season: {episode.season} Episode:{' '}
                  {episode.seasonEpisodeNumber} - {episode.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Season 2</h3>
            <ul>
              {/* Add episodes for Season 2 */}
              <li>Episode 1 - [Episode Title]</li>
              <li>Episode 2 - [Episode Title]</li>
              <li>Episode 3 - [Episode Title]</li>
              {/* Add more episodes */}
            </ul>
          </div>
          {/* Add more seasons */}
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <h2>Explore Hot Sauces</h2>
          <p>Learn about the hot sauces used on Hot Ones:</p>
          <div className="grid grid-cols-3 gap-4">
            {/* Hot Sauce Cards */}
            <div className="card">
              <img src="[hot_sauce_image_url]" alt="[hot_sauce_name]" />
              <h3>[Hot Sauce Name]</h3>
              <p>[Description of the hot sauce]</p>
              <a href="[hot_sauce_link]" className="btn">
                Read More
              </a>
            </div>

            {/* Repeat for all hot sauces */}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Calientes: Hot Ones Fan Site. All
            rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
