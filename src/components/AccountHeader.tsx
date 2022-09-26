import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, FONTS, SIZES } from '../constants';
import { HeadlineText, SubText, Spacer } from '.';
import { navigate, goBack } from '../navigation/GlobalNavigation';
const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const AccountHeader = (props: any) => {
	const { backButton = false, isNotHomePage = false, isAnimated} = props;
	const [itemsInCart, setItemsInCart] = useState(17);

	return (
		<>
			<View style={[styles.container, {alignItems: !isNotHomePage ? "center" : "flex-start", backgroundColor: COLORS.transparent}]}>
				<View
					style={{
						flexDirection: 'row',
					}}>
					{
						backButton &&
						<TouchableOpacity
						activeOpacity={0.9}
						style={{ alignSelf: "center", }}
						onPress={() => {
							goBack()
						}}
						>
							<Icon
								style={[{
									alignSelf: "center",
									paddingHorizontal: 10,
									color: isAnimated ? COLORS.black : COLORS.white
								}]}
								name="chevron-left" size={35}
								/>
						</TouchableOpacity>
					}
					<Image
						resizeMode="cover"
						style={{
							width: isNotHomePage ? 40 : 45,
							height: isNotHomePage ? 40 : 45,
						}}
						source={require('../assets/images/accountAvatar.png')}
					/>
					<View style={styles.infoContainer}>
						<Text style={[styles.greetings, { color: isNotHomePage ? COLORS.white : COLORS.primary }]}>Hello Jeron!</Text>
						<View
							style={{
								flexDirection: 'row',
							}}>
							<Icon
								name="map-marker"
								size={14}
								color={isNotHomePage ? COLORS.white : COLORS.primary}
								style={{ paddingRight: 2 }}
							/>
							<Text style={[styles.locationInfo, { color: isNotHomePage ? COLORS.white : COLORS.mutedGray }]}>Sofia Tower 34 Diliman</Text>
						</View>
					</View>
					<Spacer paddingHorizontal={80} />
					<View style={[styles.rightIcons, { right: backButton ? 25 : 0 }]}>
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
		marginTop: 15,
		paddingVertical: SIZES.radius,
	},
	infoContainer: {
		justifyContent: 'center',
		paddingLeft: 10,
		flexDirection: 'column',
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

export default AccountHeader;
