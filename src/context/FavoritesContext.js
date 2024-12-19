import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (meal) => {
        if (!favorites.some((fav) => fav.idMeal === meal.idMeal)) {
            setFavorites((prevFavorites) => [...prevFavorites, meal]);
        }
    };

    const removeFromFavorites = (mealId) => {
        setFavorites(favorites.filter((meal) => meal.idMeal !== mealId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    return useContext(FavoritesContext);
};
