import data from "../data2.json";
import { useState } from 'react';
export default function MyProjects() {
    const [index, setIndex] = useState(0);
 
   function handleClick() {
    if (index < data.Aspirations.length-1)
    {
       setIndex(index + 1);
    }
    else
    {
       setIndex(0);
    }
   }
 
   let aspirations = data.Aspirations;
   let aspiration = aspirations[index];
 
   return (
     <div>
        <h1>I Aspire to</h1>
       <button onClick={handleClick}>  Next </button>
       <h2>{aspiration.action} in {aspiration.when}</h2>
        <img src={aspiration.photoUrl} alt={aspiration.alt} />
     </div>
   );
}