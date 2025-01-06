import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        amountInCart: {}, 
        cartItems: [],
        subtotal: 0, 
    }),
    actions: {
        addToCart(item) {
            const key = `${item.productId}-${item.size}`;
            if (this.amountInCart[key]) {
                this.amountInCart[key]++;
            } else {
                this.amountInCart[key] = 1;
                this.cartItems.push(item);
            }
        },
        removeFromCart(item) {
            const key = `${item.productId}-${item.size}`;
            if (this.amountInCart[key] > 1) {
                this.amountInCart[key]--;
            } else {
                const index = this.cartItems.findIndex(
                    cartItem => cartItem.productId === item.productId && cartItem.size === item.size
                );
                if (index !== -1) {
                    this.cartItems.splice(index, 1);
                }
                delete this.amountInCart[key];
            }
        },
        calculateTotalPrice(){
            this.subtotal = this.cartItems.reduce((total, item) => {
                const key = `${item.productId}-${item.size}`; 
                const quantity = this.amountInCart[key] || 0; 
                return total + item.price * quantity; 
            }, 0);                      
        }
    }
});
