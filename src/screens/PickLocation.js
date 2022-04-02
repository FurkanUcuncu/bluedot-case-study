import React, { useState, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import MainLayout from '../components/layout/MainLayout'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import CustomText from '../components/customText/CustomText';
import { Colors } from '../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { locationActions } from '../../store/location/locationSlice';
import { useSelector } from 'react-redux';

const PickLocation = ({ navigation }) => {
    const dispatch = useDispatch()
    const mapRef = useRef(null)
    const [location, setLocation] = React.useState(null)
    const [state, setState] = useState({
        time: 0,
        distance: 0,
        heading: 0
    })

    const { time, distance } = state
    const updateState = (data) => setState((state) => ({ ...state, ...data }));
    const { finalDestination } = useSelector(state => state.location)

    const addTrip = () => {
        dispatch(locationActions.addTrip({ location: finalDestination, distance: (distance * 0.621371192).toFixed(2), id: Math.random(), price: (distance * 0.1).toFixed(2) }))
        navigation.navigate("Trips")
    }

    const fetchTime = (d, t) => {
        updateState({
            distance: d,
            time: t
        })
    }

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <MainLayout navigation={navigation} freeDriving>
            <View style={styles.map}>
                {/* <Text>Time left: {time.toFixed(0)} </Text>
                <Text>Distance left: {distance.toFixed(0)}</Text> */}
                {
                    location &&
                    <MapView
                        ref={mapRef}
                        onPress={(e) => {
                            console.log(e.nativeEvent.coordinate)
                            dispatch(locationActions.changeFinalDestination({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 }))
                        }}
                        showsUserLocation
                        style={{ height: '100%' }}
                        region={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <MapViewDirections
                            origin={{ longitude: location.coords.longitude, latitude: location.coords.latitude }}
                            destination={finalDestination}
                            apikey={"AIzaSyC97YLgBoexxNBoLpSn5pktudrwBoVUeek"}
                            strokeWidth={3}
                            strokeColor="blue"
                            onReady={result => {
                                console.log(`Distance: ${result.distance} km`)
                                console.log(`Duration: ${result.duration} min.`)
                                fetchTime(result.distance, result.duration),
                                    mapRef.current.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            // right: 30,
                                            // bottom: 300,
                                            // left: 30,
                                            // top: 100,
                                        },
                                    });
                            }}
                        />
                        {
                            finalDestination &&
                            <Marker
                                coordinate={finalDestination}
                            />
                        }
                    </MapView>
                }
            </View>
            <TouchableOpacity onPress={addTrip} style={styles.confirmBtnContainer}>
                <View style={styles.confirmBtn}>
                    <CustomText
                        text="Confirm Your Trip"
                        color={Colors.primary}
                        fontSize={16}
                        fontFamily="open-sans-bold"
                    />
                </View>
            </TouchableOpacity>
        </MainLayout>
    )
}

export default PickLocation

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    confirmBtnContainer: {
        padding: 30,
        // paddingBottom: 30,
        position: 'absolute',
        bottom: 10,
        right: 0,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    confirmBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.12,
        elevation: 4,
    }
})
