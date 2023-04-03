import React from "react";
import { Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import NavOptions from '../components/ActionRow';
import { styled } from 'nativewind';
import Icon from "react-native-ionicons";
import ActionRow from "../components/ActionRow";

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

const HomeScreen = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <StyledTouchableOpacity className="absolute z-50 top-5 right-10 items-center">
          <Icon name="md-person" size={ 30 } color="#E5962D" />
          <StyledText className="text-center text-[#E5962D]">UPGRADE</StyledText>
        </StyledTouchableOpacity>
        <StyledImage
          source={ { uri: "https://i.imgur.com/e14NE49.png" } }
          className="w-full h-64"
        />
        <StyledView className="mx-5">
          <StyledView className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E5962D"
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982C4"
              icon="library"
              vertical
            />
          </StyledView>
          <ActionRow
            title="Connect with friend"
            screen="Demo"
            color="#F44174"
            icon="share-social"
            vertical
          />
          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
            vertical
          />
          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            icon="time"
            vertical
          />
          <ActionRow
            title="Join Challenges"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            vertical
          />
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  )
}

export default HomeScreen;
