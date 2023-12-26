import React, {useEffect, useState, useContext} from "react";
import { View, Text, Alert, Switch, StyleSheet, TouchableOpacity  } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "react-native-elements";
import { colors } from "../global/styles";
import auth from "@react-native-firebase/auth";
import { SignInContext } from "../contexts/authContext";
import firestore from "@react-native-firebase/firestore";


export default function DrawerContent(props){

    const {dispatchSignedIn} = useContext(SignInContext);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
          const user = auth().currentUser;
          console.log('Auth User:', user);
          if (user) {
            try {
              let retries = 3;
              let delay = 1000; // Initial delay in milliseconds
              while (retries > 0) {
                try {
                  const userDoc = await firestore().collection('users').doc(user.uid).get();
                  const userData = userDoc.data();
                  console.log('User Data:', userData);
                  setUserProfile({
                    name: userData.name,
                    familyName: userData.familyName,
                  });
                  break; // Break the loop on successful fetch
                } catch (error) {
                  console.error("Error fetching user profile:", error);
                  // Retry after delay
                  await new Promise((resolve) => setTimeout(resolve, delay));
                  delay *= 2; // Exponential backoff
                  retries -= 1;
                }
              }
            } catch (error) {
              console.error("Error fetching user profile after retries:", error);
            }
          }
        };
      
        fetchUserProfile();
      }, []);


async function signOut(){
       
    try{
        auth()
        .signOut()
        .then(
            ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
        })

    }catch(error){
        Alert.alert(error.code)
    }
}
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons}}>
            <View style={styles.centerAvatar}>
                 <Avatar 
                     rounded
                     avatarStyle={styles.avatarStyle}
                     size={80}
                 
                 />

                 <View style={styles.textStyle}>
                 <Text style={styles.avatarText}>{`${userProfile?.name || "Name"} ${userProfile?.familyName || "Family Name"}`}</Text>
            </View>
          </View>
               <View style={{flexDirection:"row", justifyContent:"space-evenly", paddingBottom:5}}>
               <View style={{flexDirection:"row", marginTop:0}}>
                 </View>
         
                 <View style={{flexDirection:"row", marginTop:0}}>
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
                 onPress={signOut}
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