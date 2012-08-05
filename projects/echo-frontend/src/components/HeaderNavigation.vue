<template>
  <nav class="header-navigation">
    <router-link
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="nav-item"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { navItems } from '../mock'
</script>

<style lang="scss" scoped>
.header-navigation {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  .nav-item {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f5f5f5;
    }

    &.router-link-active {
      background-color: #e6e6e6;
      color: #1a73e8;
    }
  }
}
</style>