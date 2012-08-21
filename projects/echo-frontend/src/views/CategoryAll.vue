<template>
  <div class="category-all">
    <HeaderNavigation/>
    <div class="content">
      <div class="main-container">
        <CategorySidebar class="sidebar"/>
        <div class="category-grid">
          <category-cell v-for="category in categories" :key="category.category_id" :category="category"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import {CategoryCell, CategorySidebar} from '@/components'
import {type CategoryInfo} from '@client/models'
import {onMounted, ref} from 'vue'
import {useFluent} from 'fluent-vue'

const categoryApi = new CategoryApi()
const categories = ref<CategoryInfo[]>([])
const {$t} = useFluent()

// 加载分类列表
const loadCategories = async () => {
  try {
    categories.value = (await categoryApi.categoryQueryPost({user_id: '1'})).data
  } catch (error) {
    console.error('加载分类列表失败:', error)
  }
}

onMounted(() => {
  loadCategories()
})
</script>

<style lang="scss" scoped>
.category-all {
  min-height: 100vh;
  background-color: #f5f7fa;

  .content {
    padding: 2rem;
    margin-top: 4rem;

    .main-container {
      display: flex;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;

      .sidebar {
        flex-shrink: 0;
      }

      .category-grid {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
      }
    }
  }
}
</style>