<template>
    <div class="cart-container">
        <hgroup>
            <h1>My Shopping Cart</h1>
            <h2>1 Item in Cart</h2>
            <hr>
        </hgroup>
        <div class="detail-container">
            <div class="image-detail">
                <div class="image">
                    <img src="/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image1.jpg" alt="product_image">
                </div>
                <div class="detail" style="width: 100%;">
                    <div class="detail-title">
                        <h3 class="product-name">Jordan 1 Low MOCHA</h3>
                        <h3 class="price">$219</h3>
                    </div>
                    <span>Size 10</span>

                    <div class="button-container">
                        <button class="increase">-</button>
                        <span>0</span>
                        <button class="decrease">+</button>
                    </div>
                </div>
            </div>

            <div>
                <h3>Shipping</h3>
                <span>Estimated to arrive on Fri, Nov 15</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .cart-container{
        width: 50%;
    }

    hgroup > h2{
        margin: 0;
        font-size: 30px;
    }

    hgroup > h1{
        font-size: 45px;
    }

    .image-detail{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;

    }

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        width: 40%;
        height: 40%;
        border: 1px solid black;
    }

    .image > img{
        max-width: 100%;
        max-height: 100%;
    }

    .detail-title{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .detail-title .product-name,
    .detail-title .price{
        font-size: 22px;
        margin-bottom: 15px;
    }

    .detail > span{
        font-size: 22px;
    }

    .button-container{
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        width: fit-content;
        border: 1px solid black;
    }
</style>

