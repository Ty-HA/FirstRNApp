import { View, SafeAreaView, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/family/family-test.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <MaterialCommunityIcons name="close" size={50} style={styles.closeIcon} />
      <MaterialCommunityIcons
        name="trash-can"
        size={50}
        style={styles.deleteIcon}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    color: colors.white,
    width: 50,
    height: 50,
    position: "absolute",
    top: 60,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIcon: {
    color: colors.white,
    width: 50,
    height: 50,
    position: "absolute",
    top: 60,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});
