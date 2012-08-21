<template>
  <div class="dialog">
    <div class="dialog-content">
      <h3>{{ isEdit ? $t('category-edit') : $t('category-create') }}</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>{{ $t('category-name') }}</label>
          <input type="text" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label>{{ $t('category-link') }}</label>
          <input type="text" v-model="formData.link" pattern="[a-z0-9-]+" title="只能包含小写字母、数字和连字符">
        </div>
        <div class="form-group">
          <label>{{ $t('category-color') }}</label>
          <input type="color" v-model="formData.color" required>
        </div>
        <div class="form-group">
          <label>{{ $t('category-description') }}</label>
          <textarea v-model="formData.description" rows="3"></textarea>
        </div>
        <div class="dialog-actions">
          <button type="button" class="cancel-btn" @click="$emit('cancel')">{{ $t('cancel') }}</button>
          <button type="submit" class="submit-btn">{{ $t('confirm') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import type {CategoryCreate, CategoryInfo} from '@client/models'
import {useFluent} from "fluent-vue";

const props = defineProps<{
  category?: CategoryInfo
}>()

const emit = defineEmits<{
  (e: 'submit', data: CategoryCreate): void
  (e: 'cancel'): void
}>()
const {$t} = useFluent()
const isEdit = computed(() => !!props.category)


import { generateRandomColor } from '@/utils/color'

// 表单数据
const formData = ref<CategoryCreate>({
  name: '',
  link: '',
  color: generateRandomColor(),
  description: ''
})

// 如果是编辑模式，初始化表单数据
onMounted(() => {
  if (props.category) {
    formData.value = {
      name: props.category.name,
      link: props.category.link,
      color: props.category.color,
      description: props.category.description
    }
  }
})

// 处理表单提交
const handleSubmit = () => {
  emit('submit', formData.value)
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1.25rem;
    color: #333;
  }
}

.form-group {
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
  }

  input[type="text"],
  input[type="color"],
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #1a73e8;
    }
  }

  textarea {
    resize: vertical;
  }
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  button {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &.cancel-btn {
      background-color: #f5f5f5;
      color: #666;

      &:hover {
        background-color: #e0e0e0;
      }
    }

    &.submit-btn {
      background-color: #1a73e8;
      color: white;

      &:hover {
        background-color: #1557b0;
      }
    }
  }
}
</style>