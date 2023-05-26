'use client'
import Navbar from '../navbar.jsx';
import styles from './page.module.css'
import AllGuestsGrid from '../grids/allguests';

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
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api-v1/guests`);
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
      <AllGuestsGrid/>
    </div>
  );
};

export default GuestPage;