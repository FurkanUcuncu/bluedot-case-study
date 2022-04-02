import { NavigationContainer } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { navigationRef } from '../helpers/toggleDrawer'
import DrawerNavigator from '../routes/StackNavigator'
import Loading from '../screens/Loading'

const AppNavigator = () => {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })
    return (
        <NavigationContainer ref={navigationRef}>
            {isLoading ? <Loading /> : <DrawerNavigator />}
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
