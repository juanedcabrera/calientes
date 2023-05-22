import Navbar from '../navbar';

const hotSauceData = [
  {
    name: 'Hot Sauce 1',
    scovilleLevel: '10,000 SHU',
    description: 'A medium heat hot sauce with a tangy flavor.',
    manufacturer: 'Sauce Company 1',
    episodeAppearances: [2, 5, 9],
  },
  {
    name: 'Hot Sauce 2',
    scovilleLevel: '50,000 SHU',
    description: 'A fiery hot sauce with a smoky and sweet taste.',
    manufacturer: 'Sauce Company 2',
    episodeAppearances: [4, 7, 12],
  },
  {
    name: 'Hot Sauce 3',
    scovilleLevel: '100,000 SHU',
    description: 'An intensely hot sauce with a citrusy kick.',
    manufacturer: 'Sauce Company 3',
    episodeAppearances: [6, 11, 14],
  },
];

const HotSaucePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Hot Sauce Showcase</h1>
      {hotSauceData.map((hotSauce, index) => (
        <div key={index}>
          <h2>{hotSauce.name}</h2>
          <p>Scoville Level: {hotSauce.scovilleLevel}</p>
          <p>Description: {hotSauce.description}</p>
          <p>Manufacturer: {hotSauce.manufacturer}</p>
          <p>Episode Appearances: {hotSauce.episodeAppearances.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default HotSaucePage;
