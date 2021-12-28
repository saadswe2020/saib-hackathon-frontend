import { Updates } from 'expo';
import React, { Component } from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
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
      noOfUpVotes={34}
      onPressUpVote={() => {
        Alert.alert('Do up vote action');
      }}
      noOfDownVotes={20}
      onPressDownVote={() => {
        Alert.alert('Do down vote action');
      }}
      noOfComments={3}
      
      onPressComments={() => {
        navigation.navigate('ViewComments');
        
      }}
    />
    </ScrollView>
    
    
    )
  
}