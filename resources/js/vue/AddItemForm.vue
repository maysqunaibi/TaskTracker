<template>
  <div class="form">
    <div>
      <input
        type="text"
        v-model="item.name"
        placeholder="What needs to be done?"
      />
      <font-awesome-icon
        icon="plus-square"
        :class="[item.name ? 'active' : 'inactive', 'plus']"
        @click="addItem()"
      />
    </div>
    <div class="proirity">
    <Label>Proirity:  
    <p-radio
        class="p-svg p-round p-plain p-jelly"
         color="info"
         value=1
         id="low"
        v-model="item.proirity"
        name="proirity">
      <span class="svg" uk-icon="icon: check"></span>
      Low
    </p-radio>
    <p-radio
        class="p-svg p-round p-plain p-jelly"
        color="warning"
        id="meduim"
        value=2
        v-model="item.proirity"
        name="proirity">
      <span class="svg" uk-icon="icon: check"></span>
      Meduim
    </p-radio>
     <p-radio
        class="p-svg p-round p-plain p-jelly"
        color="danger"
        id="high"
        value=3
        v-model="item.proirity"
        name="proirity">
      <span class="svg" uk-icon="icon: check"></span>
      High
    </p-radio>
    </Label>
  </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      item: {
        name: "",
        proirity: null,
      },
    };
  },
  methods: {
    addItem() {
      if (this.item.name === "") {
        return;
      }
      axios
        .post("api/item/store", {
          item: this.item,
        })
        .then((response) => {
          if (response.status == 201) {
            this.item.name = "";
            this.item.proirity= null
            this.$emit("reloadList");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.inactive {
  color: #999999;
}
.active {
  color: #00ce25;
}
</style>