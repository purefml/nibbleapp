import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  icon: any;
  focused: any;
  size: number;
}

const TabarIcons: FunctionComponent<Props> = (props: Props) => {
  const {icon, focused, size} = props;
  return (
    <View style={styles.tabbarContainer}>
      <Icon
        style={styles.icon}
        name={icon}
        size={focused ? size : 20}
        color={focused ? COLORS.white : COLORS.gray}
      />
      <View
        style={[
          styles.tabbarStyle,
          {
            backgroundColor: focused ? COLORS.white : COLORS.black,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabbarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 60,
    width: 40,
  },
  icon: {
    marginBottom: 5,
  },
  tabbarStyle: {
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
});

export default TabarIcons;
