import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import HomePage from "./Containers/HomePage";
import Ptrp from "./Containers/Ptrp";
import Slp from "./Containers/Slp";
import Escd from "./Containers/Esc-daily";
import Esc from "./Containers/Esc";
import Escm from "./Containers/Esc-monthly";
import Cancelrefund from "./Containers/cancelrefund";
import GenerateReciept from "./Containers/GenerateReciept";

function App() {
 
  return (
 
     
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/planets-tax-refund-programme"  element={<Ptrp/>} />
        <Route path="/share-loyalty-programme"  element={<Slp/>} />
        <Route path="/emaar-sales-capture-programme"  element={<Esc/>} />
        <Route path="/daily-emaar-sales"  element={<Escd/>} />
        <Route path="/monthly-emaar-sales"  element={<Escm/>} />
        <Route path="/cancel-refund-request"  element={<Cancelrefund/>} />
        <Route path="/generatedreciept"  element={<GenerateReciept/>} />
      </Routes>
  
  );
}

export default App;
