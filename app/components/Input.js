import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../config/colors";

export default function Input(props) {
  return <View style={styles.WhiteButton} />;
}

const styles = StyleSheet.create({
    WhiteButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.white,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.buttonBorder,
  },
});
