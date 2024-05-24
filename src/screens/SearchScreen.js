import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, Dimensions, FlatList } from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { colors, darkColors } from '../global/styles';
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { extractDataFromFirebase } from '../global/firebaseData';
import { ThemeContext } from '../global/themeContext';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MySearchScreen({navigation}) {
    const [filterData, setFilterData] = useState([]);
    const { isDarkMode } = useContext(ThemeContext); 
    const currentColors = isDarkMode ? darkColors : colors; 
    useEffect(() => {
        const fetchDataAndLocation = async () => {
          const data = await extractDataFromFirebase();
          setFilterData(data);
        };
        fetchDataAndLocation();
      }, []);

    const handlePress = async (foodType) => {
        const restaurantData = await restaurantMenuExtractor(); 
        const filteredRestaurants = restaurantData.filter(restaurant => 
            restaurant.foodCategories.includes(foodType)
        );
        navigation.navigate("SearchResultScreen", { filteredRestaurants, foodType });
    };

    return (
        <View style={{ flex: 1, backgroundColor: currentColors.pageBackground }}>
            <SearchComponent />
            <FlatList 
                data={filterData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => handlePress(item.name)}>
                        <View style={styles.imageView}>
                            <ImageBackground
                                style={styles.imageBackground}
                                source={{ uri: item.image }}
                            >
                                <View style={[styles.textView, {backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(52, 52, 52, 0.3)'}]}>
                                    <Text style={{ color: isDarkMode ? '#FFFFFF' : '#FFFFFF' }}>{item.name}</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={
                    <Text style={[styles.listHeader, {color: currentColors.grey2, marginTop: 20}]}>Categorii de mâncare</Text> 
                }
                ListFooterComponent={<Footer />}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const Footer = () => {
    return(
        <View style={{marginTop:20, marginBottom:30}}>
        </View>
    )
}

const styles = StyleSheet.create({
    imageView:{
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width: (SCREEN_WIDTH - 3 * SCREEN_WIDTH * 0.035) / 2, 
        height: SCREEN_WIDTH * 0.4475, 
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035, 
    },
    imageBackground:{
        flex: 0,
        borderRadius:10,
        overflow: 'hidden', 
    },
    listHeader:{
        fontSize:16,
        paddingBottom:10,
        marginLeft:12,
        fontWeight: 'bold'
    },
    textView:{
        height: SCREEN_WIDTH * 0.4475,
        width: (SCREEN_WIDTH - 3 * SCREEN_WIDTH * 0.035) / 2, 
        alignItems:"center",
        justifyContent:"center",
    }
});
