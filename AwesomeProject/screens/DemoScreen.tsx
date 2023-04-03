import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParameterList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import Icon from 'react-native-ionicons';

export type NavigationProp = NativeStackNavigationProp<RootStackParameterList, "Demo">;

const StyledSafeAreaView = styled(SafeAreaView);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const DemoScreen = () => {

  const navigation = useNavigation<NavigationProp>();

  return (
    <StyledSafeAreaView className='bg-[#E5962D] flex-1'>
      <StyledTouchableOpacity onPress={() => navigation.goBack()} className='flex-row items-center p-5'>
        <Icon name="arrow-back" size={50} color="white" />
        <StyledText className="text-white">Go Back</StyledText>
      </StyledTouchableOpacity>
    </StyledSafeAreaView>
  )
}

export default DemoScreen