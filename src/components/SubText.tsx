import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const SubText = (props) => {
    const { 
        text,
        font,
        color,
        paddingVertical,
        paddingHorizontal,    
        marginVertical,
        marginHorizontal,
        paddingBottom,
        paddingTop,
        paddingLeft,
        paddingRight,
        size,
        customStyle
    } = props


  return (
    <View>
      <Text
      style={[{
          fontFamily: font || FONTS.regular,
          color: color || COLORS.primary,
          fontSize: size,
          paddingVertical: paddingVertical || 0,
          paddingHorizontal: paddingHorizontal || 0,    
          marginVertical: marginVertical || 0,
          marginHorizontal: marginHorizontal || 0,
          paddingBottom: paddingBottom || 0,
          paddingTop: paddingTop || 0,
          paddingLeft: paddingLeft || 0,
          paddingRight: paddingRight || 0,
      }, customStyle]}
      >
          {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SubText