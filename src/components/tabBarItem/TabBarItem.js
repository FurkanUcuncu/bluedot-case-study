import { StyleSheet, Text, View } from 'react-native'
import CustomText from '../customText/CustomText'

const TabBarItem = ({ icon, text, textColor }) => {
    return (
        <View style={styles.tabBarItem}>
            {icon}
            <CustomText
                style={{ marginTop: 5, textAlign: 'center' }}
                text={text}
                color={textColor}
                fontSize={12}
                fontFamily="open-sans-regular"
            />
        </View>
    )
}

export default TabBarItem

const styles = StyleSheet.create({
    tabBarItem: {
        alignItems: 'center',
    }
})
