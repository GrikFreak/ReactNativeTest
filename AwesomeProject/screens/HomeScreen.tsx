import React from "react";
import { Text, SafeAreaView, Image, View } from 'react-native';
import NavOptions from '../components/NavOptions';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView)
const StyledView = styled(View)
const StyledText = styled(Text)

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className="bg-white h-full">
      <StyledView className="p-5">
        <Image
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
      </StyledView>
      <NavOptions />
    </StyledSafeAreaView>
  )
}

export default HomeScreen;
