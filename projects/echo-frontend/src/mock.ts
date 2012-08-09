export interface NavItem {
    to: string
    label: string
}

export interface Section {
    title?: string
    content: string
    titleBackgroundImage?: string
    titleBackgroundColor?: string
}

export interface Post {
    id: number
    title: string
    createdAt: string
    views: number
}

export interface Category {
    logo: string
    title: string
    description: string
    tags: string[]
    hotPosts: Post[]
    color: string
}

export const navItems: NavItem[] = [
    {
        to: '/home',
        label: '首页'
    },
    {
        to: '/users',
        label: '用户列表'
    },
    {
        to: '/posts',
        label: '帖子列表'
    },
    {
        to: '/categories',
        label: '分类'
    }
]

export const sections: Section[] = [
    {
        title: '欢迎来到 TieTie',
        content: '这是一个简单的社交平台，您可以在这里浏览用户和帖子。',
        titleBackgroundColor: '#f0f2f5'
    },
    {
        title: '最新动态',
        content: '探索最新的帖子和讨论，与其他用户互动交流。',
        titleBackgroundColor: '#e6f4ff'
    }
]

export const categories: Category[] = [
    {
        logo: '📚',
        title: '学习交流',
        description: '分享学习经验，讨论学习方法',
        tags: ['学习', '经验分享', '讨论'],
        color: '#4CAF50',
        hotPosts: [
            {
                id: 1,
                title: '如何提高学习效率',
                createdAt: '2023-05-01',
                views: 1200
            },
            {
                id: 2,
                title: '学习方法分享',
                createdAt: '2023-05-02',
                views: 800
            }
        ]
    },
    {
        logo: '💻',
        title: '技术讨论',
        description: '交流技术心得，分享编程经验',
        tags: ['编程', '技术', '开发'],
        color: '#2196F3',
        hotPosts: [
            {
                id: 3,
                title: 'Vue3 最佳实践',
                createdAt: '2023-05-03',
                views: 1500
            },
            {
                id: 4,
                title: 'TypeScript 入门指南',
                createdAt: '2023-05-04',
                views: 1000
            }
        ]
    }
]