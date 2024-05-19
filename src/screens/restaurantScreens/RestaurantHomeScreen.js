import { StyleSheet, Text, View , Dimensions, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import RestaurantHeader from '../../components/RestaurantHeader';
import { colors, fonts } from '../../global/styles';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
import MenuScreen from './MenuScreen';
import InfoScreen from './InfoScreen';
import { restaurantMenuExtractor } from '../../global/restaurantMenuExtract';
import MenuCategories from '../../components/MenuCategories';


const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

export default function RestaurantHomeScreen({ route, navigation }) {
  const { restaurant } = route.params;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: "Menu"},
    {key: 'second', title: "Info"},
    {key: 'third', title: "Reviews"},
    {key: 'forth', title: "Gallery"}
  ]);

  const renderScene = ({ route }) => {
    console.log("Rendering scene for: ", route.key);
    switch (route.key) {
      case 'first':
        return <MenuCategories menu={restaurant.restaurantMenu} />;
      case 'second':
        return <InfoScreen id={restaurant.id} />;
      case 'third':
        return <Text>Reviews</Text>;  // Ensure these components exist or are placeholders
      case 'forth':
        return <Text>Gallery</Text>;  // Ensure these components exist or are placeholders
      default:
        return null; // It's good practice to have a default return
    }
  };

  const renderTabBar = props =>(
    <TabBar 
        {...props}
        indicatorStyle = {{backgroundColor:colors.cardbackground}}
        tabStyle = {styles.tabStyle}
        scrollEnabled = {true}
        style ={styles.tab}
        labelStyle = {styles.tabLabel}
        contentContainerStyle = {styles.tabContainer}
    />
)

return (
  <View style={styles.container}>
    <ScrollView>
      <RestaurantHeader navigation={navigation} image={restaurant.image} />
      <View style={styles.view2}>
        <Text style={styles.text2}>{restaurant.name}</Text>
        <View style={styles.view4}>
          <Text style={styles.text4}>{restaurant.averageReview}</Text>
          <Text style={styles.text5}>({restaurant.nrReviews} reviews)</Text>
          <Text style={styles.text6}>{restaurant.farAway} km away</Text>
        </View>
      </View>
      <MenuCategories menu={restaurant.restaurantMenu} navigation={navigation}/>
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
    container:{flex:1,
    },

view1:{
      padding:3,
      alignItems:"center",
      justifyContent:"center"
    },

text1:{color:"green",
    fontSize:14,
    fontWeight:"bold"
  },

view2:{ flexDirection:"row",
      flex:1,
      marginBottom:5,
      marginHorizontal:10,
      justifyContent:"space-between",
      },

view3:{flex:8,
        },

text2:{fontSize:20,
      fontWeight:"bold",  
      color:colors.grey1
    },

text3:{fontSize:15,
      color:colors.grey3
},

view4:{flexDirection:'row',
      alignItems:"center",
      marginTop:5
      },

text4:{fontFamily :fonts.android.bold,
      fontSize:13,
      color:colors.grey3,
      marginLeft:2,
      },

text5:{fontFamily :fonts.android.bold,
      fontSize:13,
      color:colors.grey3,
      marginLeft:2,
      marginRight:5
      },
  text6:{fontFamily :fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:0,
        },

  view5:{ flex:3,
          alignItems:"center"
        },

  text6:{fontSize:15,
        fontWeight:"bold",
        color:colors.grey1
      },

  view7:{width:40,
        height:40,
        alignItems:"center",
        borderRadius:20,
        justifyContent:"space-around",
        },

  text7:{fontSize:16,
         fontWeight:"bold",
         color:colors.black,
         marginTop:5
        },

  text8:{fontSize:13,
        color:colors.black,
        marginBottom:5
      },

  view8:{flex:3,
        alignItems:"center"
      },

text9:{fontSize:15,
      fontWeight:"bold",
      color:colors.cardbackground
},

view9:{width:40,
      height:40,
      backgroundColor:colors.buttons,
      alignItems:"center",
      borderRadius:20,
      justifyContent:"space-around",
    },

text10:{fontSize:16,
      fontWeight:"bold",
      color:colors.cardbackground,
      marginTop:5
      },

text11:{fontSize:13,
        color:colors.cardbackground,
        marginBottom:5
      },

view10:{elevation:10,
       backgroundColor:colors.pagebackground
      },

view11:{backgroundColor:colors.buttons,
        height:50,
        alignContent:"center",
        marginBottom:0,
        justifyContent:"center"
        
},

view12:{flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
        },

text12:{padding:10,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground
      },

view13:{ borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
      },

text13:{paddingHorizontal:3,
        fontWeight:"bold",
        fontSize:18,
        color:colors.cardbackground,
      },

tab:{ paddingTop :0,
      backgroundColor:colors.buttons,
      justifyContent:"space-between",
      alignItems:"center"
      },

tabContainer:{ alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      },

tabLabel:{fontWeight:'bold',
      color: colors.cardbackground
      },
  
tabStyle:{width:SCREEN_WIDTH/4,
          maxHeight:45,
        },

view14:{flexDirection:"row",
alignItems:"center",
padding:10,
backgroundColor:colors.buttons,
top:0,
left:0,
right:0,
paddingTop:25
},

text14:{fontWeight:"bold",
        marginLeft:40,
        color:"#FFFFFF",
        fontSize:18
    },

view15:{marginTop:5,
        paddingBottom:20
    },         
})