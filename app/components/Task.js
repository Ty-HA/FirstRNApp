import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function Task({
  image,
  description,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.taskContainer}>
            <View style={styles.circleContainer}>
              

              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description}</Text>
              </View>

              <View style={styles.imageContainer}>
                <Image source={image} style={styles.circle} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 55,
    height: 55,
 
  },

  circleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  description: {
    color: colors.textPrimary,
    fontSize: 16,
    margin: 10,
    paddingLeft: 85,
  },

  descriptionContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Add this line for Android
  },

  
  imageContainer: {
    position: "absolute",
    left: 15,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.yellow,
 
  },

  taskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",

  },
});
