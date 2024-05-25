// src/components/example_count_by_1.js
import React, {useState, useEffect} from "react";
import {scripts} from "../data/scripts.js";

const Example_count_by_1 = ()=>{
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

//Find number of occurences of unique items (groups) in the array
function countBy(items, groupName){
    let counts =[];
    for (let item of items) {
        let name = groupName(item); //name will be false, false, true, true, true for each iteration
        let known = counts.find(c => c.name == name); //known 1st run is undefined because counts is empty
        if(!known){ //for 1st run when known is undefined
            counts.push({name, count: 1});
        }else{ //for subsequent run when known is {name, count: n}
            known.count++;
        }
    }
    return counts;
}

function countGroup(items, func){
    let counts = [];
    for(let i of items){
        let groupName = func(i);
        let known = counts.find(c => c.groupName == groupName);
        if(!known){
            counts.push({groupName, count: 1});
        }else{
            known.count++;
        }
    }
    return counts;
}

console.log("group name and count:", countBy([1, 2, 3, 4, 5], n => n > 2));

export default Example_count_by_1;