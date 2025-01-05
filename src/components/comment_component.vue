<template>
    <div class="container">
        <img src="/src/assets/images/testimg1.jpg" alt="">
        <div class="container2">
            <span class="name">{{ username }}</span>
            <span class="rating">Rating: {{ rating }}</span>
            <p class="comment">{{ comment }}</p>
            <div class="btn-container">
                <button @click="like" :class="{'like active': liked, 'like': !liked}">
                    <iconify-icon icon="streamline:like-1-solid"></iconify-icon>
                    Helpful ({{ count }})
                </button>
                <button @click="toggleReplyInput" class="reply">
                    Reply ({{ replies.length }})
                </button>
            </div>
            <div v-if="showReplyInput" class="reply-input">
                <input type="text" v-model="replyText" placeholder="Write a reply...">
                <button @click="postReply">Post</button>
            </div>
            <div class="replies" v-if="replies.length > 0">
                <div v-for="(reply, index) in replies" :key="index" class="reply-item">
                    <span class="reply-username">{{ reply.username }}</span>: {{ reply.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "comment_component",
    props: {
        username: String,
        rating: Number,
        comment: String,
        replies: Array
    },
    data() {
        return {
            showReplyInput: false,
            replyText: "",
            count: 0,
            liked: false,
        };
    },
    methods: {
        like(){
            if (this.liked) {
                this.count--;
            } else {
                this.count++;
            }
            this.liked = !this.liked;
        },
        toggleReplyInput() {
            this.showReplyInput = !this.showReplyInput;
        },
        postReply() {
            if (this.replyText.trim() === "") return;
            this.$emit("add-reply", {
                username: "Anonymous",
                text: this.replyText
            });
            this.replyText = "";
            this.showReplyInput = false;
        }
    }
};
</script>

<style scoped>
.container {
    font-family: "Inter";
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    gap: 10px;
    border-bottom: 1px solid #ccc; 
    padding-bottom: 15px;
}
.container2 {
    display: flex;
    flex-direction: column;
    width: 100%;
}
img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.name {
    font-weight: bold;
}
.rating {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
}
.comment {
    margin-top: 10px;
}
.like{
    width: 100px;
    color: gray;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.like.active{
    color: #007bff;
} 
.reply {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
}
.reply-input {
    width: 50%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.reply-input input {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.reply-input button {
    align-self: flex-end;
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.replies {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 2px solid #ccc;
}
.replies span{
    font-weight: bold;
}
.reply-item {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
}
</style>
