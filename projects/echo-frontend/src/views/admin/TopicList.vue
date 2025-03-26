<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { TopicApi } from '../../../../client/api'
import type { TopicInfo } from '../../../../client/models'

const topicList = ref<TopicInfo[]>([])
const loading = ref(false)

const topicApi = new TopicApi()

const fetchTopics = async () => {
  loading.value = true
  try {
    const response = await topicApi.topicListGet()
    topicList.value = response.data
  } catch (error) {
    ElMessage.error('获取话题列表失败')
  } finally {
    loading.value = false
  }
}

const handleDelete = async (topicId: string) => {
  try {
    await ElMessageBox.confirm('确定要删除该话题吗？', '提示', {
      type: 'warning'
    })
    await topicApi.topicDeleteDelete(topicId)
    ElMessage.success('删除成功')
    await fetchTopics()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('删除失败')
    }
  }
}

onMounted(() => {
  fetchTopics()
})
</script>

<template>
  <div class="topic-list">
    <h2>话题管理</h2>
    <el-table v-loading="loading" :data="topicList" style="width: 100%">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="author.username" label="作者" />
      <el-table-column prop="category.name" label="分类" />
      <el-table-column prop="created_at" label="创建时间" />
      <el-table-column label="操作" width="200">
        <template #default="{ row }">
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/admin/topic/edit/${row.id}`)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.topic-list {
  padding: 20px;
}
</style>