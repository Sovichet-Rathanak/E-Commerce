<template>
  <div id="app">
    <!-- Ratings Section -->
    <div class="ratings-section">
      <h2>Ratings</h2>
      <hr />
      <div class="main-section">
        <!-- Left Section: Audience Rating -->
        <div class="audience-rating-section">
          <p>Audience rating summary</p>
          <div
            v-for="(count, index) in starCounts"
            :key="index"
            class="rating-bar"
          >
            <!-- &#9733; = star -->
            <span class="stars-display">
              <span class="star">&#9733;</span>({{ 5 - index }})
            </span>

            <div class="bar">
              <div class="fill" :style="{ width: getBarWidth(count) }"></div>
            </div>

            <!-- Count the number of people who rated -->
            <span class="countRate">{{ count }}</span>
          </div>
        </div>

        <!-- Right Section: Overall Rating -->
        <div class="overall-rating">
          <p>Overall Ratings</p>
          <h2 class="rating-number">{{ overallRating.toFixed(1) }}</h2>

          <!-- Start represent rating number -->
          <div class="overall-stars">
            <iconify-icon
              class="heref"
              v-for="index in 5"
              :key="index"
              icon="material-symbols:star-rounded"
              :class="{
                full: index <= Math.floor(overallRating),
                half:
                  index === Math.ceil(overallRating) &&
                  overallRating % 1 >= 0.5,
                empty: index > overallRating,
              }"
            ></iconify-icon>
          </div>

          <p class="total_rating">{{ ratings.length }} Ratings</p>
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
      ratings: [4, 3, 5, 2, 1, 4, 5, 4, 2],
      showPopup: false,
      selectedRating: 0,
    };
  },
  computed: {
    overallRating() {
      return (
        this.ratings.reduce((sum, rating) => sum + rating, 0) /
        this.ratings.length
      ); // The reduce function sums all the ratings, and then we divide by the length to get the average
    },

    starCounts() {
      const counts = [0, 0, 0, 0, 0];
      this.ratings.forEach((rating) => {
        counts[Math.floor(rating) - 1]++;
      });
      return counts;
    },
  },
  methods: {
    // Calculates the width of the rating bar for each rating level
    getBarWidth(count) {
      const max = Math.max(...this.starCounts); // Find the maximum rating count
      return `${(count / max) * 100}%`; // Returns the width as a percentage based on the count relative to the maximum count
    },

    updateRating(value) {
      this.selectedRating = value; // Set the selected rating to the value clicked
    },

    submitRating() {
      if (this.selectedRating > 0) {
        this.ratings.push(this.selectedRating); // Add the selected rating to the ratings array
        this.closePopup();
      }
    },

    closePopup() {
      this.showPopup = false; // Hide the popup
      this.selectedRating = 0; // Reset the selected rating
    },
  },
};
</script>

<style scoped>
.heref {
  font-size: 25px;
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

h2 {
  font-family: Arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
}
hr {
  width: 100%;
  margin-top: 15px;
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

p {
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: 600;
}

.rating-bar {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.stars-display {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

.stars-display .star {
  color: rgb(255, 232, 103);
  font-size: 35px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.rating-bar span {
  text-align: center;
  font-size: 23px;
}

.bar {
  background-color: #eee;
  margin: 0 18px;
  border-radius: 12px;
  overflow: hidden;
  width: 630px;
  height: 20px;
}

.bar .fill {
  height: 100%;
  background-color: #ffaa00;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.countRate {
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 50px;
}
/* Right Section  */
.overall-rating {
  width: 36%;
  margin-top: 20px;
  display: flex;
  right: 0%;
  position: absolute;
  padding: 10px 0 30px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: 7px 17px 17px #8e8e8e;
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

/* Star represent rating numebr */
.overall-stars {
  display: flex;
  gap: 5px;
  margin: 10px 0;
}

.overall-stars iconify-icon {
  font-size: 30px;
  color: #ccc; /* Default color for empty stars */
}

.overall-stars iconify-icon.full {
  color: gold; /* Color for full stars */
}

.overall-stars iconify-icon.half {
  background: linear-gradient(90deg, gold 50%, #ccc 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.overall-stars iconify-icon.empty {
  color: #ccc; /* Color for empty stars */
}

.total_rating {
  color: rgba(26, 26, 26, 0.5);
  margin-top: 10px;
  font-size: 22px;
  font-weight: normal;
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
  border-radius: 18px;
  cursor: pointer;
  padding-bottom: 10px;
  width: 230px;
  height: 55px;
  font-size: 24px;
}

.leave-rating-btn:hover {
  background-color: #a1a1a1;
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
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0px 0px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}

.popuptitle {
  font-size: 20px;
}

.stars {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin: 10px 0;
}

.star-wrapper {
  display: flex;
}

.rating-star {
  width: 85px;
  height: 85px;
  color: #8e8e8e;
  cursor: pointer;
  margin: 15px 0 23px 0;
}

.rating-star.selected {
  color: gold;
}

.overall-stars.selected {
  color: gold;
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
  height: 50px;
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
button:hover {
  background-color: #333;
}
</style>
