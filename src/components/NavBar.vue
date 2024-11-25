<template>
  <nav class="bg-primary text-white">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link to="/" class="hover:text-secondary">
          我的博客
        </router-link>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <router-link
            to="/"
            class="hover:text-secondary"
            :class="{ 'text-secondary': isActive('/') }"
          >
            首页
          </router-link>
        </li>
        <li>
          <router-link
            to="/blogs"
            class="hover:text-secondary"
            :class="{ 'text-secondary': isActive('/blogs') }"
          >
            文章
          </router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="hover:text-secondary"
            :class="{ 'text-secondary': isActive('/about') }"
          >
            关于
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden flex items-center focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div
        v-if="showMenu"
        class="absolute top-16 left-0 w-full bg-primary text-white md:hidden"
      >
        <ul class="flex flex-col space-y-4 p-4">
          <li>
            <router-link
              to="/"
              class="hover:text-secondary"
              :class="{ 'text-secondary': isActive('/') }"
              @click="closeMenu"
            >
              首页
            </router-link>
          </li>
          <li>
            <router-link
              to="/blogs"
              class="hover:text-secondary"
              :class="{ 'text-secondary': isActive('/blogs') }"
              @click="closeMenu"
            >
              文章
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="hover:text-secondary"
              :class="{ 'text-secondary': isActive('/about') }"
              @click="closeMenu"
            >
              关于
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const showMenu = ref(false);
const route = useRoute();

// 切换菜单显示
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

// 关闭菜单
const closeMenu = () => {
  showMenu.value = false;
};

// 判断路由是否激活
const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
/* 响应式辅助样式 */
@media (max-width: 768px) {
  .md\:hidden {
    display: block;
  }
  .md\:flex {
    display: none;
  }
}
</style>
