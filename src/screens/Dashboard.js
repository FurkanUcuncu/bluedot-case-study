import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import CustomText from '../components/customText/CustomText'
import MainLayout from '../components/layout/MainLayout'

const Dashboard = ({ navigation }) => {
    return (
        <MainLayout headerText="Home" navigation={navigation}>
            <CustomText
                style={{ textAlign: 'center', marginTop: 20 }}
                text="Dashboard"
                color={Colors.secondary}
                fontSize={16}
                fontFamily="open-sans-bold"
            />
        </MainLayout>
    )
}

export default Dashboard

const styles = StyleSheet.create({})
