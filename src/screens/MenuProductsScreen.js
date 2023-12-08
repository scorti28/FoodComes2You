import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Route1, Route2, Route3, Route4 } from './MenuTabs';  
import { menu } from '../global/Data';
import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuProductsScreen({ navigation, route }) {
  const [route2] = useState(menu);
  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardbackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1: 
      return <Route1 navigation = {navigation} />
      case 2: 
      return <Route2 name = {navigation} /> 
      case 3: 
      return <Route3 name = {navigation} />  
      case 4: 
      return <Route4 name = {navigation} />
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left"
          type="material-community"
          color={"#FFFFFF"}
          size={25}
          onPress ={()=>navigation.goBack()}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>
      <TabView 
                navigationState ={{index,route2}}
                renderScene = {renderScene}
                onIndexChange = {setIndex}
                initialLayout = {SCREEN_WIDTH}
                renderTabBar = {renderTabBar}
                tabBarPosition = 'top'
                navigation ={navigation}
                route = {route}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container:{flex:1,
             top:0,
             left:0,
             right:0
     },

view1:{flexDirection:"row",
alignItems:"center",
padding:10,
backgroundColor:colors.buttons,
top:0,
left:0,
right:0,
paddingTop:25
},

text1:{fontWeight:"bold",
      marginLeft:40,
      color:"#ffffff",
      fontSize:18
    },

view2:{marginTop:5,
      paddingBottom:20
    },

tab:{ paddingTop :0,
      backgroundColor:colors.buttons,
      justifyContent:"space-between",
     // alignItems:"center"
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
scene2: { backgroundColor: '#3a8bb7'} 
})

