import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import { USERS } from "data/users"
import { LinearGradient } from "expo-linear-gradient"
import Avatar from "./Avatar"
import CustomText from "./CustomText"

export default function Stories() {
  return (
    <View className='mb-[10]'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => (
          <View className='w-[76] ml-3' key={index}>
            <Avatar url={user.image} hasStory />
            <CustomText className='text-white text-[13px] mt-1' numberOfLines={1} ellipsizeMode='tail'>
              {user.user.toLowerCase()}
            </CustomText>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
