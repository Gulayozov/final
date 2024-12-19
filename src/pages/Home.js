import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals().then(setMeals);
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Meal List</h1>
            <div className="row">
                {meals.map(meal => (
                    <div key={meal.idMeal} className="col-md-4 mb-3">
                        <div className="card h-100">
                            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                            <div className="card-body">
                                <h5 className="card-title">{meal.strMeal}</h5>
                                <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
