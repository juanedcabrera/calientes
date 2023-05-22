"use client";
import React, { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

function HelloWorld() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const grid = new Grid({
        columns: ['Name', 'Email', 'Phone Number'],
        data: [
          ['John', 'john@example.com', '(353) 01 222 3333'],
          ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']
        ]
      });

      grid.render(wrapperRef.current);

    }
  }, []);

  return <div ref={wrapperRef} />;
}

const Welcome = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

export default HelloWorld;
