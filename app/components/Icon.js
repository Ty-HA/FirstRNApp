// Icon for member family avatar
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ iconName, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <MaterialCommunityIcons name={iconName} size={25} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10, 

  },

});

export default Icon;
