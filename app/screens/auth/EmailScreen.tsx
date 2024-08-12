import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import {BackButton} from '../../components/global/BackButton';
import {CenteredLogo} from '../../components/global/CenteredLogo';

const EmailScreen: FC = () => {
  return (
    <CustomSafeAreaView>
      <BackButton path="LoginScreen" />
      <ScrollView>
        <CenteredLogo />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
