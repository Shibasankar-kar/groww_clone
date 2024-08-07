import {useTheme} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton: FC<BackButtonProps> = ({onPress}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="arrow-back" size={RFValue(20)} color={colors.text} />
    </TouchableOpacity>
  );
};
