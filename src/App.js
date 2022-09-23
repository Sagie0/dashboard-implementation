import Navbar from "./Navbar";
import "./App.css";
import Reports from "./Reports";
import { useEffect, useState } from "react";
import axios from "axios";
import data from "./data/data.json";

console.log(data);

const App = () => {
  const {employees, trends} = data

  
  return (
    <div className="app">
      <Navbar />
      <Reports employees={employees} trends={trends} />
    </div>
  );
};

export default App;
