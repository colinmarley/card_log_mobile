import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

export default function CardInfo(props) {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user)

    return (
        <View style={styles.container}>
            <Text>Welcome to the Show! {userData.fullName}</Text>
        </View>
    )
}