import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Items from '../Items/Items';
import './Meal.css'

const Meals = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="row m-0">
                <div className="col-lg-10">
                    <div className="row row-cols-3">
                        {
                            products.map(product => <Items product={product} addToCart={addToCart} key={product.idMeal} />)
                        }
                    </div>
                </div>
                <div className="col-lg-2 bg-info order-cart">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Meals;