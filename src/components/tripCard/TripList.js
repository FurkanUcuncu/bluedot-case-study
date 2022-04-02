import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Colors } from '../../constants/Colors'
import CustomText from '../customText/CustomText'
import TripCard from './TripCard'

const data = [
    {
        id: 1,
        mile: 12,
        price: 0.69,
        isInProgress: true,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 2,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 3,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 4,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 5,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 6,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 7,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 8,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 9,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 10,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 11,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 12,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 13,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 14,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 15,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
    {
        id: 16,
        mile: 10,
        price: 5.65,
        isInProgress: false,
        location: {
            latitude: 41.006129637536134, longitude: 39.72641514664631, latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        },
    },
]

const TripList = () => {
    const { trips } = useSelector(state => state.location)
    console.log(trips)
    return (
        <View style={styles.container}>
            {
                trips.length > 0 ?
                    trips.map((item, index) => {
                        return (
                            <TripCard
                                key={item.id}
                                id={item.id}
                                mile={item.distance}
                                price={item.price}
                                isInProgress={index === 0}
                                destination={item.location}
                            />
                        )
                    })
                    :
                    <CustomText
                        style={{ textAlign: 'center' }}
                        text="There is no trip for you here"
                        color={Colors.secondary}
                        fontSize={16}
                        fontFamily="open-sans-bold"
                    />
            }
        </View>
    )
}

export default TripList

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    }
})
