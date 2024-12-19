import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchMeals = async () => {
            let url = '';

            if (category && category !== 'Random') {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            }
            else if (category === 'Random') {
                const randomMeals = [];
                for (let i = 0; i < 9; i++) {
                    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                    const data = await res.json();
                    if (data.meals) {
                        randomMeals.push(data.meals[0]);
                    }
                }
                setMeals(randomMeals);
                return;
            }
            else {
                url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
            }

            const res = await fetch(url);
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
            <h1 className="text-center mb-4">Meals List</h1>
            <div className="d-flex mb-3 justify-content-center">
                <input
                    type="text"
                    className="form-control w-50 me-2"
                    placeholder="Search meals..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <select className="form-select w-25" onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">All Categories</option>
                    <option value="Beef">Beef</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Random">Random</option>
                </select>
            </div>
            <div className="row">
                {filteredMeals.map((meal) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={meal.idMeal}>
                        <div className="card shadow-sm">
                            <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                            <div className="card-body">
                                <h5 className="card-title">{meal.strMeal}</h5>
                                <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary w-100">
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