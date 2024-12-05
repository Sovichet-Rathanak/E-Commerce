<template>
    <div class="container">
        <div class="inner-left-container">
            <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
            <img class="bot" src="@/assets/images/RegistrationBanner/reg_banner.jpg" alt="banner" width="800" height="820">
        </div>
        <div class="inner-right-container">
            <form @submit.prevent="submitForm">
                <h2>Sign In</h2>
                <h4>Information Entered are Confidential and Will Be Protected</h4>
                <div class="input-container">
                    <input type="email" placeholder="Enter Your Email" autocomplete="on">
                    <input type="text" placeholder="Password">
                    <input type="text" placeholder="Confirm password">
                    <button class="continue-button"> Continue </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script></script>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .inner-left-container{
        display: flex;
        flex-direction: column;
        padding-left: 63px;
        /* background-color: blue; */
    }
    
    .inner-left-container h1{
        font-family: 'Inter';
        font-weight: bolder;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 64px;
        padding: 90px auto 43px;
        letter-spacing: 1rem;
    }

    .inner-right-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* background-color: red; */
        width: 697px;
        height: 864px;
        margin-left: 57px;
    }

    .inner-right-container .input-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        font: 'Inter';
        width: 697px;
        height: 100px;
        border-radius: 20px;
        margin: 10px auto;
        font-size: 20px;
        border: 1px solid black;
        font-weight: bold;
        text-indent: 20px;
    }

    h2{
        font-family: 'Inter';
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    h4{
        font-family: 'Inter';
        display: flex;
        justify-content: center;
        align-items: center;    
    }

    .continue-button{
        background-color: transparent;
        border: 2px solid black;
        width: 697px;
        height: 117px;
        font-size: 20px;
        font-weight: bold;
        margin: 10px auto;
    }

    .continue-button:hover{
        transition: 150ms ease-in;
        background-color: black;
        border: 2px solid black;
        width: 697px;
        height: 117px;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }

    .continue-button:active{
        transition: 0.1s ease-out;
        background-color: white;
        border: 2px solid black;
        width: 697px;
        height: 117px;
        font-size: 20px;
        font-weight: bold;
        color: black;
        border-radius: none;
    }

</style>