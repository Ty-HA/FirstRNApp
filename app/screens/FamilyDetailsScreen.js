import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

import FamilyCard from "../components/FamilyCard";
// FamilyMembersList component to do later and import here
import FamilyMembersList from "../components/FamilyMembersList";




export default function FamilyDetailsScreen(props) {
  return (
    <View style={styles.container}>
            <FamilyCard 
    title="Marie & Ludovic"
    subTitle="Famille Bernard"
    image={require("../assets/family/family-test.jpg")}/>
      
      <View style={styles.FamilyListing}>
      <Text style={styles.legend}><Text style={styles.italicText}>4</Text> members</Text>

      <View style={styles.familyContainer}>
      <FamilyMembersList legend="Evan" image={require("../assets/family/family-member1.png")}/>
      <FamilyMembersList legend="Jessica" image={require("../assets/family/family-member2.png")}/>
      <FamilyMembersList legend="Corentin" image={require("../assets/family/family-member3.png")}/>
      <FamilyMembersList legend="Lorie" image={require("../assets/family/family-member4.png")}/>
      </View>
        
        {/* 
        <View style={styles.familyContainer}>

          <View style={styles.circleContainer}>
            <Image
              source={require("../assets/family/family-member1.png")}
              style={styles.circle}
            />
            <Text style={styles.legend}>Evan</Text>
          </View>

          <View style={styles.circleContainer}>
            <Image
              source={require("../assets/family/family-member2.png")}
              style={styles.circle}
            />
            <Text style={styles.legend}>Jessica</Text>
          </View>

          <View style={styles.circleContainer}>
            <Image
              source={require("../assets/family/family-member3.png")}
              style={styles.circle}
            />
            <Text style={styles.legend}>Corentin</Text>
          </View>
          <View style={styles.circleContainer}>
            <Image
              source={require("../assets/family/family-member4.png")}
              style={styles.circle}
            />
            <Text style={styles.legend}>Lorie</Text>
          </View>
        </View>
        */}
        <Ionicons name="add-circle" size={54} color={colors.lightBlue} />
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
    marginBottom: 20,
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: "grey",
  },

  familyContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  FamilyListing: {
    position: "absolute",
    top: 400,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  italicText: {
    fontStyle: 'italic',
  },

  legend: {
    color: colors.textPrimary,
    fontWeight : "bold",
    fontSize: 16,
    marginTop: 3,
    marginBottom: 10,
  },
});
