import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, darkColors } from '../global/styles';
import { Image } from 'react-native-elements';
import { ThemeContext } from '../global/themeContext';

export default function MyOrdersScreen({ navigation }) {
    const { isDarkMode } = useContext(ThemeContext);
    const currentColors = isDarkMode ? darkColors : colors;

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: currentColors.pageBackground }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: currentColors.text }]}>FoodComes2You</Text>
                <Text style={[styles.subtitle, { color: currentColors.text }]}>Despre noi</Text>
            </View>
            <View style={styles.content}>
                <Text style={[styles.paragraph, { color: currentColors.text }]}>
                    &emsp;Echipa FoodComes2You vă urează bun venit în familie! Ne dorim ca timpul de căutare al unui restaurant care să vă îndeplinească toate așteptările să se înjumătățească. Astfel, am conceput 2 moduri de alegere al unui loc de luat masa: primul este cel care oferă o listă de restaurante sortate în ordinea distanțelor față de locația fiecărui utilizator, iar cel de al doilea este căutarea după tag-uri, acestă filtrare fiind specifică fiecărui user.
                </Text>
                <Text style={[styles.paragraph, { color: currentColors.text }]}>
                    &emsp;În urma filtrării, aveți posibilitatea de a naviga cu ușurință spre localul dorit, printr-o simplă apăsare a unui buton și astfel, pagina restaurantului, împreună cu principalele categorii de mâncare vor fi afișate, putând apoi naviga spre meniul propiu-zis.
                </Text>
                <Text style={[styles.paragraph, { color: currentColors.text }]}>
                    &emsp;Vă dorim o experiență de neuitat și poftă bună!
                </Text>
                <Image 
                    source={require('../images/logo.png')}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        paddingHorizontal: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15,
        lineHeight: 22,
        textAlign: 'justify',
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderRadius: 10,
    },
});
