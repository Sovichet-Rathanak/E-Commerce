<template>
  <div class="checkoutContainer">
    <h1>CHECKOUT</h1>

    <div class="section">
      <h2>Shipping Address</h2>
      <p>
        This information ensures your package arrives at the correct location.
      </p>
      <div class="form-group">
        <div class="row">
          <div class="input-wrapper">
            <input type="text" v-model="firstName" placeholder="First Name" required />
          </div>
          <div class="input-wrapper">
            <input type="text" v-model="surname" placeholder="Surname" required />
          </div>
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="address" placeholder="Street address" required />
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="phoneNumber" placeholder="Phone Number" required />
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="cityProvince" placeholder="City/Province" required />
        </div>
      </div>
    </div>
    <div class="section">
      <div class="shipping-options">
        <h2>Shipping Options</h2>
        <form>
          <div class="option">
            <input type="radio" id="in-store-pickup" name="shipping" value="in-store" checked />
            <label for="in-store-pickup">
              <div class="row">
                <strong>In-store pickup</strong>
                <span class="details">Free</span>
              </div>
              <div class="row">
                <p>Your item Will be available for pick up at the store</p>
                <span class="detail">7-10 Business Day</span>
              </div>
            </label>
          </div>
          <hr />
          <div class="option">
            <input type="radio" id="in-store-pickup" name="shipping" value="in-store" checked />
            <label for="in-store-pickup">
              <div class="row">
                <strong>Easy Shipping</strong>
                <span class="details">$5.00</span>
              </div>
              <div class="row">
                <p>Your item will be delivered to your location</p>
                <span class="detail">3 Business Day at most</span>
              </div>
            </label>
          </div>
          <hr />
          <div class="option">
            <input type="radio" id="in-store-pickup" name="shipping" value="in-store" checked />
            <label for="in-store-pickup">
              <div class="row">
                <strong>Overnight Shipping</strong>
                <span class="details">$70.00</span>
              </div>
              <div class="row">
                <p>
                  Your item is prioritized and will be delivered to your
                  location
                </p>
                <span class="detail">Overnight Shipping</span>
              </div>
            </label>
          </div>
          <hr />
        </form>
      </div>
    </div>

    <div class="section">
      <h2>Payment Methods</h2>
      <div class="billing-box">
        <h3>
          <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon> Bill Information
        </h3>
        <label class="payment-method">
          <input type="radio" v-model="paymentMethod" value="creditCard" checked />
          <span>
            <iconify-icon icon="solar:card-bold"></iconify-icon> Credit/Debit Card
          </span>
          <div class="card-icons">
            <iconify-icon icon="logos:visa" title="Visa" width="35px" height="35px" />
            <iconify-icon icon="logos:mastercard" title="MasterCard" width="35px" height="35px" />
            <iconify-icon icon="logos:jcb" title="JCB" width="35px" height="35px" />
          </div>
        </label>

        <div class="input-wrapper">
          <label>Name on card<input type="text" v-model="cardName" placeholder="eg. John Doe" required /></label>

        </div>
        <div class="input-wrapper">
          <label>Card Number<input type="text" v-model="cardNumber" placeholder="xxxx-xxxx-xxxx-xxxx"
              required /></label>


        </div>
        <div class="row">
          <div class="input-wrapper">
            <label>expiryDate<input type="text" v-model="expiryDate" placeholder="MM/YY" required /></label>

          </div>
          <div class="input-wrapper">
            <label>CVC/CVV<input type="text" v-model="cvc" placeholder="xxx" required /></label>

          </div>
        </div>
      </div>
    </div>

    <button class="checkout-button">Complete Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      surname: "",
      address: "",
      phoneNumber: "",
      cityProvince: "",
      paymentMethod: "creditCard",
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    };
  },
};
</script>

<style scoped>
.checkoutContainer {
  font-family: Arial, sans-serif;
  max-width: 50%;
  margin: 20px auto;
}

.section {
  margin: 20px 0;
}

h1 {
  font-size: 28px;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  margin: 15px 0;
}

p {
  font-size: 14px;
  color: #666;
}

.input-wrapper {
  display: flex;
  align-items: center;
  margin: 0px 50px;
  border: 1px solid #3f2f2f;
  border-radius: 5px;
  padding: 10px;
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.row .input-wrapper {
  width: 70%;
  flex: 1;
}

.billing-box {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.checkout-button {
  width: 50%;
  padding: 15px;
  background-color: black;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 28%;
}

.checkout-button:hover {
  background-color: #333;
}

.shipping-options {
  margin: auto;
}

.option {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;
}

.option input[type="radio"] {
  margin-right: 15px;
  margin-top: 5px;
}

.option label {
  flex: 1;
}

.option .details {
  white-space: nowrap;
  text-align: right;
  font-weight: bold;
}

.option .detail {
  font-size: 13px;
  text-align: right;
  margin-top: 10px;
  color: gray;
}

hr {
  border: none;
  border-top: 1px solid #191313;
  margin: 10px 0;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.card-icons {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.billing-box {
  padding: 20px;
  border: 1px solid #181313;
  border-radius: 8px;
}

.input-wrapper {
  margin: 10px 0;
  border: 1px solid #292222;
  border-radius: 5px;
  padding: 10px;
}

.input-wrapper input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
}

.row {
  display: flex;
  justify-content: space-between;
}

.row .input-wrapper {
  width: 30%;
}
</style>
