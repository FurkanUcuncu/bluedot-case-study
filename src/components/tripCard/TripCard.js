import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../../constants/Colors';
import CustomText from '../customText/CustomText';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

const TripCard = ({ mile, price, isInProgress, destination }) => {
    const [location, setLocation] = React.useState(null)

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
        <View style={styles.cardContainer}>
            {
                isInProgress &&
                <View style={styles.inProgress}>
                    <CustomText
                        style={{ textAlign: 'center' }}
                        text="Trip In Progress"
                        color={Colors.secondary}
                        fontSize={18}
                        fontFamily="open-sans-regular"
                    />
                </View>
            }
            <View style={styles.cardHeader}>
                <CustomText
                    text={mile + " miles"}
                    color={Colors.secondary}
                    fontSize={18}
                    fontFamily="open-sans-bold"
                />
                <CustomText
                    text={"$" + price}
                    color={Colors.primary}
                    fontSize={18}
                    fontFamily="open-sans-bold"
                />
            </View>
            <View style={styles.mapContainer}>
                {
                    location &&
                    <MapView
                        onPress={(e) => console.log(e.nativeEvent.coordinate)}
                        showsUserLocation
                        style={styles.map}
                        region={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <MapViewDirections
                            origin={{ longitude: location.coords.longitude, latitude: location.coords.latitude }}
                            destination={destination}
                            apikey=""
                            strokeWidth={3}
                            strokeColor="blue"
                        />
                        <Marker
                            coordinate={destination}
                        />
                    </MapView>
                }
            </View>
        </View>
    )
}

export default TripCard

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.12,
        elevation: 4,
    },
    inProgress: {
        paddingVertical: 15, borderBottomWidth: 1, borderColor: Colors.softGray
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    mapContainer: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        overflow: 'hidden',
    },
    map: {
        height: Dimensions.get("window").height / 5,
    }
})
