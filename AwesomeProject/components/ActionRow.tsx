import React from "react";
import { Text, SafeAreaView, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Icon from "react-native-ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParameterList } from "../App";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: string;
  vertical?: boolean;
}

export type NavigationProp = NativeStackNavigationProp<RootStackParameterList, "Demo">;

const ActionRow = ({ title, screen, color, requiresPro, icon, vertical }: Props) => {

  const navigation = useNavigation<NavigationProp>();

  return (
    <StyledTouchableOpacity 
      onPress={() => navigation.navigate(screen)}
      className={
        `flex m-2 flex-1 items-center justify-center py-5 rounded-lg space-x-2 
        ${vertical ? 'flex-col' : 'flex-row'}}`
      }
      style={{ backgroundColor: color }}>
      <Icon name={icon} size={30} color="white" />
      <StyledText className="text-white font-bold text-lg">{title}</StyledText>
    </StyledTouchableOpacity>
  );
}

export default ActionRow;