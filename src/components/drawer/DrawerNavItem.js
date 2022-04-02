import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors'
import CustomText from '../customText/CustomText'

const DrawerNavItem = ({ onPress, text, icon, isActive }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {icon}
            <CustomText
                style={{ marginHorizontal: 10 }}
                text={text}
                color={isActive ? Colors.primary : 'white'}
                fontSize={14}
                fontFamily="open-sans-bold"
            />
        </TouchableOpacity>
    )
}

export default DrawerNavItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    }
})
