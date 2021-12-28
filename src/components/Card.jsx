import { Updates } from 'expo';
import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import { useState } from 'react';
import OptionsMenu from "react-native-option-menu";



// import chevron_up from './assets/chevron_up.png';
const MoreIcon = require('../assets/more.png');


const Card = ({
  
  name,
  type,
  timeElapsed,
  title,
  body,
  noOfUpVotes,
  onPressUpVote,
  noOfDownVotes,
  onPressDownVote,
  noOfComments,
  onPressComments,
  admin,
  navigator
}) => {

  const MoreIcon = require('../assets/more.png');
  const review = ()=>{ 
    navigator.navigate('ReviewScreen')
  };

  
  const deletePost = ()=>{
    console.log("Delete post")
  }

  
  return (
    <View
    {...admin ? console.log("3 dots"):''}


      style={{
        padding: 20,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ffe404',
        marginTop: 5,
        marginHorizontal: 15
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
        destructiveIndex={1}
        options={["Review", "Delete", "Cancel"]}
        actions={[review, deletePost]}/>:<></>}
      </View>
      <View>
      <Text style={{color: 'gray'}}>{type}</Text>

      </View>

      <View style={{marginTop: 15}}>

        <Text style={{color: 'black', fontWeight:'bold'}}>
          {title}
        </Text>
      </View>

      <View style={{marginVertical: 20}}>
        <Text style={{color: 'black'}} numberOfLines={3}>
          {body}
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={onPressUpVote}>
            <Image
              style={{width: 25, height: 25}}
              source={ {uri: "https://cdn-icons-png.flaticon.com/512/467/467293.png" }}
            />
            <Text style={{color: 'gray', marginLeft:10}}>{noOfUpVotes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginLeft: 30}}
            onPress={onPressDownVote}>
            <Image
              style={{width: 25, height: 25}}
              source={ {uri:'https://cdn-icons-png.flaticon.com/512/467/467264.png'}}
            />
            <Text style={{color: 'gray', marginLeft:10}}>{noOfDownVotes}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onPressComments}
          style={{
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 20, height: 20}}
            source={{uri:'https://www.pngall.com/wp-content/uploads/8/Comment-PNG-Picture.png'}}
          />
          <Text style={{color: 'gray', marginLeft: 5}}>{noOfComments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Card;