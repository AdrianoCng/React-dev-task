import React from "react";

import { ProgressBar } from "react-bootstrap"

const Card = ({ data }) => {
    const { image, affection_level, name, short_legs, description } = data;

    return (
        <div className="card bg-light">
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-fluid" src={image.url} alt={name}></img>
                </div>
                <div className="col-lg-8">
                    <div className="card-body">
                        <h2 className="card-title fst-italic mb-3">{name}</h2>
                        <h6>Description:</h6>
                        <p className="card-text">{description}</p>
                        <h6 className="card-text">Short legs? {short_legs === 0 ? <i className="fas fa-times-circle text-danger ms-3"></i> : <i className="fas fa-check-circle text-success ms-3"></i>}</h6>
                        <p className="mb-0">Affection level:</p>
                        <ProgressBar min="0" max="5" now={affection_level} variant="secondary" animated />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;