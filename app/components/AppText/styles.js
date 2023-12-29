import { StyleSheet, Platform } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    text: {
        color: colors.textPrimary,
        fontWeight: '900',
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

export default styles;