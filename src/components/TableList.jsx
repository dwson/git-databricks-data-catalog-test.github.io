import React, { useState } from "react";
import { tables } from "../mockData";
import { joins } from "../joins";
import JoinModal from "./JoinModal";
import "../index.css";

const ChevronIcon = ({ expanded }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.3s cubic-bezier(.4,2,.3,1)",
      display: "block"
    }}
    aria-hidden="true"
  >
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

const TableList = () => {
  const [expanded, setExpanded] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleExpand = idx => {
    setExpanded(expanded === idx ? null : idx);
  };

  const handleColumnClick = (table, col) => {
    setSelectedColumn(`${table}.${col}`);
    setModalOpen(true);
  };

  return (
    <div className="table-list-container">
      <h1 className="luxury-title">Data Catalog</h1>
      <div className="table-list">
        {tables.map((table, idx) => (
          <div
            key={table.name}
            className="table-card"
            tabIndex={0}
            aria-expanded={expanded === idx}
            aria-label={`Table ${table.name}`}
            onClick={() => handleExpand(idx)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") handleExpand(idx);
            }}
          >
            <div className="table-header">
              <div>
                <span className="table-name">{table.name}</span>
                <span className="table-desc">{table.description}</span>
              </div>
              <span className="expand-icon">
                <ChevronIcon expanded={expanded === idx} />
              </span>
            </div>
            {expanded === idx && (
              <div className="table-details">
                <table className="columns-table">
                  <thead>
                    <tr>
                      <th>Column</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.columns.map(col => (
                      <tr key={col.name}>
                        <td
                          className="clickable-column"
                          onClick={e => {
                            e.stopPropagation();
                            handleColumnClick(table.name, col.name);
                          }}
                          tabIndex={0}
                          onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.stopPropagation();
                              handleColumnClick(table.name, col.name);
                            }
                          }}
                        >
                          {col.name}
                        </td>
                        <td>{col.type}</td>
                        <td>{col.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  className="script-link"
                  href={table.scriptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Transformation Script
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <JoinModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        columnKey={selectedColumn}
        joins={joins}
      />
    </div>
  );
};

export default TableList; 