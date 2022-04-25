import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainLayout from '../components/layout/MainLayout'
import MapView, { Polyline, Marker, UrlTile, Geojson } from 'react-native-maps';
import DriveModeButton from '../components/button/DriveModeButton';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const FreeDriving = ({ navigation }) => {
    const mapRef = useRef(null)
    const [location, setLocation] = React.useState(null);
    const [polyline, setPolyline] = React.useState({ latitude: 10.8025259, longitude: -22.4351431 })
    const [origin, setOrigin] = React.useState({ latitude: 37.3318456, longitude: -122.0296002 })
    const [destination, setDestination] = React.useState({ latitude: 37.3318456, longitude: -122.0383769 })
    const [markers, setMarkers] = useState([
        {
            latlng: {
                // latitude: 41.006129637536134, longitude: 39.72641514664631,
                latitude: 37.3318456, longitude: -122.0353769, latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            },
        },
    ])


    const [state, setState] = useState({
        curLoc: {
            latitude: 30.7046,
            longitude: 77.1025,
        },
        time: 0,
        distance: 0,
        heading: 0
    })

    const { curLoc, time, distance, destinationCords, isLoading, coordinate, heading } = state
    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const focusCurrentPosition = () => {
        setLocation(location)
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
                            setOrigin({ latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude })
                        }}
                        showsUserLocation
                        style={{ height: '100%' }}
                        initialRegion={{
                            // latitude: location && location.coords.latitude, longitude: location && location.coords.longitude, latitudeDelta: 0.01,
                            // longitudeDelta: 0.01
                            ...markers[0].latlng
                        }}
                    >
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey=""
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
                            markers.map((marker, index) => (
                                <Marker
                                    key={index}
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                />
                            ))
                        }
                    </MapView>
                }
            </View>
            <DriveModeButton onPress={focusCurrentPosition} />
        </MainLayout>
    )
}

export default FreeDriving

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})
