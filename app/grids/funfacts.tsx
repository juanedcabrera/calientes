'use client'
import React, { useEffect } from 'react';
import { Grid, html } from 'gridjs';

const FunFactsGrid = () => {
  useEffect(() => {
    const grid = new Grid({
      columns: ['Fun Facts'],
      data: [
        [
          html(
            "<div'>" +
            "<li>There are only 10 episodes in which more than 1 guest attended.</li>" +
            "<li>The show only got 1 sponsor from Complex when it was pitched.</li>" +
            "<li>Juan and Andrew spent more time fixing data than writing code.</li>" +
            "<li>A true test of friendship is when you both whole heartedly disagree.</li>" +
            "<li>Please hire us</li>" +
            '</div>'
          ),
        ],
      ],
    });

    const container = document.getElementById('Fun-facts-container');
    if (container) {
      grid.render(container);
    }

    return () => {
      grid.destroy();
    };
  }, []);

  return <div id="Fun-facts-container"></div>;
};

export default FunFactsGrid;
