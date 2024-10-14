<template>
  <div>
    <header>
    </header>
    <div class="content">
      <div class="title">
        Fortune 1000 search
      </div>
      <NuxtPage />
    </div>
    <footer>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
html, body {
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

.title {
  padding: 30px 0;
  font-size: 20px;
}

.content {
  max-width: 1200px;
  padding: 0 50px;
  margin: 0 auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
