import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

export default function FamilyMembersList({image, legend}) {
    return (
        
          <View style={styles.memberContainer}>
            
            <View style={styles.circleContainer}>
              <Image
                source={image}
                style={styles.circle}
              />
              <Text style={styles.legend}>{legend}</Text>
            </View>
                      
        </View>      
     
    );
  }

const styles = StyleSheet.create({

  circleContainer: {
    width: "50%",
    alignItems: "center",
    marginBottom: 20,
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "grey",
  },

  legend: {
    color: colors.textPrimary,
    fontWeight : "bold",
    fontSize: 16,
    marginTop: 3,
  },

  memberContainer: {
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
});

