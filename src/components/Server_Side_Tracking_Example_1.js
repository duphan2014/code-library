import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Server_Side_Tracking_Example_1 = ()=>{
    
	const [products, setProducts] = useState([]);

	useEffect(()=>{
      	//setProducts(jsonProducts);
	},[]);
    
  return (
    <html>
    <head>
        <title>Simple HTML Example</title>
    </head>
    <body>
        <h1>Server Side Tracking POC - example 1</h1>
        <h3>Links</h3>
        <p>
            <a href="https://www.bunnings.com.au" target="_blank">Visit www.bunnings.com.au</a>
        </p>
        <p>
            <a href="https://trade.bunnings.com.au" target="_blank">Visit trade.bunnings.com.au</a>
        </p>
        <p>
            <a href="https://workshop.bunnings.com.au" target="_blank">Visit workshop.bunnings.com.au</a>
        </p>
        <h3>Buttons</h3>
        <button onclick="alert('Sign in button clicked!')">Sign in</button>
        <button onclick="alert('Sign up button clicked!')">Sign up</button>
    </body>
    </html>
  );
}

export default Server_Side_Tracking_Example_1;