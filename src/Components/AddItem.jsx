import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shoes from "./../shoes.json";
import useLocalStorage from "../hooks/uselocal";
import { CartContext } from "./../Route";
import "../product.css";

function AddToItem() {
    const setDisplay = React.useContext(CartContext).setCart;
    const display = React.useContext(CartContext).cart;
    const [addItem, setAddItem] = useLocalStorage("addItem", []);
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();

    const shoe = Shoes[id];

    // let data = {
    //     shoeName: shoe.name,
    //     shoePrice: shoe.price,
    //     shoeQuantity: quantity,
    // };

    const Close = () => {
        if (display === true) {
            setDisplay(false);
        }
    };
    return (
        <div>
            {display ? (
                <div id="nav-overlay">
                    <div id="close" className="close-btn">
                        <button onClick={Close} className="btn">
                            x
                        </button>

                        <div>
                            <h1>Add to Cart</h1>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                    {addItem.map((x, i) => {
                                        return (
                                            <tr id={x.shoeName} key={i}>
                                                <th>
                                                    <button
                                                        onClick={() => {
                                                            const filteredArray = addItem.filter(
                                                                (value) =>
                                                                    value.shoeName !==
                                                                    x.shoeName
                                                            );
                                                            setAddItem(
                                                                filteredArray
                                                            );
                                                        }}
                                                    >
                                                        x
                                                    </button>
                                                </th>
                                                <th>
                                                    <p>{x.shoeName}</p>
                                                </th>
                                                <th>
                                                    <p>{x.shoePrice}</p>
                                                </th>
                                                <th>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={x.shoeQuantity}
                                                        onChange={(e) => {
                                                            setQuantity(
                                                                (x.shoeQuantity =
                                                                    e.target.value)
                                                            );
                                                            setAddItem([
                                                                ...addItem,
                                                            ]);
                                                        }}
                                                    />
                                                </th>
                                            </tr>
                                        );
                                    })}

                                    <tr></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
export default AddToItem;
