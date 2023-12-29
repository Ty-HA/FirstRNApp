import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

export default function FamilyCard(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/family/family-background.png")}
    >
      <View style={styles.FamilyAvatarContainer}>
        
        <View style={styles.ellipse}>
        <Image
            source={require("../assets/family/family-test.jpg")}
            style={styles.avatar}
            resizeMode="stretch"
          />
          
        </View>

        <View style={styles.family}>
          <AppText>Marie & ludovic</AppText>

          <Text
            style={{
              color: colors.white,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Famille Bernard
          </Text>
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
    transform: [
      {scaleX: 2}
    ],
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  family: {
    marginTop: 10,
    alignItems: "center",
  },

  FamilyAvatarContainer: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 85,
    alignItems: "center",
  },
});