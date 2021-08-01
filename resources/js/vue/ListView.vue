<template>
    <div class="taskItems">
        <div v-for="(item, index) in items " :key="index">
            <ListItem
                :item="item"
                v-on:itemChanged="$emit('reloadList')"
            />
        </div>
    </div>       
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    props:['items'],
    components:{
        ListItem
    }
}
</script>
