<script setup lang="ts">
</script>

<template>
    <template  v-if="(
        (filter !== 'Active') && (completed === true)) || 
            ((filter !== 'Completed') && (completed !== true)
    )">
        <li class="item">
            <div class="item-main-wrapper">
                <span class="item-toggle"
                    :class="completed ? 'item-complete' : ''"
                    @click="toogleItem"
                >&#10003;</span
                >

                <label 
                    class="item-phrase"
                    @dblclick="dblClickItem"
                >{{ value }}</label>

                <button 
                    class="item-destroy"
                    @click="destroyItem"
                >X</button>
            </div>

            <input
                class="item-input-phrase"
                :class="id === itemChangeId ? ' visibility-visible' : ''"
                :value="value"
            />
            
        </li>
    </template>
</template>

<script lang="ts">
    export default {
        props: [
            'items',
            'id', 'completed', 'value', 
            'filter',
            'itemChangeId', 
            'itemChangeOldValue',
        ], 
        methods: {
            toogleItem() {
                for (let i = 0; i < this.items.length; i++) {
                    const [idItems] = this.items[i];

                    if (idItems === this.id) {
                        this.items[i][1] = this.items[i][1] ? false : true;

                        this.$emit('saveItemsToStorage');

                        break;
                    }
                }
            },
            dblClickItem() {
                this.$emit('changeItemChangeId', this.id);
            },
            onBlurItem() {

            },
            destroyItem() {
                for (let i = 0; i < this.items.length; i++) {
                    const [idItems] = this.items[i];

                    if (idItems === this.id) {
                        this.items.splice(i, 1);

                        this.$emit('saveItemsToStorage');

                        break;
                    }
                }
            },
            
        }
    }
</script>

<style>
    @import 'Item.css';
</style>




