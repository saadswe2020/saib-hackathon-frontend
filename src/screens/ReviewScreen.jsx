import { Updates } from 'expo';
import React, { Component } from 'react';
import Card from '../components/Card';
import {TouchableOpacity, Text, View, Image,ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
// import chevron_up from './assets/chevron_up.png';




export default function ReviewScreen({navigation}) {
    const onReviewPressed = () => {navigation.navigate('IdeasFeedScreen')}
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '★', value: '20'},
      {label: '★★', value: '40'},
      {label: '★★★', value: '60'},
      {label: '★★★★', value: '80'},
      {label: '★★★★★', value: '100'}
    ]);
  
    return (
        <View style= {{
            backgroundColor: 'white',
            flex:1,
            flexDirection:'column'
        }}> 
    
        <View style={{
            marginTop:50
        }}> 
        <Header>
          Review Submission 
      </Header>
        
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
        </View>
      <View style={{
        marginTop: 10,
        backgroundColor: 'white',
        marginHorizontal:15
      }}
      >
      

      <View style={{paddingBottom:10}}>

     

<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Review Application"
    />
 </View>
 <View style={{paddingBottom:10}}>

<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Review Cost"
    />
     </View>

<DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Review Feasability"
    />


<Button mode="contained" onPress={onReviewPressed}>
          Submit Review
        </Button>
    </View>
    </View>
    
    
    )
  
}
