import Navbar from '../navbar';
import AllEpisodesGrid from '../grids/allepisodes';

type Episode = {
  _id: string;
  title: string;
  seasonNumber: number;
  seasonId: string;
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

const getEpisodes: () => Promise<{ episodes: Episode[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/episodes', {
    // needs to be removed (or changed) before final publication -- only currently implemented so that we're not constantly getting cached results when trying to test changes
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const EpisodePage = async () => {
  const { episodes } = await getEpisodes();

  return (
    <div>
      <Navbar />
      <h1>Hot Ones Episodes</h1>
      <AllEpisodesGrid />
    </div>
  );
};

export default EpisodePage;
