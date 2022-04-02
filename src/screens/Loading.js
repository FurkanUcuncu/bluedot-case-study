import React from 'react';
import {
    View,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color="black" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;
