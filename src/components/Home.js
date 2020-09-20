import React from 'react'
import { Link } from 'react-router-dom';
import './../App.css'
import Dashboard from './Dashboard'

export default function Home() {
    return (
        <div className="home">
            <Link to="/dashboard" className="top">[Skip]</Link>
            <div id="knock"
              className="animate__animated animate__lightSpeedInLeft  "
              style={{
                border: "1px solid white",
                cursor: "pointer",
                padding: "20px", fontSize:"40px"
              }}
              onClick={() => {
                document.getElementById("knock").style.display = "none";
                document.getElementById("whos").style.display = "block";
              }}
            >Knock Knock
                </div>
                <div id="whos"
              className="animate__animated animate__lightSpeedInLeft  "
              style={{
                border: "1px solid white",
                cursor: "pointer",
                padding: "20px", fontSize:"40px", display:"none"
              }}
              onClick={() => {
                document.getElementById("whos").style.display = "none";
                document.getElementById("Nishma").style.display = "block";
              }}
            >Who's there?
                </div>
                <div id="Nishma"
              className="animate__animated animate__lightSpeedInLeft  "
              style={{
                border: "1px solid white",
                cursor: "pointer",
                padding: "20px", fontSize:"40px", display:"none"
              }}
              onClick={() => {
                document.getElementById("Nishma").style.display = "none";
                document.getElementById("Nishmawho").style.display = "block";
              }}
            >Nishma
                </div>
                <div id="Nishmawho"
              className="animate__animated animate__lightSpeedInLeft  "
              style={{
                border: "1px solid white",
                cursor: "pointer",
                padding: "20px", fontSize:"40px", display:"none"
              }}
              onClick={() => {
                document.getElementById("Nishmawho").style.display = "none";
                document.getElementById("findout").style.display = "block";
              }}
            >Nishma who?
                </div>
                <div id="findout"
              className="animate__animated animate__lightSpeedInLeft  "
              style={{
                border: "1px solid white",
                cursor: "pointer",
                padding: "20px", fontSize:"40px", display:"none"
              }}
            ><Link to="/dashboard">Find Out</Link>
                </div>
        </div>
    )
}
