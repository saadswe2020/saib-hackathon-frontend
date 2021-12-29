import React from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function FloatingButton () {
    

   
    return (
        <View style={styles.container}>
           <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      bottom: 10,
      right: 10,
      height: 70,
      backgroundColor: '#fff',
      borderRadius: 100,
    }}
  >
    <Button> + </Button>
  </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})