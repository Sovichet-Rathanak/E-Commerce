<template>
    <div class="block-container">
        <h1>Summary</h1>
        <div class="input-section">
            <h3>Do you have a Promo Code?</h3>
            <div class="input-container">
                <input type="text">
                <button class="apply-btn">Apply</button>
            </div>
        </div>
        <div class="sum-section">
            <div class="subtotal">
                <span>Subtotal</span>
                <span>{{ formatter.format(total) }}</span>
            </div>
            <div class="shipping">
                <span>Estimated Shipping & Handling</span>
                <span>(Based on Selection)</span>
            </div>
            <hr />
            <div class="total">
                <span>Total</span>
                <span>{{ formatter.format(total) }}</span>
            </div>
            <hr/>
        </div>
        <div class="button-container">
            <button class="checkout-btn" @click="gotoCheckout">Checkout</button>
            <button class="bakong-btn"></button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            formatter: new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD',
                trailingZeroDisplay: 'stripIfInteger',
            }),
        }
    },
    props:{
        total:{
            type: Number,
            required: true
        }
    },
    methods:{
        gotoCheckout(){
            this.$router.push("/checkout")
        }
    }
}
</script>

<style scoped>
.block-container{
    width: 100%;
    margin-top: 110px;
    margin-bottom: 2rem;
}

.sum-section{
    margin-top: 2rem;    
}

.sum-section > div{
    width: 100%;
    margin-top: 8px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
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

.apply-btn{
    cursor: pointer;
    font-family: "Inter";
    color: grey;
    background-color: white;
    border: 1px solid grey;
    width: 15%;
    height: 40px;
    border-radius: 40px;
}

.apply-btn:hover{
    transition: 100ms ease-in;
    font-weight: 500;
    color: black;
    border: 2px solid black;
}

.apply-btn:active{
    transition: 100ms ease-out;
    font-weight: 500;
    color: grey;
    border: 2px solid grey;
}

hr{
    opacity: 40%;
}

.button-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
}

.button-container > button{
    width: 50%;
    height: 55px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-family: "Inter";
    color: white;
    font-weight: 600;
    font-size: 20px;
}

.checkout-btn{
    background-color: black;
}

.bakong-btn {
    background-image: url("/src/assets/images/Bakong.png");
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
}
</style>