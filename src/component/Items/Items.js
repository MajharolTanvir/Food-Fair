import React from 'react';
import { Card } from 'react-bootstrap';

const Items = ({ product, addToCart }) => {
    const { strMeal, strMealThumb, strInstructions, strArea } = product;
    return (
        <div>
            <Card className='p-2 mb-2'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>Name: {strMeal}</Card.Title>
                    <h6>Area: {strArea}</h6>
                    <Card.Text>Instruction: {strInstructions.slice(0, 120)} </Card.Text>
                    <button onClick={() => addToCart(product)} className='w-100 border-0 text-white btn btn-info rounded-3 py-2'>Add To Cart</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Items;