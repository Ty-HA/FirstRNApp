import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  useWindowDimensions
  
} from 'react-native';

import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log("app started");
  // console.log(Dimensions.get("screen"));
  console.log(useWindowDimensions());
  console.log(useDeviceOrientation());
  
  const orientation = useDeviceOrientation();
 

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View style={{
        backgroundColor: "white",
        width: "100%",
        height: orientation === 'landscape' ? "100%" : "30%",
      }}>
       
      </View>

      {
      /*
      <TouchableOpacity onPress={() => console.log("img pressed")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://cdn.shopify.com/s/files/1/0606/4662/1406/files/Yuli-white-paw-icon.png?v=1692259879",
          }}
        />
      </TouchableOpacity>


      <Button
      
        color={"orange"}
        title="Click me"
        onPress={() => alert("button pressed")}
        
      />
      <Button
        color={"green"}
        title="2d Button"
        onPress={() =>
          Alert.alert("Alert title", "My message", [
            {
              text: "Yes",
              onPress: () => console.log("Yes"),
            },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      />
      <Button
        color={"white"}
        title="3d Button"
        onPress={() =>
          Alert.prompt("Alert title", "My message", (text) => console.log(text))
        }
      />
      */
}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "dodgerblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // platform specific code
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});