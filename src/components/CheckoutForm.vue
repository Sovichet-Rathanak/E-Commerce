<template>
  <form class="checkoutform" @submit.prevent="submitForm">
    <h1>Checkout</h1>

    <hgroup>
      <h2>Shipping Address</h2>
      <h4>This information ensures your packages arrive at the correct location.</h4>
    </hgroup>
    <div class="contact-container">
      <div class="name">
        <input v-model="firstName" type="text" placeholder="First Name" required />
        <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>

        <input v-model="surname" type="text" placeholder="Surname" required />
        <span v-if="errors.surname" class="error-message">{{ errors.surname }}</span>
      </div>
      <div class="address">
        <input v-model="streetAddress" type="text" placeholder="Street address" required />
        <span v-if="errors.streetAddress" class="error-message">{{ errors.streetAddress }}</span>

        <input v-model="phoneNumber" type="tel" placeholder="Phone number" required />
        <span v-if="errors.phoneNumber" class="error-message">{{ errors.phoneNumber }}</span>

        <input v-model="city" type="text" autoComplete="home city" placeholder="City/Province" />
        <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
      </div>
    </div>

    <hgroup>
      <h2>Shipping Options</h2>
      <h4>Select your shipping method</h4>
    </hgroup>
    <div class="options-container">
      <div class="option" v-for="option in shippingOptions" :key="option.id">
        <input type="radio" name="option" :id="option.id" v-model="selectedShippingOption" :value="option.id" />
        <div class="option-context">
          <div class="type-price">
            <strong>{{ option.type }}</strong>
            <strong>{{ formatter.format(option.shippingPrice) }}</strong>
          </div>
          <div class="definition-duration">
            <span>{{ option.definition }}</span>
            <span>{{ option.shippingDuration }}</span>
          </div>
        </div>
      </div>
    </div>

    <hgroup>
      <h2>Payment Methods</h2>
    </hgroup>
    <div class="billing-container">
      <div class="header-section">
        <iconify-icon class="drop" icon="material-symbols:arrow-drop-down-rounded" width="32px" height="32px"/>
        <h3>Billing Information</h3>
      </div>

      <div class="card-select">
        <div>
          <input type="radio" name="billing" id="billing" checked />
          <iconify-icon class="card-icon" icon="fa6-regular:credit-card" />
          <span>Debit/Credit Card</span>
        </div>
        <div class="card-logos">
          <iconify-icon icon="logos:mastercard" width="40px" height="40px" />
          <iconify-icon icon="logos:visa" width="40px" height="40px" />
          <iconify-icon icon="logos:unionpay" width="40px" height="40px" />
        </div>
      </div>

      <div class="card-info">
        <div class="cardname">
          <label>
            Name On Card
            <input v-model="cardName" type="text" placeholder="e.g John Smith" required />
            <span v-if="errors.cardName" class="error-message">{{ errors.cardName }}</span>
          </label>
        </div>

        <div class="cardnumber">
          <label>
            Card Number
            <input v-model="cardNumber" type="text" placeholder="XXXX-XXXX-XXXX-XXXX" required />
            <span v-if="errors.cardNumber" class="error-message">{{ errors.cardNumber }}</span>
          </label>
        </div>

        <div class="date-cvv">
          <div class="exp-date">
            <label>
              Expiry Date
              <input v-model="expiryDate" type="text" placeholder="MM/YY" required />
              <span v-if="errors.expiryDate" class="error-message">{{ errors.expiryDate }}</span>
            </label>
          </div>

          <div class="cvc">
            <label>
              CVC/CVV
              <input v-model="cvc" type="text" placeholder="XXX" required />
              <span v-if="errors.cvc" class="error-message">{{ errors.cvc }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button class="submit-btn" type="submit">Complete Checkout</button>
    </div>
  </form>
</template>

<script>
import { useCartStore } from '@/store/cart';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import emailjs from 'emailjs-com';
import { useUserStore } from '@/store/user';

export default {
  data() {
    return {
      firstName: '',
      surname: '',
      streetAddress: '',
      phoneNumber: '',
      city: '',
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      errors: {}, 

      formatter: new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        trailingZeroDisplay: 'stripIfInteger',
      }),
    };
  },
  setup(){
    const userStore = useUserStore();
    userStore.loadUserFromLocalStorage(); 

    return {
      userStore,
    };
  },
  computed: {
    cartStore() {
      return useCartStore();
    },
    shippingOptions() {
      return this.cartStore.shippingOptions;
    },
    selectedShippingOption: {
      get() {
        return this.cartStore.selectedShippingOption;
      },
      set(value) {
        this.cartStore.updateShippingOption(value);
      }
    },
    subtotal() {
      return this.cartStore.subtotal;
    },
    total() {
      const selectedOption = this.shippingOptions.find(option => option.id === this.selectedShippingOption);
      const shippingCost = selectedOption ? selectedOption.shippingPrice : 0;
      return this.subtotal + shippingCost;
    }
  },
  methods: {
    submitForm() {
      this.errors = {};

      let isValid = true;

      const stringRegex = /^[a-zA-Z\s]+$/;

      if (!this.firstName) {
        this.errors.firstName = 'First name is required.';
        isValid = false;
      } else if (!stringRegex.test(this.firstName.trim())) {
        this.errors.firstName = 'First name should only contain letters.';
        isValid = false;
      }

      if (!this.surname) {
        this.errors.surname = 'Surname is required.';
        isValid = false;
      } else if (!stringRegex.test(this.surname.trim())) {
        this.errors.surname = 'Surname should only contain letters.';
        isValid = false;
      }

      if (!this.streetAddress) {
        this.errors.streetAddress = 'Street address is required.';
        isValid = false;
      }

      if (!this.phoneNumber) {
        this.errors.phoneNumber = 'Phone number is required.';
        isValid = false;
      }

      if (!this.city) {
        this.errors.city = 'City/Province is required.';
        isValid = false;
      } else if (!stringRegex.test(this.city.trim())) {
        this.errors.city = 'City/Province should only contain letters.';
        isValid = false;
      }

      if (!this.selectedShippingOption) {
        this.errors.selectedShippingOption = 'Please select a shipping method.';
        isValid = false;
      }

      if (!this.cardName) {
        this.errors.cardName = 'Card name is required.';
        isValid = false;
      } else if (!stringRegex.test(this.cardName.trim())) {
        this.errors.cardName = 'Card name should only contain letters.';
        isValid = false;
      }

      if (!this.cardNumber || !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(this.cardNumber)) {
        this.errors.cardNumber = 'Please enter a valid card number.';
        isValid = false;
      }

      if (!this.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.expiryDate)) {
        this.errors.expiryDate = 'Please enter a valid expiry date (MM/YY).';
        isValid = false;
      }

      if (!this.cvc || !/^\d{3}$/.test(this.cvc)) {
        this.errors.cvc = 'Please enter a valid CVC/CVV.';
        isValid = false;
      }

      if (isValid) {
        this.sendEmail();
        this.generateReceiptPDF();
        this.cartStore.amountInCart = {};
        this.cartStore.cartItems = [];
        this.$router.push('/checkoutComplete');
      }
    },
    generateReceiptPDF(){
      const doc = new jsPDF();
      const image = new Image();
      const date = new Date();

      image.src = "/src/assets/images/Kravan_black.png";
      
      //Header
      doc.addImage(image, "png", 12, 12, 34,34)
      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "bold");
      doc.setFontSize(65)
      doc.text("Invoice", 117, 42)

      //From Kravan LLC
      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "bold");
      doc.setFontSize(12)
      doc.text("From", 12, 53)

      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "bold");
      doc.setFontSize(14)
      doc.text("Kravan LLC", 12, 60)

      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12)
      doc.text("#14 ST57 & 288", 12, 67)

      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12)
      doc.text("Sangkat Boeung Keng Kang Area 1", 12, 72)

      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12);
      doc.text("Phnom Penh, Cambodia", 12, 77)

      //Invoice date
      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "bold");
      doc.setFontSize(12);
      doc.text("Invoice Date:", 130, 77);
      
      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12);
      doc.text(date.toDateString(), 158, 77);
      console.log(this.cartStore.cartItems)
      
      //Thank You Message
      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "bold");
      doc.setFontSize(16)
      doc.text("Thank you for your support!", 12, 245)

      doc.setTextColor(0, 0, 0);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12)
      doc.text("We truly appreciate your trust in our service.", 12, 251)

      //PDF FOOTER
      doc.setFillColor(0,0,0);
      doc.rect(0, 280, 400, 20, 'F');
      doc.setTextColor(255,255,255);
      doc.setFont("Helvetica", "normal", "normal");
      doc.setFontSize(12);
      doc.text("©Kravan LLC.All Rights Reserved.", 75, 290);

      const tableBody = this.cartStore.cartItems.map(item => [
        `${item.brand} \n${item.name}`, 
        this.cartStore.amountInCart[`${item.productId}-${item.size}`] || 0, 
        `$${item.price}`, // Price
        `$${(this.cartStore.amountInCart[`${item.productId}-${item.size}`] || 0) * item.price}`, 
      ]);

      //Calculate total
      const selectedOption = this.shippingOptions.find(option => option.id === this.selectedShippingOption);
      const shippingCost = selectedOption ? selectedOption.shippingPrice : 0;
      const total = parseFloat(this.cartStore.total) + parseFloat(this.cartStore.tax.toFixed(2));

      //Table
      autoTable(doc, {
        startY: 90,
        head: [["Item", "Quantity", "Rate", "Amount"]],
        body: tableBody,
        foot: [
          ["", "", "Subtotal:", `$${this.cartStore.subtotal}`],
          ["", "", "Tax:", `$${this.cartStore.tax.toFixed(2)}`],
          ["", "", "Shipping:", `$${shippingCost}`],
          ["", "", "Total:", `$${total}`]
        ],
        theme: 'grid',
        columnStyles: {
          0: { cellWidth: 90 },
          1: { cellWidth: 30 },
          2: { cellWidth: 30 },
          3: { cellWidth: 30 },
        },
        headStyles: {
          fillColor: [0, 0, 0],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
        },
        footStyles: {
          fillColor: [255, 255, 255],
          textColor: [0, 0, 0],
          margin: 0,
          fontStyle: 'normal',
          halign: 'right',
        },
        willDrawCell: function (data) {
          if (data.row.section === 'foot' && data.row.index === 3 && data.column.index === 2) {
            const doc = data.doc;
            const cell = data.cell;
            const { x, y, width } = cell;
            doc.setLineWidth(1); 
            doc.line(x, y, x + width + 30, y); 
          }

          if (data.row.section === 'foot' && data.row.index === 3 && data.column.index >= 2) {
            doc.setFont("Helvetica", "normal", "bold");
          }
        },
      });
      window.open(doc.output('bloburl'), '_blank');
    },
    sendEmail() {
      const templateParams = {
        to_name: this.userStore.user.username,
        user_email: this.userStore.user.email,
      }

      emailjs.send("service_annamg9", "template_vghx3hc", templateParams, import.meta.env.VITE_EMAILJS_KEY);
      // .then(function (res){
      //   alert("Success" + res.status);
      // }
      // ).catch(e => console.log("msg: ", e));
    }
  }
};
</script>


<style scoped>
  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .checkout-form{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  hgroup >h2{
    margin-bottom: 0;
  }

  hgroup > h4{
    margin-top: 5px;
    font-weight: 500;
    color: grey;
  }

  .contact-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .name{
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }

  .name > input{
    width: 50%;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
    font-size: 16px;
  }

  .address{
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;
  }

  .address > input{
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    text-indent: 10px;
    font-size: 16px;
  }

  .option{
    border-bottom: 1.5px solid grey;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .option > input[type=radio]{
    width: 20px;
    height: 20px;
    border: 0px;
    cursor: pointer;
    accent-color: black;
  }
  
  .option-context{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .type-price,
  .definition-duration{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .definition-duration{
    margin-bottom: 5px;
    color: rgb(122, 122, 122);
  }

  .billing-container{
    width: 100%;
    padding-inline: 2rem;
    box-sizing: border-box;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 5px;
  }

  .header-section{
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .card-select{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    accent-color: black;
  }

  .card-select > div{
    display: flex;
    align-items: center;
  }

  .card-icon{
    margin-left: 20px;
    margin-right: 5px;
  }

  .card-logos{
    gap: 10px;
  }

  .card-info{
    width: 100%;
  }

  .cardname, 
  .cardnumber {
    font-size: 18px;
    font-weight: 450;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }

  .cardname input,
  .cardnumber input {
    width: 100%;
    margin-top: 5px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  .date-cvv{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 3rem;
  }

  .exp-date, 
  .cvc {
    font-size: 18px;
    font-weight: 450;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    width: 50%;
  }

  .exp-date input,
  .cvc input {
    width: 100%;
    margin-top: 5px;
    border: none;
    outline: none;
    font-size: 16px;
  } 

  .btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .btn-container > button{
    width: 40%;
    height: 55px;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 600;
    color: white;
    background-color: black;
    border: none;
    border-radius: 55px;
    cursor: pointer;
  }


</style>