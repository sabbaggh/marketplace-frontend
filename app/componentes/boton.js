import '../../global.css'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Boton = ({texto,bg}) => {
  return (
    <TouchableOpacity className={`p-3 ${bg} rounded`}>
      <Text className='text-blue-500 text-center text-3xl'>{texto}</Text>
    </TouchableOpacity>
  )
}

export default Boton