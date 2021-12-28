import { Updates } from 'expo';
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { useState } from 'react';



// import chevron_up from './assets/chevron_up.png';
const MoreIcon = require('../assets/more.png');


const Comment = ({
  
  name,
  body,
  admin,
  timeElapsed

}) => {

  const MoreIcon = require('../assets/more.png');


  
  const deletePost = ()=>{
    console.log("Delete post")
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
        </View>



        {admin?<OptionsMenu
        button={MoreIcon}
        buttonStyle={{ width: 10, height: 8, margin: 0.5, resizeMode: "contain"}}
        destructiveIndex={0}
        options={["Delete", "Cancel"]}
        actions={[deletePost]}/>:<></>}
      </View>
    

    </View>
  );
};


export default Comment;