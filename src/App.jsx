import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TableList from "./components/TableList";
import "./index.css";

function App() {
  return (
    <div className="app-bg">
      <Header />
      <main>
        <TableList />
      </main>
      <Footer />
    </div>
  );
}

export default App; 