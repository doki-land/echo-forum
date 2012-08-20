<template>
  <div class="categories-section">
    <div class="categories-list">
      <router-link
          v-for="category in categories"
          :key="category.id"
          :to="`/c/${category.id}`"
          class="category-item"
          :style="{ '--category-color': category.color }"
      >
        <span class="color-block"></span>
        <span class="category-name">{{ category.name }}</span>
      </router-link>
    </div>
    <router-link to="/c" class="all-categories-btn">
      <span>全部分类</span>
    </router-link>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";

const categories = ref([
  {
    id: 1,
    name: '技术讨论',
    color: '#7B68EE'
  },
  {
    id: 2,
    name: '问题求助',
    color: '#20B2AA'
  },
  {
    id: 3,
    name: '经验分享',
    color: '#FF7F50'
  },
])

</script>