import Shoes from "./../shoes.json";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Card from "./Card";
function Product(props) {
    console.log(Object.keys(Shoes));

    return (
        <div>
            <Link to="/">
                <div className="logo">
                    <h2>ShoesStore.pk</h2>
                </div>
            </Link>
            <div className="shoes">
                <h1>Nike Shoes</h1>

                <p>Fresh recommendation</p>
            </div>
            <div className="Product">
                {Object.keys(Shoes).map((keyName) => {
                    const shoe = Shoes[keyName];

                    return (
                        <Link to={`/product/${keyName}`} key={keyName}>
                            <div className="Cards">
                                <Card
                                    price={shoe.price}
                                    itemName={shoe.name}
                                    imgLink={shoe.img}
                                />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Product;
