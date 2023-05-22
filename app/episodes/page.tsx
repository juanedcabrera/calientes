import React from 'react';

const episodeData = [
  {
    season: 2,
    title: 'Spicy Wings Challenge',
    guests: ['Guest 1', 'Guest 2'],
    airDate: 'January 10, 2018',
    sauces: ['Hot Sauce 1', 'Hot Sauce 2', 'Hot Sauce 3', 'Hot Sauce 4', 'Hot Sauce 5', 'Hot Sauce 6', 'Hot Sauce 7', 'Hot Sauce 8', 'Hot Sauce 9', 'Hot Sauce 10']
  },
  {
    season: 4,
    title: 'Heatwave',
    guests: ['Guest 3', 'Guest 4'],
    airDate: 'March 27, 2019',
    sauces: ['Hot Sauce 2', 'Hot Sauce 5', 'Hot Sauce 7', 'Hot Sauce 9', 'Hot Sauce 11', 'Hot Sauce 13', 'Hot Sauce 15', 'Hot Sauce 17', 'Hot Sauce 19', 'Hot Sauce 21']
  },
  {
    season: 6,
    title: 'Flame Game',
    guests: ['Guest 5'],
    airDate: 'August 5, 2020',
    sauces: ['Hot Sauce 4', 'Hot Sauce 8', 'Hot Sauce 12', 'Hot Sauce 16', 'Hot Sauce 20', 'Hot Sauce 24', 'Hot Sauce 28', 'Hot Sauce 32', 'Hot Sauce 36', 'Hot Sauce 40']
  }
];

const EpisodePage = () => {
  return (
    <div>
      <h1>Hot Ones Episodes</h1>
      {episodeData.map((episode, index) => (
        <div key={index}>
          <h2>{`Season ${episode.season} - ${episode.title}`}</h2>
          <p>Guests: {episode.guests.join(', ')}</p>
          <p>Air Date: {episode.airDate}</p>
          <p>Sauces Mentioned: {episode.sauces.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default EpisodePage;
