<template>
  <div class="post-card">
    <div class="post-header">
      <h3 class="post-title">{{ post.title }}</h3>
      <p class="post-summary">{{ post.summary }}</p>
    </div>

    <div class="post-tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>

    <div class="post-footer">
      <div class="participants">
        <div
          v-for="participant in post.participants"
          :key="participant.id"
          class="participant"
        >
          <img
            v-if="participant.avatar"
            :src="participant.avatar"
            :alt="participant.username"
            class="avatar"
          >
          <span v-else class="avatar-placeholder">
            {{ participant.username[0].toUpperCase() }}
          </span>
        </div>
      </div>

      <div class="post-meta">
        <span class="comment-count">
          {{ post.commentCount }} 条讨论
        </span>
        <span class="post-time">
          {{ formatRelativeTime(post.createdAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Post} from '@/types'
import {formatRelativeTime} from '@/utils/time'

defineProps<{
  post: Post
}>()
</script>

<style lang="scss" scoped>
.post-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .post-header {
    margin-bottom: 1rem;

    .post-title {
      margin: 0 0 0.5rem;
      font-size: 1.25rem;
      color: #333;
      font-weight: 500;
    }

    .post-summary {
      margin: 0;
      color: #666;
      line-height: 1.5;
    }
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .tag {
      padding: 0.25rem 0.75rem;
      background-color: #f0f2f5;
      border-radius: 16px;
      font-size: 0.875rem;
      color: #666;
    }
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    .post-meta {
      display: flex;
      gap: 1rem;
      color: #666;
      font-size: 0.875rem;
    }
  }
}
</style>