import { View, Text, ScrollView, Image } from "react-native"
import React from "react"
import { USERS } from "data/users"
import { LinearGradient } from "expo-linear-gradient"
import Avatar from "./Avatar"

export default function Stories() {
  return (
    <View className='mb-[10]'>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user) => (
          <View className='w-[76] ml-3'>
            <Avatar url={user.image} hasStory />
            <Text className='text-white text-xs mt-1' numberOfLines={1} ellipsizeMode='tail'>
              {user.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
