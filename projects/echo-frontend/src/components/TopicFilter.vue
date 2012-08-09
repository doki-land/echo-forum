<template>
  <div class="filter-section">
    <h3>标签过滤</h3>
    <div class="tags-filter">
      <label v-for="tag in tags" :key="tag" class="filter-item">
        <input
          type="checkbox"
          v-model="selectedTags"
          :value="tag"
          @change="emitChange"
        >
        {{ tag }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tags = ref([
  'JavaScript',
  'Python',
  'Java',
  'Vue',
  'React',
])

const selectedTags = ref<string[]>([])

const emit = defineEmits<{
  (e: 'update:selectedTags', value: string[]): void
}>()

const emitChange = () => {
  emit('update:selectedTags', selectedTags.value)
}
</script>

<style lang="scss" scoped>
.filter-section {
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0 0 1rem;
    font-size: 1.125rem;
    color: #333;
  }

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

    &:hover {
      color: #333;
    }

    input[type="checkbox"] {
      cursor: pointer;
    }
  }
}
</style>