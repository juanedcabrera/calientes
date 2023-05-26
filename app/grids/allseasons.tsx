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

// asynchronous function to fetch episodes
const getSeasons: () => Promise<{ seasons: Season[] }> = async () => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api-v1/seasons`);
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
        const gridData = seasons.map((season) => {
          const episodes = season.episodeTitles.map((title, index) => {
            const episodeId = season.episodeIds[index]; // This will get the corresponding episode ID 
            return `<a href="episodes/${episodeId}">${title}</a>`;
          });

          return [
            html(`<a href="seasons/${season._id}">${season.seasonNumber}</a>`),
            html(episodes.join('<br>')),
          ];
        });

        const grid = new Grid({
          columns: ['Season', 'Episodes'],
          data: gridData,
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
