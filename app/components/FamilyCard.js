import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText/AppText";

export default function FamilyCard({ title, subTitle, image }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/family/family-background.png")}
    >
      <View style={styles.FamilyAvatarContainer}>
        <View style={styles.ellipseContainer}>
          <View style={styles.ellipse}>
            <Image source={image} style={styles.avatar} resizeMode="stretch" />
          </View>
        </View>

        <View style={styles.family}>
          <AppText style={styles.title}>{title}</AppText>

          <AppText
            style={styles.subTitle}
          >
            {subTitle}
          </AppText>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },

  avatar: {
    width: "100%",
    height: 200,
  },

  ellipse: {
    backgroundColor: colors.white,
    width: 150,
    height: 150,
    borderRadius: 75,
    transform: [{ scaleX: 2 }],
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  ellipseContainer: {
    shadowColor: colors.darkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  family: {
    marginTop: 20,
    alignItems: "center",
  },

  FamilyAvatarContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 105,
    alignItems: "center",
  },

  subTitle: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },

  title: {
    color: colors.textPrimary,
    fontSize: 36,
    fontWeight: "bold",
  },
});
