import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { locationActions } from '../../../store/location/locationSlice';

const SearchBar = () => {
    const dispatch = useDispatch()

    const onPressAddress = (data, details) => {
        // console.log("details==>>>>", details)

        let resLength = details.address_components
        let zipCode = ''

        let filtersResCity = details.address_components.filter(val => {
            if (val.types.includes('locality') || val.types.includes('sublocality')) {
                return val
            }
            if (val.types.includes('postal_code')) {
                let postalCode = val.long_name
                zipCode = postalCode
            }
            return false
        })

        let dataTextCityObj = filtersResCity.length > 0
            ? filtersResCity[0] :
            details.address_components[
            resLength > 1 ? resLength - 2 : resLength - 1
            ];

        let cityText =
            dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
                ? dataTextCityObj.short_name
                : dataTextCityObj.long_name;

        // console.log("zip cod found", zipCode)
        // console.log("city namte", cityText)

        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        console.log(lat, lng)
        dispatch(locationActions.changeFinalDestination({ latitude: lat, longitude: lng, latitudeDelta: 0.01, longitudeDelta: 0.01 }))
    }

    return (
        <View style={styles.searchBarContainer}>
            <Ionicons name="ios-search-outline" size={24} color={Colors.customGray} />
            {/* <TextInput placeholder="Search" style={styles.searchBar} /> */}
            <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={onPressAddress}
                fetchDetails={true}
                query={{
                    key: "AIzaSyC97YLgBoexxNBoLpSn5pktudrwBoVUeek",
                    language: 'en'
                }}
                styles={{
                    // textInputContainer: styles.searchBar,
                    textInput: styles.searchBar
                }}
            />
        </View>

    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.customGray,
        paddingHorizontal: 10,
        flex: 1,
        marginHorizontal: 20,
    },
    searchBar: {
        marginHorizontal: 10,
        flex: 1,
        fontFamily: 'open-sans-bold'
    }
})
