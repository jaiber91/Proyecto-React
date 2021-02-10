import React from "react"
import { Link } from "react-router-dom"
import ImagesAstro from "../images/astronauts.svg"
import LogoConf from "../images/platziconf-logo.svg"
import "./style/Home.css"


function Home() {
    return (
        <div className="Home">
            <div className="Home_text">
                <img src={LogoConf} alt="logo conf" />
                <h3>PRINT YOUR BADGES</h3>
                <p>The easiest way to manage your <br /> conference</p>
                <Link to="/badges"  className="btn btn-primary">Start Now</Link>
            </div>
            <figure className="Home_astro">
                <img src={ImagesAstro} alt="astroPlatzi" />
            </figure>


        </div>

    )
}
export default Home