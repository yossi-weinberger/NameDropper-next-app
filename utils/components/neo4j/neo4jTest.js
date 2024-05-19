import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { getGraph } from "@/utils/functions/neo4JApiCalls";

const Neo4jGraph = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGraph();
        renderGraph(data);
      } catch (error) {
        console.error("Error rendering graph:", error.message);
      }
    };
    fetchData();
  }, []);

  const renderGraph = (nodes) => {
    const links = [];
    const flattenedNodes = [];
    const nodeMap = new Map();

    function flattenNode(node, parentId = null) {
      const nodeId = `${node.id}-${parentId || "root"}`;
      if (nodeMap.has(nodeId)) return; // Prevent duplicates

      nodeMap.set(nodeId, node);
      flattenedNodes.push({ ...node, parentId, id: nodeId });

      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          flattenNode(child, node.id);
        });
      }
    }

    nodes.forEach((node) => {
      flattenNode(node);

      if (node.relationships && node.relationships.length > 0) {
        node.relationships.forEach((rel) => {
          const source = `${node.id}-${node.parentId || "root"}`;
          const target = `${rel.target}-${node.id}`;
          links.push({ source, target, type: rel.type });
        });
      }
    });

    const data = { nodes: flattenedNodes, links };
    console.log("Rendering graph with data:", data);

    const width = 800;
    const height = 600;
    const svg = d3
      .select(graphRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Create a simulation with the graph data
    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3.forceLink(data.links).id((d) => d.id)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Create the links
    const link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.6);

    // Create the nodes
    const node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(data.nodes)
      .enter()
      .append("g");

    node
      .append("circle")
      .attr("r", 5)
      .attr("fill", (d) => colorScale(d.parentId || "root"));

    node
      .append("text")
      .text((d) => d.label || d.id) // Use id if label is missing
      .attr("x", 10)
      .attr("y", 3);

    // Add labels for links
    link.append("title").text((d) => d.type);

    // Update the positions of nodes and links on each simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });

    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
  };

  return <div ref={graphRef}></div>;
};

export default Neo4jGraph;

// import { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { getGraph } from "@/utils/functions/neo4JApiCalls";

// const Neo4jGraph = () => {
//   const graphRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getGraph();
//         renderGraph(data);
//       } catch (error) {
//         console.error("Error rendering graph:", error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const renderGraph = (nodes) => {
//     const links = [];
//     const flattenedNodes = [];

//     function flattenNode(node, parentId = null) {
//       flattenedNodes.push({ ...node, parentId });

//       if (node.children && node.children.length > 0) {
//         node.children.forEach((child) => {
//           flattenNode(child, node.id);
//         });
//       }
//     }

//     nodes.forEach((node) => {
//       flattenNode(node);

//       if (node.relationships && node.relationships.length > 0) {
//         node.relationships.forEach((rel) => {
//           links.push({ source: node.id, target: rel.target });
//         });
//       }
//     });

//     const data = { nodes: flattenedNodes, links };
//     console.log("Rendering graph with data:", data);

//     const width = 800;
//     const height = 600;

//     const svg = d3
//       .select(graphRef.current)
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height);

//     // Create a simulation with the graph data
//     const simulation = d3
//       .forceSimulation(data.nodes)
//       .force(
//         "link",
//         d3.forceLink(data.links).id((d) => d.id)
//       )
//       .force("charge", d3.forceManyBody())
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Create the links
//     const link = svg
//       .append("g")
//       .attr("class", "links")
//       .selectAll("line")
//       .data(data.links)
//       .enter()
//       .append("line")
//       .attr("stroke", "#CCC")
//       .attr("stroke-opacity", 0.6);

//     // Create the nodes
//     const node = svg
//       .append("g")
//       .attr("class", "nodes")
//       .selectAll("circle")
//       .data(data.nodes)
//       .enter()
//       .append("circle")
//       .attr("r", 5)
//       .attr("fill", "#ccc")
//       .call(
//         d3
//           .drag()
//           .on("start", dragstarted)
//           .on("drag", dragged)
//           .on("end", dragended)
//       );

//     // Add labels to nodes
//     node.append("title").text((d) => d.id);

//     // Update the positions of nodes and links on each simulation tick
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) => d.source.x)
//         .attr("y1", (d) => d.source.y)
//         .attr("x2", (d) => d.target.x)
//         .attr("y2", (d) => d.target.y);

//       node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
//     });

//     // Drag functions
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }
//   };

//   return <div ref={graphRef}></div>;
// };

// export default Neo4jGraph;

// import { useEffect, useRef } from "react";
// import * as d3 from "d3";
// import { getGraph } from "@/utils/functions/neo4JApiCalls";

// const Neo4jGraph = () => {
//   const graphRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getGraph();
//         renderGraph(data);
//       } catch (error) {
//         console.error("Error rendering graph:", error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   const renderGraph = (nodes) => {
//     const links = [];
//     nodes.forEach((node) => {
//       node.relationships.forEach((rel) => {
//         links.push({
//           source: node.id,
//           target: rel.target,
//         });
//       });
//     });

//     const data = { nodes, links };
//     console.log("Rendering graph with data:", data);

//     const width = 800;
//     const height = 600;

//     const svg = d3
//       .select(graphRef.current)
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height);

//     // Create a simulation with the graph data
//     const simulation = d3
//       .forceSimulation(data.nodes)
//       .force(
//         "link",
//         d3.forceLink(data.links).id((d) => d.id)
//       )
//       .force("charge", d3.forceManyBody())
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Create the links
//     const link = svg
//       .append("g")
//       .attr("class", "links")
//       .selectAll("line")
//       .data(data.links)
//       .enter()
//       .append("line")
//       .attr("stroke", "#999")
//       .attr("stroke-opacity", 0.6);

//     // Create the nodes
//     const node = svg
//       .append("g")
//       .attr("class", "nodes")
//       .selectAll("circle")
//       .data(data.nodes)
//       .enter()
//       .append("circle")
//       .attr("r", 5)
//       .attr("fill", "#ccc")
//       .call(
//         d3
//           .drag()
//           .on("start", dragstarted)
//           .on("drag", dragged)
//           .on("end", dragended)
//       );

//     // Add labels to nodes
//     node.append("title").text((d) => d.id);

//     // Update the positions of nodes and links on each simulation tick
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d) => d.source.x)
//         .attr("y1", (d) => d.source.y)
//         .attr("x2", (d) => d.target.x)
//         .attr("y2", (d) => d.target.y);

//       node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
//     });

//     // Drag functions
//     function dragstarted(event, d) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }
//   };

//   return <div ref={graphRef}></div>;
// };

// export default Neo4jGraph;
