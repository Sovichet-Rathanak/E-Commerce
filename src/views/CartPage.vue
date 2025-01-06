<template>
    <body>
        <hgroup style="width: 50%;">
            <h1>My Shopping Cart</h1>
            <h2>{{ cart.length }} {{cart.length > 1? 'Items' : 'Item'}} in Cart</h2>
            <hr>
        </hgroup>
        <div class="item-container" v-for="item in cart" :key="item">
            <CartItem
            :cart="item"/>
        </div>
    </body>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import { useCartStore } from '@/store/cart';
import { mapState } from 'pinia';

export default{
    computed:{
        ...mapState(useCartStore, {
            cart: "cartItems"
        })
    },
    components:{
        CartItem
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
        flex-direction: column;
        gap: 3rem;
        padding-inline: 7rem;
    }
</style>