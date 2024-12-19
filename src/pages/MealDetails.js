import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const MealDetails = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMeal = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setMeal(data.meals[0]);
        };

        fetchMeal();
    }, [id]);

    const isFavorite = meal && favorites.some((fav) => fav.idMeal === meal.idMeal);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFromFavorites(meal.idMeal);
        } else {
            addToFavorites(meal);
        }
    };

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="meal-details">
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
            <button
                className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}
                onClick={handleFavoriteClick}
            >
                {isFavorite ? 'Remove from Favorites' : 'Save to Favorites'}
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
                Back to Meals
            </button>
        </div>
    );
};

export default MealDetails;
