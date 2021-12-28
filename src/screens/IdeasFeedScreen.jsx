import { Updates } from 'expo';
import React, { Component } from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
// import chevron_up from './assets/chevron_up.png';




export default function IdeasFeedScreen({navigation}) {
 
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
          <Card
      name={'Abdulaziz Alsaif'}
      type={'Workplace'}
      timeElapsed={'5d ago'}
      title={'My Idea'}
      body={
        'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
      }
      noOfUpVotes={41}
      onPressUpVote={() => {
        Alert.alert('Do up vote action');
      }}
      noOfDownVotes={5}
      onPressDownVote={() => {
        Alert.alert('Do down vote action');
      }}
      noOfComments={6}
      onPressComments={() => {
        navigation.navigate('ViewComments')
      }}
    />
      <Card
      name={'Mohammed Alghamdi'}
      type={'Workplace'}
      timeElapsed={'2d ago'}
      title={'My Idea'}
      body={
        'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
      }
      noOfUpVotes={20}
      onPressUpVote={() => {
        Alert.alert('Do up vote action');
      }}
      noOfDownVotes={4}
      onPressDownVote={() => {
        Alert.alert('Do down vote action');
      }}
      noOfComments={5}
      onPressComments={() => {
        navigation.navigate('ViewComments')
      }}
    />
      <Card
      name={'Saad Aldossari'}
      type={'Workplace'}
      timeElapsed={'1d ago'}
      title={'My Idea'}
      body={
        'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
      }
      noOfUpVotes={10}
      onPressUpVote={() => {
        Alert.alert('Do up vote action');
      }}
      noOfDownVotes={4}
      onPressDownVote={() => {
        Alert.alert('Do down vote action');
      }}
      noOfComments={2}
      onPressComments={() => {
        navigation.navigate('ViewComments')
      }}
    />


<Card
      name={'Abdulrahman Almanie'}
      type={'Workplace'}
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
        navigation.navigate('ViewComments')
      }}
    />
          <Card
      name={'John Smith'}
      type={'Workplace'}
      timeElapsed={'5d ago'}
      title={'My Idea'}
      body={
        'Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test '
      }
      noOfUpVotes={41}
      onPressUpVote={() => {
        Alert.alert('Do up vote action');
      }}
      noOfDownVotes={5}
      onPressDownVote={() => {
        Alert.alert('Do down vote action');
      }}
      noOfComments={6}
      onPressComments={() => {
        navigation.navigate('ViewComments')
      }}
    />
    </ScrollView>
    
    
    )
  
}
