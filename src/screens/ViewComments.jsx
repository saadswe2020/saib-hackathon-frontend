import { Updates } from 'expo';
import React, { Component } from 'react';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
import Comment from '../components/Comment';
import { useState } from 'react';
import CardExpanded from '../components/CardExpanded';

// import chevron_up from './assets/chevron_up.png';




export default function ViewComments({navigation}) {
 
    return (
      <ScrollView style={{
        marginVertical: 5,
        backgroundColor: 'white',
        marginTop: 30,
      }}
      >
      <CardExpanded
      admin={true}

      name={'Abdulrahman Ahmed'}
      type={'Software'}
      navigator={navigation}
      timeElapsed={'3d ago'}
      title={'Crowd funding app'}
      body={
        'Raising capital for your next venture can be a major hurdle on the road to bringing your vision to life.  While bank loans and pitching investors are still viable fundraising options, crowdfunding gives you the opportunity to get support from a crowd: a group of individuals who collectively invest in your idea to make it a reality.'
      }
    />
   
<Comment

      name={'Abdulaziz Alsaif'}
      body={
        'I like this idea very much, thank you for sharing it!'
      }
      timeElapsed={'1d ago'}
      admin={true}

    />
    <Comment
          admin={true}

      name={'Abdullah Naif'}
      body={
        'Wow genius idea...'
      }
      timeElapsed={'2d ago'}

    />

<Comment
      admin={true}

      name={'Mohammed Alghamdi'}
      body={
        'I think this idea can have many wonderful real-world applications, looking forward to seeing them implemented one day! Also, research your competitions before getting started!'
      }
      timeElapsed={'1d ago'}
    />


<Comment
      admin={true}

      name={'Faisal Alharthi'}
      body={
        'Sint magna mollit amet duis sit consequat nulla commodo elit eiusmod. Id ex ex deserunt ipsum ea id Lorem id ea elit. Magna duis commodo deserunt do. Minim duis ipsum dolore reprehenderit reprehenderit reprehenderit duis. Sit velit magna velit est do aliquip nostrud ipsum ipsum laboris aute.'
      }
      timeElapsed={'1d ago'}
    />

<Comment
      name={'Lorem Two'}
      body={
        'Sint magna mollit amet duis sit consequat nulla commodo elit eiusmod. Id ex ex deserunt ipsum ea id Lorem id ea elit. Magna duis commodo deserunt do. Minim duis ipsum dolore reprehenderit reprehenderit reprehenderit duis. Sit velit magna velit est do aliquip nostrud ipsum ipsum laboris aute.'
      }
      timeElapsed={'1d ago'}
    />
 
    </ScrollView>

    
    
    
    )
  
}