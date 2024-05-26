// src/components/Higher_order_function_example_2.js
// concepts:
// countBy(), map(), some(), filter(), reduce()
// `text text ${expression} text text`


import React, {useState, useEffect} from "react";
import {scripts} from "../data/scripts.js";
import CodeDisplay from "./CodeDisplay";

const Higher_order_function_example_2 = ()=>{
    // useEffect is called after every render
	useEffect(()=>{
        console.log("** Console log of Example 1\n", filter(scripts, script => script.living));
	},[]);
    
  return (
    <div>
      <h2>Higher_order_function_example_2</h2>
      <p> Check console for output</p>
      <div>
        <h3>Example 1</h3>
        <CodeDisplay codeString={Example1CodeString}/>
      </div>
    </div>
  );
}

const Example1CodeString = `
function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}

console.log("** Console log of Example 1\n", filter(scripts, script => script.living));
`
function filter(array, test){
    let passed = [];
    for(let element of array){
        if(test(element)){
            passed.push(element);
        }
    }
    return passed;
}



export default Higher_order_function_example_2;