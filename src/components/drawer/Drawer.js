import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors'
import CustomText from '../customText/CustomText'
import { MaterialIcons } from '@expo/vector-icons';
import { Touchable } from 'react-native';

const Drawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
                <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/bg.jpeg')}>
                    <Image style={styles.profileImage} source={require('../../../assets/images/profile.jpeg')} />
                    <CustomText
                        text="Elon Musk"
                        color={Colors.secondary}
                        fontSize={20}
                        fontFamily="open-sans-bold"
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                        <CustomText
                            text="View Profile"
                            color={Colors.secondary}
                            fontSize={16}
                            fontFamily="open-sans-regular"
                        />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.navigationBtnContainer}>
                    <DrawerItemList {...props} />
                    {/* <DrawerNavItem
                    text="Free Driving Mode"
                    icon={<MaterialCommunityIcons name="steering" size={24} color="white" />}
                    onPress={() => { }}
                />
                <DrawerNavItem
                    text="Settings"
                    icon={<Feather name="settings" size={24} color="white" />}
                    onPress={() => { }}
                /> */}

                </View>
            </DrawerContentScrollView>
            <View style={styles.drawerBottom}>
                <TouchableOpacity style={styles.logoutBtn}>
                    <MaterialIcons name="logout" size={24} color={Colors.secondary} />
                    <CustomText
                        style={{ marginHorizontal: 10 }}
                        text="Sign Out"
                        color={Colors.secondary}
                        fontSize={20}
                        fontFamily="open-sans-bold"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: "#30dbd414",
        // height: '100%'
    },
    drawerContainer: {
        padding: 20,
        flex: 1,
        height: '100%',
    },
    backgroundImage: {
        padding: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 16,
        marginBottom: 20,
    },
    drawerBottom: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    logoutBtn: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationBtnContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    }
})
