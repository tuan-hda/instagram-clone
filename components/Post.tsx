import { View, Text, Image } from "react-native"
import React from "react"
import { Post as PostType } from "types/post.type"
import Avatar from "./Avatar"
import DotsIcon from "assets/icons/Dots.svg"
import CommentIcon from "assets/icons/Comment.svg"
import ShareIcon from "assets/icons/Share.svg"
import BookmarkIcon from "assets/icons/Bookmark.svg"
import PlusIcon from "assets/icons/Plus.svg"
import LoveIcon from "assets/icons/Love.svg"
import HandsIcon from "assets/icons/Hands.svg"
import { Dimensions, TouchableOpacity } from "react-native"
import AutoHeightImage from "react-native-auto-height-image"
import CustomText from "./CustomText"

export interface PostProps {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <View className='mb-4'>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  )
}

function PostHeader({ post }: PostProps) {
  return (
    <View className='flex-row justify-between items-center ml-2 my-2'>
      <View className='flex-row items-center'>
        <Avatar url={post.profile_picture} width='w-9' hasStory storyPadding='p-[1.6]' imageBorderWidth='border-2' />
        <Text className='text-white ml-2 font-semibold'>{post.user.toLowerCase()}</Text>
      </View>
      <DotsIcon fill='#fff' width={40} />
    </View>
  )
}

const PostImage = ({ post }: PostProps) => {
  const width = Dimensions.get("window").width
  return <AutoHeightImage source={{ uri: post.imageUrl }} width={width} />
}

const PostFooter = ({ post }: PostProps) => {
  return (
    <View className='px-[14]'>
      <FooterButtons post={post} />

      <CustomText className='font-bold text-white'>{post.likes} likes</CustomText>
      <CustomText className='font-bold text-white mt-2' numberOfLines={2} ellipsizeMode='tail'>
        {post.user}
        <CustomText>{" " + post.caption}</CustomText>
      </CustomText>

      {!!post.comments.length && (
        <TouchableOpacity activeOpacity={0.7} className='mt-2'>
          <CustomText className='text-p-gray'>
            {post.comments.length > 1
              ? `View all ${post.comments.length} comments`
              : `View ${post.comments.length} comment`}
          </CustomText>
        </TouchableOpacity>
      )}

      <CommentSection post={post} />

      <CustomText className='text-p-gray mt-[6] text-[13px]'>30 minutes ago</CustomText>
    </View>
  )
}

const CommentSection = ({ post }: PostProps) => {
  return (
    <View className='flex-row justify-between'>
      <View className='flex-row space-x-2 mt-2 items-center'>
        <Image source={{ uri: post.profile_picture }} className='w-6 h-6 rounded-full' />
        <CustomText className='text-p-gray'>Add a comment...</CustomText>
      </View>
      <View className='flex-row space-x-3 mt-2 items-center'>
        <LoveIcon />
        <HandsIcon />
        <PlusIcon />
      </View>
    </View>
  )
}

const FooterButtons = ({ post }: PostProps) => {
  return (
    <View className='py-3 flex-row justify-between'>
      <View className='flex-row space-x-3'>
        <TouchableOpacity className='w-6 h-6'>
          <Image source={require("assets/icons/Heart.png")} className='w-6 h-6' />
        </TouchableOpacity>
        <TouchableOpacity className='w-6 h-6'>
          <CommentIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity className='w-6 h-6'>
          <ShareIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity className='w-6 h-6'>
        <BookmarkIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  )
}
