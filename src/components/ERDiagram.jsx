import React, { useMemo } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import { tables } from "../mockData";
import { joins } from "../joins";
import "react-flow-renderer/dist/style.css";
import "../index.css";

const nodeColor = "#111";
const nodeBorder = "#0072ce";
const nodeText = "#fff";
const edgeColor = "#0072ce";

function getNodesAndEdges() {
  // Map table names to positions for a simple layout
  const nodeCount = tables.length;
  const radius = 200;
  const centerX = 350;
  const centerY = 220;
  const nodes = tables.map((table, i) => {
    const angle = (2 * Math.PI * i) / nodeCount;
    return {
      id: table.name,
      data: { label: table.name },
      position: {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      },
      style: {
        background: nodeColor,
        color: nodeText,
        border: `2.5px solid ${nodeBorder}`,
        borderRadius: 16,
        fontWeight: 700,
        fontSize: 18,
        minWidth: 120,
        minHeight: 40,
        boxShadow: "0 2px 12px #000a",
        textAlign: "center",
        padding: 8,
      },
    };
  });

  // Edges: for each join, create an edge from this table to the join.table
  const edges = [];
  Object.entries(joins).forEach(([colKey, joinList]) => {
    const [fromTable, fromCol] = colKey.split(".");
    joinList.forEach(join => {
      edges.push({
        id: `${fromTable}.${fromCol}->${join.table}.${join.column}`,
        source: fromTable,
        target: join.table,
        label: `${fromCol} = ${join.column}`,
        animated: true,
        style: { stroke: edgeColor, strokeWidth: 2 },
        labelStyle: { fill: edgeColor, fontWeight: 600, fontSize: 13 },
        markerEnd: {
          type: "arrowclosed",
          color: edgeColor,
        },
      });
    });
  });

  return { nodes, edges };
}

const ERDiagram = () => {
  const { nodes, edges } = useMemo(getNodesAndEdges, []);

  return (
    <div style={{ width: "100%", height: 420, background: "#000", borderRadius: 18, marginBottom: 32, boxShadow: "0 2px 24px #000a" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        style={{ background: "#000" }}
        defaultZoom={1.1}
        panOnScroll
        zoomOnScroll
        zoomOnPinch
        panOnDrag
      >
        <MiniMap nodeColor={nodeBorder} nodeStrokeColor={nodeBorder} maskColor="#000c" style={{ background: "#111" }} />
        <Controls style={{ background: "#111", color: nodeText }} />
        <Background color="#222" gap={24} />
      </ReactFlow>
    </div>
  );
};

export default ERDiagram; 