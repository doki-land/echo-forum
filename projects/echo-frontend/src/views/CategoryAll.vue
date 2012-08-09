<template>
  <div class="category-all">
    <div class="category-grid">
      <div v-for="category in categories" :key="category.title" class="category-item" :style="{ borderColor: category.color }">
        <div class="category-header" :style="{ backgroundColor: category.color }">
          <span class="category-logo">{{ category.logo }}</span>
          <h3 class="category-title">{{ category.title }}</h3>
        </div>
        <p class="category-description">{{ category.description }}</p>
        <div class="category-tags">
          <span v-for="tag in category.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '@/mock'
</script>

<style lang="scss" scoped>
.category-all {
  padding: 2rem;
  background-color: #f5f7fa;

  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .category-item {
    background-color: #fff;
    border-radius: 8px;
    border: 2px solid;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }
  }

  .category-header {
    padding: 1rem;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .category-logo {
    font-size: 1.5rem;
  }

  .category-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .category-description {
    padding: 1rem;
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .category-tags {
    padding: 0 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    .tag {
      padding: 0.25rem 0.75rem;
      background-color: #f5f7fa;
      border-radius: 1rem;
      font-size: 0.8rem;
      color: #666;
    }
  }
}
</style>