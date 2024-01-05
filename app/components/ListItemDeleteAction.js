import React from "react";

import { View, StyleSheet, Pressable } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { TouchableWithoutFeedback } from "react-native-web";
// TouchableWithoutFeedback is deprecated, use Pressable instead

function ListItemDeleteAction({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={50}
          style={styles.deleteIcon}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  deleteIcon: {
    color: colors.white,
  },
});

export default ListItemDeleteAction;
