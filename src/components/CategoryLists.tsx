import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { categories } from '../utils/categories'
import { FlatList } from 'react-native-gesture-handler'
import { SIZES, COLORS, FONTS } from '../constants'
import { SubText } from '.'

const CategoryLists = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories} 
        showsVerticalScrollIndicator={false}
        keyExtractor={(key: any) => key.id}
        renderItem={({item, index}: any) => (
          <View style={{
              marginLeft: index === 0 ? 10 : 0,
              marginRight: 15,
          }}>
              <View style={styles.categoryContainer}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                    width: SIZES.padding * 1.5,
                    height: SIZES.padding * 1.5,
                }}
                />
              </View>
              <SubText
                text={item.categoryName}
                font={FONTS.regular}
                size={12}
                customStyle={{ alignSelf: "center", marginVertical: 5 }}
              />

          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    categoryContainer: {
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: COLORS.white,
      elevation: 1.5,
      padding: 15
    }
})

export default CategoryLists