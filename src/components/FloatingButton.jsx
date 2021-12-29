import React from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "./Button";
import { IconButton } from "react-native-paper";
import { theme } from '../core/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function FloatingButton ({navigation}) {
    

    const onButtonPress = () => {navigation.navigate('CreateIdeaScreen')}

    return (
        <View>
           <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: 'black',
      backgroundColor:'#ffe404',
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
      position: 'absolute',
      bottom:0,
      left:280,
      top:650,
      height: 70,
      borderRadius: 100,
      zIndex:1
    }}
  >
        <Button onPress={onButtonPress}>
        <Text style={{color: 'black', fontSize:24}}>
            +
            </Text>
        </Button>
        

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