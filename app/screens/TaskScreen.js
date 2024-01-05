import React, { useState } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";

import PetCard from "../components/PetCard";
import Screen from "../components/Screen";
import Task from "../components/Task";

import TaskIconList from "../components/TaskIconList";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialTasks = [
  {
    id: 1,
    description: "C'est l'heure de manger pour Max !",
    image: require("../assets/icons/food.png"),
  },
  {
    id: 2,
    description: "Aujourd'hui Max a besoin d'une bonne douche !",
    image: require("../assets/icons/shower.png"),
  },
];

function TaskScreen(props) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDelete = (task) => {
    // Delete the task from tasks
    // call the server
    console.log(task);
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pets/mobile-background2.jpg")}
    >
      <Screen>
        <PetCard title="Max" image={require("../assets/pets/max.jpg")} />
        
        <View style={styles.iconList}>
        <TaskIconList />
        </View>
    
        <FlatList
          data={tasks}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({ item: task }) => (
            <View style={{ marginVertical: 2, top: -160, }}>
              <Task
                image={task.image}
                description={task.description}
                onPress={() => console.log("My Tasks")}
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => handleDelete(task)} />
                )}
              />
            </View>
          )}
          contentContainerStyle={{ paddingTop: 250 }}
        />

      </Screen>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },

  iconList: {
    paddingTop: 380,   

  },
});
export default TaskScreen;
