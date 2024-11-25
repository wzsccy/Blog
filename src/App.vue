<template>
  <div>
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主内容 -->
    <main>
      <h1>欢迎来到我的博客</h1>
      <section>
        <h2>关于本站</h2>
        <p>这是我的个人博客，用于记录学习、成长和分享知识。欢迎交流！</p>
      </section>
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: linear-gradient(to bottom, #e0e7ff, #f3f4f6);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(31, 41, 55, 0.9);
  color: #f3f4f6;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-radius: 0 0 10px 10px;
}
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  margin: 0 15px;
}
nav ul li a {
  color: #f3f4f6;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
}
nav ul li a:hover {
  color: #60a5fa;
  transform: scale(1.1);
}
h1 {
  font-size: 4rem;
  font-weight: bold;
  color: #1f2937;
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
section {
  background-color: #ffffff;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
}
section h2 {
  font-size: 2rem;
  color: #374151;
}
section p {
  font-size: 1.2rem;
  color: #6b7280;
  line-height: 1.6;
}
footer {
  background-color: #1f2937;
  color: #f3f4f6;
  text-align: center;
  padding: 1.5rem 0;
}
footer a {
  margin: 0 15px;
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
  color: #f3f4f6;
  transition: all 0.3s ease;
}
footer a:hover {
  color: #60a5fa;
  transform: scale(1.2);
}
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  nav ul li {
    margin: 0 8px;
  }
  section {
    padding: 1.5rem;
  }
}

</style>
