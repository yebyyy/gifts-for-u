import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        hobbies: '',
        interests: '',
        favoriteColor: '',
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to the backend for processing
        fetch('http://localhost:5000/create-blind-box', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Save the generated blind box data and navigate to the order summary page
                history.push({
                    pathname: '/order-summary',
                    state: { blindBox: data.blindBox, formData },
                });
            })
            .catch((error) => console.error('Error:', error));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Tell Us About Your Partner</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hobbies">
                        Hobbies
                    </label>
                    <input
                        type="text"
                        name="hobbies"
                        id="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interests">
                        Interests
                    </label>
                    <input
                        type="text"
                        name="interests"
                        id="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="favoriteColor">
                        Favorite Color
                    </label>
                    <input
                        type="text"
                        name="favoriteColor"
                        id="favoriteColor"
                        value={formData.favoriteColor}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Home;