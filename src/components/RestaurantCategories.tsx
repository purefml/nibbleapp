import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'
import { Spacer } from '.'
import { restaurantCategories } from '../utils/restaurantCategories'

const RestaurantCategories = (props: any) => {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <View>
        <View style={{
            backgroundColor: COLORS.white,
            borderBottomStartRadius: 7,
            borderBottomEndRadius: 7,
        }}>
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurantCategories}
        keyExtractor={(key: any) => key.id}
        renderItem={({ item, index }: any) => (
          <TouchableOpacity
          onPress={() => { 
            setSelectedCategory(item.name)
            if(selectedCategory === item.name) {
                setSelectedCategory("")
            }
          }}
          activeOpacity={0.85}
          >
              <View>
              <Text style={{
                  textAlign: "center",
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontFamily: FONTS.semiBold,
                  fontSize: 12,
                  color: selectedCategory === item.name ? COLORS.black : COLORS.mutedGray,
              }}>{item.name}</Text>
              {
                item.name === selectedCategory && 
                  <View
                  style={{
                      alignSelf: "center",
                      width: item.name.length > 5 ? 70 : 35,
                      backgroundColor: COLORS.blue,
                      height: 2,
                      bottom: 10,
                      position: "absolute"
                  }}
                  />
              }
              </View>
          </TouchableOpacity>
        )}
      />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
 
})

export default RestaurantCategories