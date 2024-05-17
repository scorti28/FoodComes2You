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
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use ThemeContext
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth().currentUser;
      if (user) {
        try {
          let retries = 3;
          let delay = 1000;
          while (retries > 0) {
            const userDoc = await firestore().collection('users').doc(user.uid).get();
            const userData = userDoc.data();
            if (userData) {
              setUserProfile({
                name: userData.name,
                familyName: userData.familyName
              });
              break;
            } else {
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

  async function signOut() {
    try {
      auth()
        .signOut()
        .then(() => {
          dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } });
        });
    } catch (error) {
      Alert.alert(error.code);
    }
  }

  return (
    <View style={styles.container}>
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
      </DrawerContentScrollView>

      <DrawerItem
        label="Sign out"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
        onPress={signOut}
      />

      <TouchableOpacity style={styles.globalDarkModeButton} onPress={toggleTheme}>
        <Text style={styles.globalDarkModeButtonText}>
          {isDarkMode ? 'Switch to Light Mode for All App' : 'Switch to Dark Mode for All App'}
        </Text>
      </TouchableOpacity>
    </View>
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
  globalDarkModeButton: {
    padding: 10,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  },
  globalDarkModeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
