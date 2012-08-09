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
            <tr v-for="post in displayedPosts" :key="post.id">
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
          <div class="pagination">
            <div class="pagination-info">
              <span>共 {{ totalPosts }} 条</span>
              <select v-model="pageSize" @change="handlePageSizeChange">
                <option v-for="size in pageSizes" :key="size" :value="size">{{ size }} 条/页</option>
              </select>
            </div>
            <div class="pagination-controls">
              <button
                :disabled="currentPage === 1"
                @click="currentPage--"
                class="page-btn"
              >
                上一页
              </button>
              <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
              <button
                :disabled="currentPage === totalPages"
                @click="currentPage++"
                class="page-btn"
              >
                下一页
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import {computed, ref} from 'vue'
import type {Post} from '@/types'
import HeaderNavigation from "@/components/HeaderNavigation.vue";

// 分页相关状态
const currentPage = ref(1)
const pageSize = ref(10)
const pageSizes = [10, 20, 50, 100]

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
  },
  // 添加更多模拟数据以测试分页
  ...Array.from({length: 19}, (_, index) => ({
    id: index + 2,
    title: `示例帖子标题 ${index + 2}`,
    summary: `这是第 ${index + 2} 个示例帖子的摘要内容...`,
    tags: ['标签1', '标签2'],
    participants: [
      {
        id: 1,
        username: 'user1',
        avatar: ''
      },
    ],
    commentCount: Math.floor(Math.random() * 100),
    createdAt: '2024-01-20 12:00:00'
  }))
])

// 计算总页数
const totalPosts = computed(() => posts.value.length)
const totalPages = computed(() => Math.ceil(totalPosts.value / pageSize.value))

// 当前页显示的帖子
const displayedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return posts.value.slice(start, end)
})

// 处理每页显示数量变化
const handlePageSizeChange = () => {
  currentPage.value = 1
}
</script>

<style lang="scss" scoped>
.category-page {
  min-height: 100vh;
  background-color: #f5f7fa;
  padding-top: 4rem;

  .category-layout {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    position: relative;

    .sidebar {
      width: 280px;
      position: sticky;
      top: 4rem;
      height: fit-content;
    }

    .main-content {
      flex: 1;
      min-width: 0;

      .post-table {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;

        .pagination {
          padding: 1rem;
          border-top: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .pagination-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #666;

            select {
              padding: 0.5rem;
              border: 1px solid #ddd;
              border-radius: 4px;
              background-color: #fff;
              font-size: 0.875rem;
              color: #333;
              cursor: pointer;
              transition: border-color 0.2s;

              &:hover {
                border-color: #1a73e8;
              }

              &:focus {
                outline: none;
                border-color: #1a73e8;
                box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
              }
            }
          }

          .pagination-controls {
            display: flex;
            align-items: center;
            gap: 1rem;

            .page-info {
              color: #666;
              font-size: 0.875rem;
            }

            .page-btn {
              padding: 0.5rem 1rem;
              border: 1px solid #ddd;
              border-radius: 4px;
              background-color: #fff;
              color: #333;
              font-size: 0.875rem;
              cursor: pointer;
              transition: all 0.2s;

              &:hover:not(:disabled) {
                border-color: #1a73e8;
                color: #1a73e8;
              }

              &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
              }
            }
          }
        }

        table {
          width: 100%;
          border-collapse: collapse;

          th, td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }

          th {
            font-weight: 600;
            color: #666;
            background-color: #f8f9fa;
          }

          td {
            color: #333;

            &.post-title {
              h3 {
                margin: 0 0 0.5rem;
                font-size: 1rem;
                font-weight: 600;
                color: #1a73e8;
              }

              .post-summary {
                margin: 0 0 0.75rem;
                font-size: 0.875rem;
                color: #666;
                line-height: 1.4;
              }

              .post-tags {
                display: flex;
                gap: 0.5rem;

                .tag {
                  padding: 0.25rem 0.5rem;
                  background-color: #f0f2f5;
                  border-radius: 4px;
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
                  background-color: #e0e0e0;
                  color: #fff;
                }

                .avatar {
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