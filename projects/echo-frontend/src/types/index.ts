
// 基础类型定义
export interface Post {
    id: string
    title: string
    content: string
    author: User
    createdAt: Date
    updatedAt: Date
    comments: Comment[]
    likes: number
}

export interface Comment {
    id: string
    content: string
    author: User
    createdAt: Date
    updatedAt: Date
    likes: number
}

export interface User {
    id: string
    username: string
    avatar: string
    createdAt: Date
}
