import { useEffect, useReducer, useState } from "react";
import React from "react";

let result;
const ApiTest = ({ login }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then(setData);
  });
  // const isFalse = () => {
  //   if (data.userId === 1) {
  //     return (result = "hhhhh");
  //   }
  // };

  if (data) {
    return (
      <div>
        <p>{data.userId}</p>
        <h1> {data.title}</h1>
        {JSON.stringify(data)}
      </div>
    );
  }
  return <div>NO DATA AVAILABLE</div>;
};

export default ApiTest;
