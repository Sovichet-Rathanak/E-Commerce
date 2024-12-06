<template>
    <div class="container">
        <div class="left-container">
            <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
            <h2>Sign in or create an account</h2>
            <form @submit.prevent>
                <div class="input-container-signup" v-if="isSignUp">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email">
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password">
                    </div>
                    <div class="input-group">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password">
                    </div>
                    <div class="show-pass">
                        <span>Already have an account?</span>
                        <span @click="toggleSignUp" class="signup" style="font-weight: bold;">Sign In</span>
                    </div>
                    <button class="submit-button">Sign Up</button>
                </div>

                <div class="input-container-signin" v-else>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email">
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password">
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
                </div>
            </form>
        </div>
        <div class="video-container">
            <video class="bg-animation" src="@/assets/videos/blkCutbgVid.mp4" autoplay loop></video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSignUp: false, 
        };
    },
    methods: {
        toggleSignUp() {
            this.isSignUp = !this.isSignUp;
        },
    },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

    .container{
        font-family: "Inter";
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: auto;
        height: auto;
        height: 100vh;
    }
    
    .video-container{
        padding: 0;
        margin: 0;
        width: 40%;
        height: 100%;
    }

    .bg-animation{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -100;
    }

    .left-container{
        width: 60%;
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
    }

    .input-container-signup input{
        width: 500px;
        height: 50px;
        font-weight: 600;
        color: black;
        font-family: "Inter";
        text-indent: 10px;
        margin-top: 0;
    }
    
    .show-pass{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 5px;
        width: 85%;
    }

    .submit-button{
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

    .submit-button:hover{
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
</style>