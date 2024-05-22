import React, { createContext, useState } from 'react';

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [sortedRestaurants, setSortedRestaurants] = useState([]);

    const updateRestaurants = (restaurants) => {
        setSortedRestaurants(restaurants);
    };

    return (
        <RestaurantContext.Provider value={{ sortedRestaurants, updateRestaurants }}>
            {children}
        </RestaurantContext.Provider>
    );
};
