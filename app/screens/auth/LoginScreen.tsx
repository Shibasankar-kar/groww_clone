import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';

const LoginScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h4" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText
          variant="h7"
          style={styles.subText}
          fontFamily={FONTS.Medium}>
          Invest • Pay • Loans
        </CustomText>
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', marginTop: 30},
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
});
