import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
  IdeasFeedScreen,
  ReviewScreen,
  ViewComments,
  CreateIdeaScreen
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ResetPasswordScreen" component={ ResetPasswordScreen }/>
          <Stack.Screen name="IdeasFeedScreen" component={ IdeasFeedScreen }/>
          <Stack.Screen name="ReviewScreen" component={ ReviewScreen }/>
          <Stack.Screen name="ViewComments" component={ ViewComments }/>
          <Stack.Screen name="CreateIdeaScreen" component={ CreateIdeaScreen }/>


          

          

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}