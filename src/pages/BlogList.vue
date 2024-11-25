<template>
    <div class="container mx-auto py-10">
      <h2 class="text-2xl font-bold mb-4">文章列表</h2>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white p-4 shadow rounded hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold">{{ post.title }}</h3>
          <p class="text-sm text-gray-600">{{ post.summary }}</p>
          <router-link :to="'/blogs/' + post.id" class="text-primary hover:underline">阅读更多</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          { id: 1, title: '我的第一篇博客', summary: '这是我的第一篇文章！' },
          { id: 2, title: 'Vue 的学习笔记', summary: '记录我学习 Vue 的过程。' },
        ],
      };
    },
  };
  </script>
  