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

export default Example_count_by_1;