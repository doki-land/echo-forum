<template>
  <div class="category-card">
    <div class="category-info">
      <div class="category-logo">{{ category.logo }}</div>
      <h3 class="category-title">{{ category.title }}</h3>
      <p class="category-description">{{ category.description }}</p>
      <div class="category-tags">
        <span v-for="tag in category.tags" :key="tag" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="hot-posts">
      <h4 class="hot-posts-title">热门帖子</h4>
      <ul class="post-list">
        <li v-for="post in category.hotPosts" :key="post.id" class="post-item">
          <span class="post-title">{{ post.title }}</span>
          <div class="post-meta">
            <span class="post-date">{{ post.createdAt }}</span>
            <span class="post-views">{{ post.views }} 浏览</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '../mock'

defineProps<{
  category: Category
}>()
</script>

<style lang="scss" scoped>
.category-card {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .category-info {
    flex: 1;

    .category-logo {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .category-title {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
      color: #333;
    }

    .category-description {
      margin: 0 0 1rem;
      color: #666;
      line-height: 1.4;
    }

    .category-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tag {
        padding: 0.25rem 0.75rem;
        background-color: #f0f2f5;
        border-radius: 16px;
        font-size: 0.875rem;
        color: #666;
      }
    }
  }

  .hot-posts {
    flex: 1;

    .hot-posts-title {
      margin: 0 0 1rem;
      font-size: 1rem;
      color: #333;
    }

    .post-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .post-item {
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      .post-title {
        display: block;
        margin-bottom: 0.25rem;
        color: #333;
        font-weight: 500;
      }

      .post-meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        color: #999;
      }
    }
  }
}
</style>