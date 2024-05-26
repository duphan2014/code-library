import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Home = ()=>{
    
	const [products, setProducts] = useState([]);

	useEffect(()=>{
      	//setProducts(jsonProducts);
	},[]);
    
  return (
    <div>
      <h2>Table of content</h2>
        <li><Link to={`/Higher_order_function_example_2`}>Example: Higher_order_function_example_2</Link></li>
        <li><Link to={`/Higher_order_function_example_3`}>Example: Higher_order_function_example_3</Link></li>
    </div>
  );
}

export default Home;