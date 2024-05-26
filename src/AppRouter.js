import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Higher_order_function_example_2 from "./components/Higher_order_function_example_2";
import Higher_order_function_example_3 from "./components/Higher_order_function_example_3";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Higher_order_function_example_2" element={<Higher_order_function_example_2/>}/>
        <Route path="/Higher_order_function_example_3" element={<Higher_order_function_example_3/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
