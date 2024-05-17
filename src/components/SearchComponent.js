import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Modal, TextInput, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { extractDataFromFirebase } from '../global/firebaseData';
import { restaurantMenuExtractor } from '../global/restaurantMenuExtract';
import { colors } from '../global/styles';

export default function SearchComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocussed, setTextInputFocussed] = useState(true);
    const textInput = useRef(null);
    const [filterData, setFilterData] = useState([]); 
    const [data, setData] = useState([]);
    const navigation = useNavigation();

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
        const restaurantData = await restaurantMenuExtractor(); // Fetch all restaurant data
        const filteredRestaurants = restaurantData.filter(restaurant =>
            restaurant.foodCategories.includes(category)

        );
        navigation.navigate("SearchResultScreen", { filteredRestaurants });
        setModalVisible(false);
    };

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.searchArea}>
                    <Icon
                        name="magnify"
                        type="material-community"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15 }}>Caută după tipul de mâncare</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal animationType='fade' transparent={false} visible={modalVisible}>
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"} duration={400}>
                                <Icon
                                    name="arrow-back"
                                    type='material'
                                    onPress={() => setModalVisible(false)}
                                    iconStyle={{ marginRight: 5 }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "90%" }}
                                placeholder="Search..."
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
                                    iconStyle={{ color: colors.grey3, marginRight: -10 }}
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
                                    <Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
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
        borderColor: "#86939e",
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
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
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
