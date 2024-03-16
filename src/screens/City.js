import React from "react";
import { Text, View, StyleSheet, Imag, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/CityBackground.jpg')}
                style={styles.image}>
                <Text style={styles.cityName}>London</Text>
                <Text style={styles.countryName}>UK</Text>
            </ImageBackground>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1
    },
    cityName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    countryName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }

})

export default City