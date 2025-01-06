<template>
    <div class="detail-container">
        <h1 class="detail">Details</h1>
        <hr style="opacity: 40%;">
        <hgroup>
            <h3 class="brandname">{{ brandname }}</h3>
            <h2 class="productname">{{ productname }}</h2>
        </hgroup>

        <pre class="desc-container">
            {{ description }}
        </pre>

        <div class="image-container">
            <img class="De-image" v-for="image in detailImages" :key="image"
                :src="image" 
                alt="detail_image">
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            brandname: {
                type: String,
                required: true
            },
            productname: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            detailImages:{
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.detail-container{
    font-family: "Inter";
}

.detail{
    margin-bottom: 0;
    font-size: 35px;
}

.image-container{
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

hgroup > h3,
hgroup > h2{
    margin: 0;
}

.brandname{ 
    margin-top: 20px;  
    margin-bottom: 5px;
    font-size: 20px;
}

.productname{
    font-size: 30px;
}

.desc-container{
    font-family: "Inter";
    width: 100%;
    line-height: 170%;
    font-size: 18px;
    word-break: break-word;
    white-space: normal;
}

.De-image{
    width: 500px;
    height: 600px;
    border-radius: 15px;
    background-color: #e7e7e7;
}

</style>