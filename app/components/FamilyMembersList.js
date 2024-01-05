import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function FamilyMembersList({
  image,
  title,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.memberContainer}>
            <View style={styles.circleContainer}>
              <Image source={image} style={styles.circle} />
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  circleContainer: {
    width: "100%",
    alignItems: "center",
    padding: 5,
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "grey",
  },

  title: {
    color: colors.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 3,
  },

  memberContainer: {
    width: "100%",
    alignItems: "stretch",
    alignSelf: "stretch",
    marginTop: 5,
  },
});
