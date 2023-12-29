import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../config/colors";

export default function Button({ title, color = colors.primary }) {
  return (
      <View style={[styles.button, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
      width: "80%",
      height: 60,
      borderRadius: 35,
      borderWidth: 1,
      borderColor: colors.buttonBorder,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  text: {
      color: '#fff',
      fontSize: 18,
  },
});