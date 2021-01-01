import React from "react";
import { Link } from "react-router-dom";
import Shoes from "./image.png";
import "../App.css";

function Home() {
    return (
        <div className="main-screen">
            <div className="logo">
                <h2>ShoesStore.pk</h2>
            </div>
            <div className="main-product">
                <div className="product-content">
                    <h1>
                        Are you <u>Looking</u> a <br /> Perfect Shoes for you{" "}
                        <br />
                    </h1>
                    <p>We are here for Quality Shoes</p>
                    <Link to="/product">
                        <button>Explore Proudct</button>
                    </Link>
                </div>
                <div className="product-image">
                    <img className="animated" src={Shoes} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Home;
