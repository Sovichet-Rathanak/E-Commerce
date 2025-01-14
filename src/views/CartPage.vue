<template>
    <body>
        <div class="image-container" v-if="cart.length === 0">
            <h2>Your cart is currently empty. Let's find something you'll love! 
                <router-link to="/">Click Here</router-link>
            </h2>
            <img src="/src/assets/images/emptycart.png" alt="cart_empty">
        </div>


        <div class="left-section" v-if="cart.length > 0">
            <hgroup style="width: 100%;">
                <h1>My Shopping Cart</h1>
                <h2>{{ cart.length }} {{cart.length > 1? 'Items' : 'Item'}} in Cart</h2>
                <hr>
            </hgroup>
            <div class="item-container" v-for="item in cart" :key="`${item.productId}-${item.size}`">
                <CartItem :cart="item"/>
            </div>
        </div>

        <div class="right-section" v-if="cart.length > 0">
            <SummaryBlock
            :total="total"
            />
        </div>
    </body>
</template>

<script>
import CartItem from '@/components/CartComponent/CartItem.vue';
import SummaryBlock from '@/components/CartComponent/SummaryBlock.vue';
import { useCartStore } from '@/store/cart';
import { mapState } from 'pinia';

export default{
    computed:{
        ...mapState(useCartStore, {
            cart: "cartItems",
            total: "subtotal"
        })
    },
    components:{
        CartItem,
        SummaryBlock
    },
    setup(){
        const cartStore = useCartStore();

        return{
            cartStore
        }
    }
}
</script>

<style scoped>
    hgroup > h2{
        margin: 0;
        font-size: 30px;
    }

    hgroup > h1{
        font-size: 45px;
    }

    body{
        font-family: "Inter";
        margin-top: 1.5rem;
        display: flex;
        flex-direction: row;
        gap: 5rem;
        padding-inline: 7rem;
    }

    .left-section{
        width: 65%;
    }

    .image-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        height: 100%; 
        width: 100%; 
    }

    .image-container > img {
        max-width: 40%; 
        max-height: 40%; 
        object-fit: contain; 
    }

    .image-container > h2{
        top: 50px;
        text-align: center;
    }

    .image-container > h2 > a{
        text-decoration: none;
    }

    .right-section{
        width: 35%;
    }
</style>