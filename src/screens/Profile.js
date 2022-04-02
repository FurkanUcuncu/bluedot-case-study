import { TouchableOpacity } from 'react-native'
import { StyleSheet, Image, View, ImageBackground, TextInput } from 'react-native'
import CustomText from '../components/customText/CustomText'
import MainLayout from '../components/layout/MainLayout'
import { Colors } from '../constants/Colors'

const Profile = ({ navigation }) => {
    return (
        <MainLayout goBack navigation={navigation} headerText="Profile">
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/bg.jpeg')}>
                <Image style={styles.profileImage} source={require('../../assets/images/profile.jpeg')} />
            </ImageBackground>
            <View style={styles.center}>
                <CustomText
                    text="Elon Musk"
                    color={Colors.secondary}
                    fontSize={20}
                    fontFamily="open-sans-bold"
                />
                <CustomText
                    style={{ marginTop: 30 }}
                    text="Change Password"
                    color={Colors.secondary}
                    fontSize={20}
                    fontFamily="open-sans-bold"
                />
                <TextInput secureTextEntry placeholder="New Password" style={styles.input} />
                <TextInput secureTextEntry placeholder="Confirm Password" style={styles.input} />
                <TouchableOpacity>
                    <View style={styles.saveBtn}>
                        <CustomText
                            text="Save Changes"
                            color="white"
                            fontSize={20}
                            fontFamily="open-sans-bold"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </MainLayout>
    )
}

export default Profile

const styles = StyleSheet.create({
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        position: 'absolute',
        bottom: -40
    },
    backgroundImage: {
        height: 150,
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        marginTop: 50,
    },
    input: {
        padding: 10,
        marginTop: 20,
        borderBottomColor: Colors.softGray,
        borderBottomWidth: 1,
    },
    saveBtn: {
        marginTop: 30,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
    },
})
