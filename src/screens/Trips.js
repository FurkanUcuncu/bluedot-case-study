import { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import MainLayout from '../components/layout/MainLayout'
import TripList from '../components/tripCard/TripList'
import { Colors } from '../constants/Colors'
import {
    Text, View, Image, TouchableOpacity, Modal,
    TouchableHighlight, Platform
} from 'react-native'
import * as LocalAuthentication from "expo-local-authentication";
import Constants from "expo-constants";

const Trips = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [failedCount, setFailedCount] = useState(0);

    function clearState() {
        setAuthenticated(false);
        setFailedCount(0);
    }

    async function scanFingerPrint() {
        try {
            let results = await LocalAuthentication.authenticateAsync();
            if (results.success) {
                setModalVisible(true);
                setFailedCount(0);
            }
            else if (results.warning) {
                setModalVisible(false);
            }
            else {
                setFailedCount(failedCount + 1);
                setModalVisible(false);
                navigation.navigate("Dashboard")
            }
            console.log(results)
        } catch (e) {
            console.log(e);
            setModalVisible(false);
        }
    }
    useEffect(() => {
        scanFingerPrint()
        setModalVisible(true)
    }, [navigation])
    return (
        <MainLayout headerText="Trips" navigation={navigation}>
            {
                !modalVisible ?
                    <Modal
                        animationType="slide"
                        backdropOpacity={0.3}
                        transparent={true}
                        visible={!modalVisible}
                        onShow={scanFingerPrint}
                    >
                        <View style={styles.modal}>
                            <View style={styles.innerContainer}>
                                <Text>Sign in with fingerprint</Text>
                                <Image
                                    style={styles.image}
                                    source={require("../../assets/fingerprint.png")}
                                />
                                {failedCount > 0 && (
                                    <Text style={styles.error_text}>
                                        Failed to authenticate, press cancel and try again.
                                    </Text>
                                )}
                                <TouchableHighlight
                                    onPress={async () => {
                                        if (Platform.OS === 'android') {
                                            LocalAuthentication.cancelAuthenticate();
                                        }
                                    }}
                                >
                                    <Text style={styles.error_text}>Cancel</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal> :
                    <ScrollView style={styles.container}>
                        <TripList />
                    </ScrollView>
            }
        </MainLayout>
    )
}

export default Trips

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff48"
    },
    modal: {
        flex: 1,
        marginTop: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    innerContainer: {
        marginTop: "30%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 10
    },
    text: {
        alignSelf: "center",
        fontSize: 22,
        paddingTop: 20,
    },
    error_text: {
        color: "red",
        fontSize: 16,
        marginVertical: 5
    }
})
