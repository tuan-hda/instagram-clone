import { View, Text, Image } from "react-native"
import React from "react"
import { Divider } from "react-native-elements"
import { Post as PostType } from "types/post.type"
import Avatar from "./Avatar"

interface Props {
  post: PostType
}

export default function Post({ post }: Props) {
  return (
    <View className='mb-8'>
      <Divider width={1} orientation='vertical' className='border-[#222]' />
      {/* <Text className='text-white'>Post</Text> */}
      <PostHeader post={post} />
    </View>
  )
}

function PostHeader({ post }: Props) {
  return (
    <View className='flex-row justify-between items-center m-2'>
      <View className='flex-row items-center'>
        <Avatar url={post.imageUrl} width='w-9' hasStory storyPadding='p-[1.6]' imageBorderWidth='border-2' />
        <Text className='text-white ml-2 font-semibold'>{post.user.toLowerCase()}</Text>
      </View>
      <Image
        source={require("assets/icons/dots.png")}
        className='ml-auto w-6'
        style={{
          resizeMode: "contain",
        }}
      />
    </View>
  )
}
