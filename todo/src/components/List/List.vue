<script setup lang="ts">
    import Item from "../Item/Item.vue";
</script>

<template>
    <ul class="list">
        <Item 
            v-for="[id, completed, value] in items"
            :id="id"
            :completed="completed"
            :value="value"
        ></Item>
    </ul>
</template>

<script lang="ts">
    export default {
        props: ['items'],
    }
</script>


<style>
    @import 'List.css';
</style>
