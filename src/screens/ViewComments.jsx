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
      admin={true}

    />
    <Comment
      name={'Abdullah Naif'}
      body={
        'Wow genius idea...'
      }
      timeElapsed={'1d ago'}

    />

<Comment
      name={'Mohammed Alghamdi'}
      body={
        'I think this idea can have many wonderful real-world applications, looking forward to seeing them implemented one day! Also, Ad laboris id culpa ipsum. Nulla amet consectetur ullamco sint ipsum labore duis. Minim laboris voluptate deserunt Lorem do excepteur labore tempor veniam cillum in laboris. Id ipsum nostrud cupidatat ullamco incididunt reprehenderit laboris est occaecat. Ullamco tempor elit aute qui aliqua consectetur laborum id dolor amet. Non cupidatat elit cupidatat culpa aute. Culpa est cupidatat anim deserunt nostrud minim irure est mollit adipisicing.'
      }
      timeElapsed={'1d ago'}
    />


<Comment
      name={'Lorem Ipsum'}
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