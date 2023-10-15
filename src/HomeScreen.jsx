import React from 'react';
import CustomBox from './CoustomBox'; // Correct the import path
import { arr, hexColors } from './ListOfCategories'; // Correct the import path and add destructuring for arr and hexColors

export default function HomeScreen() {
  return (
    <div className="container ">
      <div className="row ">
        {arr.map((item, index) => {
            return(
          <div className="col-md" key={index}>
            <CustomBox title={item} color={hexColors[Math.floor(Math.random() * 25)]} />
          </div>
            )
})}
      </div>
    </div>
  );
}
