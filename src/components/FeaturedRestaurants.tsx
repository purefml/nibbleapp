import { View, Text, FlatList, Image, ToastAndroid, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { featured } from '../utils/featured'
import { COLORS, SIZES, FONTS } from '../constants'
import { HeadlineText, IconBadge, Spacer, SubText } from '.';
import { navigate } from '../navigation/GlobalNavigation';

const FeaturedRestaurants = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HeadlineText
          font={FONTS.semiBold}
          size={18}
          color={COLORS.primary}
          text="Featured Restaurants"
        />
        <View style={styles.viewMoreContainer}>
          <SubText
            font={FONTS.regular}
            color={COLORS.lightBlue}
            size={12}
            text="View more"
            customStyle={{ top: 1.5 }}
          />
          <IconBadge
            name="chevron-right"
            size={12}
            color={COLORS.lightBlue}
            customStyle={{ top: 1.5, paddingRight: 2 }}
          />
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featured}
        showsVerticalScrollIndicator={false}
        keyExtractor={(key: any) => key.id}
        renderItem={({ item, index }: any) => (
          <TouchableOpacity style={[styles.featuredContainer, {
            marginLeft: index === 0 ? 10 : 0,
          }]}
          onPress={() => { 
            index === 0 ? 
            navigate("RestaurantPage", { restaurantInfo: item }) 
            : ToastAndroid.show("Not Available in Demo", ToastAndroid.SHORT);
          }}
          activeOpacity={0.85}
          >
            <View style={styles.featuredBody}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={{
                  width: SIZES.padding * 12,
                  height: SIZES.padding * 5.5,
                }}
              />
              <View style={{
                paddingHorizontal: 10,
                paddingTop: 10,
              }}>
                <HeadlineText
                  color={COLORS.primary}
                  paddingBottom={1}
                  font={FONTS.semiBold}
                  size={15}
                  text={item.restoName}
                />
                <Text style={{
                  fontSize: 10,
                  fontFamily: FONTS.regular,
                  color: COLORS.mutedGray
                }}>
                  {item.typeOfResto} <Text style={{
                    color: COLORS.primary
                  }}>⬥</Text> Type of restaurant
                </Text>
              </View>
              <View style={styles.featuredInfo}>
                <IconBadge
                  name="clock"
                  size={12}
                  color={COLORS.blue}
                  customStyle={{ paddingRight: 2 }}
                />
                <SubText 
                  font={FONTS.regular}
                  color={COLORS.mutedGray}
                  size={10}
                  text={item.deliveryTime}
                />
                <Spacer paddingHorizontal={5} />
                <IconBadge
                  name="map-marker"
                  size={12}
                  color={COLORS.danger}
                  customStyle={{ paddingRight: 2 }}
                />
                <SubText 
                  font={FONTS.regular}
                  color={COLORS.mutedGray}
                  size={10}
                  text={item.distance}
                />
                <Spacer paddingHorizontal={5} />
                <IconBadge
                  name="star"
                  size={12}
                  color={COLORS.yellow}
                  customStyle={{ paddingRight: 2 }}
                />
                <SubText 
                  font={FONTS.regular}
                  color={COLORS.mutedGray}
                  size={10}
                  text={item.rating}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    flex: 1
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  viewMoreContainer: {
    alignItems: "center",
    bottom: 2,
    flexDirection: "row"
  },
  featuredContainer: {
    marginRight: 15,
    marginBottom: 5
  },
  featuredBody: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    elevation: 1.5,
  },
  featuredInfo: {
    paddingTop: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10
  }
})

export default FeaturedRestaurants