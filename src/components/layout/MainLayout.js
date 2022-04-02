import { StyleSheet, View } from 'react-native'
import Header from '../header/Header'

const MainLayout = ({ children, navigation, isDashboard, headerText, goBack, freeDriving }) => {
    return (
        <View style={styles.container}>
            <Header headerText={headerText} freeDriving={freeDriving} isDashboard={isDashboard} goBack={goBack} navigation={navigation} />
            {children}
        </View>
    )
}

export default MainLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
