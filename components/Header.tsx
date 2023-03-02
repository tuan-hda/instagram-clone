import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react"
import ArrownDownIcon from "assets/icons/ArrowDown.svg"

export default function Header() {
  return (
    <View className='justify-between items-center flex-row mx-5'>
      <TouchableOpacity className='flex-row'>
        <Image
          className='w-[120] h-[60]'
          style={{ resizeMode: "contain" }}
          source={require("assets/Instagram_logo.png")}
        />
        <View className='ml-2 mt-[14]'>
          <ArrownDownIcon width={16} height={16} />
        </View>
      </TouchableOpacity>

      <View className='flex-row'>
        <TouchableOpacity className='p-3'>
          <Image
            className='w-[24] h-[24]'
            style={{ resizeMode: "contain" }}
            source={require("assets/icons/Heart.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity className='p-3 -mr-3'>
          <Image
            className='w-[24] h-[24]'
            style={{ resizeMode: "contain" }}
            source={require("assets/icons/Message.png")}
          />
          <View className='absolute bg-[#ff3250] left-5 top-1 rounded-full justify-center items-center w-6 h-4'>
            <Text className='text-white font-semibold text-xs'>12</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
