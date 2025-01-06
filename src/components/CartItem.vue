<template>
    <div class="cart-container">
        <div class="detail-container">
            <div class="image-detail">
                <div class="image">
                    <img :src="cart.image" alt="product_image">
                </div>
                <div class="detail" style="width: 100%;">
                    <div class="detail-title">
                        <h3 class="product-name">{{cart.brand}}</h3>
                        <h3 class="price">{{ formatter.format(cart.price * this.numb) }}</h3>
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
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { mapState } from 'pinia';

export default{
    data(){
        return{
            numb: 1,

            formatter: new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD',
                trailingZeroDisplay: 'stripIfInteger'
            })
        }
    },
    computed:{
        ...mapState(useCartStore, {
            cartItems: "cartItems",
            removeFromCart: "removeFromCart"
        })
    },
    methods:{
        increment(){
            this.numb++
        },

        decrement(){
            if(this.numb > 1){
                this.numb--;
            }else{
                this.removeFromCart(this.cart)
            }
        }


    },
    props:{
        cart:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .cart-container{
        width: 50%;
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
        border-radius: 20px;
        width: 40%;
        height: 40%;
        border: 1px solid black;
    }

    .image > img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 20px;
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
</style>

