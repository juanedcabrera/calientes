'use client'
import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";

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
  const res = await fetch("http://localhost:8000/api-v1/sauces");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// EpisodesGrid component
const SaucesGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getSauces().then(({ sauces }) => {
        const mappedSauces = sauces.map((sauce) => [
          sauce.name,
          sauce.scoville,
          sauce.description,
        ]);

        const grid = new Grid({
          columns: ["Name", "Scoville", "Description"],
          data: mappedSauces,
        });

        grid.render(wrapperRef.current);
      });
    }
  }, []);

  return <div ref={wrapperRef} />;
};

export default SaucesGrid;
