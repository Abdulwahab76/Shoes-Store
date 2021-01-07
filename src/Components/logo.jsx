import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import AddtoItem from "./AddItem";
import useLocalStorage from "../hooks/uselocal";
import { CartContext } from "./../Route";

function Logo() {
    const setCart = React.useContext(CartContext).setCart;
    const cart = React.useContext(CartContext).cart;

    return (
        <div className="logo">
            <Link to="/">
                <h2>ShoesStore.pk</h2>
            </Link>
            <div className="cart-wrapper">
                <ShoppingCartIcon
                    onClick={() => {
                        setCart(true);
                        console.log(cart);
                    }}
                />
            </div>
        </div>
    );
}
export default Logo;
