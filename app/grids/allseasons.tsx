'use client';
import React, { useEffect, useRef } from 'react';
import { Grid, html } from 'gridjs';
import './grid.module.css';
import 'gridjs/dist/theme/mermaid.css';

type Season = {
  _id: string;
  seasonNumber: number;
  episodeIds: string[];
  episodeTitles: string[];
  likes: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

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

// asynchronous function to fetch episodes
const getSeasons: () => Promise<{ seasons: Season[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/seasons');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// asynchronous function to fetch episodes
const getEpisodes = async (): Promise<{ episodes: Episode[] }> => {
  const res = await fetch('http://localhost:8000/api-v1/episodes');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// EpisodesGrid component
const AllSeasonsGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getSeasons().then(({ seasons }) => {
        const mappedSeasons = seasons.map((season) => [
          season.seasonNumber,
          season.startDate,
          season.endDate,
          season.episodeTitles,
          season._id,
        ]);

        const grid = new Grid({
          columns: ['Season', 'Start Date', 'End Date', 'Episodes'],
          data: mappedSeasons.map((season) => [
            html(`<a href="seasons/${season[4]}">${season[0]}</a>`),
            season[1],
            season[2],
            season[3],
          ]),
          sort: true,
          resizable: true,
          search: true,
        });

        if (wrapperRef.current) {
          grid.render(wrapperRef.current);
        }
      });
    }
  }, []);

  return <div ref={wrapperRef} />;
};

export default AllSeasonsGrid;
