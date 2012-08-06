export interface NavItem {
  to: string
  label: string
}

export interface Section {
  id: number
  title?: string
  titleBackgroundImage?: string
  titleBackgroundColor?: string
  content: string
  categories: Category[]
}

export interface Post {
  id: number
  title: string
  createdAt: string
  views: number
}

export interface Category {
  id: number
  logo: string
  title: string
  description: string
  tags: string[]
  hotPosts: Post[]
}

export const navItems: NavItem[] = [
  { to: '/users', label: '用户列表' },
  { to: '/posts', label: '帖子列表' },
  { to: '/about', label: '关于我们' }
]

export const sections: Section[] = [
  {
    id: 1,
    title: '热门讨论',
    titleBackgroundColor: '#f0f2f5',
    content: '这里是热门讨论区域的内容',
    categories: [
      {
        id: 1,
        logo: '🎮',
        title: '游戏',
        description: '分享你的游戏经验和有趣的游戏时刻',
        tags: ['电子游戏', '手机游戏', '主机游戏'],
        hotPosts: [
          {
            id: 1,
            title: '最新游戏攻略分享',
            createdAt: '2024-01-15',
            views: 1200
          },
          {
            id: 2,
            title: '游戏Bug反馈',
            createdAt: '2024-01-14',
            views: 800
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '最新活动',
    titleBackgroundImage: 'https://via.placeholder.com/1200x200',
    content: '这里是最新活动区域的内容',
    categories: [
      {
        id: 2,
        logo: '📚',
        title: '学习',
        description: '分享学习经验和资源',
        tags: ['编程', '语言学习', '考试'],
        hotPosts: [
          {
            id: 3,
            title: '如何高效学习编程',
            createdAt: '2024-01-15',
            views: 1500
          },
          {
            id: 4,
            title: '英语学习方法分享',
            createdAt: '2024-01-14',
            views: 1000
          }
        ]
      }
    ]
  },
  {
    id: 3,
    content: '这里是无标题区域的内容',
    categories: []
  }
]

export const categories: Category[] = [
  {
    id: 1,
    logo: '🎮',
    title: '游戏',
    description: '分享你的游戏经验和有趣的游戏时刻',
    tags: ['电子游戏', '手机游戏', '主机游戏'],
    hotPosts: [
      {
        id: 1,
        title: '最新游戏攻略分享',
        createdAt: '2024-01-15',
        views: 1200
      },
      {
        id: 2,
        title: '游戏Bug反馈',
        createdAt: '2024-01-14',
        views: 800
      }
    ]
  },
  {
    id: 2,
    logo: '📚',
    title: '学习',
    description: '分享学习经验和资源',
    tags: ['编程', '语言学习', '考试'],
    hotPosts: [
      {
        id: 3,
        title: '如何高效学习编程',
        createdAt: '2024-01-15',
        views: 1500
      },
      {
        id: 4,
        title: '英语学习方法分享',
        createdAt: '2024-01-14',
        views: 1000
      }
    ]
  }
]