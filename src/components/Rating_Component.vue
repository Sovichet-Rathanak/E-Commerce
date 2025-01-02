<template>
  <div class="rating-container">
    <h1 style="font-family: 'Inter'; margin-bottom: 0;">Ratings</h1>
    <hr>

    <div class="main-section">

      <!-- Left Section -->
      <div class="audience-rating-section">
        <h2>Audience Rating Summary</h2>
        <div v-for="(rating, index) in ratings" :key="index" class="bar-container">
          <h3>{{ 5 - index }}</h3>
          <div class="rating-bar">
            <div class="fill"></div>
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="overall-rating">
        <h2>Overall Ratings</h2>
        <h1 class="score">{{ overallRating.toFixed(1) }}</h1>
        <span>
          <iconify-icon v-for="index in 5" :key="index" class="overall-stars" icon="material-symbols:star-rounded" />
        </span>
        <span class="total-rating">{{ totalRatings }} Ratings</span>
        <button @click="openModal" class="rating-btn">
          Leave A Rating
        </button>
      </div>
    </div>

    <!-- Pop up Section -->
    <div class="popup" v-if="showModal">
      <div class="popup-header">
        <h1>Your oppinions matters to us!</h1>
      </div>
      <h2>How would you rate this product overall quality?</h2>
      <form class="rating-form" @submit.prevent="myMethod">
        <div>
          <iconify-icon
            class="rating-star" 
            icon="material-symbols:star-rounded" 
            v-for="index in 5" :key="index"
            @click="selectedStar(index)"
          />
        </div>
        <button class="submit-btn">Submit</button>
        <button class="later-btn" @click="closeModal">Maybe Later</button>
      </form>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      ratings: [50, 20, 10, 10, 10], // Percentages for the 5-star rating bars
      overallRating: 4.0, // Default overall rating
      totalRatings: 500, // Total number of ratings
      showModal: false, // Modal visibility
      newRating: 0, // User's new rating
      hoverRating: 0, // Star being hovered
      showSubmitModal: false, // Submit modal visibility
    }
  },
  methods: {
    setRating(star) {
      this.newRating = star; // Set the user's selected rating
    },
    submitRating() {
      if (this.newRating > 0) {
        // Update overall rating and total ratings
        const totalWeighted = this.overallRating * this.totalRatings;
        this.totalRatings += 1;
        this.overallRating =
          (totalWeighted + this.newRating) / this.totalRatings;

        // Update individual rating percentages
        const index = 5 - this.newRating; // Find the corresponding bar index
        this.ratings[index] += 1;
        this.normalizeRatings();

        // Close the modal
        this.showModal = false;
        this.newRating = 0;
      }
    },
    normalizeRatings() {
      const total = this.ratings.reduce((sum, count) => sum + count, 0);
      this.ratings = this.ratings.map((count) => (count / total) * 100);
    },


    selectedStar(index){
     console.log('bouto kill myself ' + index)
    },
    closeModal() {
      this.showModal = false;
      this.newRating = 0;
    },
    openModal() {
    this.showModal = true;
    },
  },
};
</script>

<style scoped>
*{
  font-family: 'Inter';
}

.rating-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  position: relative;
}

hr{
  width: 100%;
  margin-top: 15px;
}

.main-section{
  display: flex;
  flex-direction: row;
  width: 100%;
}

/* LEFT SECTION */
.audience-rating-section{
  width: 60%;
}

.rating-bar{
  border: 1px solid black;
  width: 80%;
  height: 10px;
}

.bar-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.bar-container > h3{
  font-size: 22px;
}

.rating-bar{
  height: 35px;
  background-color: #D9D9D9;
  border: 0px;
  border-radius: 35px;
}

/* RIGHT SECTION */
.overall-rating{
  width: 40%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: 7px 17px 17px #8e8e8e;
}

.overall-rating > h1,
.overall-rating > h2{
  margin: 0;
}

.overall-stars{
  width: 28px;
  height: 28px;
}

.overall-rating > h1{
  font-size: 80px;
  margin-top: 15px;
  font-weight: 500;
}

.total-rating{
  font-weight: 500;
  color: grey;
}

.rating-btn{
  cursor: pointer;
  margin-top: 25px;
  width: 40%;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 30px;
  border: none;
}

/* Pop Up Section */
.popup{
  border: 1px solid black;
  display: flex;
  width: 50%;
  left: 25%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
}

.popup h1{
  color: white;
}

.popup-header{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0907;
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0px 0px;
}

.rating-star{
  width: 85px;
  height: 85px;
  color: #8e8e8e;
  cursor: pointer;
}

.rating-form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.submit-btn{
  margin-top: 30px;
  font-size: 20px;
  width: 50%;
  height: 50px;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
}

.later-btn{
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

.active_rating{
  color: #FFAA00;
}
</style>
