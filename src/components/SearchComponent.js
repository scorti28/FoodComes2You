import React, { useState, useRef, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { extractDataFromFirebase } from '../global/firebaseData';
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { colors, darkColors } from '../global/styles';
import { ThemeContext } from '../global/themeContext';

export default function SearchComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocussed, setTextInputFocussed] = useState(true);
    const textInput = useRef(null);
    const [filterData, setFilterData] = useState([]); 
    const [data, setData] = useState([]);
    const navigation = useNavigation();
    const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext
    const currentColors = isDarkMode ? darkColors : colors; // Determine current colors

    useEffect(() => {
        const fetchData = async () => {
            const data = await extractDataFromFirebase();
            setFilterData(data);
            setData(data);  
        };
        fetchData();
    }, []);

    const contains = ({ name }, query) => name.toLowerCase().includes(query.toLowerCase());

    const handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filterData.filter(item => contains(item, formattedQuery));
        setData(filteredData);
    };

    const handleSelectCategory = async (category) => {
        const restaurantData = await restaurantMenuExtractor();
        const filteredRestaurants = restaurantData.filter(restaurant =>
            restaurant.foodCategories.includes(category)
        );
        navigation.navigate("SearchResultScreen", { filteredRestaurants, foodType: category });
        setModalVisible(false);
    };
    

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.searchArea, {
                    backgroundColor: currentColors.grey5, 
                    borderColor: currentColors.grey4,
                    }]}
                >
                    <Icon
                        name="magnify"
                        type="material-community"
                        iconStyle={{ marginLeft: 5, color: isDarkMode ? '#FFFFFF' : '#000000' }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15, color: isDarkMode ? '#FFFFFF' : '#000000' }}>Caută după tipul de mâncare</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal animationType='fade' transparent={false} visible={modalVisible}>
                <View style={[styles.modal, { backgroundColor: currentColors.pageBackground }]}>
                    <View style={styles.view1}>
                        <View style={[styles.textInput, { borderColor: currentColors.grey1 }]}>
                            <Animatable.View animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"} duration={400}>
                                <Icon
                                    name="arrow-back"
                                    type='material'
                                    onPress={() => setModalVisible(false)}
                                    iconStyle={{ marginRight: 5, color: currentColors.grey3 }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "90%", color: currentColors.grey1 }}
                                placeholder="Search..."
                                placeholderTextColor={currentColors.grey2}
                                autoFocus={true}
                                ref={textInput}
                                onFocus={() => setTextInputFocussed(true)}
                                onBlur={() => setTextInputFocussed(false)}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View animation={textInputFocussed ? "fadeInLeft" : ""} duration={400}>
                                <Icon
                                    name="window-close"
                                    type="material-community"
                                    iconStyle={{ color: currentColors.grey3, marginRight: -10 }}
                                    onPress={() => {
                                        textInput.current.clear();
                                        handleSearch('');  
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>

                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelectCategory(item.name)}>
                                <View style={styles.view2}>
                                    <Text style={{ color: currentColors.grey2, fontSize: 15 }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    searchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    modal: {
        flex: 1
    },
    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center"
    }
});
