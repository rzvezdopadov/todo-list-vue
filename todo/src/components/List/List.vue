<script setup lang="ts">
    import Item from "../Item/Item.vue";
</script>

<template>
    <ul class="list">
        <Item 
            v-for="[id, completed, value] in items"
            :key="id+value"
            :items="items"
            :id="id"
            :completed="completed"
            :value="value"
            :filter="filter"
            :itemChangeId = "itemChangeId"
            :itemChangeOldValue = "itemChangeOldValue"
        ></Item>
    </ul>
</template>

<script lang="ts">
    export default {
        props: [
            'items', 
            'filter',
            'itemChangeId', 
            'itemChangeOldValue',
        ],
        updated() {
            const activeInput = document.querySelector('.item-input-phrase' && '.visibility-visible');

            if (activeInput) {
                activeInput.focus();
            }
        },
    }
</script>

<style>
    @import 'List.css';
</style>
