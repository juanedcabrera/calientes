import Navbar from './navbar';
import Image from 'next/image';
import styles from './page.module.css';
import SomeGuestsGrid from './grids/someguests';
import SomeEpisodesGrid from './grids/someepisodes';
import SomeSaucesGrid from './grids/somesauces';
import AboutGrid from './grids/about';
import FunFactsGrid from './grids/funfacts';

const Home = async () => {
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
            &copy; {new Date().getFullYear()} Calientes: Hot Ones API. Not
            officially associated with Complex, First We Feast, or Hot Ones. All
            rights reserved.
          </p>
          <p>
            Background chicken wings brought to you by: 
            <a href="https://www.vecteezy.com/free-vector/chicken-wings">Vecteezy</a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
