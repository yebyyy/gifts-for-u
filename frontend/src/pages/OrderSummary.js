import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderSummary = () => {
    const location = useLocation();
    const { blindBox, formData } = location.state;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <p>Partner's Name: {formData.name}</p>
            <p>Age: {formData.age}</p>
            <p>Hobbies: {formData.hobbies}</p>
            <p>Interests: {formData.interests}</p>
            <p>Favorite Color: {formData.favoriteColor}</p>
            <p>Your blind box will contain items based on the provided preferences and some surprises!</p>
            <ul>
                {blindBox.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <Link to="/checkout" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Proceed to Checkout
            </Link>
        </div>
    );
};

export default OrderSummary;