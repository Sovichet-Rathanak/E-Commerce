<template>
    <div class="cart-container">        
        <div class="image-detail">
            <div class="image">
                <img :src="cart.image" alt="product_image">
            </div>
            <div class="detail" style="width: 100%;">
                <div class="detail-title">
                    <hgroup>
                        <h3 class="brand-name">{{cart.brand}}</h3>
                        <h3 class="product-name">{{ cart.name }}</h3>
                    </hgroup>
                    <h3 class="price">{{ formatter.format(cart.price * numb) }}</h3>
                </div>
                <span class="size"> Size: {{ cart.size }}</span>

                <div class="button-container">
                    <button class="decrease" @click="decrement">
                        <iconify-icon v-if="this.numb === 1" icon="solar:trash-bin-trash-bold" width="22px" height="22px" style="opacity: 75%;"/>
                        <iconify-icon  v-else icon="fluent:subtract-12-filled" width="22px" height="22px" style="opacity: 75%;"/>
                    </button>
                    <span>{{ numb }}</span>
                    <button class="increase" @click="increment">
                        <iconify-icon icon="mingcute:add-fill" width="22px" height="22px" style="opacity: 75%;"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { mapState } from 'pinia';

export default {
    data() {
        return {
            formatter: new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD',
                trailingZeroDisplay: 'stripIfInteger',
            }),
        };
    },
    computed: {
        ...mapState(useCartStore, {
            cartItems: "cartItems",
            amountInCart: "amountInCart",
            total : "total"
        }),
        numb() {
            const key = `${this.cart.productId}-${this.cart.size}`;
            return this.amountInCart[key] || 0;
        },
    },
    methods: {
        increment() {
            const cartStore = useCartStore();
            cartStore.addToCart(this.cart);
            cartStore.calculateTotalPrice();
        },
        decrement() {
            const cartStore = useCartStore();
            cartStore.removeFromCart(this.cart);
        },
    },
    props: {
        cart: {
            type: Object,
            required: true,
        },
    },
};
</script>


<style scoped>
    .cart-container{
        width: 50%;
        box-sizing: border-box;
        border: 1px solid rgb(187, 187, 187);
        border-radius: 10px;
        box-shadow: 0px 10px 9px rgb(150, 150, 150);
        margin-bottom: 10px;
    }

    .image-detail{
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 25px;
    }

    .image{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 0px 0px 10px;
        width: 40%;
        height: 40%;
        border: 1px solid grey;
        border-bottom: 0px;
        border-left: 0px;
        border-top: 0px;
    }
    
    .image > img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px 0px 0px 10px;
        background-color: #ededed;
    }

    .detail-title{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        justify-content: space-between;
    }

    .detail-title > hgroup{
        margin-top: 10px;
    }

    .detail-title .price{
        margin-right: 25px;
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
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 1rem;
        gap: 20px;
        margin-top: 80px;
        height: 50px;
        border-radius: 25px;
        width: fit-content;
        border: 2px solid black;
    }

    .button-container > button{
        background-color: white;
        display: flex;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
    }

    .size{
        font-weight: 500;
        opacity: 50%;
    }

    hgroup > h3{
        margin: 0;
    }
</style>

