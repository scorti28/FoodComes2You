import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, {useEffect, useState} from 'react';
import { restaurantsData } from '../global/Data';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';

export default function RestaurantHeader({navigation, id}) {

    const [liked, setLiked] = useState(false);
    const [counter, setCounter] = useState(-2);
    const [visible, setVisible] = useState(false); //controls the animation
    const index2=10;

    const likeHandler = () => {
        if(liked==false)
            setVisible(true);
        
        setLiked(!liked);
        setCounter(index2);
    }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={restaurantsData[id].images}
        imageStyle={styles.image}
      >

        <View style={styles.view1}>
            <View style={styles.view2}> 
                <Icon 
                    name="arrow-left"
                    type="material-community"
                    color={"#000000"}
                    size={25}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.view3}>
                <Icon 
                    name={liked && (index2 == counter) ? "favorite" : "favorite-border"}
                    type="material"
                    color= {"#48dba3"}
                    size={30}
                    onPress={likeHandler}
                />

            </View>

        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{height:150,
    },

    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },

view1: {flexDirection:"row",
        alignItems:"baseline",
       justifyContent:"space-between"
      },

view2:{margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
      },

view3:{marginTop:0,
       margin:10,
       width:40,
       height:40,
       backgroundColor:colors.cardbackground,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:20,
       },
       
view4:{ marginTop:0,
        alignItems:"center",
        justifyContent:"center" 
      },
})