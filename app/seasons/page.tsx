import Navbar from '../navbar';

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

const getSeasons: () => Promise<{ seasons: Season[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/seasons');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const SeasonPage = async () => {
  const { seasons } = await getSeasons();

  return (
    <div>
      <Navbar />
      <h1>Hot Ones Seasons</h1>
      {seasons.map((season, index) => (
        <div key={index}>
          <h2>{`Season ${season.seasonNumber}`}</h2>
          <p>Number of Episodes: {season.episodes.length}</p>
          <p>Start Date: {season.startDate}</p>
          <p>End Date: {season.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default SeasonPage;
