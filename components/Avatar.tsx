import { Image } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import classNames from "classnames"

interface Props {
  url: string
  width?: string
  storyPadding?: string
  imageBorderWidth?: string
  hasStory?: boolean
}

export default function Avatar({
  url,
  width = "w-[76]",
  storyPadding = "p-[2.5]",
  imageBorderWidth = "border-[3px]",
  hasStory = false,
}: Props) {
  return (
    <LinearGradient
      colors={hasStory ? ["#FEFF1D", "#FE2208", "#BA11FC"] : []}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      className={classNames("rounded-full overflow-hidden aspect-square", width, storyPadding)}
    >
      <Image
        className={classNames("w-full h-full rounded-full border-black", imageBorderWidth)}
        source={{
          uri: url,
        }}
      />
    </LinearGradient>
  )
}
