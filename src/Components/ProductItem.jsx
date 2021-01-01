import React from "react";
import { useParams, Link } from "react-router-dom";
import Shoes from "./../shoes.json";
import "../product.css";
function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];
    console.log(id);

    if (!shoe) return <h2>Product Not Found!</h2>;
    let feedback = () => {
        alert("Thank you for your Feedback!");
    };

    return (
        <div className="main-store">
            <div className="logo">
                <Link to="/">
                    <h2>ShoesStore.pk</h2>
                </Link>
            </div>

            <div className="main-product-item">
                <div className="link">
                    <img src={shoe.img} alt="shoe" />
                </div>
                <div className="product-overview">
                    <span>#SHOES</span>
                    <br />
                    <br />
                    <h2>{shoe.name}</h2>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <br />
                        Delectus dolore tempore deleniti repellat possimus{" "}
                        <br />
                        beatae nam aliquid quibusdam, vitae laudantium.
                    </p>
                    <hr />
                    <div className="feedback">
                        <p>FEEDBACK</p>
                        <button onClick={feedback}>Excelent</button>
                        <button onClick={feedback}>Bad</button>
                        <button onClick={feedback}>Good</button>
                    </div>
                    <hr />
                    <div className="price-btn">
                        <h4>{shoe.price}</h4>
                        <button>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
