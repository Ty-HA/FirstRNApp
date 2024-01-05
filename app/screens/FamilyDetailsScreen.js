import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

import FamilyCard from "../components/FamilyCard";

import FamilyMembersList from "../components/FamilyMembersList";

const member = [
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
  {
    id: 3,
    title: "Corentin",
    description: "D3",
    image: require("../assets/family/family-member3.png"),
  },
  {
    id: 4,
    title: "Lorie",
    description: "D4",
    image: require("../assets/family/family-member4.png"),
  },
];

export default function FamilyDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <FamilyCard
        title="Marie & Ludovic"
        subTitle="Famille Bernard"
        image={require("../assets/family/family-test.jpg")}
      />

      <View style={styles.FamilyListing}>
        <Text style={styles.title}>
          <Text style={styles.italicText}>4</Text> members
        </Text>

        <View style={styles.familyContainer}>
          {member.map((item) => (
            <View style={{ width: "50%" }}>
              <FamilyMembersList
                key={item.id}
                title={item.title}
                image={item.image}
              />
            </View>
          ))}
        </View>

        <Ionicons name="add-circle" size={70} color={colors.lightBlue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  circleContainer: {
    width: "50%",
    alignItems: "center",
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: "grey",
  },

  familyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  FamilyListing: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 420,
  },

  italicText: {
    fontStyle: "italic",
  },

  title: {
    color: colors.darkBlue,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 3,
    marginBottom: 10,
  },
});
