<template>
  <div class="topic-list">
    <h2>话题管理</h2>
    <div class="loading-overlay" v-if="loading">
      <div class="loading-spinner"></div>
    </div>
    <table class="topic-table">
      <thead>
      <tr>
        <th>标题</th>
        <th>作者</th>
        <th>分类</th>
        <th>创建时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="topic in topicList" :key="topic.id">
        <td>{{ topic.title }}</td>
        <td>{{ topic.author.username }}</td>
        <td>{{ topic.category.name }}</td>
        <td>{{ topic.created_at }}</td>
        <td class="actions">
          <button
            class="btn btn-edit"
            @click="$router.push(`/admin/topic/edit/${topic.id}`)"
          >
            编辑
          </button>
          <button
            class="btn btn-delete"
            @click="handleDelete(topic.id)"
          >
            删除
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {TopicApi} from '@client/api'
import type {TopicInfo} from '@client/models'
import {TopicEditor} from "@/components/topic";

const topicList = ref<TopicInfo[]>([])
const loading = ref(false)

const topicApi = new TopicApi()

const fetchTopics = async () => {
  loading.value = true
  try {
    const response = await topicApi.topicQueryPost()
    topicList.value = response.data
  } catch (error) {
    alert('获取话题列表失败')
  } finally {
    loading.value = false
  }
}

const handleDelete = async (topicId: string) => {
  try {
    if (confirm('确定要删除该话题吗？')) {
      await topicApi.topicDeleteDelete(topicId)
      alert('删除成功')
      await fetchTopics()
    }
  } catch (error) {
    alert('删除失败')
  }
}

onMounted(() => {
  fetchTopics()
})
</script>

<style scoped>
.topic-list {
  padding: 20px;
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.topic-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

tr:hover {
  background-color: #f5f5f5;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-edit:hover {
  background-color: #2980b9;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}

.btn-delete:hover {
  background-color: #c0392b;
}
</style>