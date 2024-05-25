import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";
import auth from "@react-native-firebase/auth";
import { SignInContext } from "../contexts/authContext";
import firestore from "@react-native-firebase/firestore";
import { ThemeContext } from "../global/themeContext";
import { useNavigation } from "@react-navigation/native";
import { colors, darkColors } from "../global/styles";

export default function DrawerContent(props) {
  const { dispatchSignedIn } = useContext(SignInContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const currentColors = isDarkMode ? darkColors : colors;
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth().currentUser;
      if (user) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const userDoc = await firestore().collection('users').doc(user.uid).get();
        const userData = userDoc.data();
        if (userData) {
          setUserProfile({
            name: userData.name,
            familyName: userData.familyName,
            email: user.email,
          });
        }
        setLoading(false); 
      }
    };
    fetchUserProfile();

    const authListener = auth().onAuthStateChanged((user) => {
      if (user) {
        fetchUserProfile();
      }
    });

    return () => authListener();
  }, []);

  async function signOut() {
    try {
      await auth().signOut();
      dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } });
    } catch (error) {
      Alert.alert(error.code);
    }
  }

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: isDarkMode ? darkColors.pageBackground : colors.pageBackground }}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color={currentColors.text} />
        ) : (
          <View style={[styles.userContainer, { borderBottomColor: isDarkMode ? darkColors.grey1 : colors.grey1 }]}>
            <View style={styles.avatarContainer}>
              {userProfile?.profilePicture ? (
                <Image source={{ uri: userProfile.profilePicture }} style={styles.avatarImage} />
              ) : (
                <Icon name="person" type="material" color={isDarkMode ? darkColors.grey1 : colors.primary} size={50} />
              )}
            </View>
            <View style={styles.nameContainer}>
              <Text style={[styles.nameText, { color: currentColors.text }]}>{userProfile ? `${userProfile.name} ${userProfile.familyName}` : "Name"}</Text>
              <Text style={[styles.emailText, { color: currentColors.text }]}>{userProfile ? userProfile.email : "Email"}</Text>
            </View>
          </View>
        )}

        <View style={styles.drawerItemsContainer}>
          <DrawerItem
            label="Dark Mode"
            icon={({ color, size }) => (
              <Icon
                name={isDarkMode ? "brightness-3" : "brightness-5"}
                type="material"
                color={isDarkMode ? darkColors.grey1 : colors.primary}
                size={size}
              />
            )}
            onPress={toggleTheme}
            labelStyle={{ color: currentColors.text }}
          />

          <DrawerItem
            label="Despre noi"
            icon={({ color, size }) => (
              <Icon
                name="info"
                type="material"
                color={isDarkMode ? darkColors.grey1 : colors.primary}
                size={size}
              />
            )}
            onPress={() => navigation.navigate("MyOrdersScreen")}
            labelStyle={{ color: currentColors.text }}
          />

          <DrawerItem
            label="Sign out"
            icon={({ color, size }) => (
              <Icon
                name="logout"
                type="material"
                color={isDarkMode ? darkColors.grey1 : colors.primary}
                size={size}
              />
            )}
            onPress={signOut}
            labelStyle={{ color: currentColors.text }}
          />
        </View>
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
    width: '100%',
  },
  avatarContainer: {
    marginRight: 20,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 14,
    color: "gray",
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 20,
  },
});
