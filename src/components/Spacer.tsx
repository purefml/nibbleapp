import { View, Text } from 'react-native'
import React from 'react'

const Spacer = (props) => {
    const { 
        paddingHorizontal,
        paddingVertical,
        marginHorizontal,
        marginVertical,
    } = props
  return (
    <View
    style={{
        paddingHorizontal: paddingHorizontal || 0,
        paddingVertical: paddingVertical || 0,
        marginHorizontal: marginHorizontal || 0,
        marginVertical: marginVertical || 0
    }}
    />
  )
}

export default Spacer