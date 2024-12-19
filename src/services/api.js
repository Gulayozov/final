const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchMeals = async () => {
    try {
        const response = await fetch(`${BASE_URL}/search.php?s=`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
};

export const fetchMealById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error("Error fetching meal:", error);
        return null;
    }
};