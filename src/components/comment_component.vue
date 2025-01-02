<template>
    <div class="container">
        <img src="/src/assets/images/testimg1.jpg" alt="">
        <div class="container2">
            <span class="name">{{ username }}</span>
            <span class="rating">{{ rating }}</span>
            <p class="comment">{{ comment }}</p>
            <div class="btn-container">
                <button @click="like" class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z"></path></svg>
                    Helpful ({{ count }})</button>
                <button @click="reply" class="reply">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 20L1 12L11 4V9C16.5228 9 21 13.4772 21 19C21 19.2729 20.9891 19.5433 20.9676 19.8107C19.4605 16.9502 16.458 15 13 15H11V20Z"></path></svg>
                    Reply ({{  }})</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "comment_component",
    props:{ 
        username: String, 
        rating: Number, 
        comment: String 
    },
    data(){
        return{
            count: 0
        }
    },
    methods:{
        like(){
            this.count++;
        },
        reply(){
            console.log("Replied")
        }
    }
}
</script>

<style>
.container{
    width: 100%;
    height: 100px;
    display: flex;
    margin-bottom: 30px;
}
.container2{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.like{
    width: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.reply{
    width: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
svg{
    width: 15px;    
    height: 15px;
}


</style>