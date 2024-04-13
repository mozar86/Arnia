export interface IPost{
    author: string,
    content: string,
    like_users: string[],
    created_at: Date,
    updated_at: Date
}

export interface IPostDTO{
    author:string,
    content:string
}

/*- Post
  - author: User
  - content: text
  - like_users: User list
  - created_at: Date
  - updated_at: Date*/