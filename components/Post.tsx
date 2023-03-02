import { View, Text, Image } from "react-native"
import React from "react"
import { Post as PostType } from "types/post.type"
import Avatar from "./Avatar"
import Dots from "assets/icons/dots.svg"
import { StyleSheet, Dimensions } from "react-native"
import AutoHeightImage from "react-native-auto-height-image"

interface Props {
  post: PostType
}

export default function Post({ post }: Props) {
  return (
    <View className='mb-4'>
      <PostHeader post={post} />
      <PostImage post={post} />
    </View>
  )
}

function PostHeader({ post }: Props) {
  return (
    <View className='flex-row justify-between items-center ml-2 my-2'>
      <View className='flex-row items-center'>
        <Avatar url={post.profile_picture} width='w-9' hasStory storyPadding='p-[1.6]' imageBorderWidth='border-2' />
        <Text className='text-white ml-2 font-semibold'>{post.user.toLowerCase()}</Text>
      </View>
      <Dots fill='#fff' width={40} />
    </View>
  )
}

const PostImage = ({ post }: Props) => {
  const width = Dimensions.get("window").width
  return <AutoHeightImage source={{ uri: post.imageUrl }} width={width} />
}

const styles = StyleSheet.create({})
