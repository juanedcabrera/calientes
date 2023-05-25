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
            "<div>" +
              "<li>There are only 10 episodes in which more than 1 guest attended.</li>" +
              "<li>The show only got 1 sponsor from Complex when it was pitched - Donnie Kwak.</li>" +
              "<li>The normal season is 12 episodes but Season 2 has close to 40 episodes.</li>" +
              "<li>The Gordon Ramsey episode in 2019 has more than double the amount of views of the next episode.</li>" +
              "<li>While Da'Bomb Beyond Insanity is the sauce used in the most episodes (276), Hot Ones Fiery Chipotle comes in second place (101).</li>" +
              '<li>You can hire us - <a href="https://github.com/juanedcabrera"/>Juan</a> and <a href="https://github.com/continentaldivide"/>Andrew</a></li>' +
            "</div>"
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
