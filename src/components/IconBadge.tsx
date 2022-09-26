import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';

const IconBadge = (props) => {
  const { 
    name,
    size,
    color,
    customStyle
   } = props
  return (
    <View>
      <Icon
          name={name}
          size={size}
          color={color}
          style={customStyle}
        />
    </View>
  )
}

export default IconBadge