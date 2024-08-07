import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {screenWidth} from '../../utils/Scaling';
import {IMAGES} from '../../constants/Images';

export const CenteredLogo: FC = () => {
  return (
    <View>
      <Image source={IMAGES.logoText} style={styles.img} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    alignSelf: 'center',
  },
  img: {width: 100, height: 100, resizeMode: 'contain'},
});
