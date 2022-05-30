<script setup lang="ts">
</script>

<template>
    <div class="list-footer">
        <span class="list-footer-counter"> items left</span>
        <ul class="list-footer-filters">
            <li
                class="list-footer-filters-content"
            >
                All
            </li>
            <li
                class="list-footer-filters-content"
            >
                Active
            </li>
            <li
                class="list-footer-filters-content"
            >
                Completed
            </li>
        </ul>

        <button
            class="list-footer-item-completed-destroy"
        >
            Clear completed
        </button>
    </div>
</template>

<style>
    @import 'ListFooter.css';
</style>
