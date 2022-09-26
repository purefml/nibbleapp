import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants';
import { HeadlineText, SubText, Spacer } from '.';
import { navigate, goBack } from '../navigation/GlobalNavigation';
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const RestaurantPageHeader = (props: any) => {
	const { restaurantData } = props
	const [itemsInCart, setItemsInCart] = useState(17);

	return (
		<>
			<View style={[styles.container]}>
				<View style={{
					flexDirection: "row"
				}}>
					<TouchableOpacity
						style={{
							top: SIZES.radius * 0.35,
							left: SIZES.radius * 0.80,
						}}
						onPress={() => {
							goBack()
						}}
					>
						<Icon 
						size={35}
						name={"chevron-left"}
						color={COLORS.primary}
						/>
					</TouchableOpacity>
					<HeadlineText
						color={COLORS.primary}
						font={FONTS.semiBold}
						size={18}
						text={restaurantData.restoName}
						customStyle={{ textAlign: "center", top: SIZES.radius * 0.7, left: SIZES.radius}}
					/>
					<View style={[styles.rightIcons, { right: SIZES.radius + 1 }]}>
						<TouchableOpacity
							activeOpacity={0.6}
							onPress={() => {
								console.log('pressed Favorites');
							}}
							style={styles.favoritesContainer}>
							<Icon name="heart-outline" size={25} color={COLORS.primary} />
						</TouchableOpacity>
						<Spacer paddingHorizontal={5} />
						<TouchableOpacity
							activeOpacity={0.6}
							onPress={() => {
								console.log('pressed Cart');
							}}
							style={styles.cartContainer}>
							<View
								style={styles.counterContainer}>
								<Text style={styles.cartCounter}>
									{itemsInCart}
								</Text>
							</View>
							<Icon name="shopping-outline" size={25} color={COLORS.primary} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.backgroundColor,
		justifyContent: "center",
		height: SIZES.radius * 7
	},
	rightIcons: {
		flexDirection: 'row',
		position: "absolute",
	},
	locationInfo: {
		textAlign: "center",
		fontSize: 12,
	},
	greetings: {
		fontSize: 15,
		height: SIZES.radius * 1.9,
		fontFamily: FONTS.semiBold,
	},
	favoritesContainer: {
		backgroundColor: COLORS.white,
		elevation: 1.5,
		padding: 10,
		borderRadius: 15,
	},
	cartContainer: {
		backgroundColor: COLORS.white,
		elevation: 1.5,
		padding: 10,
		borderRadius: 15,
	},
	counterContainer: {
		position: 'absolute',
		bottom: SIZES.radius * 2.9,
		right: SIZES.padding - 29,
		zIndex: 1,
		paddingHorizontal: 10,
		backgroundColor: COLORS.danger,
		paddingVertical: 5,
		borderRadius: 50,
	},
	cartCounter: {
		color: COLORS.white,
		textAlign: "center",
		fontFamily: FONTS.bold,
		fontSize: 8,
		width: SIZES.radius - 4
	},
});

export default RestaurantPageHeader;
