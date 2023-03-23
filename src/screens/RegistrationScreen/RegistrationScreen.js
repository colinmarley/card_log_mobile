import { collection, doc, getDocs, setDoc, addDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { auth, db, firebase } from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';

import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../features/user/userSlice';
import { setRegistrationConfirmPassword, setRegistrationEmail, setRegistrationFullName, setRegistrationPassword } from '../../features/user/registrationSlice';

export default function RegistrationScreen({navigation}) {

    const dispatch = useDispatch()
    const email = useSelector((state) => state.registration.email)
    const fullName = useSelector((state) => state.registration.fullName)
    const password = useSelector((state) => state.registration.password)
    const confirmPassword = useSelector((state) => state.registration.confirmPassword)

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                console.log("Test1: ", data)
                console.log(db)
                const usersRef = collection(db, "users")
                console.log(usersRef)
                addDoc(collection(db, "users"), data)
                    .then(
                        (doc) => {
                            console.log("Successfully Added user data to 'users' collection")
                            dispatch(setUserData(data))
                            navigation.navigate('HomeScreen');
                        })
                    .catch((error) => console.log(error))
            })
            .catch((error) => {
                console.warn("Error Registering user")
                console.error(error)
                alert(error)
        });
    }

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => dispatch(setRegistrationFullName(text))}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => {
                        console.log(text)
                        dispatch(setRegistrationEmail(text))
                    }}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => dispatch(setRegistrationPassword(text))}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => dispatch(setRegistrationConfirmPassword(text))}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}