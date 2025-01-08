<template>
    <body>        
        <div class="checkout-form">
            <CheckoutForm></CheckoutForm>
        </div>
        <div class="summary">
            <h1>Cart Summary</h1>
            <div class="sum-section">
                <div class="subtotal">
                    <span>Subtotal</span>
                    <span>{{ formatter.format(subtotal) }}</span>
                </div>
                <div class="shipping">
                    <span>Estimated Shipping & Handling</span>
                    <span>{{ formatter.format(shippingCost) }}</span>
                </div>
                <div class="tax">
                    <span>Estimated Tax</span>
                    <span>{{ formatter.format(tax) }}</span>
                </div>
                <div class="discount">
                    <span>Discount</span>
                    <span>-</span>
                </div>
                <hr/>
                <div class="total">
                    <span>Total</span>
                    <span>{{ formatter.format(total) }}</span>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import CheckoutForm from '@/components/CheckoutForm.vue';
import { useCartStore } from '@/store/cart';

export default {
  components: {
    CheckoutForm
  },
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
    cartStore() {
      return useCartStore();
    },
    subtotal() {
      return this.cartStore.subtotal;
    },
    shippingCost() {
      const selectedOption = this.cartStore.selectedShippingOption;
      const shippingOption = this.cartStore.shippingOptions.find(
        (option) => option.id === selectedOption
      );
      return shippingOption ? shippingOption.shippingPrice : 0;
    },
    tax() {
      return this.cartStore.tax;
    },
    total() {
      return this.subtotal + this.shippingCost + this.tax;
    },
  },
};
</script>



<style scoped>
    body{
        font-family: "Inter";
        display: flex;
        flex-direction: row;
        gap: 5rem;
        width: 100%;
    }

    .checkout-form{
        width: 50%;
        padding-left: 7rem;
        margin-top: 1.5rem;
    }

    .summary{
        width: 50%;
        box-sizing: border-box;
        padding: 1rem;
        background-color: #F0F0F0;
    }

    .sum-section > div{
        width: 100%;
        margin-top: 13px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
    }

    .sum-section > hr{
        height: 1px;
        background-color: black;
    }

    .input-container{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
    }

    .input-container > input{
        width: 60%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid black;
        text-indent: 10px;
    }
</style>