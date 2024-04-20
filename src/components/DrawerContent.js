import React, {useEffect, useState, useContext} from "react";
import { View, Text, Alert, StyleSheet} from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Icon } from "react-native-elements";
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
            let delay = 1000; 
            while (retries > 0) {
              
              const userDoc = await firestore().collection('users').doc(user.uid).get();
              const userData = userDoc.data();
              console.log('User Data:', userData);
              console.log("User Doc", userDoc);

              if(userData){
                setUserProfile({
                 name: userData.name, 
                 familyName: userData.familyName
               });
                console.log("User Profile:", userProfile);

                break; 
              }
             
              else{
                console.log("Retrying");
                await new Promise((resolve) => setTimeout(resolve, delay));
                delay *= 2;
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
                 <Text style={styles.avatarText}>
                      {userProfile ? `${userProfile.name} ${userProfile.familyName}` : "Name"}
                </Text>
            </View>
          </View>
            </View>
              
          <DrawerItemList {...props} />
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