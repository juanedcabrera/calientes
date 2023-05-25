'use client';
import React, { useEffect, useRef } from 'react';
import { Grid, html } from 'gridjs';

// type definition
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

// asynchronous function to fetch episodes
const getEpisodes: () => Promise<{ episodes: Episode[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/episodes');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

function getRandomEpisodes(episodes: Episode[], count: number) {
  const shuffledEpisodes = episodes.sort(() => 0.5 - Math.random());
  return shuffledEpisodes.slice(0, count);
}

// EpisodesGrid component
const SomeEpisodesGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getEpisodes().then(({ episodes }) => {
        const mappedEpisodes = getRandomEpisodes(episodes, 5).map((episode) => [
          episode.title,
          episode.seasonNumber,
          episode.seasonEpisodeNumber,
          episode._id,
        ]);

        const grid = new Grid({
          columns: ['Title', 'Season', 'Episode Number'],
          data: mappedEpisodes.map((episode) => [
            html(`<a href="episodes/${episode[3]}">${episode[0]}</a>`),
            episode[1],
            episode[2],
          ]),
          sort: true,
          resizable: true,
        });
        if (wrapperRef.current) {
          grid.render(wrapperRef.current);
        }
      });
    }
  }, []);

  return <div ref={wrapperRef} />;
};

export default SomeEpisodesGrid;
