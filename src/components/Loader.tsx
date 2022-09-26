import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={{
        flex: 1,
        height: SIZES.height,
        width: SIZES.width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.backgroundColor
    }}>
      <LottieView source={require('../assets/images/loading.json')} autoPlay loop />
    </View>
  )
}

export default Loader