<template>
  <nav class="navbar">
    <div class="nav-content">
      <div class="nav-left">
        <h1 class="logo">TieTie Forum</h1>
        <div class="nav-links">
          <a href="#" class="nav-link active">首页</a>
          <a href="#" class="nav-link">分类</a>
          <a href="#" class="nav-link">标签</a>
          <a href="#" class="nav-link">关于</a>
        </div>
      </div>
      <div class="nav-right">
        <div class="search-box">
          <input type="text" placeholder="搜索全站内容..." class="search-input">
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="user-actions">
          <button class="btn-primary">登录</button>
          <button class="btn-outline">注册</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .nav-left {
      display: flex;
      align-items: center;
      gap: 2rem;

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        margin: 0;
      }

      .nav-links {
        display: flex;
        gap: 1.5rem;

        .nav-link {
          color: #666;
          text-decoration: none;
          font-size: 1rem;
          padding: 0.5rem 0;

          &.active {
            color: #333;
            font-weight: 500;
          }

          &:hover {
            color: #333;
          }
        }
      }
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      .search-box {
        display: flex;
        align-items: center;
        background-color: #f5f7fa;
        border-radius: 24px;
        padding: 0.5rem 1rem;

        .search-input {
          border: none;
          background: none;
          outline: none;
          width: 200px;
          font-size: 0.9rem;
          color: #333;

          &::placeholder {
            color: #999;
          }
        }

        .search-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 0 0 0 0.5rem;

          &:hover {
            color: #333;
          }
        }
      }

      .user-actions {
        display: flex;
        gap: 1rem;

        button {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;

          &.btn-primary {
            background-color: #4f46e5;
            color: #fff;
            border: none;

            &:hover {
              background-color: #4338ca;
            }
          }

          &.btn-outline {
            background-color: transparent;
            border: 1px solid #4f46e5;
            color: #4f46e5;

            &:hover {
              background-color: #4f46e5;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>