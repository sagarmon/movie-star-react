import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import MovieStar from '../MovieStar/MovieStar';

const Container = () => {
    const [stars, setStars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./moviestars.json')
            .then(res => res.json())
            .then(data => setStars(data));
    }, [])

    const handleAddToCart = star => {
        const newCart = [...cart, star];
        setCart(newCart);
    }

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-9">
                    {/* <h2>Movie Stars: {stars.length}</h2> */}
                    <div className="row">
                        {
                            stars.map(star => <MovieStar
                                key={star.id}
                                star={star}
                                handleAddToCart={handleAddToCart}
                            >
                            </MovieStar>)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;