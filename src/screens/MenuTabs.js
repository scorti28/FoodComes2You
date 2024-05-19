import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import MenuCard from '../cards/MenuCard';

export function Route1({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={styles.view2}>
        <FlatList 
          style={{backgroundColor:"white"}}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) =>(
              <TouchableOpacity onPress={() => navigation.navigate("PreferenceScreen",{index})}>
                <MenuCard 
                  productName={item.meal}
                  image={item.image}
                  price={item.price}
                  productDetails={item.details}
                />
              </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export const Route2 = () => (<View style = {styles.scene}/>)
export const Route3 = () => (<View style = {styles.scene}/>)
export const Route4 = () => (<View style = {styles.scene}/>)

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#3a8bb7'
      },
    
    view2:{
        marginTop:5,
        paddingBottom:20
        },
    
    scene2: { 
        backgroundColor: '#3a8bb7' 
    }  
})