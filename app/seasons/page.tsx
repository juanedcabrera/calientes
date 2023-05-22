import React from 'react';

const seasonData = [
  {
    seasonNumber: 1,
    numberOfEpisodes: 12,
    startDate: 'March 12, 2015',
    endDate: 'June 4, 2015'
  },
  {
    seasonNumber: 2,
    numberOfEpisodes: 18,
    startDate: 'September 16, 2015',
    endDate: 'January 6, 2016'
  },
  {
    seasonNumber: 3,
    numberOfEpisodes: 21,
    startDate: 'March 3, 2016',
    endDate: 'July 14, 2016'
  },
  {
    seasonNumber: 4,
    numberOfEpisodes: 24,
    startDate: 'October 6, 2016',
    endDate: 'March 30, 2017'
  },
  {
    seasonNumber: 5,
    numberOfEpisodes: 22,
    startDate: 'June 1, 2017',
    endDate: 'November 9, 2017'
  }
];

const SeasonPage = () => {
  return (
    <div>
      <h1>Hot Ones Seasons</h1>
      {seasonData.map((season, index) => (
        <div key={index}>
          <h2>{`Season ${season.seasonNumber}`}</h2>
          <p>Number of Episodes: {season.numberOfEpisodes}</p>
          <p>Start Date: {season.startDate}</p>
          <p>End Date: {season.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default SeasonPage;
