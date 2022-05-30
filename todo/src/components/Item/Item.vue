<script setup lang="ts">
</script>

<template>
    <li class="item">
        <div class="item-main-wrapper">
            <span class="item-toggle"
                :class="completed ? 'item-complete' : ''"
            >&#10003;</span
            >

            <label class="item-phrase">{{ value }}</label>

            <button class="item-destroy">X</button>
        </div>

        <input class="item-input-phrase" />
    </li>
</template>

<script lang="ts">
    export default {
        props: ['id', 'completed', 'value']
    }
</script>

<style>
    @import 'Item.css';
</style>




