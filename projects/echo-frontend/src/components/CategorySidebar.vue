<template>
  <div class="category-sidebar">
    <div class="filter-section">
      <h3>分类过滤</h3>
      <div class="categories-filter">
        <label v-for="category in categories" :key="category.id" class="filter-item">
          <input
            type="checkbox"
            v-model="selectedCategories"
            :value="category.id"
          >
          {{ category.name }}
        </label>
      </div>
    </div>

    <div class="filter-section">
      <h3>标签过滤</h3>
      <div class="tags-filter">
        <label v-for="tag in tags" :key="tag" class="filter-item">
          <input
            type="checkbox"
            v-model="selectedTags"
            :value="tag"
          >
          {{ tag }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 模拟数据，后续需要替换为真实的API调用
const categories = ref([
  { id: 1, name: '技术讨论' },
  { id: 2, name: '问题求助' },
  { id: 3, name: '经验分享' },
])

const tags = ref([
  'JavaScript',
  'Python',
  'Java',
  'Vue',
  'React',
])

const selectedCategories = ref<number[]>([])
const selectedTags = ref<string[]>([])
</script>

<style lang="scss" scoped>
.category-sidebar {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .filter-section {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin: 0 0 1rem;
      font-size: 1.1rem;
      color: #333;
    }

    .categories-filter,
    .tags-filter {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .filter-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      color: #666;
      font-size: 0.9rem;

      input[type="checkbox"] {
        cursor: pointer;
      }

      &:hover {
        color: #333;
      }
    }
  }
}
</style>