
<template>
    <div class="SeeMore">
      <h2>New and Noteworthy</h2>
      <div class="SeeMore_btn">
        <button v-if="showAll" @click="showMore">See More <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg></button>
      <button v-else @click="showAllItems"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>Back </button>

      <div class="items-container">
      <div class="item" v-for="item in limitedData" :key="item.id">
        {{ item.name }}
      </div>
    </div>

      </div>
    </div>
  </template>

<script>

export default{
  data() {
    return {
      items: [
        /* Your item data here */
      ],
      limitedData: [],
      showAll: true,
    };
  },


  created() {
    this.limitedData = this.items.slice(0, 4); // Show the first 3 items initially
  },
  methods: {
    showMore() {
      this.limitedData = this.items; // Show all items
      this.showAll = false;
    },
    showAllItems() {
      this.limitedData = this.items.slice(0, 4); // Show the first 3 items again
      this.showAll = true;
    },
  },

}
</script>

<style scoped>

.SeeMore {
  display: flex;
  margin-left: 20px;
  align-items: center;
  gap: 70rem;
}

.SeeMore_btn button {
  background-color: transparent;
  font-size: 20px;
  color: black;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}
h2 {
  color: black;
  font-size: 20px;
  font-weight: bold;
  font-family: "Inter";
}

.icon {
    margin-bottom: -5px;
    width: 20px; 
    height: 20px; 
  }

</style>