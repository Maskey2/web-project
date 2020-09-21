import React from 'react'
import { Link } from 'react-router-dom';
import './../App.css'
import Dashboard from './Dashboard'
import Particle from './Particle';

export default function Home() {
  return (
    <div className="home">
      <Particle />
      <Link to="/about" className="top">[Skip]</Link>
      <div id="knock"
        className="animate__animated animate__rubberBand  "
        style={{
          border: "1px solid white",
          cursor: "pointer",
          padding: "20px", fontSize: "40px"
        }}
        onClick={() => {
          document.getElementById("knock").style.display = "none";
          document.getElementById("whos").style.display = "block";
        }}
      >Knock Knock
                </div>
      <div id="whos"
        className="animate__animated animate__swing  "
        style={{
          border: "1px solid white",
          cursor: "pointer",
          padding: "20px", fontSize: "50px", display: "none"
        }}
        onClick={() => {
          document.getElementById("whos").style.display = "none";
          document.getElementById("Nishma").style.display = "block";
        }}
      >Who's there?
                </div>
      <div id="Nishma"
        className="animate__animated animate__flip "
        style={{
          border: "2px solid white",
          cursor: "pointer",
          padding: "20px", fontSize: "50px", display: "none"
        }}
        onClick={() => {
          document.getElementById("Nishma").style.display = "none";
          document.getElementById("Nishmawho").style.display = "block";
        }}
      >Nishma
                </div>
      <div id="Nishmawho"
        className="animate__animated animate__jackInTheBox "
        style={{
          border: "1px solid white",
          cursor: "pointer",
          padding: "20px", fontSize: "50px", display: "none"
        }}
        onClick={() => {
          document.getElementById("Nishmawho").style.display = "none";
          document.getElementById("findout").style.display = "block";
        }}
      >Nishma who?
                </div>
      <div id="findout"
        className="animate__animated animate__slideInDown "
        style={{
          border: "1px solid white",
          cursor: "pointer",
          padding: "20px", fontSize: "50px", display: "none"
        }}
      ><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Find Out</Link>
      </div>
    </div>
  )
}
