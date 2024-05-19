import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../global/styles';
import { restaurantMenuExtractor } from '../../global/restaurantMenuExtract';
import { useEffect, useState } from 'react';

export default function MenuScreen({navigation, restaurant, onPress}) {

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
      const fetchDataAndLocation = async () => {
        const data = await restaurantMenuExtractor();
        setRestaurantData(data);
      }
      fetchDataAndLocation();
    }, []);

  return (
    <View style={styles.container}>
      {restaurantData.map((item) => (
        <View key={item.key} style={styles.view1}>
          <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.view2}>
              <Text style={styles.text1}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
      view1:{ paddingHorizontal:10, },
    
      view2:{flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,
            padding:10,
            borderBottomColor:colors.grey5
           },
        
        text1:{
            color:colors.grey3,
            fontSize:18,
            fontWeight:"bold"
        }

})