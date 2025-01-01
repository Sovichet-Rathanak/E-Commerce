<template>
    <div class="ratings-section">
        <button @click="showModal = true" class="rating-btn">
            Rating
          </button>
      <hr />
      <div class="rating-wrap">
        <!-- Audience Rating Summary -->
        <div class="audience-rating-summary">
          <p>Audience Rating Summary</p>
          <div v-for="(rating, index) in ratings" :key="index" class="rating-bar">
            <span>{{ 5 - index }}</span>
            <div class="bar">
              <div class="fill" :style="{ width: rating + '%', backgroundColor: 'orange' }"></div>
            </div>
          </div>
        </div>
  
        <!-- Overall Ratings -->
        <div class="overall-rating">
          <div class="p1">Overall Ratings</div>
          <div class="rating-value">
            <div class="rating-number">{{ overallRating.toFixed(1) }}</div>
            <span class="stars">
              <i
                v-for="star in 5"
                :key="star"
                :class="[
                  'star',
                  star <= hoverRating * 2 || star <= newRating * 2 ? 'filled' : ''
                ]"
                @click="setRating(star / 2)"
                @mouseover="hoverRating = star / 2"
                @mouseleave="hoverRating = 0"
              >★</i>
        </span>
          </div>
          <div class="total_rating">{{ totalRatings }} Ratings</div>
          <!-- <button @click="showModal = true" class="leave-rating-btn">
            Leave A Rating
          </button> -->
          <button @click="openSubmitModal" class="leave-rating-btn">
            Leave A Rating
          </button>
        </div>
      </div>
  
      <!-- Rating Modal -->
      <div v-if="showModal" class="modal-overlay">
        <div class="modal">
          <h2>Give Your Rating</h2>
          <div class="stars">
            <i
              v-for="star in 5"
              :key="star"
              :class="[
                'star',
                star <= hoverRating * 2 || star <= newRating * 2 ? 'filled' : ''
              ]"
              @click="setRating(star / 2)"
              @mouseover="hoverRating = star / 2"
              @mouseleave="hoverRating = 0"
            >★</i>
          </div>
          <button @click="submitRating" class="submit-rating-btn">Submit</button>
          <button @click="closeModal" class="close-modal-btn">Cancel</button>
        </div>
      </div>

      <!-- Submit Modal -->
      <div v-if="showSubmitModal" class="modal-overlay">
        <div class="modal">
            <h2>Submit Your Rating</h2>
            <p>Thank you for leaving a rating!</p>
            <button @click="closeSubmitModal" class="submit-rating-btn">Close</button>
        </div>
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
      };
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
        } else {
          alert("Please select a rating before submitting.");
        }
      },
      normalizeRatings() {
        const total = this.ratings.reduce((sum, count) => sum + count, 0);
        this.ratings = this.ratings.map((count) => (count / total) * 100);
      },
      closeModal() {
        this.showModal = false;
        this.newRating = 0;
      },
      openSubmitModal() {
      this.showSubmitModal = true; // Show the submit modal
      },
      closeSubmitModal() {
        this.showSubmitModal = false; // Close the submit modal
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Styles */
    .ratings-section {
      font-family: Arial, sans-serif;
      padding: 30px 33px;
    }
    
    .rating-wrap {
      display: flex;
      justify-content: space-between;
    }
    
    /* Rating Bars */
    .rating-bar {
      padding-inline: 5rem;
      display: flex;
      align-items: center;
      margin: 8px 0;
    }
    
    .bar {
      flex: 1;
      background-color: #eee;
      width: 700px;
      margin-left: 10px;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      height: 35px;
    }
    
    .bar .fill {
      height: 100%;
      background-color: orange;
    }
    
    /* Stars and Buttons */
    .stars .star {
      font-size: 2em;
      cursor: pointer;
      color: gray;
      margin-right: 10px;
      /* transition: color 0.3s ease; */
    }
    
    .stars .filled {
      color: orange;
      margin-left: 15px;
    }
    
    .total_rating {
      font-family: inter;
      font-size: 1em;
      margin-top: 10px;
      margin-left: 55px;
    }
    .leave-rating-btn {
      background-color: black;
      color: white;
      border-radius: 13px;
      cursor: pointer;
      width: 300px;
      height: 60px;
      font-size: 25px;
      margin-left: 0px;
      margin-top: 25px;
      margin-right: 230px;
      

    }

    .rating-btn {
      margin-top: 3rem;
      margin-left: 80px;
      background-color: orange;
      border-color: white;
      color: white;
      border-radius: 20px;
      cursor: pointer;
      width: 280px;
      height: 65px;
      font-size: 50px;
      
    }
    .rating-btn:hover {
      background-color: rgb(251, 171, 23);
    }

    .leave-rating-btn:hover {
      background-color: #333;
    }
    
    .submit-rating-btn {
      background-color: orange;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .close-modal-btn {
      background-color: #999;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 10px;
    }
    
    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .modal {
      background: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }

    .modal h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    }

    .modal p {
      font-size: 1.4em;
      margin-bottom: 20px;
      padding-inline: 5rem;
    }

    p {
      font-family: Inter;
      font-size: 2em;
      margin-left: 80px;
    }
    
    .p1 {
      margin-top: 40px;
      font-family: Inter;
      font-size: 2em;
    
    }

    hr {
      margin-top: 20px;
      margin-left: 80px;
      margin-right: 130px;
    }

    .rating-number {
      font-size: 5em;
      font-family: inter;
      margin-left: 50px;
    }

    .submit-rating-btn {
      background-color: orange;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
    }

    .submit-rating-btn:hover {
      background-color: darkorange;
    }

  </style>
  