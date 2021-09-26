// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cart = (props) => {
    const { cart } = props || {};
    let total = 0;
    for (const star of cart) {
        total += star.salary;
    }

    console.log(cart);

    return (
        <div>
            {/* <p>{cart.length}</p> */}
            <h3>Actors Selected: {props.cart.length}</h3>
            <h3>Total Cost: ${total}</h3>
            <br />
            <h5>You have added these actors:</h5>
            <ul>
                {
                    cart.map(star => <li>{star.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;