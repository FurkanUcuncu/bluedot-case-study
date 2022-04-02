import { StyleSheet, Text, View } from 'react-native'
import CustomText from '../components/customText/CustomText'
import MainLayout from '../components/layout/MainLayout'
import { Colors } from '../constants/Colors'

const TaxVault = () => {
    return (
        <MainLayout headerText="Tax Vault">
            <CustomText
                style={{ textAlign: 'center', marginTop: 20 }}
                text="Tax Vault Page"
                color={Colors.secondary}
                fontSize={16}
                fontFamily="open-sans-bold"
            />
        </MainLayout>
    )
}

export default TaxVault

const styles = StyleSheet.create({})
