import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

export default function PetCard({ title, image }) {
  return (

    <View style={styles.container}>
      <View style={styles.PetImageContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.image}>
            <Image source={image} style={styles.avatar} resizeMode="cover" />
          </View>
        </View>

        <View style={styles.pet}>
          <AppText style={styles.title}>{title}</AppText>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 200,
  },

    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },

  image: {
    marginLeft: 'auto',
    backgroundColor: colors.light,
    borderColor: colors.white,
    borderWidth: 10,
    width: 330,
    height: 220,
    borderRadius: 35,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },

  pet: {
    marginTop: 20,
    alignItems: "center",
  },

  PetImageContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 25,

  },

  title: {
    color: colors.textPrimary,
    fontSize: 38,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: -5,
  },
});
