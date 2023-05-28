import Navbar from '../../navbar';
import style from './page.module.css';
import Image from 'next/image';

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
  wingsGuestCompleted: number;
  success: boolean;
  guestDab: boolean;
  likes: number;
  carefulCount: number;
  image: string;
  thumbnailImage: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  params: {
    id: string;
  };
};

// not in love with the syntax for params typing here, but managed to avoid "any" so probably good enough for the time being
const EpisodePage: ({}: Params) => Promise<{}> = async ({ params }) => {
  console.log(params.id);
  const getEpisode: () => Promise<Episode> = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api-v1/episodes/${params.id}`,
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
  const episode = await getEpisode();
  console.log(episode);
  return (
    <div>
      <Navbar />
      <h1>Hot Ones Episodes</h1>
      <div
        style={{
          transition: '.3s',
          borderRadius: '5px',
          backgroundColor: 'white',
          width: '35em',
        }}
      >
        <h1 style={{ fontSize: '80px', padding:'10px' }}>{episode.title}</h1>
        <h2 style={{ fontSize: '60px', padding:'10px' }}>
          Season Number: {episode.seasonNumber}
        </h2>
        <h2 style={{ fontSize: '60px', padding:'10px' }}>
          Episode Number: {episode.seasonEpisodeNumber}
        </h2>
       
        <Image src={episode.image} alt="episode image" width={400} height={200} />
   
        <p style={{ fontSize: '20px', padding:'10px' }}>
        Air Date: {new Date(episode.airDate).toLocaleDateString('en-US')}
        </p>
      </div>
    </div>
  );
};

export default EpisodePage;
