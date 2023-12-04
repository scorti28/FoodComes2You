import HomeHeader from "../components/HomeHeader";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import {filterData, restaurantsData} from '../global/Data';
import FoodCard from "../components/FoodCard";
import Countdown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation}/>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator = {true}
            >
            <View style = {styles.tabScrolling}>
                <View style={styles.deliveryCofiguration}>
                    <TouchableOpacity onPress={() => setDelivery(true)}>
                        <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setDelivery(false) 
                                                      navigation.navigate("RestaurantMapScreen")}}>
                        <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>
                            <Text style={styles.deliveryText}>Pick-Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.filterView}>
                <View style={styles.lineComponent} >
                  <View style = {styles.mapIcon}>
                    <Icon 
                        type = "material-community"
                        name = "map-marker-multiple"
                        color = {colors.grey1}
                        size={26}
                    />

                    <Text style = {{marginLeft:5}}>19 Ioan Nistor</Text>
                    </View> 

                    <View style = {styles.nowIcon}>
                    <Icon 
                        type = "material-community"
                        name = "web-clock"
                        color = {colors.grey1}
                        size={26}
                    />

                    <Text style = {{marginLeft:5}}>Now</Text>
                    </View> 
                </View>
                <View>
                    <Icon 
                        type = "material-community"
                        name = "tune-variant"
                        color = {colors.grey1}
                        size={26}
                    />
                </View>
            </View>

            <View style = {styles.categoriesTextView}>
                <Text style = {styles.categoriesStyle}>Categories</Text>
            </View>

            <View>
                 <FlatList
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
                   data={filterData}
                   keyExtractor={(item) => item.id.toString()} 
                   extraData={indexCheck}
                   renderItem={({ item, index }) => (
                     <Pressable onPress={() => { setIndexCheck(item.id) }}>
                       <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                         <Image
                           style={styles.imageCardStyle}
                           source={item.image}
                         />
                         <View>
                           <Text style={indexCheck === item.id ? { ...styles.textCardSelectedStyle } : { ...styles.textCardNotSelectedStyle }}>{item.name}</Text>
                         </View>
                       </View>
                     </Pressable>
                   )}
  />
        </View>
            <View style = {styles.categoriesTextView}>
                <Text style = {styles.categoriesStyle}>Free Delivery Now</Text>
            </View>
        <View>
            <View style={styles.countDown}>
                    <Text style={styles.countDownText}>Options for free delivery will be updated in</Text>
                    <Countdown 
                        until = {1800}
                        size = {14}
                        digitStyle = {{backgroundColor:colors.buttons}}
                        digitTextStyle = {{color: colors.cardbackground}}
                        timeToShow = {['M','S']}
                        timeLabels = {{m:'Min', s:'Sec'}}
                    />
            </View>
          <FlatList
            style={styles.restaurantList}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()} 
            showsHorizontalScrollIndicator = {false}
            renderItem={({ item }) => (
              <View style = {{marginRight:5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images = {item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>

        <View style = {styles.categoriesTextView}>
                <Text style = {styles.categoriesStyle}>Available promotions</Text>
            </View>
        <View>
          <FlatList
            style={styles.restaurantList}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()} 
            showsHorizontalScrollIndicator = {false}
            renderItem={({ item }) => (
              <View style = {{marginRight:5}}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images = {item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReviews}
                />
              </View>
            )}
          />
        </View>

        <View style = {styles.categoriesTextView}>
                <Text style = {styles.categoriesStyle}>Restaurants near you</Text>
            </View>
        <View style = {styles.mapRenderer}>
                {
                    restaurantsData.map(item => (
                        <View key={item.id} style={styles.viewRestaurant}>
                            <FoodCard
                                screenWidth={SCREEN_WIDTH * 0.95}
                                images = {item.images}
                                restaurantName={item.restaurantName}
                                farAway={item.farAway}
                                businessAddress={item.businessAddress}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReviews}
                            />
                        </View>
                    ))
                }
        </View>
            </ScrollView>
            { delivery && //delivery is true => render data
            <View style = {styles.floatingButton}>
                <TouchableOpacity onPress={() => navigation.navigate("RestaurantMapScreen")}> 
                    <Icon 
                        name = "map-marker-outline"
                        type = "material-community"
                        size = {32}
                        color={colors.buttons}
                    />
                    <Text style = {styles.mapStyle}>Map</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    filterView:{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-evenly", 
        marginHorizontal:10, 
        marginVertical:10
    },
    nowIcon:{
        flexDirection:"row", 
        alignItems:"center", 
        marginLeft:20,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    mapIcon:{
        flexDirection:"row", 
        alignItems:"center", 
        paddingLeft:20
    },
    lineComponent:{
        flexDirection:"row", 
        backgroundColor:colors.grey5, 
        borderRadius:15, 
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:10
    },
    deliveryCofiguration:{
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: "space-evenly"
    },
    categoriesStyle:{
        color:colors.grey1,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:20
    },
    categoriesTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    }, 
    imageCardStyle:{
        height:60,
        width:60,
        borderRadius:30
    },
    textCardSelectedStyle:{
        fontWeight:"bold",
        color: colors.cardbackground
    },
    textCardNotSelectedStyle:{
        fontWeight:"bold",
        color: colors.grey2
    },
    restaurantList:{
        marginTop:10,
        marginBottom:10
    },
    mapRenderer:{
        width:SCREEN_WIDTH,
        paddingTop: 10
    },
    viewRestaurant:{
        paddingBottom:20
    },
    tabScrolling:{
        backgroundColor: colors.cardbackground,
        paddingBottom:5
    },
    countDown:{
        flexDirection:"row",
        alignItems:"center"
    },
    countDownText:{
        marginLeft:15,
        fontSize:16,
        marginTop:-10,
        marginRight:5
    },
    floatingButton:{
        position:"absolute",
        bottom:10,
        right:15,
        backgroundColor:"white",
        elevation:10, 
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center"
    },
    mapStyle:{
        color:colors.grey2
    }

});
