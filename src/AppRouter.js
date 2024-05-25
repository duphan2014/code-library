import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Example_count_by_1 from "./components/Example_count_by_1";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Example_count_by_1" element={<Example_count_by_1 />}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
