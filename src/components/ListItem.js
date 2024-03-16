import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = ({ props }) => {
    const { id, title } = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'black'} />
            <Text>The Titile is : {title} </Text>
            <Text>It's Id is : {id}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    }
})
export default ListItem