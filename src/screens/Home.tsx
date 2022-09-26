import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { AccountHeader, SearchAndSort, FeaturedRestaurants, CategoryLists, Spacer, HeadlineText, SubText } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { allrestaurants } from "../utils/allrestaurants"

const Home = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={allrestaurants}
        ListHeaderComponent={
          <View style={styles.container}>
            <AccountHeader />
            <SearchAndSort />
            <View style={{
              paddingHorizontal: 10
            }}>
              <Image
                source={require('../assets/images/highlight.png')}
                resizeMode="cover"
                style={{
                  width: SIZES.padding * 16,
                  height: SIZES.height / 4,
                  borderRadius: 20
                }}
              />
              <Text style={styles.highlightHeader}>
                A Chick Flick
              </Text>
              <View style={styles.highlightInfo}>
                <Text style={{
                  fontFamily: FONTS.regular,
                  color: COLORS.primary,
                  fontSize: 11,
                }}>
                  Enjoy 50% off and more from every restaurant with chicken meals!
                </Text>
              </View>
            </View>

            <CategoryLists />
            <FeaturedRestaurants />

            {/* /ALL RESTAURANT HEADER */}
            <View style={styles.allRestoHeader}>
              <HeadlineText
                font={FONTS.semiBold}
                size={18}
                color={COLORS.primary}
                text="All Restaurants"
              />
              <View style={{
                alignItems: "center",
                bottom: 2,
                flexDirection: "row"
              }}>
                <SubText
                  text="View More"
                  color={COLORS.lightBlue}
                  size={12}
                  customStyle={{ top: 1.5 }}
                />
                <Icon
                  name="chevron-right"
                  size={12}
                  color={COLORS.lightBlue}
                  style={{ top: 1.5, paddingRight: 2 }}
                />
              </View>
            </View>
          </View>
        }
        keyExtractor={(key: any) => key.id}
        renderItem={({ item, index }: any) => (
          <View>
            <TouchableOpacity
              onPress={() =>  ToastAndroid.show("Not Available in Demo", ToastAndroid.SHORT)}
              activeOpacity={0.7}
              style={styles.restoContainer}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.img}
              />
              <View style={styles.restoInfo}>
                <Text style={styles.newBadge}>
                  NEW
                </Text>
                <Text style={{
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                }}>{item.restoName}</Text>
                <Text style={{
                  marginTop: 5,
                  fontSize: 10,
                  fontFamily: FONTS.regular,
                  color: COLORS.mutedGray
                }}>
                  {item.typeOfResto} <Text style={{
                    color: COLORS.primary
                  }}>⬥</Text> Type of restaurant
                </Text>
                <View style={{
                  flexDirection: "row",
                  marginTop: 5,
                  paddingBottom: 10
                }}>
                  <Icon
                    name="clock"
                    size={12}
                    color={COLORS.blue}
                    style={{ paddingRight: 2 }}
                  />
                  <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 10,
                    color: COLORS.mutedGray
                  }}>
                    {item.deliveryTime}
                  </Text>
                  <Spacer paddingHorizontal={5} />
                  <Icon
                    name="map-marker"
                    size={12}
                    color={COLORS.danger}
                    style={{ paddingRight: 2 }}
                  />
                  <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 10,
                    color: COLORS.mutedGray
                  }}>
                    {item.distance}
                  </Text>
                  <Spacer paddingHorizontal={5} />
                  <Icon
                    name="star"
                    size={12}
                    color={COLORS.yellow}
                    style={{ paddingRight: 2 }}
                  />
                  <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: 10,
                    color: COLORS.mutedGray
                  }}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={<View style={{ marginBottom: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  restoContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: SIZES.radius,
  },
  restoInfo: {
    width: '75%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  restoBody: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  highlightHeader: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 18,
    position: "absolute",
    left: SIZES.padding * 1.5,
    top: SIZES.padding * 2.5
  },
  highlightInfo: {
    position: "absolute",
    left: SIZES.padding * 1.5,
    top: SIZES.padding * 4,
    flexDirection: 'row',
    width: SIZES.padding * 7.5,
  },
  allRestoHeader: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newBadge: {
    backgroundColor: COLORS.fadedBlue,
    width: SIZES.radius * 6,
    textAlign: "center",
    marginVertical: 5,
    color: COLORS.lightBlue,
    fontFamily: FONTS.regular,
    fontSize: SIZES.body5,
    borderRadius: 20,
  }
});

export default Home;
