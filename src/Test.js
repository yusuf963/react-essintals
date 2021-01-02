import React, { useState, useEffect, useReducer } from "react";

const SecretComponent = () => {
  return <h1>Here is a secret component appears</h1>;
};
const RegularComponent = () => {
  return <h1>Here is a Regular component appears</h1>;
};

// destructuring arrays
const array = ["apple", "banana", "wheat"];
const [, second] = array;
console.log(second);

const Test = () => {
  let [emotion, setEmotion] = useState("");
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Its ${emotion} around here`);
  }, [emotion]);
  useEffect(() => {
    console.log(`its number ${count} here`);
  }, [count]);

  const [clicked, toggle] = useReducer((clicked) => !clicked, false);

  // if (count < 9) {
  //   emotion = "";
  // } else if (count === 9) {
  //   emotion = "Hangury";
  // } else {
  //   emotion = "Happy";
  // }

  return (
    <>
      <h1>Testing {emotion} UseState functionality</h1>
      <button onClick={() => setEmotion("Sad")}>Click me if you are Sad</button>
      <button onClick={() => setEmotion("Happy")}>
        Click me if uyou are Happy
      </button>
      <button onClick={() => setEmotion("Hangury")}>
        Click me if you are Hungry
      </button>
      <h1>Testing count State</h1>
      <h1>{emotion}</h1>

      <h3>{count}</h3>
      <button onClick={() => setCount(count++)}>Increas Counting</button>
      <button onClick={() => setCount(0)}> Reset Count to zero</button>
      <button onClick={() => setCount(count--)}>Decreas Counting</button>
      <input
        type="checkbox"
        // value={checked}
        onClick={toggle}
      />
      <p>{clicked ? "checked" : "not Checked"}</p>
    </>
  );
};

export default Test;
