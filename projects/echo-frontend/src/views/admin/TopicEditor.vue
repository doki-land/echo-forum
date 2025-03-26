<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { TopicApi, CategoryApi } from '../../../../client/api'
import type { TopicEdit, CategoryInfo } from '../../../../client/models'

const route = useRoute()
const router = useRouter()
const topicId = route.params.id as string

const topicApi = new TopicApi()
const categoryApi = new CategoryApi()

const loading = ref(false)
const topic = ref<TopicEdit>({
  id: '',
  title: '',
  content: '',
  category_id: ''
})
const categories = ref<CategoryInfo[]>([])

const fetchTopic = async () => {
  try {
    const response = await topicApi.topicGetGet(topicId)
    const topicData = response.data
    topic.value = {
      id: topicData.id,
      title: topicData.title,
      content: topicData.content,
      category_id: topicData.category.id
    }
  } catch (error) {
    ElMessage.error('获取话题信息失败')
  }
}

const fetchCategories = async () => {
  try {
    const response = await categoryApi.categoryListGet()
    categories.value = response.data
  } catch (error) {
    ElMessage.error('获取分类列表失败')
  }
}

const handleSubmit = async () => {
  loading.value = true
  try {
    await topicApi.topicEditPatch(topic.value)
    ElMessage.success('保存成功')
    router.push('/admin/topic')
  } catch (error) {
    ElMessage.error('保存失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchTopic()
  fetchCategories()
})
</script>

<template>
  <div class="topic-editor">
    <h2>编辑话题</h2>
    <el-form v-loading="loading" :model="topic" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="topic.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="topic.category_id" placeholder="请选择分类">
          <el-option
            v-for="category in categories"
            :key="category.id"
            :label="category.name"
            :value="category.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          v-model="topic.content"
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
        <el-button @click="router.push('/admin/topic')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.topic-editor {
  padding: 20px;
}
</style>