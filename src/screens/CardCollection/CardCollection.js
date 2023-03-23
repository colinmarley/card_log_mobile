import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

export default function CardCollection(props) {

    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user)

    return (
        <View style={styles.container}>
            <Text>Card Collection {userData.fullName}</Text>
        </View>
    )
}