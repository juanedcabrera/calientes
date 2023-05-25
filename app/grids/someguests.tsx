'use client';
import React, { useEffect, useRef } from 'react';
import { Grid, html } from 'gridjs';

type Guest = {
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

function getRandomGuests(guests: Guest[], count: number) {
  const shuffledGuests = guests.sort(() => 0.5 - Math.random());
  return shuffledGuests.slice(0, count);
}

const getGuests: () => Promise<{ guests: Guest[] }> = async () => {
  const res = await fetch('http://localhost:8000/api-v1/guests');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const SomeGuestsGrid = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      getGuests().then(({ guests }) => {
        const mappedGuests = getRandomGuests(guests, 5).map((guest) => [
          guest.name,
          guest.profession,
          guest._id,
        ]);

        const grid = new Grid({
          columns: ['Name', 'Profession'],
          data: mappedGuests.map((guest) => [
            html(`<a href="guests/${guest[2]}">${guest[0]}</a>`),
            guest[1],
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

  return <div ref={wrapperRef} className="my-guests" />;
};

export default SomeGuestsGrid;
