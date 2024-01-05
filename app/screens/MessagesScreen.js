import React, {useState} from "react";
import { FlatList, StyleSheet, View } from "react-native";

// import ListItem from '../components/ListItem'; exemple du cours, liste de messages
import Screen from "../components/Screen";
import FamilyMembersList from "../components/FamilyMembersList";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Evan",
    description: "D1",
    image: require("../assets/family/family-member1.png"),
  },
  {
    id: 2,
    title: "Jessica",
    description: "D2",
    image: require("../assets/family/family-member2.png"),
  },
];

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        // Delete the message from messages
        // call the server
        console.log(message);
        setMessages (messages.filter(m => m.id !== message.id));
    }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View>
            <FamilyMembersList
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => 
                <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
            />
          </View>
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
