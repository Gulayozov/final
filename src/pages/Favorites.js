import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <div className="favorites">
            <h1>Your Favorite Meals</h1>
            {favorites.length > 0 ? (
                <div className="meal-list">
                    {favorites.map((meal) => (
                        <div key={meal.idMeal} className="meal-card">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="meal-image"
                            />
                            <h3>{meal.strMeal}</h3>
                            <button className="btn btn-danger" onClick={() => removeFromFavorites(meal.idMeal)}>
                                Remove from Favorites
                            </button>
                            <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite meals added yet.</p>
            )}
        </div>
    );
};

export default Favorites;
