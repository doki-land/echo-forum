<template>
  <div class="home-page">
    <HeaderNavigation />
    <div class="content">
      <div class="sections">
        <div v-for="section in sections" :key="section.title" class="section-wrapper">
          <SectionCard :section="section" />
          <div class="section-categories">
            <CategoryCard
              v-for="category in section.categories"
              :key="category.title"
              :category="category"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import SectionCard from '@/components/SectionCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import { sections, categories } from '@/mock'
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background-color: #f5f7fa;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;

    .sections {
      margin-bottom: 2rem;
    }

    .section-wrapper {
      margin-bottom: 2rem;

      .section-categories {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
