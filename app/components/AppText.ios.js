import React from 'react';
import { Text, StyleSheet } from 'react-native';
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
        fontSize: 36,
        fontFamily: 'Avenir',
    }
});

export default AppText;