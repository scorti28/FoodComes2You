import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import MenuCard from '../components/MenuCard';

const MenuTabContent = ({ menuItems, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        style={{ backgroundColor: "white" }}
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <MenuCard 
              name={item.meal}
              image={item.image}
              price={item.price}
              details={item.details}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Add any styles needed here
});

export default MenuTabContent;
