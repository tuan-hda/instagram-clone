import Header from "components/Header"
import Post from "components/Post"
import Stories from "components/Stories"
import { POSTS } from "data/posts"
import { SafeAreaView, ScrollView } from "react-native"
import { Divider } from "react-native-elements"

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <Header />
      <ScrollView>
        <Stories />
        <Divider width={1} orientation='vertical' className='border-[#222]' />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
