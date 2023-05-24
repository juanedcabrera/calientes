import Navbar from '../../navbar';

type Guest = {
  _id: string;
  name: string;
  profession: string;
  episodes: string[];
  episodeDates: string[];
  totalWingsEaten: number;
  wallOfFlame: boolean;
  wallOfShame: boolean;
  likes: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  params: {
    id: string;
  };
};

// not in love with the syntax for params typing here, but managed to avoid "any" so probably good enough for the time being
const GuestPage: ({}: Params) => Promise<{}> = async ({ params }) => {

  const getGuest: () => Promise<Guest> = async () => {
    const res = await fetch(
      `http://localhost:8000/api-v1/guests/${params.id}`,
      {
        // needs to be removed (or changed) before final publication -- only currently implemented so that we're not constantly getting cached results when trying to test changes
        next: { revalidate: 0 },
      }
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const guest = await getGuest();
  
  return (
    <div>
      <Navbar />
      <div>
        <h1>{guest.name}</h1>
      </div>
    </div>
  );
};

export default GuestPage;
