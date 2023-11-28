import HomeHeader from "../components/HomeHeader";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import {filterData, restaurantsData} from '../global/Data';
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator = {true}
            >
            <View>
                <View style={styles.deliveryCofiguration}>
                    <TouchableOpacity onPress={() => setDelivery(true)}>
                        <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDelivery(false)}>
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
            </ScrollView>
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
    }
});
