import React from 'react';

const guestData = [
  {
    name: 'Guest 1',
    appearances: [
      {
        ateAllHotSauces: true,
        didLastDab: false,
        season: 2,
        episode: 10
      },
      {
        ateAllHotSauces: true,
        didLastDab: true,
        season: 5,
        episode: 3
      }
    ]
  },
  {
    name: 'Guest 2',
    appearances: [
      {
        ateAllHotSauces: false,
        didLastDab: true,
        season: 4,
        episode: 5
      }
    ]
  },
  {
    name: 'Guest 3',
    appearances: [
      {
        ateAllHotSauces: true,
        didLastDab: true,
        season: 6,
        episode: 3
      },
      {
        ateAllHotSauces: false,
        didLastDab: false,
        season: 8,
        episode: 7
      }
    ]
  }
];

const HotOnesGuestGallery = () => {
  return (
    <div>
      <h1>Hot Ones Guest Gallery</h1>
      {guestData.map((guest, index) => (
        <div key={index}>
          <h2>{guest.name}</h2>
          <ul>
            {guest.appearances.map((appearance, appearanceIndex) => (
              <li key={appearanceIndex}>
                <p>Hot Sauce Challenge: {appearance.ateAllHotSauces ? 'Yes' : 'No'}</p>
                <p>Last Dab Challenge: {appearance.didLastDab ? 'Yes' : 'No'}</p>
                <p>Season {appearance.season}, Episode {appearance.episode}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HotOnesGuestGallery;
