import '../../global.css'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Boton = ({texto,bg, redirect}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className={`p-3 ${bg} rounded`} onPress={() => navigation.navigate(redirect)}>
      <Text className='text-blue-500 text-center text-3xl'>{texto}</Text>
    </TouchableOpacity>
  )
}

export default Boton