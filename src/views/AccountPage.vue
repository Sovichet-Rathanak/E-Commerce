<template>
    <body>
        <div class="container">
            <div class="left-section">
                <h1>Dashboard</h1>
                <div class="button-container">
                    <div>Account Setting</div>
                    <div>Track Order</div>
                    <div><router-link class="route" to="/">Back to shopping</router-link></div>
                </div>
                <button class="logout-btn" @click="logout">Log Out</button>
            </div>
            <div class="right-section">
                <div class="account-setting">
                    <h2>Account</h2>
                    <div class="nameImg-container">
                        <div class="image-container">
                            <img :src="userStore.user.profilePic" alt="profile picture">
                        </div>
                        <label for="file-upload" class="custom-file-upload">Upload Profile Picture</label>
                        <input id="file-upload" class="upload" type="file" accept="image/png, image/jpeg" @change="uploadProfilePic">
                    </div>
                    <div class="email-container">
                        <h3>Account Information</h3>
                        <h1>{{ userStore.user.username }}</h1>
                        <span>Your email address is <strong>{{userStore.user.email}}</strong></span>
                    </div>

                    <div class="password-container">
                        <div class="container-upper">
                            <h3>Change Password</h3>
                        </div>
                        <form class="container-lower" @submit.prevent="">
                            <div>
                                <label for="CurrentPass">Current Password</label>
                                <input type="password" class="currentpwd" v-model="currentpwd">
                                <h4 v-if="errors.passNotFound" class="error-message"> {{ errors.passNotFound }}</h4>
                            </div>
                            
                            <div>
                                <label for="NewPass">New Password</label>
                                <input type="password" class="newpwd" v-model="newpwd">
                                <h4 v-if="errors.newpassNotFound" class="error-message"> {{ errors.newpassNotFound }}</h4>
                            </div>
                            <button type="submit" class="confirm-btn" @click="resetPassword">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { useUserStore } from '@/store/user';

export default{
    data(){
        return{
            currentpwd: "",
            newpwd: "",
            errors:{}
        }
    },
    setup(){
        const userStore = useUserStore();
        userStore.loadUserFromLocalStorage();
        
        return{
            userStore
        };
    },
    methods:{
        isErrors(){
            this.errors = {};
        },
        async uploadProfilePic(event) {
            const file = event.target.files[0];
            if (!file) return;

            const userStore = useUserStore();
            const user = { ...userStore.user };

            //basicallyt this encode the uploaded image into string base64
            const reader = new FileReader();
            reader.onload = async () => {
                user.profilePic = reader.result; 

                const response = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
                });

                if (response.ok) {
                userStore.login(user); 
                }
            };
            reader.readAsDataURL(file);
        },

        logout(){
            this.userStore.logout();
            this.$router.push('/')
        },

        async resetPassword(){
            this.isErrors();
            if(!this.currentpwd){
                this.errors.passNotFound = "Please input your current password";
                return;
            }else if(!this.newpwd){
                this.errors.passNotFound = "Please your new password"
            }
            
            const response = await fetch(`http://localhost:3000/users?password=${this.currentpwd}`);
            const data = await response.json();
            
            if(data.length > 0){
                const user = data[0];
                user.password = this.newpwd;

                const updateResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                });

                if (updateResponse.ok) {
                    this.currentpwd = "";
                    this.newpwd = "";
                    alert("YIPEEE")
                }
            }else{
                this.errors.passNotFound = "The password you've entered is incorrect";
                return;
            }
        }
    }
}
</script>

<style scoped>
    body{
        font-family: "Inter";
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        width: 100vw;
        box-sizing: border-box;
    }
    .route{
        color: white;
        text-decoration: none;
    }
    .container{
        border: 1px solid black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 80%;
        border-radius: 30px;
        box-shadow: 17px 17px 20px grey;
    }
    .left-section{
        width: 30%;
        height: 1000px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        color: white;
        background-color: #121212;
        border-radius: 30px 0px 0px 30px;
        margin-right: 4rem;
    }
    .left-section > h1{
        font-size: 40px;
        margin-top: 10rem;
    }
    
    .button-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
    }
    .right-section{
        display: flex;
        justify-content: flex-start; 
        align-items: center;
        width: 75%;
        height: 100%;
    }
    .account-setting{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .nameImg-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .nameImg-container .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 320px;
        height: 320px;
        border: 1px solid black;
        border-radius: 320px;
        object-fit: fill;
        overflow: hidden;
    }
    .image-container > img{
        width: 100%;
        height: 100%;
    }
    .password-container{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .password-container .container-upper{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .password-container .container-lower{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .container-lower > div{
        display: flex;
        flex-direction: column;
    }
    .currentpwd, .newpwd{
        width: 300px;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px;
        text-indent: 10px;
    }
    .confirm-btn{
        width: 310px;
        height: 40px;
        border-radius: 30px;
        margin-top: 20px;
        cursor: pointer;
        background-color: black;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        border: 1px solid black;
        color: white;
        background-color: black;
        border-radius: 10px;
        font-weight: 500;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
        margin-top: 10px;
    }

    .left-section > button {
        margin-top: 1rem; 
        display: flex;
        justify-self: flex-end; 
        background-color: #333; 
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
    }
</style>