<script setup lang="ts">
import { ref } from "vue";


const values = ["欢迎来到我的blog！", "让你眼前一亮的blog！"];

const dice = () => {
  const len = values.length;
  return Math.floor(Math.random() * len);
};

let currentIndex = dice();
let currentBit = 0;
let isInputing = true;
const current = ref("");

async function updateLine() {
  if (isInputing) {
    if (currentBit < values[currentIndex].length)
      current.value += values[currentIndex][currentBit++];
    else {
      isInputing = false;
      clearInterval(threadId);
      await new Promise((res) => setTimeout(res, 1000)); // sleep(1000)
      threadId = setInterval(updateLine, 100);
    }
  } else {
    if (!currentBit) {
      isInputing = true;
      currentIndex = dice();
      current.value = "";
      clearInterval(threadId);
      threadId = setInterval(updateLine, 300);
      return;
    }
    current.value = current.value.substring(0, currentBit--);
  }
}

let threadId = setInterval(updateLine, 300);
</script>

<template>
  <p>{{ current }}</p>
 
</template>

<style scoped>


</style>