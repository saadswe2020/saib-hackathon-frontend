import { Updates } from 'expo';
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { useState } from 'react';
import OptionsMenu from "react-native-option-menu";





const MoreIcon = require('../assets/more.png');


const Comment = ({
  
  name,
  body,
  admin,
  timeElapsed

}) => {

  const MoreIcon = require('../assets/more.png');


  
  const deleteComment = ()=>{
    console.log("Delete comment")
  }

  
  return (
    <View
    {...admin ? console.log("3 dots"):''}


      style={{
        padding: 20,
        marginVertical: 0,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
        marginHorizontal: 5
      }}>


      <View
        style={{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <View>
          <Text style={{color: 'black'}}>{name}</Text>
          <Text style={{color: 'gray'}}>{timeElapsed}</Text>
          <View style={{marginTop:15, marginBottom:10}}>
          <Text style={{color: 'black', fontSize:14}}>
          {body}
        </Text>
        </View>
        </View>
        
     



        {admin?<OptionsMenu
        button={MoreIcon}
        buttonStyle={{ width: 10, height: 8, margin: 0.5, resizeMode: "contain"}}
        destructiveIndex={0}
        options={["Delete", "Cancel"]}
        actions={[deleteComment]}/>:<></>}
      </View>
    

    </View>
  );
};


export default Comment;