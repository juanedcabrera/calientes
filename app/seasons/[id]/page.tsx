import Navbar from '../../navbar';

type Season = {
  _id: string;
  seasonNumber: number;
  episodeIds: string[];
  episodeTitles: string[];
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
      `${process.env.REACT_APP_SERVER_URL}/api-v1/seasons/${params.id}`,
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
      <div style={{ transition:'.3s', borderRadius:'5px', backgroundColor:'white', width: '35em'}}>
      <h1 style={{ fontSize: '80px' }}>Hot Ones {season.seasonNumber}</h1>
      <p style={{ fontSize: '20px' }}>Start Date: {season.startDate}</p>
      <p style={{ fontSize: '20px' }}>End Date: {season.endDate}</p>
      <h2 style={{ fontSize: '60px' }}>Episodes: </h2>
      {season.episodeTitles.map((episode, index) => (
        <p style={{ fontSize: '20px' }} key={index}>{episode}</p>
      ))}
      </div>
    </div>
  );
};

export default SeasonPage;
