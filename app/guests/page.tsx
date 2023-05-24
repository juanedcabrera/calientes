import Navbar from '../navbar.jsx';
import styles from './page.module.css'

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

const getGuests: () => Promise<{ guests: Guests[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/guests');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const GuestPage = async () => {
  const { guests } = await getGuests();
  console.log(guests);

  return (
    <div>
      <Navbar />
      <h1>Hot Ones Guests</h1>
      {guests.map((guest, index) => (
        <div key={index} className={styles.main}>
          <h2>{`Name ${guest.name}, Profession ${guest.profession} - ${guest.episodes}`}</h2>
          <p>Wall of Flame: {guest.wallOfFlame}</p>
          <p>Total Wings Eaten: {guest.totalWingsEaten}</p>
        </div>
      ))}
    </div>
  );
};

export default GuestPage;