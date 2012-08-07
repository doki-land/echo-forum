<template>
  <div class="category-page">
    <div class="category-layout">
      <div class="sidebar">
        <CategorySidebar />
      </div>
      <div class="main-content">
        <div class="post-list">
          <PostCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import PostCard from '@/components/PostCard.vue'
import { ref } from 'vue'
import type { Post } from '@/types'

// 模拟数据，后续需要替换为真实的API调用
const posts = ref<Post[]>([
  {
    id: 1,
    title: '示例帖子标题',
    summary: '这是一个示例帖子的摘要内容...',
    tags: ['标签1', '标签2'],
    participants: [
      { id: 1, username: 'user1', avatar: '' },
      { id: 2, username: 'user2', avatar: '' },
    ],
    commentCount: 10,
    createdAt: '2024-01-20 12:00:00'
  }
])
</script>

<style lang="scss" scoped>
.category-page {
  min-height: 100vh;
  background-color: #f5f7fa;
  padding: 2rem;

  .category-layout {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;

    .sidebar {
      width: 280px;
      flex-shrink: 0;
    }

    .main-content {
      flex: 1;

      .post-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
}
</style>