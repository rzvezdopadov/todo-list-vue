<script setup lang="ts">

</script>

<template>
    <div class="list-footer">
        <span class="list-footer-counter"> items left: {{ 
            items.reduce((previousValue: number, [, completed]): number => previousValue + Number(!completed), 0) 
        }}</span>
        
        <ul class="list-footer-filters">
            <li
                class="list-footer-filters-content"
                :class="filter === 'All' ? 'filter-selected' : ''"
                @click="$emit('changeFilter', 'All')"
            >   
                All
            </li>
            <li
                class="list-footer-filters-content"
                :class="filter === 'Active' ? 'filter-selected' : ''"
                @click="$emit('changeFilter', 'Active')"
            >
                Active
            </li>
            <li
                class="list-footer-filters-content"
                :class="filter === 'Completed' ? 'filter-selected' : ''"
                @click="$emit('changeFilter', 'Completed')"
            >
                Completed
            </li>
        </ul>

        <button
            class="list-footer-item-completed-destroy"
            @click="clearCompleteItems"
        >
            Clear completed
        </button>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['items', 'filter'],
        methods: {
            clearCompleteItems() {
                for (let i = 0; i < this.items.length; i++) {
                    const [,completed] = this.items[i];

                    if (completed) {
                        this.items.splice(i, 1);

                        i -= 1;
                    }
                }

                this.$emit('saveItemsToStorage');
            }
        }
    }
</script>

<style>
    @import 'ListFooter.css';
</style>
