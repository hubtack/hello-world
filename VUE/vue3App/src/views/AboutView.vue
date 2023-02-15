<script setup lang="ts">
import ReactiveTest from "@/components/ReactiveTest.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ReactiveTest></ReactiveTest>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
