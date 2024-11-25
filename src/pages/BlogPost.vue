<template>
    <div class="container mx-auto py-10">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-600 mb-6">发布时间：{{ post.date }}</p>
      <div v-html="post.content" class="prose max-w-none"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '文章标题',
          date: '2024-11-25',
          content: '<p>这是文章的内容，支持 <strong>HTML</strong> 和 Markdown！</p>',
        },
      };
    },
  };
  </script>
  