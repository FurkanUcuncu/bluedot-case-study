import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Platform, TextInput } from "react-native";
import CustomText from "../customText/CustomText";
import { Colors } from "../../constants/Colors";
import { toggleDrawer } from "../../helpers/toggleDrawer";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import SearchBar from "../searchBar/SearchBar";

const Header = ({ navigation, headerText, goBack, freeDriving }) => {
    const insets = useSafeAreaInsets();


    return (
        <View style={{ ...styles.headerContainer, paddingTop: insets.top }}>
            <View style={styles.header}>
                {
                    goBack ?
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={24} color={Colors.primary} />
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.menuIcon} onPress={toggleDrawer}>
                            <Ionicons name="ios-reorder-three-outline" size={22} color={Colors.secondary} />
                        </TouchableOpacity>
                }
                <View style={styles.row}>
                    <CustomText text={headerText} color={Colors.secondary} fontSize={20} fontFamily="open-sans-bold" />
                </View>
                {
                    freeDriving &&
                    <SearchBar />
                }
                <View><Text></Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 99,
        marginHorizontal: 20,
        // paddingBottom: Platform.OS === 'android' ? 30 : (Dimensions.get("window").height < 700 ? 20 : 0),
    },
    headerContainer: {
        // height: 80,
        zIndex: 99,
        paddingBottom: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.12,
        elevation: 2,
    },
    menuIcon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.softGray
    }
});

export default Header;
