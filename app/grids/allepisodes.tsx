'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Grid, html } from 'gridjs';
import './grid.module.css';
import 'gridjs/dist/theme/mermaid.css';

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
const getEpisodes = async (): Promise<{ episodes: Episode[] }> => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api-v1/episodes`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// EpisodesGrid component
const EpisodesGrid = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getEpisodes().then(({ episodes }) => {
        const mappedEpisodes = episodes.map((episode) => [
          html(`<a href="episodes/${episode._id}">${episode.title}</a>`),
          html(`<img src='${episode.thumbnailImage}' alt='Thumbnail image of the episode' width={100} height={100} />`),
          html(`<a href="seasons/${episode.seasonId}">${episode.seasonNumber}</a>`),
          episode.seasonEpisodeNumber,
        ]);

        const grid = new Grid({
          columns: ['Title', 'Thumbnail','Season', 'Episode Number'],
          data: mappedEpisodes, 
          sort:true,
          resizable:true,
          search:true,
        });

        if (wrapperRef.current) {
          grid.render(wrapperRef.current);
        }
      });
    }
  }, []);

  return <div ref={wrapperRef}></div>;
};

export default EpisodesGrid;

// q: How to do a normal img src?
// a: <img src='${episode.thumbnailImage}' alt='Thumbnail image of the episode' width={100} height={100} />