import React from 'react';
import { Text } from 'react-native';
import colors from '../../config/colors';

function AppTextOld({children}) {
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
        ...Platform.select({
            ios: {
                fontSize: 36,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 34,
                fontFamily: 'Roboto',
            },
        })
    }
});



export default AppTextOld;