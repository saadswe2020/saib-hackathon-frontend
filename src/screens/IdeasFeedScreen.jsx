import { Updates } from 'expo';
import React from 'react';
import Component from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import NavigationBar from 'react-native-navbar';



import OptionsMenu from "react-native-option-menu";
import Button from '../components/Button';
import FloatingButton from '../components/FloatingButton';

// import chevron_up from './assets/chevron_up.png';




export default function IdeasFeedScreen({navigation}) {
 
    return (
      <View> 
            
     <View style={{zIndex:1}}>
       <FloatingButton/>
     </View>
      
      <ScrollView style={{
        marginVertical: 5,
        backgroundColor: 'white',
        marginTop: 30,
      }}
      >
    



      <Card
      admin={true}

      name={'Abdulrahman Ahmed'}
      type={'Software'}
      navigator={navigation}
      timeElapsed={'3d ago'}
      title={'Crowd funding app'}
      body={
        'Raising capital for your next venture can be a major hurdle on the road to bringing your vision to life.  While bank loans and pitching investors are still viable fundraising options, crowdfunding gives you the opportunity to get support from a crowd: a group of individuals who collectively invest in your idea to make it a reality.'
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
                admin={true}

      name={'Abdulaziz Alsaif'}
      type={'Workplace'}
      timeElapsed={'5d ago'}
      title={'Gym at the workplace'}
      body={
        'Some research suggests that actually exercising during working hours can also pump up work performance. A Leeds Metropolitan University study found that workers who visited the gym during working hours were more productive, managed their time better, and felt more work satisfaction.'
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
            admin={true}

      name={'Mohammed Alghamdi'}
      type={'Workplace'}
      timeElapsed={'2d ago'}
      title={'Cryptocurrency investment oppurtunities'}
      body={
        'Cryptocurrency is a good investment if you want to gain direct exposure to the demand for digital currency, while a safer but potentially less lucrative alternative is to buy the stocks of companies with exposure to cryptocurrency. Lets examine the pros and cons of investing in cryptocurrency.'
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
    
    </View>
    
    )
  
}
