import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'

const Item = ({ props }) => {
    const { id, title } = props
    return (
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>The Titile is : {title}</Text>
            <Text>It's Id is : {id}</Text>
        </View>
    )
}
const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return <Item props={item} />
    }
    const DATA = [
        { id: '1', title: 'First Item' },
        { id: '2', title: 'Second Item' },
        { id: '3', title: 'Third Item' },
        { id: '4', title: 'Fourth Item' }
    ]
    return (
        <SafeAreaView styles={styles.container}>
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UpcomingWeather
