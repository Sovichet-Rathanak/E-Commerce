<template>
    <div class="productCard">
        <img class="productImg" :src="productImage" alt="product image">
        <h3 class="productName"> {{ productName }}</h3>
        <h3 class="productStatus"> {{ productStatus }}</h3>
        <button class="buyBtn" @click="$router.push('ProductDetail')">Buy</button>
    </div>
</template>
    
<script>
export default{
    name: "productCard",
    props: {
        productImage: String,
        productName: String,
        productStatus: String,
        productCat: String
    },
    methods:{
        alertBuy(){
            alert("Buy Button is click! Slayyy");
        }
    }
}
</script>
    
<style scoped>

.productCard{
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

.productName{
    margin-left: 5px;
    font-weight: normal;
    font-size: 20px;
    font-family: "Inter";
}

.productStatus{
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
    cursor: pointer;
}

</style>
    