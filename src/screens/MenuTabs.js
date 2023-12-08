import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native';
import { menuData } from '../global/Data';

export function Route1({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={styles.view2}>
        <Text>Menu Tabs</Text>
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