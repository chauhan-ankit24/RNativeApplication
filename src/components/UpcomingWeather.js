import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const UpcomingWeather = () => {
    return (
        <SafeAreaView>
            <Text>Upcoming weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UpcomingWeather
