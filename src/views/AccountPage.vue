<template>
    <body>
        <div class="container">
            <div class="left-section">
                <h1>Dashboard</h1>
                <div class="button-container">
                    <div>Account Setting</div>
                    <div>Track Order</div>
                </div>
            </div>
            <div class="right-section">
                <div class="account-setting">
                    <h2>Account</h2>
                    <div class="nameImg-container">
                        <div class="image-container">
                            <img :src="userStore.user.profilePic" alt="profile picture">
                        </div>
                        <input type="file" @change="uploadProfilePic">
                        <span>{{ userStore.user.username }}</span>
                    </div>
                    <div class="email-container">
                        <h3>Email Address</h3>
                        <span>Your email address is <strong>{{userStore.user.email}}</strong></span>
                    </div>

                    <div class="password-container">
                        <div class="container-upper">
                            <h3>Change Password</h3>
                        </div>
                        <form class="container-lower" @submit.prevent="">
                            <div>
                                <label for="CurrentPass">Current Password</label>
                                <input type="password" class="currentpwd">
                            </div>

                            <div>
                                <label for="NewPass">New Password</label>
                                <input type="password" class="newpwd">
                            </div>
                            <button type="submit" class="confirm-btn">Confirm</button>
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
    setup(){
        const userStore = useUserStore();

        return{
            userStore
        };
    },
    methods:{
        async uploadProfilePic(event) {
            const file = event.target.files[0];
            if (!file) return;

            const userStore = useUserStore();
            const user = { ...userStore.user };

            //basicallyt this turn encode the uploaded image into string base64
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
        height: 100vh;
        box-sizing: border-box;
    }

    .container{
        border: 1px solid black;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 80%;
        height: 100%;
        border-radius: 30px;
        box-shadow: 17px 17px 20px grey;
    }

    .left-section{
        width: 25%;
        height: 100%;
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

</style>
