import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import auth from "@react-native-firebase/auth";
import { SignInContext } from "../contexts/authContext";
import firestore from "@react-native-firebase/firestore";
import { ThemeContext } from "../global/themeContext";

export default function DrawerContent(props) {
  const { dispatchSignedIn } = useContext(SignInContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [userProfile, setUserProfile] = useState(null);

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
    <DrawerContentScrollView {...props}>
      <View style={styles.userContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Bine ai venit,</Text>
          <Text style={styles.nameText}>{userProfile ? `${userProfile.name} ${userProfile.familyName}` : "Name"}!</Text>
        </View>
      </View>

      <DrawerItem
        label="Dark Mode"
        icon={({ color, size }) => (
          <Icon
            name={isDarkMode ? "brightness-3" : "brightness-5"}
            type="material"
            color={color}
            size={size}
          />
        )}
        onPress={toggleTheme}
        labelStyle={{ color: colors.grey1 }}
      />

      <DrawerItem
        label="Sign out"
        icon={({ color, size }) => (
          <Icon
            name="logout-variant"
            type="material-community"
            color={color}
            size={size}
          />
        )}
        onPress={signOut}
      />
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
    borderBottomColor: colors.grey5,
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
    color: "#000",
  },
});
