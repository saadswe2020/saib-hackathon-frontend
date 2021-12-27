import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { Text } from 'react-native-paper'
import TextInput from '../components/TextInput'
import { useState } from 'react';




export default function SubmitIdeaScreen({ navigation }) {


    const [idea, setIdea] = useState({ value: '' })
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Marketing', value: 'marketing'},
      {label: 'Philanthropy', value: 'philanthropy'}
    ]);


    const onSubmitPressed = () => {
    
       
          return
        
        navigation.reset({
          index: 0,
          routes: [{ name: 'IdeasFeedScreen' }],
        })
      }
    return (
        <Background>
    <Header>Share your idea with the world</Header>
    <Text>Idea type: </Text>
 
    <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}/>

        <TextInput
        label="Idea"
        value={idea.value}
        onChangeText={(text) => setIdea({ value: text})}
        autoCapitalize="on" />
        <Button
        mode="contained"
        onPress={onSubmitPressed}
        style={{ marginTop: 24 }}>
        Submit
      </Button>







        </Background>
        
    )
}
