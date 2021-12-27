import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useTheme, useRoute } from '@react-navigation/native'


  

export default function Post({  }) {
    const Rectangle = () => {
        return <View style={styles.rectangle} />;
      };
      
      StyleSheet.create({
        rectangle: {
          width: 100 * 2,
          height: 100,
          backgroundColor: "white",
          borderColor:'red',
          borderBottomWidth:1,
          borderTopWidth:1
        },
      });}