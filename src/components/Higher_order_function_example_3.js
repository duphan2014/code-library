// src/components/example_count_by_1.js
// concepts:
// countBy(), map(), some(), filter(), reduce()
// `text text ${expression} text text`


import React, {useState, useEffect} from "react";
import {scripts} from "../data/scripts.js";

const Higher_order_function_example_3 = ()=>{
	const [unicodeScripts, setScripts] = useState([]);

	useEffect(()=>{
      	setScripts(unicodeScripts);
	},[]);

  return (
    <div>
      <h2>Scripts</h2>
      <p> There are {scripts.length} scripts in Unicode library</p>
    </div>
  );
}

// return the script that the character code uses
function characterScript(code){
    for(let script of scripts){
        if(script.ranges.some(([from, to])=>{
            return code >= from && code < to;
        })){
            return script;
        }
    }
    return null;
}

//Find number of occurences of unique items (groups) in the array
function countBy(items, func){
    let counts =[];
    for (let item of items) {
        let name = func(item); //name will be false, false, true, true, true for each iteration
        let known = counts.find(c => c.name == name); //known 1st run is undefined because counts is empty
        if(!known){ //for 1st run when known is undefined
            counts.push({name, count: 1});
        }else{ //for subsequent run when known is {name, count: n}
            known.count++;
        }
    }
    return counts;
}
console.log("group name and count:", countBy([1, 2, 3, 4, 5], n => n > 2));
//output: [{name: false, count: 2},{name: true, count: 1}]


function textScripts(text){
    let scripts = countBy(text, char=>{
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name!="none");
    //e.g. scripts = [{han, count:6}, {latin, count: 10}]

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count})=>{
        return `${Math.round(count*100/total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

export default Higher_order_function_example_3;