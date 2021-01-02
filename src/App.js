import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import StylePhoto from "./img/design2.png";
import Test from "./Test";
import ApiTest from "./ApiTest";
import { Home, About, Contact, Event } from "./T-Rout";

const Header = (props) => {
  return <h1>Welcoem to {props.name} Resturnat</h1>;
};

const dishes = ["Fish and chips", "french fries", "salad", "toast"];
const dishObject = dishes.map((dish, i) => ({ id: i, title: dish }));

const Main = (props) => {
  return (
    <div>
      {/* ul data from array */}
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      {/* ends */}
      <ul>
        <li>Beans</li>
        <li>Salad</li>
        <li>French fries</li>
        <li>Pepsi</li>
      </ul>
    </div>
  );
};

const Footer = (props) => {
  return <p>Please visit next {props.year} for discount</p>;
};

const Menu = () => {
  return (
    <ul>
      <li>Contact</li>
      <li>Project</li>
      <li> About</li>
      <li> Reach out</li>
    </ul>
  );
};

const Photo = () => {
  return <img src={StylePhoto} alt={"hh"} />;
};

const App = () => {
  return (
    <div>
      <Header name={"Ahmad"} />
      <Main dishes={dishObject} />
      <Footer year={new Date().getFullYear()} />
      <Menu />
      <Photo />
      <Test />
      <ApiTest login="yusuf" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
