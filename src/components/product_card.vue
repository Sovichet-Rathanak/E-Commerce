<template>
    <div class="productCard">
        <img class="productImg" :src="productImage" alt="product image">
        <h3 class="title"> {{ title }}</h3>
        <h3 class="status"> {{ status }}</h3>
        <button @click="alertBuy()" class="buyBtn">Buy</button>
    </div>
</template>
    
<script>
export default{
    name: "productCard",
    props: ["productImage", "title","status"],
    methods:{
        alertBuy(){
            alert("Buy Button is click! Slayyy");
        }
    }
}
</script>
    
<style>
.productCard{
    margin-top: 50px;
    margin-left: 100px;
    margin-right: 40px;
    width: 320px;
    height: 500px;
    background-color: transparent;
}
.productImg{
    width: 320px;
    height: 320px;
    border-radius: 20px;
    background-color: blue;
}
.title{
    margin-left: 5px;
    font-weight: normal;
    font-size: 20px;
    font-family: "Inter";
}
.status{
    margin-left: 5px;
    font-weight: medium;
    font-size: 18px;
    color: gray;
    font-family: "Inter";
}
.buyBtn{
    margin-top: -10px;
    width: 120px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    font-family: "Inter";
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
}
</style>
    