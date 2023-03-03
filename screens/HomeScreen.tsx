import Header from "components/Header"
import Post from "components/Post"
import Stories from "components/Stories"
import { POSTS } from "data/posts"
import { StatusBar } from "expo-status-bar"
import { ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Divider } from "react-native-elements"
import Navigation from "components/Navigation"

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <StatusBar style='light' />
      <Header />
      <ScrollView>
        <Stories />
        <Divider width={1} orientation='vertical' className='border-[#222]' />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <Navigation />
    </SafeAreaView>
  )
}
