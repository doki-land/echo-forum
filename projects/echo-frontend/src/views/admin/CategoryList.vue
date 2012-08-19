<template>
  <div class="category-list">
    <div class="header">
      <h2>分类管理</h2>
      <button class="add-btn" @click="showAddDialog = true">
        <i class="fas fa-plus"></i>
        新建分类
      </button>
    </div>

    <div class="table-container">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>链接</th>
          <th>颜色</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories" :key="category.category_id">
          <td>{{ category.category_id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.link }}</td>
          <td>
            <div class="color-preview" :style="{ backgroundColor: category.color }"></div>
            {{ category.color }}
          </td>
          <td>{{ category.description }}</td>
          <td>
            <button class="action-btn edit" @click="editCategory(category)">
              <i class="fas fa-edit"></i>
              编辑
            </button>
            <button class="action-btn delete" @click="confirmDelete(category)">
              <i class="fas fa-trash"></i>
              删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- 新建分类对话框 -->
    <category-editor
      v-if="showAddDialog"
      @submit="handleSubmit"
      @cancel="closeDialog"
    />

    <!-- 编辑分类对话框 -->
    <category-editor
      v-if="showEditDialog"
      :category="selectedCategory"
      @submit="handleSubmit"
      @cancel="closeDialog"
    />

    <!-- 删除确认对话框 -->
    <div class="dialog" v-if="showDeleteDialog">
      <div class="dialog-content">
        <h3>确认删除</h3>
        <p>确定要删除分类「{{ selectedCategory?.name }}」吗？此操作不可撤销。</p>
        <div class="dialog-actions">
          <button class="cancel-btn" @click="showDeleteDialog = false">取消</button>
          <button class="delete-btn" @click="handleDelete">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {CategoryApi} from '@doki-land/echo-api'
import {CategoryCreate, type CategoryEdit, CategoryInfo} from '@doki-land/echo-api/models'
import CategoryEditor from '@/components/CategoryEditor.vue'

const categoryApi = new CategoryApi()
const categories = ref<CategoryInfo[]>([])

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

// 对话框状态
const showAddDialog = ref(false)
const showEditDialog = ref(false)
const showDeleteDialog = ref(false)
const selectedCategory = ref<CategoryInfo | null>(null)

// 编辑分类
const editCategory = (category: CategoryInfo) => {
  selectedCategory.value = category
  showEditDialog.value = true
}

// 确认删除
const confirmDelete = (category: CategoryInfo) => {
  selectedCategory.value = category
  showDeleteDialog.value = true
}

// 处理删除
const handleDelete = async () => {
  if (selectedCategory.value) {
    try {
      await categoryApi.categoryDeleteDelete(selectedCategory.value.category_id)
      await loadCategories()
      showDeleteDialog.value = false
      selectedCategory.value = null
    } catch (error) {
      console.error('删除分类失败:', error)
    }
  }
}

// 处理表单提交
const handleSubmit = async (formData: CategoryCreate) => {
  try {
    if (showEditDialog.value && selectedCategory.value) {
      // 编辑现有分类
      const editData: CategoryEdit = {
        category_id: selectedCategory.value.category_id,
        name: formData.name,
        link: formData.link,
        description: formData.description,
        color: formData.color
      }
      await categoryApi.categoryEditPatch(editData)
    } else {
      // 新建分类
      await categoryApi.categoryCreatePut(formData)
    }
    await loadCategories()
    closeDialog()
  } catch (error) {
    console.error('保存分类失败:', error)
  }
}

// 关闭对话框
const closeDialog = () => {
  showAddDialog.value = false
  showEditDialog.value = false
  selectedCategory.value = null
}
</script>

<style lang="scss" scoped>
.category-list {
  padding: 2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: #333;
    }

    .add-btn {
      padding: 0.75rem 1.5rem;
      background-color: #1a73e8;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: #1557b0;
      }
    }
  }

  .table-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #eee;
      }

      th {
        background-color: #f8f9fa;
        font-weight: 600;
        color: #666;
      }

      td {
        color: #333;

        .color-preview {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          margin-right: 0.5rem;
          vertical-align: middle;
        }

        .action-btn {
          padding: 0.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          margin-right: 0.5rem;
          transition: all 0.2s;

          &.edit {
            background-color: #f8f9fa;
            color: #1a73e8;

            &:hover {
              background-color: #e8f0fe;
            }
          }

          &.delete {
            background-color: #fef2f2;
            color: #dc2626;

            &:hover {
              background-color: #fee2e2;
            }
          }
        }
      }
    }
  }

  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .dialog-content {
      background-color: white;
      border-radius: 8px;
      padding: 2rem;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        margin: 0 0 1.5rem;
        color: #333;
      }

      .form-group {
        margin-bottom: 1rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #666;
          font-size: 0.875rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.875rem;

          &:focus {
            outline: none;
            border-color: #1a73e8;
            box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.1);
          }
        }
      }

      .dialog-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 2rem;

        button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s;

          &.cancel-btn {
            background-color: #f8f9fa;
            color: #666;

            &:hover {
              background-color: #e9ecef;
            }
          }

          &.submit-btn {
            background-color: #1a73e8;
            color: white;

            &:hover {
              background-color: #1557b0;
            }
          }

          &.delete-btn {
            background-color: #dc2626;
            color: white;

            &:hover {
              background-color: #b91c1c;
            }
          }
        }
      }
    }
  }
}
</style>