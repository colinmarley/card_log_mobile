import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './src/firebase/firebaseConfig'
import { collection, doc, getDocs } from 'firebase/firestore'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import { setUserData } from './src/features/user/userSlice';
import CardCollection from './src/screens/CardCollection/CardCollection';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Tab = createBottomTabNavigator();

function App() {

  const [loading, setLoading] = useState(true)

  const userData = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("UseEffect Begins")
    setLoading(false)
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
      <NavigationContainer>
        <Tab.Navigator>
          { (userData?.id) ? (
            <>
              <Tab.Screen name="HomeScreen" component={HomeScreen}/>
              <Tab.Screen name="CardCollection" component={CardCollection}/>
            </>
          ) : (
            <>
              <Tab.Screen name="Login" component={LoginScreen} />
              <Tab.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default function AppWithProvider() {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
