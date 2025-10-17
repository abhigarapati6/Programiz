import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {SiJavascript,SiPython,SiMysql,SiMongodb}from "react-icons/si"
import { FaJava } from "react-icons/fa" 

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="banner">
                <h1>🚀 Learn Programming for Free!</h1>
                <p className="subtitle">Choose a language to get started</p>

                <div className="button-group">
                    <button className="btn" onClick={() => navigate("/Js")}><SiJavascript/>JavaScript</button>
                    <button className="btn" onClick={() => navigate("/Python")}><SiPython/>Python</button>
                    <button className="btn" onClick={() => navigate("/Java")}> <FaJava />Java</button>
                    <button className="btn" onClick={() => navigate("/Sql")}> <SiMysql/> SQL</button>
                    <button className="btn" onClick={() => navigate("/Mongo")}><SiMongodb/>MongoDB</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
