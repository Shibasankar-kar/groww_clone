import React, {FC} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import {BackButton} from '../../components/global/BackButton';
import {goBack} from '../../utils/NavigationUtil';
import {CenteredLogo} from '../../components/global/CenteredLogo';

export const EmailScreen: FC = () => {
  return (
    <CustomSafeAreaView>
      <BackButton onPress={() => goBack()} />
      <CenteredLogo />
    </CustomSafeAreaView>
  );
};
