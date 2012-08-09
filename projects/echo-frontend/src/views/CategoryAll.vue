<template>
  <div class="category-all">
    <HeaderNavigation />
    <div class="content">
      <div class="main-container">
        <CategorySidebar class="sidebar" />
        <div class="category-grid">
          <CategoryCell
            v-for="category in categories"
            :key="category.title"
            :category="category"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '@/mock'
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import CategoryCell from '@/components/CategoryCell.vue'
import CategorySidebar from '@/components/CategorySidebar.vue'
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