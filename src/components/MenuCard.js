import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/styles'

export default function MenuCard() {
  return (
    <View style={styles.view1}>
      <Text>MenuCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    view1:{backgroundColor:"white",
    elevation:4,
    shadowOpacity:0.4,
    shadowColor:"black",
    margin:5,
    padding:10
},

view2: {flex:1,
flexDirection:"row",
padding:0,
justifyContent:"space-between"
},

view3 :{flex:6,
justifyContent:"space-between"
},

text1: {
fontSize:15,
color:colors.grey1,
fontWeight:"bold"
},

text2:{
fontSize:15,
color:colors.grey3,
marginRight:2
},

text3:{
fontSize:15,
color:colors.black,
},

image:{flex:1
}
})