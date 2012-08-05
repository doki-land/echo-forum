<template>
  <section class="section-card" :style="sectionStyle">
    <h2 v-if="section.title" class="section-title">{{ section.title }}</h2>
    <div class="section-content">
      {{ section.content }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Section } from '../mock'

const props = defineProps<{
  section: Section
}>()

const sectionStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (props.section.titleBackgroundImage) {
    style.backgroundImage = `url(${props.section.titleBackgroundImage})`
  }
  
  if (props.section.titleBackgroundColor) {
    style.backgroundColor = props.section.titleBackgroundColor
  }
  
  return style
})
</script>

<style lang="scss" scoped>
.section-card {
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  .section-title {
    margin: 0 0 1rem;
    font-size: 1.5rem;
    color: #333;
  }
  
  .section-content {
    color: #666;
    line-height: 1.6;
  }
}
</style>