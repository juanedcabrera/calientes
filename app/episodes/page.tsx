import Navbar from '../navbar';
import AllEpisodesGrid from '../grids/allepisodes';

const EpisodesPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Hot Ones Episodes</h1>
      <AllEpisodesGrid />
    </div>
  );
};

export default EpisodesPage;
