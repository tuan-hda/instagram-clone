import { Text, StyleSheet, TextStyle, StyleProp } from "react-native"
import React from "react"

const Fonts = {
  normal: "Medium",
  bold: "Bold",
  "100": "Light",
  "200": "Light",
  "300": "Light",
  "400": "Regular",
  "500": "Medium",
  "600": "Semibold",
  "700": "Bold",
  "800": "Black",
  "900": "Black",
}

const disableStyles: StyleProp<TextStyle> = {
  fontWeight: "normal",
}

type TextProps = Text["props"]

export default function CustomText(props: TextProps) {
  const { fontWeight = "400" } = StyleSheet.flatten(props.style || {})
  const fontFamily = `SF-Pro-Display-${Fonts[fontWeight]}`

  return <Text {...props} style={[props.style, { fontFamily }, disableStyles]} />
}
