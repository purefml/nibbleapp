import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  SectionList,
  Animated,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native';
import ImageColors from 'react-native-image-colors'
import { AccountHeader, Loader, RestaurantCategories, RestaurantPageHeader, IconBadge, HeadlineText, SubText, Spacer } from '../components';
import { COLORS, SIZES, FONTS } from '../constants';
import { restaurantBestSellers } from '../utils/restaurantBestSellers';
import { restaurantFoods } from '../utils/retaurantFoods';

const HEADER_MAX_HEIGHT = 240;
const HEADER_MIN_HEIGHT = 84;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RestaurantPage = (props:any) => {
  const [averageColor, setAverageColor] = useState<string | undefined>("")
  const [restaurant, setRestaurant] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isReached, setIsReached] = useState(false);
  const [dynamicColor, setDynamicColor] = useState("")
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    setRestaurant(props.route.params.restaurantInfo)
  }, [])

  useEffect(() => {
    getAverageColor()
  }, [])

  const getAverageColor = async () => {
    const result = await ImageColors.getColors(props.route.params.restaurantInfo.image, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    })
    
    switch (result.platform) {
      case 'android':
        // android result properties
        setAverageColor(result.darkVibrant)
        setIsLoading(false)
        break
      case 'web':
        // web result properties
        setAverageColor(result.darkVibrant)
        setIsLoading(false)
        break
      case 'ios':
        // iOS result properties
        setAverageColor(result.primary)
        setIsLoading(false)
        break
      default:
        throw new Error('Unexpected platform key')
    }
  }

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const accountHeaderOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const RestaurantPageHeaderOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.98],
    extrapolate: 'clamp',
  });

  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const restaurantHeaderTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -5],
    extrapolate: 'clamp',
  });

  const categoryTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -30, -100],
    extrapolate: 'clamp',
  });

  const floatingCategoryTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 60, 20],
    extrapolate: 'clamp',
  });

  const searchOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const categoryScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.5],
    extrapolate: 'clamp',
  });

  const renderListItem = (item: any) => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.fullNameText}>{item.fullName}</Text>
    </View>
  );

  const handleScrollEvent = (offsetY: any) => {
     if(offsetY >= 140 && offsetY <= 160){
      console.log("THIS IS SCROLL y", offsetY)
      // Animated.timing(animation, {
      //   toValue:1,
      //   duration: 500,
      //   useNativeDriver: true
      // }).start()
    }
  }

  return (
    <SafeAreaView style={styles.saveArea}>
     {
       isLoading ? 
        <Loader /> :
        <>
        <Animated.View style={{
          flex: 1,
          width: SIZES.padding * 15,
          borderRadius: 10,
          top: SIZES.radius * 7,
          zIndex: 5,
          height: SIZES.radius * 8,
          alignSelf: "center",
          backgroundColor: COLORS.white,
          position: "absolute",
          opacity: RestaurantPageHeaderOpacity,
          transform: [{ scale: titleScale }, { translateY: floatingCategoryTranslateY }],
        }}>
          <View>
            <View style={styles.searchSection}>
              <View style={styles.searchInputContainer}>
              <TextInput
                  style={styles.searchField}
                  placeholder="Find your cravings"
                  placeholderTextColor={COLORS.mutedGray}
                  underlineColorAndroid="transparent"
              />
              <IconBadge 
                  name="magnify"
                  size={20}
                  color={COLORS.primary}
                  customStyle={styles.searchIcon}
              />
              </View>
          </View>
          <View
              style={{
                width: SIZES.radius * 26,
                height: 2,
                alignSelf: "center",
                backgroundColor: COLORS.mutedGray,
              }}
              />
          <RestaurantCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

          </View>
        </Animated.View>
        <Animated.SectionList
            contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true,
                listener: (event: any) => {
                // handlers / functions here
                },
              },
            )}
            renderItem={({item, index, section}) => 
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
                  <Text style={{
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}>{item.name}</Text>
                   <Text style={{
                    fontSize: 9,
                    fontFamily: FONTS.regular,
                    color: COLORS.mutedGray,
                  }}>{item.description}</Text>
                  <View style={{
                    marginTop: 20,
                    flex: 1,
                    width: SIZES.radius * 5
                  }}>
                    <Text style={{
                      backgroundColor: COLORS.fadedBlue,
                      borderRadius: 50,
                      fontSize: 10,
                      fontFamily: FONTS.regular,
                      color: COLORS.blue,
                      paddingVertical: 2.5,
                      textAlign: "center",
                      paddingHorizontal: 10
                    }}>P {item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            }
            renderSectionHeader={({section: {title}}) => (
              <Text style={{ fontFamily: FONTS.semiBold, paddingLeft: 15, fontSize: 15 }}>{title}</Text>
            )}
            sections={restaurantFoods}
            keyExtractor={(item, index) => item.name + index}
            ListHeaderComponent={
              <Animated.View style={{
                zIndex: 5,
                marginTop: SIZES.radius * 2.5,
                opacity: accountHeaderOpacity,
                transform: [{ scale: categoryScale }, { translateY: categoryTranslateY }],
                marginBottom: 20
              }}>
              <RestaurantCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
              </Animated.View>
            }
            />
          <Animated.View
            style={[styles.header, { 
              backgroundColor: COLORS.backgroundColor,
              transform: [{ translateY: headerTranslateY }] }]}>
              <Animated.View
                style={[
                  styles.headerBackground,
                  {
                    backgroundColor: averageColor,
                    opacity: accountHeaderOpacity,
                    transform: [{ translateY: imageTranslateY }],
                  },
                ]} />
                <View style={{
                  opacity: 0.3
                }}>
                  <Animated.Image
                  style={[
                    styles.headerBackground,
                    {
                      opacity: accountHeaderOpacity,
                      transform: [{ translateY: imageTranslateY }],
                    },
                  ]} 
                  source={restaurant.image}
                  />
                </View>
                <Animated.View style={[{ 
                  top: SIZES.radius * 9,
                  opacity: searchOpacity,
                  transform: [{ translateY: imageTranslateY }]
                  }]}>
                    <View style={{ alignItems: "center" }}>
                    <HeadlineText
                        color={COLORS.white}
                        paddingBottom={1}
                        font={FONTS.semiBold}
                        size={18}
                        text={restaurant.restoName}
                      />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <IconBadge
                        name="clock"
                        size={12}
                        color={COLORS.white}
                        customStyle={{ paddingRight: 2 }}
                      />
                      <SubText 
                        font={FONTS.regular}
                        color={COLORS.white}
                        size={10}
                        text={restaurant.deliveryTime}
                      />
                      <Spacer paddingHorizontal={5} />
                      <IconBadge
                        name="map-marker"
                        size={12}
                        color={COLORS.white}
                        customStyle={{ paddingRight: 2 }}
                      />
                      <SubText 
                        font={FONTS.regular}
                        color={COLORS.white}
                        size={10}
                        text={restaurant.distance}
                      />
                      <Spacer paddingHorizontal={5} />
                      <IconBadge
                        name="star"
                        size={12}
                        color={COLORS.white}
                        customStyle={{ paddingRight: 2 }}
                      />
                      <SubText 
                        font={FONTS.regular}
                        color={COLORS.white}
                        size={10}
                        text={restaurant.rating}
                      />
                    </View>
                  </Animated.View>
                <Animated.View style={[styles.searchSection, { 
                  top: SIZES.radius * 10,
                  opacity: searchOpacity,
                  transform: [{ translateY: imageTranslateY }]
                  }]}>
                      <View style={[styles.searchInputContainer, , { borderRadius: 10 }]}>
                      <TextInput
                          style={[styles.searchField, {paddingHorizontal: 15}]}
                          placeholder="Find your cravings"
                          placeholderTextColor={COLORS.mutedGray}
                          underlineColorAndroid="transparent"
                      />
                      <IconBadge 
                          name="magnify"
                          size={20}
                          color={COLORS.primary}
                          customStyle={styles.searchIcon}
                      />
                      </View>
                  </Animated.View>
            </Animated.View>

            {/* THIS PART IS THE HEADER! */}
            <Animated.View
              style={[
                styles.topBar,
                {
                  opacity: accountHeaderOpacity,
                  transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
                },
              ]}>
              <AccountHeader
                backButton={true}
                isNotHomePage={true} 
                />
            </Animated.View>
            <Animated.View
              style={[
                styles.topBar,
                {
                  opacity: RestaurantPageHeaderOpacity,
                  transform: [{ scale: titleScale }, { translateY: restaurantHeaderTranslateY }],
                },
              ]}>
                <RestaurantPageHeader restaurantData={restaurant}/>
            </Animated.View>
            {/* THIS PART IS THE HEADER! */}
            </>
     }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  searchSection: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',      
  },
  searchInputContainer: {
      flexDirection: "row",
      backgroundColor: COLORS.white,
  },
  searchField: {
      fontFamily: FONTS.regular,
      paddingVertical: 7,
      fontSize: 10,
      width: SIZES.padding * 12,   
      color: COLORS.primary
  },
  searchIcon: {
      alignSelf: "center",
      padding: 10,
      right: 0
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
  img: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: SIZES.width,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  title: {
    color: COLORS.primary,
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});
export default RestaurantPage