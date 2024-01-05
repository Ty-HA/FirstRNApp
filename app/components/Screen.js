import React from 'react';
import Constants from 'expo-constants';
// console.log(Constants.statusBarHeight);

import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}> 
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})
export default Screen;