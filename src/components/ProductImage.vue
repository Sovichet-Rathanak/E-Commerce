<template>
    <div class="ProductImage-container">
        <div class="image-section">
            <div class="row">
                <img
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    alt="product_image"
                    @click="setLargeImage(index)"
                    :class="{ active: index === activeIndex}"
                />
            </div>

            <div class="large-section">
                <img :src="images[activeIndex]" alt="large_image">
                <div class="button-container">
                    <button @click="prevImage"><iconify-icon icon="mingcute:arrow-left-fill" width="32px" height="32px"/></button>
                    <button @click="nextImage"><iconify-icon icon="mingcute:arrow-right-fill" width="32px" height="32px"/></button>
                </div>
            </div>
        </div>

        <div class="SizePrice-section">
            <div class="title-section">
                <hgroup>
                    <h3 class="brandname">{{ brandname }}</h3>
                    <h1 class="productname">{{ productname }}</h1>
                </hgroup>
                <button class="x-button"><iconify-icon icon="maki:cross" width="20px" height="20px"/></button>
            </div>
            <div class="func-section">
                <div class="size-selector" @click="showList">
                    <span>Size: </span>
                    <div class="dropper">
                        <span>All</span>
                        <iconify-icon v-if="show_list" icon="ri:arrow-drop-down-line" style="transform: scaleY(-1);" width="24px" height="24px"/>
                        <iconify-icon v-else icon="ri:arrow-drop-down-line" width="24px" height="24px"/>
                    </div>
                </div>
                
                <div class="dropped-list" v-if="show_list">
                    <h3>Size (US)</h3>
                    <div class="sizes">
                        <button v-for="size in 14" :key="size">US {{size + 3}}</button>
                    </div>
                </div>

                <div class="buy-section">
                    <hgroup>
                        <h3 style="margin-bottom: 10px;">Buy now for</h3>
                        <h1 class="price">${{ price_tag }}</h1>
                    </hgroup>
                    <div class="buy-container">
                        <button class="buy-btn">BUY NOW</button>
                    </div>
                </div>

                <div class="miscellaneous">
                    <div class="kVeri-head" @click="showDesc">
                        <div class="sec-1">
                            <h4>Kravan Verified</h4>
                            <iconify-icon icon="solar:verified-check-outline" width="24px" height="24px"/>
                        </div>
                        <iconify-icon icon="ri:arrow-drop-down-line" v-if="show_desc" style="transform: scaleY(-1);" width="24px" height="24px"/>
                        <iconify-icon icon="ri:arrow-drop-down-line" v-else width="24px" height="24px"/>
                        <hr v-if="show_desc" width="100%">
                    </div>
                    <div class="desc" v-if="show_desc">
                        <p>"Kravan Verified" represents our commitment to excellence, guaranteeing every item undergoes a meticulous inspection, every time. <router-link to="/Privacy&Policy">Learn more.</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
        brandname: {
            type: String,
            required: true
        },
        productname: {
            type: String,
            required: true
        },
        price_tag:{
            type: Number,
            required: true 
        }
    },
    data() {
        return {
            activeIndex: 0,
            show_list: false,
            show_desc: true, 
        };
    },
    methods: {
        showList(){
            this.show_list = !this.show_list;
        },
        showDesc(){
            this.show_desc = !this.show_desc;
            console.log(this.show_desc)
        },
        setLargeImage(index) {
            this.activeIndex = index;
        },
        prevImage() {
            this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
        },
        nextImage() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length;
        },
    },
};
</script>

<style scoped>
.ProductImage-container {
    font-family: "Inter";
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
}

/* LEFT SECTION */
.ProductImage-container .image-section {
    display: flex;
    flex-direction: row;
    gap: 7px;
    width: 60%;
    height: 100%;
}

.row {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.row > img {
    width: 8rem;
    height: 8rem;
    object-fit: fill;
    cursor: pointer;
    background-color: #e7e7e7;
}

.large-section {
    position: relative;
}

.large-section > img {
    height: 100%;
    width: 100%;   
    background-color: #e7e7e7;
}

.large-section .button-container {
    display: flex;
    right: 20px;
    bottom: 15px;
    gap: 5px;
    position: absolute;
}

.button-container > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

/* RIGHT SECTION */
.ProductImage-container .SizePrice-section{
    width: 40%;
    height: 100%;
}

.SizePrice-section .title-section{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
}

.title-section > button{
    position: absolute;
    right: 2rem;
    top: 2rem;
}

.title-section .x-button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.brandname{
    margin-top: 0;
    margin-bottom: 15px;
}

.productname{
    margin-bottom: 15px;
}

.func-section{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    height: auto;
    margin-top: 4rem;
}

.size-selector{
    font-weight: 400;
    border: 2px solid black;
    width: 80%;
    height: 20px;   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;
}

.dropper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.buy-section{
    width: 80%;
    border: 2px solid black;
    padding: 1rem;
    border-radius: 15px;
    height: 230px;
}

.price{
    font-size: 50px;
    margin-top: 0;
}

.buy-container{
    display: flex;
    justify-content: center;
    align-items: center;   
}

.buy-btn{
    width: 70%;
    height: 60px;
    font-weight: 900;
    font-size: x-large;
    border-radius: 30px;
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;
}

.buy-btn:hover{
    color: white;
    background-color: rgb(0, 65, 0);
    transition: 100ms ease-in;
}

.dropped-list{
    border: 2px solid black;
    border-top: 0px;
    width: 80%;
    height: 70%;
    padding: 1rem;
    position: absolute;
    background-color: white;
    z-index: 10;
    top: 40px;
    border-radius: 0px 0px 15px 15px;
}

.dropped-list > h3{
    margin-top: 0px;
    font-weight: 600;
}

.sizes{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 10px;
    width: 100%;
    font-weight: bold;
}

.sizes > button{
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
}

.miscellaneous{
    width: 80%;
    padding: 1rem;
    margin-top: 0;
}

.miscellaneous > h4{
    margin: 0;
    padding: 0;

}

.sec-1{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
}

.kVeri-head{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
}

.kVeri-head >  hr{
    position: absolute;
    align-self: flex-end;
    width: 80%;
}
</style>
