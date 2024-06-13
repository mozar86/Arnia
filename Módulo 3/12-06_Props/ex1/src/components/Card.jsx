import React from "react";
import './Card.css';

const Card = ({title, subtitle, content}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3>{title}</h3>
                <h5>{subtitle}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Card;