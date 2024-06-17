"use client";
import { useEffect, useRef } from "react";
import "./map3.css";

const TechMap = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    fetch("/pics/map3/mapData.json")
      .then((response) => response.json())
      .then((data) => {
        const svgDoc = svgRef.current.contentDocument;
        Object.keys(data).forEach((category) => {
          data[category].forEach((item) => {
            const point = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "circle"
            );
            point.setAttribute("cx", item.x);
            point.setAttribute("cy", item.y);
            point.setAttribute("r", "5");
            point.setAttribute("class", "tech-point");
            point.addEventListener("click", () => {
              window.location.href = item.url;
            });
            svgDoc.documentElement.appendChild(point);

            const text = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "text"
            );
            text.setAttribute("x", item.x + 5);
            text.setAttribute("y", item.y + 5);
            text.setAttribute("class", "tech-text");
            text.textContent = item.name;
            svgDoc.documentElement.appendChild(text);
          });
        });
      });
  }, []);

  return (
    <div className="map-container">
      <object
        className="tech-map"
        data="/pics/map3/map3.svg"
        type="image/svg+xml"
        ref={svgRef}
      ></object>
    </div>
  );
};

export default TechMap;
