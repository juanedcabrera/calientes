import Navbar from '../../navbar';

type Sauce = {
  _id: string;
  name: string;
  manufacturer: string;
  description: string;
  scoville: number;
  img: string;
  likes: number;
  episodes: string[];
  createdAt: string;
  updatedAt: string;
};

type Params = {
  params: {
    id: string;
  };
};

// not in love with the syntax for params typing here, but managed to avoid "any" so probably good enough for the time being
const SaucePage: ({}: Params) => Promise<{}> = async ({ params }) => {
  const getSauce: () => Promise<Sauce> = async () => {
    const res = await fetch(
      `http://localhost:8000/api-v1/sauces/${params.id}`,
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

  const sauce = await getSauce();

  return (
    <div>
      <Navbar />
      <div>
        <h1>{sauce.name}</h1>
      </div>
    </div>
  );
};

export default SaucePage;
