import React from 'react';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: 'red', fontSize: '32px', textTransform: 'uppercase' };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <div className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((p) => (
            <Pizza key={p.name} pizzaObj={p} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return;
  return (
    <li className="pizza">
      <img src={pizzaObj?.photoName} alt={pizzaObj?.name} />
      <div>
        <h3>{pizzaObj?.name}</h3>
        <p>{pizzaObj?.ingredients}</p>
        <span>{pizzaObj?.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default App;
