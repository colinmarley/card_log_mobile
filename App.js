import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from '@react-native-firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './src/firebase/firebaseConfig'
import { collection, doc, getDocs } from 'firebase/firestore'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import {decode, encode} from 'base-64'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './app/store';
import { setUserData } from './src/features/user/userSlice';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

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
        <Stack.Navigator>
          { (userData?.id) ? (
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
        </Stack.Navigator>
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
