import React from "react";

const Feedback = () => {
    let feedback = () => {
        alert("Thank you for your Feedback!");
    };
    return (
        <div className="feedback">
            <p>FEEDBACK</p>
            <button onClick={feedback}>Excelent</button>
            <button onClick={feedback}>Bad</button>
            <button onClick={feedback}>Good</button>
        </div>
    );
};
export default Feedback;
