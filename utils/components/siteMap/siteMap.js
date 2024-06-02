'use client';
// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import { geoAlbersUsa } from 'd3-geo';


// const width = 975;
// const height = 610;

// const Map = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     const svg = d3
//       .select(mapRef.current)
//       .attr('viewBox', `0 0 ${width} ${height}`)
//       .style('width', '100%')
//       .style('height', 'auto');

//     const projection = geoAlbersUsa()
//       .scale(1300)
//       .translate([width / 2, height / 2]);

//     const path = d3.geoPath().projection(projection);

//     const regions = [
//       {
//         coordinates: [
//           [-120, 30],
//           [-80, 30],
//           [-80, 50],
//           [-120, 50],
//         ],
//       },
//       {
//         coordinates: [
//           [-90, 40],
//           [-70, 40],
//           [-70, 60],
//           [-90, 60],
//         ],
//       },
//       {
//         coordinates: [
//           [-110, 20],
//           [-90, 20],
//           [-90, 40],
//           [-110, 40],
//         ],
//       },
//     ];

//     const regionPaths = svg
//       .selectAll('path')
//       .data(regions)
//       .enter()
//       .append('path')
//       .attr('d', (d) => path(d))
//       .style('fill', 'steelblue')
//       .style('stroke', 'white')
//       .style('stroke-width', 1.5);

//     console.log('regionPaths', regionPaths); // הדפסת regionPaths לבדיקה
//   }, []);

//   return <svg ref={mapRef} />;
// };

// export default Map;

// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const width = 400;
// const height = 300;

// const Map = () => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current)
//       .attr('width', width)
//       .attr('height', height);

//     svg.append('rect')
//       .attr('x', 50)
//       .attr('y', 50)
//       .attr('width', 200)
//       .attr('height', 100)
//       .style('fill', 'blue');

//     svg.append('circle')
//       .attr('cx', 300)
//       .attr('cy', 200)
//       .attr('r', 50)
//       .style('fill', 'red');
//   }, []);

//   return <svg ref={svgRef}></svg>;
// };

// export default Map;

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const width = 1200;
const height = 500;

const Map = () => {
  const svgRef = useRef(null);
  const [rects, setRects] = useState([
    { x: 450, y: 150, width: 120, height: 100 },
    { x: 571, y: 170, width: 100, height: 170 },
    { x: 470, y: 251, width: 100, height: 100 },
  ]);

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g');

    const rectsSelection = g.append('g')
      .attr('cursor', 'pointer')
      .selectAll('rect')
      .data(rects)
      .join('rect')
      .on('click', clicked)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .style('fill', '#444');

    const zoom = d3.zoom()
      .scaleExtent([1, 4])
      .on('zoom', zoomed);

    svg.call(zoom);

    function clicked(event, d) {
      event.stopPropagation();
      rectsSelection.transition().style('fill', '#444');
      d3.select(this).transition().style('fill', 'red');

      const [[x0, y0], [x1, y1]] = [
        [d.x, d.y],
        [d.x + d.width, d.y + d.height],
      ];

      setRects([d]); // Set the rects data to only the clicked rectangle

      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        d3.pointer(event, svg.node())
      );
    }

    function zoomed(event) {
      const { transform } = event;
      g.attr('transform', transform);
      g.attr('stroke-width', 1 / transform.k);
    }
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default Map;