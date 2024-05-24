import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { darkColors } from "../global/styles"; 
import auth from "@react-native-firebase/auth";
import { SignInContext } from "../contexts/authContext";
import firestore from "@react-native-firebase/firestore";
import { ThemeContext } from "../global/themeContext";
import { useNavigation } from "@react-navigation/native";

export default function DrawerContent(props) {
  const { dispatchSignedIn } = useContext(SignInContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const currentColors = isDarkMode ? darkColors : null; 
  const [userProfile, setUserProfile] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth().currentUser;
      if (user) {
        const userDoc = await firestore().collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        if (userData) {
          setUserProfile({
            name: userData.name,
            familyName: userData.familyName
          });
        }
      }
    };
    fetchUserProfile();
  }, []);

  async function signOut() {
    try {
      auth().signOut().then(() => {
        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } });
      });
    } catch (error) {
      Alert.alert(error.code);
    }
  }

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: isDarkMode ? darkColors.pageBackground : null }}>
      <View style={styles.container}>
        <View style={[styles.userContainer, { borderBottomColor: isDarkMode ? darkColors.grey1 : null }]}>
          <View style={styles.avatarContainer}>
            <Text style={[styles.avatarText, { color: currentColors ? currentColors.grey1 : null }]}>👤</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={[styles.nameText, { color: currentColors ? currentColors.grey1 : null }]}>Bine ai venit,</Text>
            <Text style={[styles.nameText, { color: currentColors ? currentColors.grey1 : null }]}>{userProfile ? `${userProfile.name} ${userProfile.familyName}` : "Name"}!</Text>
          </View>
        </View>

        <DrawerItem
          label="Dark Mode"
          icon={({ color, size }) => (
            <Icon
              name={isDarkMode ? "brightness-3" : "brightness-5"}
              type="material"
              color={isDarkMode ? darkColors.grey1 : color} 
              size={size}
            />
          )}
          onPress={toggleTheme}
          labelStyle={{ color: currentColors ? currentColors.grey1 : null }}
        />

        <DrawerItem
          label="Despre noi"
          icon={({ color, size }) => (
            <Icon
              name="information-variant"
              type="material-community"
              color={isDarkMode ? darkColors.grey1 : color} 
              size={size}
            />
          )}
          onPress={() => navigation.navigate("MyOrdersScreen")} 
          labelStyle={{ color: isDarkMode ? darkColors.grey1 : null }} 
        />

        <DrawerItem
          label="Sign out"
          icon={({ color, size }) => (
            <Icon
              name="logout-variant"
              type="material-community"
              color={isDarkMode ? darkColors.grey1 : color} 
              size={size}
            />
          )}
          onPress={signOut}
          labelStyle={{ color: isDarkMode ? darkColors.grey1 : null }} 
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    marginRight: 20,
  },
  avatarText: {
    fontSize: 24,
  },
  nameContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
