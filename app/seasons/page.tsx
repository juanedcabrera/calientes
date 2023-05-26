import Navbar from '../navbar';
import AllSeasonsGrid from '../grids/allseasons';

const SeasonPage = async () => {
  return (
    <div>
      <Navbar />
      <h1>Hot Ones Seasons</h1>
      <AllSeasonsGrid />
    </div>
  );
};

export default SeasonPage;
