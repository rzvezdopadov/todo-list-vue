<script setup lang="ts">
  import ListHeader from "./components/ListHeader/ListHeader.vue";
  import List from "./components/List/List.vue";
  import ListFooter from "./components/ListFooter/ListFooter.vue";
  import { StorageUtils } from "./utils/storageUtils"; 
</script>
  
<template>
  <header class="header">
    <h2>ToDo List</h2>
  </header>

  <main class="main">
    <ListHeader
      :items = "items"
    ></ListHeader>
    <List 
      :items = "items"
      :filter = "filter"
      :itemChangeId = "itemChangeId"
      :itemChangeOldValue = "itemChangeOldValue"
    ></List>
    <ListFooter
      :items="items"
      :filter = "filter"
    ></ListFooter>
  </main>
</template>

<script lang="ts">
    const storage = new StorageUtils;

    export default {
      el: '#App',
      data() {

        return {
          items: storage.getStorage(),
          filter: 'All',
          itemChangeId: 0,
          itemChangeOldValue: '',
        }
      },

      created() {
        this.emitter.on('changeFilter', (nameFilter: string) => {
          this.filter = nameFilter;
        });
        this.emitter.on('saveItemsToStorage', () => {
          storage.setStorage(this.items);
        });
        this.emitter.on('changeItemChangeId', (id: number) => {
          this.itemChangeId = id;
        });
        this.emitter.on('changeItemChangeOldValue', (oldValue: string) => {
          this.itemChangeOldValue = oldValue;
        });
      },
    }
</script>

<style>
  @import 'App.css';
</style>
