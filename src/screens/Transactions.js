import { StyleSheet, Text, View } from 'react-native'
import CustomText from '../components/customText/CustomText'
import MainLayout from '../components/layout/MainLayout'
import { Colors } from '../constants/Colors'

const Transactions = () => {
    return (
        <MainLayout headerText="Transactions">
            <CustomText
                style={{ textAlign: 'center', marginTop: 20 }}
                text="Transactions"
                color={Colors.secondary}
                fontSize={16}
                fontFamily="open-sans-bold"
            />
        </MainLayout>
    )
}

export default Transactions

const styles = StyleSheet.create({})
