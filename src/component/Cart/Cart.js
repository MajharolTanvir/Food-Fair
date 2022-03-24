import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4 className='text-center my-4'>Order Added</h4>
            {cart.map(meal => <li key={meal.idMeal}>Name: {meal.strMeal} </li>)}
            <h6>Price:</h6>
            <h6>Final Price:</h6>
        </div>
    );
};

export default Cart;