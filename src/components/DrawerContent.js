import React, {useEffect, useState, useContext} from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet  } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "react-native-elements";
import { colors } from "../global/styles";


export default function DrawerContent(props){
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons}}>
            <View style={styles.centerAvatar}>
                 <Avatar 
                     rounded
                     avatarStyle={styles.avatarStyle}
                     source = {require("../images/ladyAvatar.png")}
                     size={80}
                 
                 />

                 <View style = {styles.textStyle}>
                    <Text style={styles.avatarText}>Teodora Erika Cioc</Text>
                    <Text style = {styles.avatarTextEmail}>teoeric@gmail.com</Text>
                 </View>

            </View>
               <View style={{flexDirection:"row", justifyContent:"space-evenly", paddingBottom:5}}>
               <View style={{flexDirection:"row", marginTop:0}}>
                    <View style = {{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontWeight:"bold", color:colors.pageBackground, fontSize:18}}>17</Text>
                        <Text style={{color:colors.pageBackground, fontSize:14}}>My Favorites</Text>
                    </View>
                 </View>
         
                 <View style={{flexDirection:"row", marginTop:0}}>
                 <View style = {{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontWeight:"bold", color:colors.pageBackground, fontSize:18}}>2019</Text>
                        <Text style={{color:colors.pageBackground, fontSize:14}}>My Cart</Text>
                    </View>
                 </View>
               </View>
            </View>
              
              <DrawerItemList {...props} />

              <DrawerItem 
                 label = "Payment"
                 icon = {({color, size}) => (
                    <Icon 
                       type = "material-community"
                       name = "credit-card-outline"
                       color={color}
                       size={size}
                    
                    />
                 )}
              
              />

            <DrawerItem 
                 label = "Promotions"
                 icon = {({color, size}) => (
                    <Icon 
                       type = "material-community"
                       name = "tag-multiple"
                       color={color}
                       size={size}
                    
                    />
                 )}
              
              />

            <DrawerItem 
                 label = "Settings"
                 icon = {({color, size}) => (
                    <Icon 
                       type = "material-community"
                       name = "cogs"
                       color={color}
                       size={size}
                    
                    />
                 )}
              
              />

            <DrawerItem 
                 label = "Help"
                 icon = {({color, size}) => (
                    <Icon 
                       type = "material-community"
                       name = "help-box"
                       color={color}
                       size={size}
                    
                    />
                 )}
              
              />


              <View style={styles.stylePreferencies}>
                   <Text style = {styles.stylePreferenciesText}>Preferencies</Text>

                   <View style = {styles.stylePreferenciesView}>
                      <Text style = {styles.darkText}>Dark theme</Text>
                       <View style= {{paddingRight:10}}>
                            <Switch 
                               trackColor={{false: "#767577", true: "#81b0ff"}}
                               thumbColor= "#f4f3f4"
                            
                            />
                       </View>
                   </View>
              </View>

              

            </DrawerContentScrollView>

            <DrawerItem 
                 label = "Sign out"
                 icon = {({color, size}) => (
                    <Icon 
                       type = "material-community"
                       name = "logout-variant"
                       color={color}
                       size={size}
                    
                    />
                 )}
              
              />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    avatarStyle:{
        borderWidth:4,
        borderColor:colors.pageBackground,
    },
    centerAvatar:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft: 20,
        paddingVertical:10
    },
    avatarText:{
        fontWeight:'bold',
        color:colors.pageBackground,
        fontSize:18
    },
    avatarTextEmail:{
        color:colors.pageBackground,
        fontSize:14
    },
    textStyle:{
        marginLeft:10
    },
    stylePreferencies:{
        borderTopWidth:1,
        borderTopColor: colors.grey5
    },
    stylePreferenciesText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    stylePreferenciesView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:"bold"
    }

})