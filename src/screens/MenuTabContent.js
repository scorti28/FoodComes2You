import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../global/themeContext';
import MenuCard from '../components/MenuCard';
import { colors, darkColors } from '../global/styles';

const MenuTabContent = ({ menuItems, navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentColors = isDarkMode ? darkColors : colors;

  return (
    <View style={{ flex: 1, backgroundColor: currentColors.background }}>
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
              isDarkMode={isDarkMode}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MenuTabContent;
