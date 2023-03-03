import { View } from "react-native"
import { useState } from "react"
import Home from "assets/icons/Home.svg"
import HomeFill from "assets/icons/HomeFill.svg"
import Search from "assets/icons/Search.svg"
import SearchFill from "assets/icons/SearchFill.svg"
import Reel from "assets/icons/Reel.svg"
import ReelFill from "assets/icons/ReelFill.svg"
import Add from "assets/icons/Add.svg"
import { TouchableOpacity } from "react-native"
import { SvgProps } from "react-native-svg"
import { ArrayElement } from "types/arrayElement.type"

interface NavigationIconProps {
  icon: React.FC<SvgProps>
  onPress: () => void
}

const TABS = [
  { name: "Home", icon: Home, fillIcon: HomeFill },
  { name: "Search", icon: Search, fillIcon: SearchFill },
  { name: "Add", icon: Add, fillIcon: Add },
  { name: "Video", icon: Reel, fillIcon: ReelFill },
]

const Navigation = () => {
  const [activeTab, setActiveTab] = useState<string>("Home")

  const changeActiveTab = (tab: string) => () => {
    setActiveTab(tab)
  }

  const getIcon = (tab: ArrayElement<typeof TABS>) => {
    if (tab.name === activeTab) return tab.fillIcon
    return tab.icon
  }

  return (
    <View className='flex-row justify-between px-[15]'>
      {TABS.map((tab, index) => (
        <NavigationIcon icon={getIcon(tab)} onPress={changeActiveTab(tab.name)} key={index} />
      ))}
    </View>
  )
}

const NavigationIcon = ({ icon: Icon, onPress }: NavigationIconProps) => (
  <TouchableOpacity onPress={onPress}>
    <Icon width={24} height={24} />
  </TouchableOpacity>
)

export default Navigation
