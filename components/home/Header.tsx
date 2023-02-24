import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"

export default function Header() {
  return (
    <View className='justify-between items-center flex-row mx-5'>
      <TouchableOpacity>
        <Image
          className='w-[120] h-[60]'
          style={{ resizeMode: "contain" }}
          source={require("assets/Instagram_logo.png")}
        />
      </TouchableOpacity>

      <View className='flex-row'>
        <TouchableOpacity className='p-3'>
          <Image
            className='w-[24] h-[24]'
            style={{ resizeMode: "contain" }}
            source={require("assets/icons/heart.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity className='p-3 -mr-3'>
          <Image
            className='w-[24] h-[24]'
            style={{ resizeMode: "contain" }}
            source={require("assets/icons/message.png")}
          />
          <View className='absolute bg-[#ff3250] left-5 top-1 rounded-full justify-center items-center w-6 h-4'>
            <Text className='text-white font-semibold text-xs'>12</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
