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
        <li><Link to={`/Example_count_by_1`}>Example: countBy function - example 1</Link></li>
    </div>
  );
}

export default Home;