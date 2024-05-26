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
        <li>Placeholder 1</li>
        <div>
            <span>Footer</span>
        </div>
    </div>
  );
}

export default Home;