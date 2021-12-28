import { Updates } from 'expo';
import React, { Component } from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
import Comment from '../components/Comment';
import { useState } from 'react';

// import chevron_up from './assets/chevron_up.png';




export default function ViewComments({navigation}) {
 
    return (
      <ScrollView style={{
        marginVertical: 5,
        backgroundColor: 'white',
        marginTop: 30,
      }}
      >
      <Card
      admin={true}

      name={'Abdulrahman Ahmed'}
      type={'Workplace'}
      navigator={navigation}
      timeElapsed={'3d ago'}
      title={'My Idea'}
      body={
        'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
      }
    />
   
<Comment
      name={'Abdulaziz Alsaif'}
      body={
        'I like this idea very much, thank you for sharing it!'
      }
      timeElapsed={'1d ago'}
    />
    <Comment
      name={'Abdullah Naif'}
      body={
        'Wow genius idea...'
      }
      timeElapsed={'1d ago'}

    />
    </ScrollView>
    
    
    )
  
}