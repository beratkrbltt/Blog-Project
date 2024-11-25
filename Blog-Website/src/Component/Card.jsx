import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, title, description, link }) {
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} alt={title} className="card-image" />
                <div className="text-content">
                    <h3>{title}</h3>
                    {description && <p>{description}</p>}
                    <Link className="button" to={link}>Detaylar</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
