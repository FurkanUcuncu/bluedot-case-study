import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors'
import CustomText from '../customText/CustomText'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { settingsActions } from '../../../store/settings/settingsSlice';
import { MaterialIcons } from '@expo/vector-icons';

const DriveModeButton = ({ onPress }) => {
    const dispatch = useDispatch()
    const { isFreeMode } = useSelector(state => state.settings)
    const changeMode = () => {
        dispatch(settingsActions.changeMode(!isFreeMode))
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={changeMode}>
                <View style={styles.driveButton}>
                    <View style={styles.modeStatusContainer}>
                        <View style={{ ...styles.modeStatus, backgroundColor: isFreeMode ? '#16a34a' : '#6b7280' }}></View>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <MaterialCommunityIcons name="steering" size={24} color="white" />
                    </View>
                    <CustomText
                        text="Free Driving"
                        color="white"
                        fontSize={16}
                        fontFamily="open-sans-regular"
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.selfLocation}>
                    <MaterialIcons name="my-location" size={24} color={Colors.secondary} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DriveModeButton

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 30,
        // paddingBottom: 30,
        position: 'absolute',
        bottom: 30,
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    driveButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    modeStatusContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff'
    },
    modeStatus: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.12,
        elevation: 4,
    },
    selfLocation: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.12,
        elevation: 4,
    },
})
