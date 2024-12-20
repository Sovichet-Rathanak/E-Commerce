<template>
    <div class="container">
        <div class="inner-container">
            <div class="left-container">
                <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
                <h2>Sign in or create an account</h2>
                <form @submit.prevent>

                    <!-- signin section -->
                    <div class="input-container-signin" v-if="formType === 'signin'">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" required>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" required>
                        </div>
                        <div class="show-pass">
                            <span>Don't have an account?</span>
                            <span @click="toggleSignUp" class="signup" style="font-weight: bold;">Sign Up</span>
                        </div>
                        <button class="submit-button">Sign In</button>
                        <div class="line-break">
                            <div class="line-before"></div>
                            <span>or</span>
                            <div class="line-after"></div>
                        </div>
                        <div class="continue-section">
                            <iconify-icon icon="devicon:google" width="2.2rem" height="2.2rem" class="google"/>
                            <iconify-icon icon="logos:facebook" width="2.2rem" height="2.2rem" class="facebook"/>
                            <iconify-icon icon="ic:outline-apple" width="2.2rem" height="2.2rem" class="apple"/>
                        </div>
                        <span class="forgot-section" @click="toggleForgotpwd">Forgot Password</span>
                    </div>

                    <!-- signup section -->
                    <div class="input-container-signup" v-else-if="formType === 'signup'">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" required>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" required>
                        </div>
                        <div class="input-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" required>
                        </div>
                        <div class="show-pass">
                            <span>Already have an account?</span>
                            <span @click="toggleSignIn" class="signup" style="font-weight: bold;">Sign In</span>
                        </div>
                        <button class="submit-button">Sign Up</button>
                    </div>

                    <!-- forgot pwd section -->
                    <div class="input-container-signup" v-else>
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email">
                        </div>
                        <div class="show-pass">
                            <span @click="toggleSignIn" class="signup" style="font-weight: bold;">Back</span>
                        </div>
                        <button class="reset-button">Reset Password</button>
                    </div>
                </form>
            </div>
            <div class="video-container">
                <video class="bg-animation" src="@/assets/videos/blkCutbgVid.mp4" autoplay loop></video>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formType: "signin",
            isSignUp: false, 
            forgotPwd: false,
        };
    },
    methods: {
        toggleSignUp() {
            this.formType = "signup"
        },
        toggleSignIn(){
            this.formType = "signin"
        },  
        toggleForgotpwd(){
            this.formType = "forgor"
            console.log(this.forgotPwd)
        }
    },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .inner-container{
        font-family: "Inter";
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 80vw;
        height: 85vh;
        border-radius: 25px;
        border:1px solid gray;
        box-shadow: 15px 15px 25px grey;
    }
    
    .video-container{
        padding: 0;
        margin: 0;
        width: 45%;
        height: 100%;
    }

    .bg-animation{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -100;
        border-radius: 0px 25px 25px 0px;
    }

    .left-container{
        width: 55%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    h1{
        padding: 2rem;
        font-size: 70px;
        font-weight: bold;
        display: flex;  
        justify-content: center;
        align-items: center;
        color: black;
    }   

    h2{
        font-size: 35px;
        margin-top: 0;
    }

    .input-container-signup{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 600px;
        gap: 20px;
    }

    label{
        display: flex;
        text-align: left;
        font-weight: bold;
        opacity: .4;
    }

    .input-container-signup input{
        width: 500px;
        height: 50px;
        font-weight: 600;
        color: black;
        font-family: "Inter";
        text-indent: 10px;
        margin-top: 0;
        font-size: 16px;
    }
    
    .show-pass{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 5px;
        width: 85%;
    }

    .submit-button,
    .reset-button{
        width: 500px;
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        height: 50px;
        font-weight: bold;
        border: 3px solid black;
    }

    .submit-button:hover,
    .reset-button:hover{
        transition: 200ms ease-out;
        color: black;
        background-color: white;
        font-weight: bold;
        border: 3px solid black;
        cursor: pointer;
    }

    .input-container-signin{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 600px;
        gap: 20px;
    }

    .input-container-signin input{
        width: 500px;
        height: 50px;
        font-weight: 600;
        color: black;
        font-family: "Inter";
        text-indent: 10px;
        margin-top: 0;
        font-size: 16px;
    }

    .line-break{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        width: 100%;
    }

    .line-before,
    .line-after{
        width: 39%;
        height: 2px;
        background-color: black;
    }

    .continue-section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 60px;
        width: 80%;
    }

    .signup:hover{
        cursor: pointer;
    }

    .forgot-section{
        font-family: "Inter";
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
        font-weight: 600;
        opacity: .3;
        text-decoration: underline;
    }

    .forgot-section:hover{
        font-family: "Inter";
        transition: 100ms ease-in;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
        font-weight: bolder;
        opacity: 1;
        text-decoration: underline;
    }
</style>