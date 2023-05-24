'use client'
import React, { useEffect } from 'react';
import { Grid } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

const AboutGrid = () => {
  useEffect(() => {
    const grid = new Grid({
      columns: ['About'],
      data: [["Hot Ones is a popular web series hosted by Sean Evans, where he interviews celebrities while they eat increasingly spicy hot wings. The show has gained a massive following, and each episode features a different guest facing the heat of the hot sauce lineup."]],
    });

    const container = document.getElementById('About-container');
    if (container) {
      grid.render(container);
    }

    return () => {
      grid.destroy();
    };
  }, []);

  return <div id="About-container"></div>;
};

export default AboutGrid;
