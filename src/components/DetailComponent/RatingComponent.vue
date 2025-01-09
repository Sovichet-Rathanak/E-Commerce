<template>
  <div id="app">
    <!-- Ratings Section -->
    <div class="ratings-section">
      <h1>Ratings</h1>
      <hr style="opacity: 40%;"/>
      <div class="main-section">
        <!-- Left Section: Audience Rating -->
        <div class="audience-rating-section">
          <h2>Audience rating summary</h2>

          <div v-for="(count, index) in starCounts" :key="index" class="rating-bar">
            <div class="star-numb">
              <h3>{{ 5 - index }}</h3> 
              <iconify-icon icon="material-symbols:star-rounded" width="24px" height="24px" color="#ffaa00"></iconify-icon>
            </div>

            <div class="bar">
              <div class="fill" :style="{ width: getBarWidth(count) }"></div>
            </div>
            
            <span class="countRate">{{ count }}</span>
          </div>

        </div>

        <!-- Right Section: Overall Rating -->
        <div class="overall-rating">
          <h2>Overall Ratings</h2>
          <h2 class="rating-number">{{ ratings.length === 0 ? '0.0' : overallRating.toFixed(1) }}</h2>

          <div class="overallstar-container">
            <div class="overall-stars" :style="[{width: ratings.length === 0? '0%' : getStarWidth + '%'}]">
                <iconify-icon class="heref" v-for="index in 5" :key="index" icon="material-symbols:star-rounded"></iconify-icon>
            </div>
            <div class="starholder-container">
              <iconify-icon class="star-holder" v-for="index in 5" :key="index" icon="material-symbols:star-rounded"></iconify-icon>
            </div>
          </div>

            <h4 class="total_rating">{{ ratings.length === 0 ? 'This product has no rating' : ratings.length + ' Ratings'}}</h4>

          <button class="leave-rating-btn" @click="showPopup = true">
            Leave A Rating
          </button>
        </div>
      </div>
    </div>

    <!-- Popup for leaving a rating -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <div class="popup-header">
          <h1>Your opinion matters to us!</h1>
        </div>

        <h2 class="popuptitle">
          How would you like to rate this product overall quality?
        </h2>

        <div class="stars">
          <iconify-icon
            v-for="index in 5"
            :key="index"
            icon="material-symbols:star-rounded"
            class="rating-star"
            :class="{ selected: index <= selectedRating }"
            @click="updateRating(index)"
          ></iconify-icon>
        </div>

        <button class="submit-btn" @click="submitRating">Submit</button>
        <button class="later-btn" @click="closePopup">Maybe later</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratings: [],
      showPopup: false,
      selectedRating: 0,
      RatingAVG: 0,
    };
  },
  computed: {
    overallRating() {
      return (
        this.ratings.reduce((sum, rating) => sum + rating, 0) /this.ratings.length
      ); 
    },

    starCounts() {
      const counts = [0, 0, 0, 0, 0];
      this.ratings.forEach((rating) => {
        counts[5 - Math.floor(rating)]++;
      });
      return counts;
    },

    getStarWidth(){
      return ((100/5.0) * this.overallRating).toFixed(2);
    },
  },
  methods: {
    getBarWidth(count) {
      const totalVotes = this.ratings.length;
      if (totalVotes === 0) return "0%";   
      return `${(count / totalVotes) * 100}%`;
    },

    updateRating(value) {
      this.selectedRating = value; 
    },

    submitRating() {
      console.log(this.ratings);
      if (this.selectedRating > 0) {
        this.ratings.push(this.selectedRating); 
        this.closePopup();
      }
    },

    closePopup() {
      this.showPopup = false; 
      this.selectedRating = 0; 
    },
  },
};
</script>

<style scoped>
*{
  font-family: "Inter";
}

.ratings-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  position: relative;
}

.ratings-section > h1{
  font-size: 35px;
}

hr {
  width: 100%;
  margin-top: 0;
}

.main-section {
  display: flex;
  flex-direction: row;
  width: 100%;
}
/* Left Section */
.audience-rating-section {
  width: 60%;
}

.star-numb{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
}

.star-numb > h3{
  font-family: "Inter";
  font-size: 24px;
  margin-right: 5px;
  margin-top: 0;
  margin-bottom: 0;
}

.rating-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
}

.bar {
  background-color: #eee;
  border-radius: 35px;
  width: 75%;
  height: 35px;
}

.bar .fill {
  height: 100%;
  background-color: #ffaa00;
  border-radius: 35px;
}
.countRate {
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
}

/* Right Section  */
.overall-rating {
  width: 40%;
  margin-top: 20px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 10px 0 30px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: 7px 10px 10px #8e8e8e;
}

.rating-value {
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  margin: 0;
}

.rating-number {
  font-size: 100px;
  margin: -10px;
  font-weight: normal;
}

.overallstar-container{
  width: 21%;
  height: 31px;
  position: relative;
}

.overall-stars {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: hidden; 
  box-sizing: border-box;
}

.starholder-container{
  display: flex;
  position: absolute;
  z-index: -1;
  bottom: 0;
}

.overall-stars .heref,
.star-holder{
  width: 30px;
  height: 30px;
  flex-shrink: 0; 
}

.star-holder{
  color: black;
  opacity:20%;
}

/* Star represent rating numebr */
.total_rating {
  color: rgba(26, 26, 26, 0.5);
  font-size: 22px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 25px;
}

.stars {
  font-size: 1.2em;
  color: gray;
}

.stars .filled {
  color: black;
}

.leave-rating-btn {
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 55px;
  cursor: pointer;
  padding-bottom: 10px;
  width: 45%;
  height: 55px;
  font-size: 24px;
  font-weight: 600;
}

/* Pop UP Section */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.popup {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px black;
  width: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.popup-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0907;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  height: 100px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}

.popuptitle {
  font-size: 20px;
}

.stars {
  display: flex;
  justify-content: center;
}

.star-wrapper {
  display: flex;
}

.rating-star {
  width: 90px;
  height: 90px;
  color: #8e8e8e;
  cursor: pointer;
  margin: 15px 0 23px 0;
}

.rating-star.selected {
  color: #ffaa00;
}

.overall-stars.selected {
  color: #ffaa00;
}

.submit-btn {
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  width: 50%;
  height: 60px;
  font-weight: bold;
}

.later-btn {
  background-color: transparent;
  border: none;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 18px;
  color: grey;
  opacity: 70%;
  cursor: pointer;
}
</style>
