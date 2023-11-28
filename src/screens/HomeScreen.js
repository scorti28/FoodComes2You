import HomeHeader from "../components/HomeHeader";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';

export default function HomeScreen() {
    const [delivery, setDelivery] = useState(true);

    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => setDelivery(true)}>
                        <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.buttons : colors.grey5 }}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setDelivery(false)}>
                        <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.buttons }}>
                            <Text style={styles.deliveryText}>Pick-Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    }
});
