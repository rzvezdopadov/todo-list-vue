<script setup lang="ts">
  import ListHeader from "./components/ListHeader/ListHeader.vue";
  import List from "./components/List/List.vue";
  import ListFooter from "./components/ListFooter/ListFooter.vue";
  import { StorageUtils } from "./utils/storageUtils";
import { VueElement } from "vue";
  
</script>
  
<template>
  <header class="header">
    <h2>ToDo List</h2>
  </header>

  <main class="main">
    <ListHeader
      :items = "items"
      v-on:saveItemsToStorage="saveItemsToStorage"
    ></ListHeader>
    <List 
      :items = "items"
      :filter = "filter"
      :itemChangeId = "itemChangeId"
      :itemChangeOldValue = "itemChangeOldValue"
      v-on:saveItemsToStorage="saveItemsToStorage"
    ></List>
    <ListFooter
      :items="items"
      :filter = "filter"
      v-on:saveItemsToStorage="saveItemsToStorage"
      v-on:changeFilter="changeFilter"
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

      methods: {
        changeFilter(nameFilter: string) {
          this.filter = nameFilter;
        },
        changeItemChangeId(id: number) {
          this.itemChangeId = id;
        },
        changeItemChangeOldValue(oldValue: string) {
          this.itemChangeOldValue = oldValue;
        },
        saveItemsToStorage() {
          console.log(this.items);
          storage.setStorage(this.items);
        }

      }
    }
</script>

<style>
  @import 'App.css';
</style>
