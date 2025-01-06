import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
    state:() => ({
        cartItems:[]
    }),
    actions:{
        addToCart(item){
            this.cartItems.push(item)
        },
        removeFromCart(item){
            this.cartItems.splice(this.cartItems.indexOf(item), 1)
        }
    },

})