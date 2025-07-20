import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TableList from "./components/TableList";
import ERDiagram from "./components/ERDiagram";
import "./index.css";

function App() {
  return (
    <div className="app-bg">
      <Header />
      <main>
        <div className="main-header-flex">
          <div className="main-header-title left">Entity Relationship Diagram</div>
          <div className="main-header-title right">Data Catalog</div>
        </div>
        <div className="main-content-flex">
          <div className="main-content-er">
            <ERDiagram />
          </div>
          <div className="main-content-table">
            <TableList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App; 