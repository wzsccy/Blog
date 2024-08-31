<script setup lang="ts">//TypeStript
defineProps<{
  /**
   * Input a number in [0, 1].
   */
  procudure: number;//表示一个名为procedure的prop，类型为数字number
}>();
</script>

<template>
  <div class="shell">
  <div :style="`--procudure: ${procudure * 100}%;`"></div>
  </div>
</template>


<style scoped>
@keyframes asd {
  from {
    left: -20%;
  }

  to {
    left: 120%;
  }
}

div.shell {
  position: relative;
  overflow: hidden;
  width: 50vw;
  height: 1rem;
  background: #ddd;

  & > div {
    position: absolute;
    width: var(--procudure);
    height: 100%;
    background: #aaa;
    transition: width 2s;
  }
}

.runningx {
  animation: asd 3s linear infinite;
}
</style>