<template>
    <div class="webbannerContainer">
        <img class="img" :src="images[currentIndex]" alt="image">
        <div class="btnContainer">
            <button @click="showPrevious()" class="btn"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg></button>
            <button @click="showNext()" class="btn"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></button>
        </div>
        <div class="indicator">
            <span v-for="(image, index) in images" :key="index" :class="['dot', { active: index === currentIndex }]"></span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: String
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    created() {
        this.startAutoSlide();
    },
    unmounted() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    methods: {
        showPrevious() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        showNext() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        startAutoSlide() {
            this.interval = setInterval(() => {
                this.showNext();
            }, 3000);
        }
    }
}
</script>

<style>
.webbannerContainer{
    width: 100%;
    height: 750px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    justify-content: center;
    z-index: -1;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 40%;
}
.btnContainer{
    position: absolute;
    width: 92%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn{
    color: black;
    background-color: white;
    opacity: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: none;  
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.btn:hover{
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
    opacity: 70%;
}
.indicator {
    position: absolute;
    display: flex;
    margin-bottom: 50px;
}
.dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    transition: background-color 0.3s;
}
.dot.active {
    background-color: #717171;
}
</style>
