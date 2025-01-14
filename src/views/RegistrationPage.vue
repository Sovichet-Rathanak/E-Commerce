<template>
    <div class="container">
        <div class="inner-container">
            <div class="left-container">
                <router-link to="/" style="text-decoration: none;"><h1>Kravan</h1></router-link>
                <h2>Sign in or create an account</h2>
                <form @submit.prevent>
                    <div class="input-container-signin" v-if="formType === 'signin'">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" required>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" required>
                            <h4 v-if="errors.login" class="error-message">{{ errors.login }}</h4>
                        </div>
                        <div class="show-pass">
                            <span>Don't have an account?</span>
                            <span @click="toggleSignUp" class="signup" style="font-weight: bold;">Sign Up</span>
                        </div>
                        <button class="submit-button" @click="signInUser">Sign In</button>
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

                    <div class="input-container-signup" v-else-if="formType === 'signup'">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" required>
                            <h4 v-if="errors.email" class="error-message">{{ errors.email }}</h4>
                        </div>
                        <div class="input-group">
                            <label for="username">Username</label>
                            <input type="text" v-model="username" required>
                        </div>
                        <div class="input-group">
                            <label for="password">Password</label>
                            <input type="password" v-model="password" required>
                        </div>
                        <div class="input-group">
                            <label for="confirm-password">Confirm Password</label>
                            <input type="password" v-model="confirmPassword" required>
                            <h4 v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</h4>
                        </div>
                        <div class="show-pass">
                            <span>Already have an account?</span>
                            <span @click="toggleSignIn" class="signup" style="font-weight: bold;">Sign In</span>
                        </div>
                        <button class="submit-button" @click="registerUser">Sign Up</button>
                    </div>

                    <div class="input-container-signup" v-else-if="formType === 'forgot'">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" required>
                            <h4 v-if="errors.email" class="error-message">{{ errors.email }}</h4>
                        </div>
                        <div class="show-pass">
                            <span @click="toggleSignIn" class="signup" style="font-weight: bold;">Back</span>
                        </div>
                        <button class="reset-button" @click="handleForgotPassword">Reset Password</button>
                    </div>

                    <div class="input-container-signup" v-else-if="formType === 'newPwd'">
                        <div class="input-group">
                            <label for="password">New Password</label>
                            <input type="password" v-model="password" required>
                        </div>
                        <button class="reset-button" @click="resetPassword">Set New Password</button>
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
import { useUserStore } from '@/store/user';

export default {
    data() {
        return {
            formType: "signin",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
    },
    methods: {
        isErrors() {
            this.errors = {};
        },
        clearInputs() {
            this.email = '';
            this.username = '';
            this.password = '';
            this.confirmPassword = '';
        },
        toggleSignUp() {
            this.isErrors();
            this.clearInputs();
            this.formType = "signup";
        },
        toggleSignIn() {
            this.isErrors();
            this.clearInputs();
            this.formType = "signin";
        },
        toggleForgotpwd() {
            this.isErrors();
            this.clearInputs();
            this.formType = "forgot";
        },
        toggleNewpwd() {
            this.isErrors();
            this.clearInputs();
            this.formType = "newPwd";
        },

        async handleForgotPassword() {
            this.isErrors();
            if (!this.email) {
                this.errors.email = "Email is required.";
                return;
            }

            const response = await fetch(`http://localhost:3000/users?email=${this.email}`);
            const data = await response.json();

            if (data.length > 0) {
                this.clearInputs();
                this.toggleNewpwd();
            } else {
                this.errors.email = "Email not found. Please register.";
            }
        },

        async resetPassword() {
            this.isErrors();
            if (!this.password) {
                this.errors.password = "New password is required.";
                return;
            }

            const response = await fetch(`http://localhost:3000/users?email=${this.email}`);
            const data = await response.json();

            if (data.length > 0) {
                const user = data[0];
                user.password = this.password;

                const updateResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                });

                if (updateResponse.ok) {
                    this.clearInputs();
                    this.toggleSignIn();
                }
            }
        },

        async registerUser() {
            this.isErrors();
            if (!this.email) {
                this.errors.email = "Email is required.";
                return;
            }
            if (!this.username) {
                this.errors.username = "Username is required.";
                return;
            }
            if (!this.password) {
                this.errors.password = "Password is required.";
                return;
            }
            if (this.password !== this.confirmPassword) {
                this.errors.confirmPassword = "Passwords do not match!";
                return;
            }

            const response = await fetch(`http://localhost:3000/users?email=${this.email}`);
            const existingUsers = await response.json();

            if (existingUsers.length > 0) {
                this.errors.email = "Email is already in use.";
                return;
            }

            const newUser = {
                email: this.email,
                username: this.username,
                password: this.password,
            };

            const registerResponse = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
            });

            if (registerResponse.ok) {
                this.clearInputs();
                this.toggleSignIn();
            } else {
                this.errors.registration = "Failed to register. Try again.";
            }
        },

        async signInUser() {
            this.isErrors();
            if (!this.email) {
                this.errors.email = "Email is required.";
                return;
            }
            if (!this.password) {
                this.errors.password = "Password is required.";
                return;
            }

            const response = await fetch(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            const data = await response.json();

            if (data.length === 0) {
                this.errors.login = "Invalid email or password.";
            }else{
                const userStore = useUserStore();
                userStore.login(data[0]);
                localStorage.setItem("user", JSON.stringify(data[0]))
                this.$router.push('/');
            }
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
    .error-message {
        color: red;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
  
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
        gap: 10px;
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