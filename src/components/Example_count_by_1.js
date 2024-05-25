// src/components/example_count_by_1.js
import React, {useState, useEffect} from "react";
import {scripts} from "../data/scripts.js";

const Example_count_by_1 = ()=>{
	const [unicodeScripts, setScripts] = useState([]);

	useEffect(()=>{
      	setScripts(unicodeScripts);
        console.log("group name and count:", countBy([1, 2, 3, 4, 5], n => n > 2));
	},[]);

  return (
    <div>
      <h2>Scripts</h2>
      <p> There are {scripts.length} scripts in Unicode library</p>
    </div>
  );
}

function countBy(items, groupName){
    let counts =[];
    for (let item of items) {
        let a = groupName(item);
        let known = counts.find(c => c.a == a);
        if(!known){
            counts.push({a, count: 1});
        }else{
            known.count++;
        }
    }
    return counts;
}



export default Example_count_by_1;