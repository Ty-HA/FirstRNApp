import React from 'react';
import { FlatList, View, StyleSheet, Image, TouchableOpacity, onPress } from 'react-native';

import colors from '../config/colors';

const taskIcons = [
  {
    id: 1,
    image: require("../assets/icons/food.png"),
  },
  {
    id: 2,
    image: require("../assets/icons/shower.png"),
  },
  {
    id: 3,
    image: require("../assets/icons/grooming.png"),
  },
  {
    id: 4,
    image: require("../assets/icons/water.png"),
  },
  {
    id: 5,
    image: require("../assets/icons/walk.png"),
  },
];

const TaskIcon = ({ image, onPress }) => (
    <View style={styles.imageContainer}>
    <Image source={image} style={styles.image} onPress={onPress}/>
  </View>
);

export default function TaskIconList() {
  return (
    <FlatList
      style={styles.iconList}
      data={taskIcons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.iconContainer}>
            <TouchableOpacity onPress={onPress}>
          <TaskIcon 
            image={item.image} 
            onPress={() => console.log("Task Icon pressed")}
          />
          </TouchableOpacity>
        </View>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  iconList: {
    flexDirection: "row",
    width: "100%",
    height: 130,
    backgroundColor: colors.light,
    
  },

  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,

  },

  image: {
    width: 55,
    height: 55, 
  },

  imageContainer : {
    left: 15,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
  },
});
