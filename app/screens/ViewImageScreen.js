import {
    
    View,
    SafeAreaView,
    Image,
    StyleSheet,
    
  } from 'react-native';

  import colors from '../config/colors';
  
  
  
  export default function ViewImageScreen() {
    
  
    return (
      <SafeAreaView style={styles.container}>

      <Image 
        source={require("../assets/carte1.png")} 
        style={styles.image} 
        resizeMode="contain"/>

           
      <View style={styles.closeIcon}/>
      <View style={styles.deleteIcon}/>     


        
      
    </SafeAreaView>
   

  
    );
  }

  const styles = StyleSheet.create({
    closeIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.primary,
      position: "absolute",
      top: 40,
      left: 30,
    },
    container: {
      flex: 1,
      backgroundColor: colors.darkBlue,
      alignItems: "center",
      justifyContent: "center",
    },
    deleteIcon: {
      width: 50,
      height: 50,
      backgroundColor: colors.secondary,
      position: "absolute",
      top: 40,
      right: 30,
    },
    image: {
      width:"100%",
      height:"100%",
      alignSelf:"center"
    },
    
    
  })