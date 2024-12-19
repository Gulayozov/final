import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = await res.json();
            setMeals(data.meals || []);
        };
        fetchMeals();
    }, [category]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMeals = meals.filter((meal) => meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="container mt-5">
            <h1>Meals List</h1>
            <div className="d-flex mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search meals..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <select className="form-select ms-2" onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">All Categories</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Vegetarian">Vegetarian</option>
                </select>
            </div>
            <div className="row">
                {filteredMeals.map((meal) => (
                    <div className="col-md-3 mb-4" key={meal.idMeal}>
                        <div className="card">
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
