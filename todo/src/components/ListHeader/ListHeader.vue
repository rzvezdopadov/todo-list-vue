<script setup lang="ts">
</script>

<template>
    <div class="list-header">
    <label
        class="list-header-arrow"
        :class="(
            items.reduce((previousValue: number, [, complete]) => previousValue + complete, 0) 
                !== items.length ? ' list-header-arrow-down' : ' list-header-arrow-up'
        )"
        @click="arrowClick"
    ></label>
    <input 
        class="list-header-input" 
        placeholder="Please enter task"
        @keypress.enter="addItem($event)"
    />
    </div>
</template>

<script lang="ts">
    export default {
        props: ['items'],
        methods: {
            addItem(event: any) {
                const value = event.target.value;
                
                if (!value) return; 

                event.target.value = '';
                
                const newItem = [Date.now(), false, value];

                this.items.push(newItem);
                this.$emit('saveItemsToStorage');
            },
            arrowClick() {
                let flagCompleteItem = true;

                for (let i = 0; i < this.items.length; i++) {
                    const [, complete] = this.items[i];

                    if (complete === false) {
                        flagCompleteItem = false;

                        break;
                    }
                }

                if (flagCompleteItem) {
                    this.items.forEach((value: any, i: number) => this.items[i][1] = false)
                } else {
                    this.items.forEach((value: any, i: number) => this.items[i][1] = true)
                }

                this.$emit('saveItemsToStorage');
            },
        }
    }
</script>

<style>
    @import 'ListHeader.css';
</style>

