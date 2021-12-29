import { Updates } from 'expo';
import React, { Component } from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput2 from '../components/TextInput2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import chevron_up from './assets/chevron_up.png';




export default function CreateIdeaScreen({navigation}) {
    const onSubmitPressed = () => {navigation.navigate('IdeasFeedScreen')}
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Workplace', value: 'workplace'},
      {label: 'Social', value: 'social'},
      {label: 'Philanthropy', value: 'philanthropy'}
    ]);
  
    return (
        <View style= {{
            backgroundColor: 'white',
            flex:1,
            flexDirection:'column'
        }}> 
    
        <View style={{
            marginTop:55
        }}> 
        <Header>
          Post your idea 
      </Header>
      <View  style={{
            height:40,
            marginTop:30,
            marginBottom:15,
            marginHorizontal:15,
            paddingBottom:4,
            borderColor:'black'         
        }}> 

        <TextInput2 placeholder="Type your title here">

        </TextInput2>

        

        </View>
        <View style={{
            height:40,
            marginTop:15,
            marginBottom:15,
            marginHorizontal:15,
            paddingBottom:4,
            borderColor:'black'         
        }}>
<TextInput2 placeholder="Type your idea here">

</TextInput2>
        </View>
        </View>
      <View style={{
        marginTop: 30,
        backgroundColor: 'white',
        marginHorizontal:15
      }}
      >
      

      

<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Pick category"
    />


<Button mode="contained" onPress={onSubmitPressed}>
          Submit Idea
        </Button>
    </View>
    </View>
    
    
    )
 
  
}

