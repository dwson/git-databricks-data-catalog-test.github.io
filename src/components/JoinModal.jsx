import React from "react";
import "../index.css";

const JoinModal = ({ open, onClose, columnKey, joins }) => {
  if (!open) return null;
  const joinList = joins[columnKey] || [];

  return (
    <div className="join-modal-backdrop" onClick={onClose}>
      <div className="join-modal" onClick={e => e.stopPropagation()}>
        <button className="join-modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="join-modal-title">Joinable Columns</h2>
        <div className="join-modal-content">
          {joinList.length === 0 ? (
            <div className="join-modal-empty">No joinable columns found for this column.</div>
          ) : (
            <ul className="join-modal-list">
              {joinList.map((join, idx) => (
                <li key={idx} className="join-modal-item">
                  <div className="join-modal-tablecol">
                    <span className="join-modal-table">{join.table}</span>.<span className="join-modal-column">{join.column}</span>
                  </div>
                  <div className="join-modal-logic">{join.logic}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinModal; 