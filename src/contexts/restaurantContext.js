import React, { createContext, useState, useContext } from 'react';

const RestaurantContext = createContext();

export const useRestaurants = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
    const [restaurantData, setRestaurantData] = useState([]);

    return (
        <RestaurantContext.Provider value={{ restaurantData, setRestaurantData }}>
            {children}
        </RestaurantContext.Provider>
    );
};