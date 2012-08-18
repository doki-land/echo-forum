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
            <th>颜色</th>
            <th>描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
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

    <!-- 新建/编辑分类对话框 -->
    <div class="dialog" v-if="showAddDialog || showEditDialog">
      <div class="dialog-content">
        <h3>{{ showEditDialog ? '编辑分类' : '新建分类' }}</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>名称</label>
            <input type="text" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label>颜色</label>
            <input type="color" v-model="formData.color" required>
          </div>
          <div class="form-group">
            <label>描述</label>
            <textarea v-model="formData.description" rows="3"></textarea>
          </div>
          <div class="dialog-actions">
            <button type="button" class="cancel-btn" @click="closeDialog">取消</button>
            <button type="submit" class="submit-btn">确定</button>
          </div>
        </form>
      </div>
    </div>

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
import { ref, onMounted } from 'vue'
import { categoryApi, CategoryInfo, CategoryCreate, CategoryEdit } from '../../components/api/api_category'

const categories = ref<CategoryInfo[]>([])
])

// 加载分类列表
const loadCategories = async () => {
  try {
    categories.value = await categoryApi.query()
  } catch (error) {
    console.error('加载分类列表失败:', error)
  }
}

onMounted(() => {
  loadCategories()
})

// 表单数据
const formData = ref<CategoryCreate>({ name: '', color: '#1a73e8', description: '' })

// 对话框状态
const showAddDialog = ref(false)
const showEditDialog = ref(false)
const showDeleteDialog = ref(false)
const selectedCategory = ref<CategoryInfo | null>(null)

// 编辑分类
const editCategory = (category: CategoryInfo) => {
  selectedCategory.value = category
  formData.value = {
    name: category.name,
    color: category.color,
    description: category.description
  }
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
      await categoryApi.delete(selectedCategory.value.category_id)
      await loadCategories()
      showDeleteDialog.value = false
      selectedCategory.value = null
    } catch (error) {
      console.error('删除分类失败:', error)
    }
  }
}

// 处理表单提交
const handleSubmit = async () => {
  try {
    if (showEditDialog.value && selectedCategory.value) {
      // 编辑现有分类
      const editData: CategoryEdit = {
        category_id: selectedCategory.value.category_id,
        name: formData.value.name,
        description: formData.value.description,
        color: formData.value.color
      }
      await categoryApi.update(editData)
    } else {
      // 新建分类
      await categoryApi.create(formData.value)
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
  formData.value = { name: '', color: '#1a73e8', description: '' }
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