import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import MainLayout from '../components/layout/MainLayout'
import * as Location from 'expo-location';
import { Colors } from '../constants/Colors';
import CustomText from '../components/customText/CustomText';

const Settings = ({ navigation }) => {

    return (
        <MainLayout goBack navigation={navigation}>
            <CustomText
                style={{ textAlign: 'center', marginTop: 20 }}
                text="Settings"
                color={Colors.secondary}
                fontSize={16}
                fontFamily="open-sans-bold"
            />
        </MainLayout>
    )
}

export default Settings

const styles = StyleSheet.create({})
