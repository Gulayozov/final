// src/pages/MealDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            setMeal(data.meals[0]);
        };
        fetchMealDetails();
    }, [id]);

    if (!meal) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <h1>{meal.strMeal}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={meal.strMealThumb} className="img-fluid" alt={meal.strMeal} />
                </div>
                <div className="col-md-6">
                    <h3>Ingredients</h3>
                    <ul>
                        {Object.keys(meal)
                            .filter((key) => key.includes('strIngredient') && meal[key])
                            .map((key, index) => (
                                <li key={index}>{meal[key]}</li>
                            ))}
                    </ul>
                    <h3>Instructions</h3>
                    <p>{meal.strInstructions}</p>
                    <button className="btn btn-secondary">Save to Favorites</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;
