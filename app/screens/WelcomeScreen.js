import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../config/colors";

import AppText from "../components/AppText";

import Button from "../components/Button";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mobile-background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-friends-white.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={{ alignItems: "center", top: 30 }}>
          <AppText>Connectez-vous</AppText>
          <Text
            style={{
              color: colors.textPrimary,
              fontSize: 16,
              fontWeight: "bold",
              top: 0,
            }}
          >
            pour accéder à votre Pet Planner
          </Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => console.log("Tapped") }/>
        <Button title="Register" color={colors.secondary} />
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

  buttonsContainer: {
    position: "absolute",
          top: "45%",
          width: "100%",
          alignItems: "center",
  },

  logo: {
    width: 350,
    height: 200,
  },

  logoContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
  },

});
