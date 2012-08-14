<template>
  <div class="post-table">
    <table>
      <thead>
      <tr>
        <th>标题</th>
        <th>回复数</th>
        <th>浏览量</th>
        <th>参与者</th>
        <th>最后活动时间</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td class="post-title">
          <post-list-item :post="post"/>
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
</template>

<script setup lang="ts">
import type {Post} from '@/types'
import {PostListItem} from "@/components";

defineProps<{
  posts: Post[]
}>()
</script>

<style lang="scss" scoped>
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
      font-weight: 500;
      color: #666;
      background-color: #f9fafb;
    }

    td {
      vertical-align: top;

      &.post-title {
        width: 50%;
      }

      .participants {
        display: flex;
        gap: 0.5rem;

        .participant {
          .avatar,
          .avatar-placeholder {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            color: #fff;
            background-color: #6366f1;
          }
        }
      }
    }
  }

}
</style>