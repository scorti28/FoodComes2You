import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../global/styles';
import { Icon } from 'react-native-elements';
import { specialData, menuData } from '../../global/Data';

export default function MenuScreen({navigation, restaurant, onPress}) {

  return (
    <View style={styles.container}>
      <View>
        {
            specialData && specialData.map((items) => 
                <View key={items.key} style={styles.view1}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.view2}>
                            <Icon 
                               name = "star-check"
                               type= "material-community"
                               color="gold"
                            />
                            <Text style={styles.text1}>{items.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
      </View>

      <View>
        {
            menuData && menuData.map((items) => 
                <View key={items.key} style={styles.view1}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.view2}>
                            <Text style={styles.text1}>{items.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
      </View>

    </View>
  )
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