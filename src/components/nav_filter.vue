<template>
  <nav class="nav_container" v-if="$route.name !== 'Home'">
    <button class="nav_btn" v-for="(category, index) in categories" :key="index" @mouseover="showFilter(index), this.FilterVisible = true">
      {{ category }}
    </button>
  </nav>

  <transition name="filter_result">
    <div class="filter_result" v-if="FilterVisible" @mouseleave="this.FilterVisible = false">
      <div class="by_price">
        <span>Sort By Price:</span>
        <div class="filt_resBtn_container" style="width: 200px;">
          <button v-for="filter in selectedCat.Price" :key="filter">{{ filter }}</button>
        </div>
      </div>

      <!-- vertical line -->
      <div class="vl"></div>

      <div class="by_brand">
        <span>Sort By Brand:</span>
        <div class="filt_resBtn_container">
          <button v-for="filter in selectedCat.Brand" :key="filter" @click="console.log(selectedCat)">{{ filter }}</button>
        </div>
      </div>

      <!-- vertical line -->
      <div class="vl"></div>

      <div class="by_rating">
        <span>Sort By Rating:</span>
        <div class="filt_resBtn_container" style="width: 200px;"> <!-- Filter result button container -->
          <button v-for="filter in selectedCat.Rating" :key="filter">{{ filter }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      FilterVisible: false,
      selectedCat: null,
      categories: ["Sneakers","Accessories","Menswear","Womenswear","Collectibles"],
      filters: {
        Sneakers:{
          Brand:["Nike", "Adidas", "Air Jordan", "New Balance", "Converse", "Vans", "FILA", "Puma", "Rebook", "Onitsuka Tiger", "Sketchers"],
          Price:["Designers", "Below $300", "Below $200", "Below $100", "Below $50"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Accessories:{
          Brand:["Hermes", "Chanel", "Prada", "DIOR", "Goyard", "Louis Vuitton", "GUCCI", "COACH", "Yves Saint Laurent", "Fendi", "Givenchy", "BURBERRY"],
          Price:["Very high prolly idk :3"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Menswear:{
          Brand:["I like menswear"],
          Price:["Very high prolly idk :3"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Womenswear:{
          Brand:["sundress goated fr"],
          Price:["Very high prolly idk :3"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Collectibles:{
          Brand:["Aespa", "NewJeans", "NCT Wish", "ILLIT", "LE SSERAFIM", "ATEEZ", "Stray Kids", "ITZY", "TXT", "RIIZE", "XG", "TWICE", "IVE", "SEVENTEEN", "ENHYPEN"],
          Price:["Mid"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        }
      },
    };
  },
  methods: {
    print() {
      console.log(this.filters.Sneakers.Brand[0])
    },
    showFilter(index){
      const CurrentCategory = this.categories[index]; //do this to get the filter category we're on
      this.selectedCat = this.filters[CurrentCategory]; //Get the name of the nested object we hover on so we could use it to dynamically display the filter result
      console.log(CurrentCategory);
      console.log("This:" + this.selectedCat)
    }
  },
};
</script>

<style>
.nav_container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0907;
  height: 3.6rem;
  border-top: 1.5px solid white;
  gap: 4.3rem;
  box-shadow: 5px 0px 10px black;
}

.nav_container button {
  background-color: transparent;
  font-size: 16px;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}

.filter_result {
  display: flex;
  justify-content: center;
  background-color: #101010;
  gap: 4.3rem;
  box-shadow: 5px 0px 10px black;
  height: fit-content;
  transition: 0.25s ease-in-out;
  color: #949494;
  font-family: "Inter";
  font-weight: bold;
  padding: 1rem;
}

.filt_resBtn_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 19rem;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.filt_resBtn_container button {
  background-color: transparent;
  font-size: 16px;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: fit-content;
}

.filt_resBtn_container button:hover {
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  color: white;
  cursor: pointer;
}

.nav_container button {
  background-color: transparent;
  font-size: 16px;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
  cursor: pointer;
}

.nav_container button:hover {
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  color: white;
  cursor: pointer;
}

.vl {
  height: auto;
  border: 1.5px solid #2d2d2d;
}
</style>

