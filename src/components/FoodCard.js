import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, darkColors} from '../global/styles';
import { useContext } from 'react';
import { ThemeContext } from '../global/themeContext';

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}){
    console.log("@@@FoodCard", [restaurantName, OnPressFoodCard])
    const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext
    const currentColors = isDarkMode ? darkColors : colors; // Determine current colors
    return(
        <TouchableOpacity onPress={OnPressFoodCard}>
            <View style = {{...styles.cardView, width:screenWidth, borderColor:currentColors.grey4,}}>
                <Image 
                    style = {{...styles.image, width:screenWidth}}
                    source = {images}
                />

            <View>
                <View>
                    <Text style = {[styles.restaurantName, {color:currentColors.grey1,}]}>{restaurantName}</Text>
                </View>
                <View style = {styles.detailsCard}>
                    <View style = {[styles.distance, {borderRightColor:currentColors.grey4,}]}>
                        <Icon 
                            name = "push-pin"
                            type= "material"
                            color={currentColors.grey2}
                            size={18}
                            iconStyle={{marginTop:3}}
                        />
                        <Text style={[styles.textIcon, {color:currentColors.grey3}]}>{farAway} km</Text>
                    </View>
                    <View style={styles.address}>
                        <Text style={[styles.addressText, {color:currentColors.grey2}]}>{businessAddress}</Text>
                    </View>
                </View>
            </View>
            </View>

            <View style={styles.review}>
                <Text style={styles.averageReview}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} review-uri</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5, 
        height:150
    },
    restaurantName:{
        fontSize:17,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:10
    },
    detailsCard:{
        flex:1,
        flexDirection:"row"
    },
    distance:{
        flex:4,
        flexDirection:'row',
        paddingHorizontal:5,
        borderRightWidth:1
    },
    textIcon:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
    },
    address:{
        flex:9,
        flexDirection:"row"
    },
    addressText:{
        fontSize:12,
        paddingTop:5,
        paddingHorizontal:10
    },
    review:{
        position:"absolute",
        top:0,
        right:10, 
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    averageReview:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
    numberOfReview:{
        color:"white",
        fontSize:13,
        marginRight:0,
        marginLeft:0
    }
})