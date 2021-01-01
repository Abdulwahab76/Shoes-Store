import React from "react";
import "../App.css";

function Card(props) {
    return (
        <div>
            <div className="main-boxes">
                <div className="main-cards">
                    <div className="main-box">
                        <div className="card-image">
                            <img src={props.imgLink} alt="" />
                        </div>
                        <div className="price">
                            <h3>{props.price}</h3>
                            <p>{props.itemName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
