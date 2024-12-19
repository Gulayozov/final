import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealById } from '../services/api';

const MealDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetchMealById(id).then(setMeal);
    }, [id]);

    if (!meal) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">{meal.strMeal}</h1>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="mb-3">Instructions</h4>
                    <p>{meal.strInstructions}</p>
                    <h4 className="mb-3">Ingredients</h4>
                    <ul className="list-group">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                            const ingredient = meal[`strIngredient${num}`];
                            const measure = meal[`strMeasure${num}`];
                            if (ingredient && ingredient.trim()) {
                                return (
                                    <li key={num} className="list-group-item">
                                        {ingredient} - {measure}
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;