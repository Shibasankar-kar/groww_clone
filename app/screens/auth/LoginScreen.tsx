import {Image, StyleSheet, View, useColorScheme} from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import CustomText from '../../components/global/CustomText';
import {FONTS} from '../../constants/Fonts';
import {useCustomTheme} from '../../navigation/Theme';
import {IMAGES} from '../../constants/Images';
import {
  normalizeModerately,
  screenHeight,
  screenWidth,
} from '../../utils/Scaling';
import SocialLoginButton from '../../components/auth/SocialLoginButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TochableText} from '../../components/auth/TochableText';
import {ButtomText} from '../../components/auth/ButtomText';

const LoginScreen = () => {
  const theme = useCustomTheme();
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <CustomText variant="h1" fontFamily={FONTS.Medium}>
          Together we Groww
        </CustomText>
        <CustomText
          variant="h7"
          style={styles.subText}
          fontFamily={FONTS.Medium}>
          Invest • Pay • Loans
        </CustomText>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={theme.dark ? IMAGES.loginDarkImage : IMAGES.loginLightImage}
          />
        </View>
        <SocialLoginButton
          onPress={() => {}}
          text="Signin With Google"
          icon={
            <Image source={IMAGES.google} style={{height: 20, width: 20}} />
          }
        />
        <SocialLoginButton
          onPress={() => {}}
          text="Signin With Apple"
          icon={<Ionicons name="logo-apple" size={25} color={'black'} />}
        />
        <TochableText
          text="Use Other Email ID"
          onPress={() => {}}
          style={styles.touchText}
        />
        <ButtomText />
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  subText: {
    marginTop: 16,
    opacity: 0.6,
  },
  imgContainer: {
    width: screenWidth,
    height: screenHeight * 0.5,
    marginVertical: normalizeModerately(30),
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  touchText: {
    marginVertical: 30,
    marginTop: 15,
  },
});
