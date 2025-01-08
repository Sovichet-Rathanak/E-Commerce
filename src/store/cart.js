import { defineStore } from "pinia";

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        amountInCart: {}, 
        cartItems: [],
        subtotal: 0, 
        taxRate: 0.05, 
        tax: 0, 
        selectedShippingOption: 'free', 
        shippingOptions: [
            {
                id: 'free',
                type: 'In-store Pickup',
                definition: 'Your items will be available for pickup at the store',
                shippingPrice: 0,
                shippingDuration: '7 - 10 Business Days',
            },
            {
                id: 'easy',
                type: 'Easy Shipping',
                definition: 'Your items will be delivered to your location.',
                shippingPrice: 5,
                shippingDuration: '3 Business Days',
            },
            {
                id: 'overnight',
                type: 'Overnight Shipping',
                definition: 'Your items will be delivered to your location overnight.',
                shippingPrice: 70,
                shippingDuration: 'Overnight',
            },
        ],
    }),
    getters: {
        total(state) {
            const selectedOption = state.shippingOptions.find(option => option.id === state.selectedShippingOption);
            const shippingCost = selectedOption ? selectedOption.shippingPrice : 0;
            return state.subtotal + shippingCost;
        }
    },
    actions: {
        addToCart(item) {
            const key = `${item.productId}-${item.size}`;
            if (this.amountInCart[key]) {
                this.amountInCart[key]++;
            } else {
                this.amountInCart[key] = 1;
                this.cartItems.push(item);
            }
            this.calculateTotalPrice();
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
            this.calculateTotalPrice();
        },
        calculateTotalPrice() {
            this.subtotal = this.cartItems.reduce((total, item) => {
                const key = `${item.productId}-${item.size}`;
                const quantity = this.amountInCart[key] || 0;
                return total + item.price * quantity;
            }, 0);
            this.tax = this.subtotal * this.taxRate;
        },
        updateShippingOption(optionId) {
            this.selectedShippingOption = optionId;
        },
    }
});
