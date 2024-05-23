import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import MenuCard from '../components/MenuCard';

const MenuTabContent = ({ menuItems, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item })}>
            <MenuCard
              name={item.name}
              price={item.Pret}
              details={item.Detalii}
              quantity={item.Gramaj}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MenuTabContent;
