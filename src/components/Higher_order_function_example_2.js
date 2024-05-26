// src/components/Higher_order_function_example_2.js
// concepts:
// countBy(), map(), some(), filter(), reduce()
// `text text ${expression} text text`


import React, {useState, useEffect} from "react";
import {scripts} from "../data/scripts.js";

const Higher_order_function_example_2 = ()=>{
	const [unicodeScripts, setScripts] = useState([]);

    // useEffect is called after every render
    
	useEffect(()=>{
      	//setScripts(unicodeScripts);
        //don't use console.log because useEffect acts like console.log already
        //console.log(filter(scripts, script => script.living));
        console.log('a');
	},[]);
    
  return (
    <div>
      <h2>Higher_order_function_example_2</h2>
      <p> Check console for output</p>
    </div>
  );
}

function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

//console.log(filter(scripts, script => script.living));

export default Higher_order_function_example_2;