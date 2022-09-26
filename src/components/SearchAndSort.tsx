import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';
import { IconBadge, Spacer } from '.';

const SearchAndSort = () => {
  return (
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
        <Spacer paddingHorizontal={4} />
        <IconBadge 
            name="filter"
            size={20}
            color={COLORS.primary}
            customStyle={styles.filterIcon}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    searchSection: {
        paddingVertical: SIZES.radius,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',      
    },
    searchInputContainer: {
        flexDirection: "row",
        elevation: 1.5,
        backgroundColor: COLORS.white,
        borderRadius: 15
    },
    searchField: {
        fontFamily: FONTS.regular,
        paddingVertical: 7,
        fontSize: 10,
        paddingHorizontal: 20,
        width: SIZES.padding * 12,   
        color: COLORS.primary
    },
    searchIcon: {
        alignSelf: "center",
        padding: 10,
        right: 5
    },
    filterIcon: {
        padding: 12,      
        elevation: 1.5,        
        backgroundColor: COLORS.white,
        borderRadius: 15
    }
})

export default SearchAndSort