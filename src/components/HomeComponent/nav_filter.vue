<template>
  <div class="wrapper">
    <nav class="nav_container" v-if="$route.name !== 'Home'">
      <template v-for="(category, index) in filters.categories" :key="index">
        <RouterLink :to="'/' + category" @mouseover="filters.showFilter(index), filters.FilterVisible = true">
          <button class="nav_btn">{{ category }}</button>
        </RouterLink>
      </template>
    </nav>

    <transition name="filter_result">
      <div class="filter_result" v-if="filters.FilterVisible" @mouseleave="filters.FilterVisible = false">
        <div class="by_price">
          <span>Sort By Price:</span>
          <div class="filt_resBtn_container" style="width: 200px;">
            <button v-for="filter in filters.selectedCat.Price" :key="filter">{{ filter }}</button>
          </div>
        </div>

        <!-- vertical line -->
        <div class="vl"></div>

        <div class="by_brand">
          <span>Sort By Brand:</span>
          <div class="filt_resBtn_container">
            <button v-for="filter in filters.selectedCat.Brand" :key="filter" @click="clicked">{{ filter }}</button>
          </div>
        </div>

        <!-- vertical line -->
        <div class="vl"></div>

        <div class="by_rating">
          <span>Sort By Rating:</span>
          <div class="filt_resBtn_container" style="width: 200px;">
            <button v-for="filter in filters.selectedCat.Rating" :key="filter">{{ filter }}</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { useFilterStore } from '@/store/filter';

export default{
  setup(){
    const filters = useFilterStore();
    return { filters };
  },
}
</script>

<style scoped>
.wrapper{
  position: sticky;
  top: 7rem;
  z-index: 1;
}

.nav_container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #0d0907;
  height: 3.6rem;
  border-top: 1.5px solid white;
  gap: 4.3rem;
  box-shadow: 5px 0px 10px black;
  width: 100%;
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
  width: 100%;
  position: absolute;
  background-color: #101010;
  gap: 4.3rem;
  box-shadow: 5px 0px 10px black;
  height: fit-content;
  transition: 0.25s ease-in-out;
  color: #949494;
  font-family: "Inter";
  font-weight: bold;
  box-sizing: border-box;
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

