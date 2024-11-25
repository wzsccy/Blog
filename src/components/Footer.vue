<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 关于信息 -->
        <div>
          <h2 class="text-lg font-bold mb-4">关于本站</h2>
          <p class="text-sm text-gray-400">
            这是我的个人博客，用于记录学习、成长和分享知识。欢迎交流！
          </p>
        </div>
  
        <!-- 导航 -->
        <div>
          <h2 class="text-lg font-bold mb-4">快速导航</h2>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="hover:text-secondary">首页</router-link>
            </li>
            <li>
              <router-link to="/blogs" class="hover:text-secondary">文章</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-secondary">关于</router-link>
            </li>
          </ul>
        </div>
  
        <!-- 社交媒体 -->
        <div>
          <h2 class="text-lg font-bold mb-4">关注我</h2>
          <ul class="flex space-x-4">
            <li>
              <a href="https://github.com" target="_blank" aria-label="GitHub">
                <svg
                  class="w-6 h-6 text-gray-400 hover:text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.217.682-.482 0-.237-.008-.868-.013-1.704-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.982 1.029-2.682-.103-.253-.446-1.268.098-2.644 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.851.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.391.099 2.644.64.7 1.028 1.591 1.028 2.682 0 3.841-2.337 4.688-4.564 4.934.359.31.678.92.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.576.688.479A10.004 10.004 0 0 0 22 12c0-5.523-4.477-10-10-10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                <svg
                  class="w-6 h-6 text-gray-400 hover:text-secondary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.013-.532A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646A4.118 4.118 0 0 0 21.448 4.4a8.213 8.213 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.654 11.654 0 0 1 3.114 4.9a4.107 4.107 0 0 0 1.27 5.482A4.074 4.074 0 0 1 2.8 9.616v.052a4.108 4.108 0 0 0 3.292 4.025 4.093 4.093 0 0 1-1.085.145 4.1 4.1 0 0 1-.773-.074 4.108 4.108 0 0 0 3.834 2.851 8.233 8.233 0 0 1-5.096 1.757c-.332 0-.66-.019-.98-.056A11.616 11.616 0 0 0 8.29 20z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- 底部版权声明 -->
      <div class="text-center text-gray-500 text-sm mt-8">
        © {{ new Date().getFullYear() }} 我的博客. 保留所有权利.
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* 响应式辅助 */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
  </style>
  