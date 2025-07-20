import React, { useState } from "react";
import { tables } from "../mockData";
import "../index.css";

const TableList = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="table-list-container">
      <h1 className="luxury-title">Data Catalog</h1>
      <div className="table-list">
        {tables.map((table, idx) => (
          <div key={table.name} className="table-card">
            <div className="table-header" onClick={() => setExpanded(expanded === idx ? null : idx)}>
              <div>
                <span className="table-name">{table.name}</span>
                <span className="table-desc">{table.description}</span>
              </div>
              <span className="expand-icon">{expanded === idx ? "−" : "+"}</span>
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
                        <td>{col.name}</td>
                        <td>{col.type}</td>
                        <td>{col.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a className="script-link" href={table.scriptUrl} target="_blank" rel="noopener noreferrer">
                  View Transformation Script
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableList; 