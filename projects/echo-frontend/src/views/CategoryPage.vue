<template>
  <div class="category-page">
    <header-navigation/>
    <div class="category-layout">
      <div class="sidebar">
        <CategorySidebar/>
      </div>
      <div class="main-content">
        <div class="post-table">
          <table>
            <thead>
            <tr>
              <th>标题</th>
              <th>回复数</th>
              <th>浏览量</th>
              <th>参与者</th>
              <th>最后活动</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td class="post-title">
                <h3>{{ post.title }}</h3>
                <p class="post-summary">{{ post.summary }}</p>
                <div class="post-tags">
                  <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </td>
              <td>{{ post.commentCount }}</td>
              <td>{{ post.views || 0 }}</td>
              <td class="participants">
                <div v-for="participant in post.participants" :key="participant.id" class="participant">
                  <img v-if="participant.avatar" :src="participant.avatar" :alt="participant.username" class="avatar">
                  <span v-else class="avatar-placeholder">{{ participant.username[0].toUpperCase() }}</span>
                </div>
              </td>
              <td>{{ post.createdAt }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import {ref} from 'vue'
import type {Post} from '@/types'
import HeaderNavigation from "@/components/HeaderNavigation.vue";

// 模拟数据，后续需要替换为真实的API调用
const posts = ref<Post[]>([
  {
    id: 1,
    title: '示例帖子标题',
    summary: '这是一个示例帖子的摘要内容...',
    tags: ['标签1', '标签2'],
    participants: [
      {
        id: 1,
        username: 'user1',
        avatar: ''
      },
      {
        id: 2,
        username: 'user2',
        avatar: ''
      },
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

      .post-table {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;

        table {
          width: 100%;
          border-collapse: collapse;

          th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }

          th {
            background-color: #f8f9fa;
            font-weight: 500;
            color: #333;
          }

          td {
            vertical-align: top;

            &.post-title {
              h3 {
                margin: 0 0 0.5rem;
                font-size: 1rem;
                color: #333;
              }

              .post-summary {
                margin: 0 0 0.5rem;
                font-size: 0.875rem;
                color: #666;
              }

              .post-tags {
                display: flex;
                gap: 0.5rem;

                .tag {
                  padding: 0.25rem 0.75rem;
                  background-color: #f0f2f5;
                  border-radius: 16px;
                  font-size: 0.75rem;
                  color: #666;
                }
              }
            }

            &.participants {
              display: flex;
              gap: 0.5rem;

              .participant {
                .avatar, .avatar-placeholder {
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 0.75rem;
                  background-color: #f0f2f5;
                  color: #666;
                }

                img.avatar {
                  object-fit: cover;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>