<template>
  <div
    class="item"
    :style="{
      borderLeft: [
        item.proirity === 3
          ? '5px solid #E93C3C'
          : item.proirity === 2
          ? '5px solid #f37914'
          : '5px solid #4ec5c1',
      ],
    }"
  >
    <div>
      <p-check
        class="p-svg p-round p-plain p-jelly"
        color="success"
        @change="updateCheck()"
        v-model="item.completed"
      >
        <span class="svg" uk-icon="icon: check"></span>
      </p-check>
      <span :class="[item.completed ? 'completed' : '', 'itemText']">
        {{ item.name }}
      </span>
    </div>
    <button @click="removeItem()" class="trashcan">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    updateCheck() {
      axios
        .put("api/item/" + this.item.id, {
          item: this.item,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("itemChanged");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeItem() {
      axios
        .delete("api/item/" + this.item.id, {
          item: this.item,
        })
        .then((response) => {
          if (response.status == 200) {
            this.$emit("itemChanged");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

