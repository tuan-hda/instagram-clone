interface Comment {
  user: string
  comment: string
}

export interface Post {
  imageUrl: string
  user: string
  likes: number
  caption: string
  profile_picture: string
  comments: Comment[]
}
