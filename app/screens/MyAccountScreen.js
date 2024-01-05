import React from "react";

import { StyleSheet, View, ImageBackground, Text } from "react-native";

import Screen from "../components/Screen";
import MemberInfo from "../components/MemberInfo";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/mobile-background.jpg")}
    >
      <Screen>
        <View style={styles.container}>
          <MemberInfo
            image={require("../assets/family/family-member2.png")}
            title="Jessica"
            email="Jessica@yuli.io"
          />

          <View style={styles.iconContainer}>
            <View>
              <View style={styles.row}>
                <Icon
                  iconName="format-list-bulleted"
                  backgroundColor={colors.primary}
                />
                <Text style={styles.text}>My tasks</Text>
              </View>
              <View style={{ width: "120%", marginLeft: -20 }}>
                <ListItemSeparator />
              </View>
              <View style={styles.row}>
                <Icon iconName="calendar-account" backgroundColor={colors.green} />
                <Text style={styles.text}>My appointment</Text>
              </View>
              <View style={{ width: "120%", marginLeft: -20 }}>
                <ListItemSeparator />
              </View>
              <View style={styles.row}>
                <Icon iconName="email" backgroundColor={colors.secondary} />
                <Text style={styles.text}>My messages</Text>
              </View>
            </View>
          </View>

          <View style={styles.iconLogout}>
            <View style={styles.row}>
              <Icon iconName="logout" backgroundColor={colors.logout} />
              <Text style={styles.text}>Log out</Text>
            </View>
          </View>
        </View>
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

  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    position: "absolute",
    backgroundColor: colors.white,
    width: "100%",
    paddingLeft: 20,
    marginTop: 240,
  },

  iconLogout: {
    position: "absolute",
    backgroundColor: colors.white,
    width: "100%",
    paddingLeft: 20,
    marginTop: 480,
  },

  text: {
    marginLeft: 10,
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyAccountScreen;
