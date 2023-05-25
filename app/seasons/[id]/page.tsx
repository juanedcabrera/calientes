import Navbar from '../../navbar';

type Season = {
  _id: string;
  seasonNumber: number;
  episodes: string[];
  likes: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  params: {
    id: string;
  };
};

const SeasonPage: ({}: Params) => Promise<{}> = async ({ params }) => {
  const getSeason: () => Promise<Season> = async () => {
    const res = await fetch(
      `http://localhost:8000/api-v1/seasons/${params.id}`,
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

  const season = await getSeason();

  return (
    <div>
      <Navbar />
      <h1>Hot Ones Season</h1>
    </div>
  );
};

export default SeasonPage;
