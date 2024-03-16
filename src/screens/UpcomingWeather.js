import React from 'react'
import { StatusBar, StyleSheet, Text, FlatList, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from '../components/ListItem'

const UpcomingWeather = () => {

    const renderItem = ({ item }) => {
        return <ListItem props={item} />
    }

    const DATA = [
        { id: '1', title: 'First Item' },
        { id: '2', title: 'Second Item' },
        { id: '3', title: 'Third Item' },
        { id: '4', title: 'Fourth Item' }
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/upcomingWeatherBackground.jpg')}
                style={styles.image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1,
    }
})

export default UpcomingWeather
