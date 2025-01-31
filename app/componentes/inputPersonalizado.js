import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function inputPersonalizado({type, value, setValue, secure}) {
  return (
    <View className="w-full">
      <TextInput placeholder={type} value={value} onChangeText={value => setValue(value)} className="p-2 text-left" secureTextEntry={secure}/>
    </View>
  )
}