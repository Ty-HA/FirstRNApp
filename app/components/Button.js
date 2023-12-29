import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

export default function Button({ title, color = colors.primary, onPress }) {
  return (
      <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
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
      color: colors.white,
      fontSize: 18,
  },
});