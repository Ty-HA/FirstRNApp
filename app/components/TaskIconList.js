import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import TaskIcon from './TaskIcon';

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

export default function TaskIconList() {
  return (
    <View style={styles.container}>
      <View style={styles.iconList}>
        {taskIcons.map((taskIcon) => (
          <View key={taskIcon.id} style={styles.iconContainer}>
            <TaskIcon 
              image={taskIcon.image} 
              onPress={() => console.log("Task Icon pressed")}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },

  iconList: {
    flex: 1,
    flexDirection: "row",
 

  },

  iconContainer: {

    flex: 1,
    marginRight: 90,
    marginLeft: 20,
   


  },
});
