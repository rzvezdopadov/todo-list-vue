<script lang="ts">
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
                @blur="onBlurItem"
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

                        this.emitter.emit('saveItemsToStorage');

                        break;
                    }
                }
            },
            dblClickItem(event: any) {
                this.emitter.emit('changeItemChangeOldValue', event.target.innerText);
                this.emitter.emit('changeItemChangeId', this.id);
            },
            onBlurItem(event: any) {
                if (event.target.value === '') {
                    event.target.value = this.itemChangeOldValue;
                    this.emitter.emit('changeItemChangeId', 0);

                    return;
                }

                for (let i = 0; i < this.items.length; i++) {
                    const [id] = this.items[i];

                    if (this.itemChangeId === id) {
                        this.items[i][2] = event.target.value;

                        this.emitter.emit('saveItemsToStorage');

                        break;
                    }
                }

                this.emitter.emit('changeItemChangeId', 0);
            },
            destroyItem() {
                for (let i = 0; i < this.items.length; i++) {
                    const [idItems] = this.items[i];

                    if (idItems === this.id) {
                        this.items.splice(i, 1);

                        break;
                    }
                }

                this.emitter.emit('saveItemsToStorage');
            },
            
        }
    }
</script>

<style>
    @import 'Item.css';
</style>
