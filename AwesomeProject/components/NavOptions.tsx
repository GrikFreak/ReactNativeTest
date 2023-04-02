import React from "react";
import { Text, SafeAreaView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const data = [
  {
    id: '123',
    title: 'Get a ryde',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen', //change
  },
]

const NavOptions = () => {
  return (
    <FlatList 
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StyledTouchableOpacity className="p-2 pl-6 pb-8 pt-4 bg-red-600 m-2 w-40">
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <StyledText className="mt-2 text-lg font-semibold">{item.title}</StyledText>
          </View>
        </StyledTouchableOpacity>
      )} 
    />
  );
}

export default NavOptions;