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
        <h2 className="luxury-title" style={{marginTop: 32}}>Entity Relationship Diagram & Data Tables</h2>
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