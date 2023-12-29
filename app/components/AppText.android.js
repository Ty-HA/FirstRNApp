import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

function AppText({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.textPrimary,
        fontWeight: "bold",
        fontSize: 34,
        fontFamily: 'Roboto',
        
    }
});

export default AppText;