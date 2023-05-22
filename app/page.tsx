import Navbar from './navbar.jsx';



const Home = () => {
  return (
    <main>
      <Navbar/>
      <header className="bg-dark text-light py-6">
        <h1 className="text-center">Calientes 🌶️: The Hot Ones Fan Site</h1>
      </header>

      <section className="py-6">
        <div className="container">
          <h2>About Hot Ones</h2>
          <p>Hot Ones is a popular web series hosted by Sean Evans, where he interviews celebrities while they eat increasingly spicy hot wings. The show has gained a massive following, and each episode features a different guest facing the heat of the hot sauce lineup.</p>
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
          <ul>
            <li>[Guest Name 1]</li>
            <li>[Guest Name 2]</li>
            <li>[Guest Name 3]</li>
            {/* Add more guest names as needed */}
          </ul>
        </div>
      </section>

      <section className="py-6">
        <div className="container">
          <h2>Seasons and Episodes</h2>
          <p>Explore the different seasons and episodes of Hot Ones:</p>
          <ul>
            <li>
              <h3>Season 1</h3>
              <ul>
                <li>Episode 1 - [Episode Title]</li>
                <li>Episode 2 - [Episode Title]</li>
                <li>Episode 3 - [Episode Title]</li>
                {/* Add more episodes */}
              </ul>
            </li>
            <li>
              <h3>Season 2</h3>
              <ul>
                <li>Episode 1 - [Episode Title]</li>
                <li>Episode 2 - [Episode Title]</li>
                <li>Episode 3 - [Episode Title]</li>
                {/* Add more episodes */}
              </ul>
            </li>
            {/* Add more seasons */}
          </ul>
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
              <a href="[hot_sauce_link]" className="btn">Read More</a>
            </div>

            {/* Repeat for all hot sauces */}

          </div>
        </div>
      </section>

      <footer className="bg-dark text-light py-4">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Calientes: Hot Ones Fan Site. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
