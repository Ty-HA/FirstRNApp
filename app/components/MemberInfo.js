import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function MemberInfo({
  image,
  title,
  email,
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
              <Text style={styles.email}>{email}</Text>
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

  email: {
    color: colors.textPrimary,
    fontSize: 16,
    marginTop: 3,
  },

  memberContainer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "flex-start",
    alignSelf: "left",
    marginTop: 10,
    padding: 10,
  },

  title: {
    color: colors.textPrimary,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 3,
  },
});
