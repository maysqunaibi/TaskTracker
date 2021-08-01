<template>
  <div class="container">
    <div class="todoListContainer">
      <div id="title">
        <h2>Seize The Day! </h2>
      </div>
      <div class="clearBtns">
        <button @click="toggleShow('showAddTask')"><font-awesome-icon icon="plus" />Add Task</button>
        <button @click="sortByProirity()"><font-awesome-icon icon="list" /> By proirity</button>
        <button @click="toggleShow('showSearchBar')"><font-awesome-icon icon="search" />Search</button>
      </div>
      <div>
         <Add-item-form v-on:reloadList="getList()" v-show="showAddTask" />
      </div>
     
      <div class="searchbar" v-show="showSearchBar">
        <input type="text" v-model="search" placeholder="Search tasks" />
        <font-awesome-icon icon="search" class="search" />
      </div>
      <ListView :items="filteredItems" v-on:reloadList="getList()" />
      <Footer/>
    </div>
  </div>
</template>

<script>
import AddItemForm from "./AddItemForm.vue";
import ListView from "./ListView.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    AddItemForm,
    ListView,
    Footer
  },
  data: function () {
    return {
      items: [],
      search: "",
      showAddTask: false,
      showSearchBar: false
    };
  },
  methods: {
    getList() {
      axios
        .get("api/items")
        .then((response) => {
          this.items = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sortByProirity(){
      this.filteredItems = this.items.sort((a,b)=> a.proirity > b.proirity?-1:1)
    },
    toggleShow(prop){
      this[prop] = !this[prop]
    }
  },
  created() {
    this.getList();
  },
  computed: {
    filteredItems: function () {
      return this.items.filter((item) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>
@import "./../../css/app.css";
</style>
