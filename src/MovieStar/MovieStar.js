import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const MovieStar = (props) => {
    // console.log(props);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    const { name, age, gender, country, salary, img } = props.star;
    return (
        <div className="card h-100 g-2 col-4 align-items-center border border-primary">
            <img src={img} className="card-img-top w-75 m-5" alt="..." />
            <div className="card-body">
                <h5 className="card-text">Name: {name}</h5>
                <h5 className="card-text">Age: {age}</h5>
                <h5 className="card-text">Gender: {gender}</h5>
                <h5 className="card-text">Country: {country}</h5>
                <h5 className="card-text">Salary: {salary}</h5>
            </div>
            <button className="mb-3" onClick={() => props.handleAddToCart(props.star)}>{cartIcon} Add to Cart</button>
        </div>
    );
};

export default MovieStar;