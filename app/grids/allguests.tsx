'use client'
import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

type Guests = {
  _id: string;
  name: string;
  profession: string;
  img: string;
  wallOfFlame: boolean;
  wallOfShame: boolean;
  episodes: string[];
  likes: number;
  totalWingsEaten: number;
  createdAt: string;
  updatedAt: string;
};

const getGuests: () => Promise<{ guests: Guests[] }> = async () => {
  const res = await fetch("http://localhost:8000/api-v1/guests");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const GuestGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getGuests().then(({ guests }) => {
        const mappedGuests = guests.map((guest) => [
          guest.name,
          guest.profession,
        ]);

        const grid = new Grid({
          columns: ["Name", "Profession"],
          data: mappedGuests,
        });

        grid.render(wrapperRef.current);
      });
    }
  }, []);

  return <div ref={wrapperRef} />;
};

export default GuestGrid;
