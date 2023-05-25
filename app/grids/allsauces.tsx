'use client';
import React, { useEffect, useRef } from 'react';
import { Grid, html } from 'gridjs';
import './grid.module.css';
import 'gridjs/dist/theme/mermaid.css';

type Sauce = {
  _id: string;
  name: string;
  manufacturer: string;
  description: string;
  scoville: number;
  img: string;
  likes: number;
  episodes: string[];
  createdAt: string;
  updatedAt: string;
};

// asynchronous function to fetch episodes
const getSauces: () => Promise<{ sauces: Sauce[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/sauces');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// EpisodesGrid component
const AllSaucesGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getSauces().then(({ sauces }) => {
        const mappedSauces = sauces.map((sauce) => [
          sauce.name,
          sauce.scoville,
          sauce.description,
          sauce._id,
        ]);

        const grid = new Grid({
          columns: ['Name', 'Scoville', 'Description'],
          data: mappedSauces.map((sauce) => [
            html(`<a href="sauces/${sauce[3]}">${sauce[0]}</a>`),
            sauce[1],
            sauce[2],
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

export default AllSaucesGrid;
