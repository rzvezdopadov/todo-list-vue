<script setup lang="ts">
  import ListHeader from "./components/ListHeader/ListHeader.vue";
  import List from "./components/List/List.vue";
  import ListFooter from "./components/ListFooter/ListFooter.vue";
import { StorageUtils } from "./utils/storageUtils";

  const storage = new StorageUtils;
  const items = storage.getStorage();
</script>

<template>
  <header class="header">
    <h2>ToDo List</h2>
  </header>

  <main class="main">
    <ListHeader></ListHeader>
    <List :items = "items"></List>
    <ListFooter></ListFooter>
  </main>
</template>

<style>
  @import 'App.css';
</style>
