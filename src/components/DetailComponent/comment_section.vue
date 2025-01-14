<template>
    <h1>Comments</h1>
    <div class="hl"></div>
    <div class="comment-section">
        <div class="addComment">
            <img :src="userStore.isLogIn ? userStore.user.profilePic : '/src/assets/images/default.jpg'" alt="pfp">
            <input v-model="newComment" type="text" placeholder="Leave a comment...">
            <button @click="addCmt" class="icon">
                <iconify-icon class="send" icon="iconoir:send-solid"></iconify-icon>
            </button>
        </div>
        <div v-if="comments.length === 0" class="no_comments">
            <span>No comments yet</span>
        </div>
        <div v-else>
            <div v-for="(comment, index) in comments" :key="index" class="comment">
                <comment_component 
                    :username="comment.username"
                    :rating="comment.rating"
                    :comment="comment.comment"
                    :replies="comment.replies"
                    @add-reply="addReply(index, $event)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/store/user';
import comment_component from './comment_component.vue';
export default {
    name: "comment-section",
    components:{
        comment_component
    },
    data(){
        return{
            newComment: "",
            comments: []
            }
    },
    setup(){
        const userStore = useUserStore();
        userStore.loadUserFromLocalStorage()

        return{
            userStore
        };
    },
    methods:{
        addCmt() {
            if (this.newComment.trim() === "") return;
            const username = this.userStore.isLogIn ? this.userStore.user.username : "Guest";
            const profilePic = this.userStore.isLogIn ? this.userStore.user.profilePic : "default-profile-pic.png";
            
            this.comments.push({
                username,
                profilePic,
                rating: 5, 
                comment: this.newComment,
                replies: []
            });

            this.newComment = ""; 
        },
        addReply(commentIndex, reply) {
            this.comments[commentIndex].replies.push(reply);
        }
    }
}
</script>

<style scoped>
.comment-section{
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-family: "Inter";
    padding-inline: 10rem;
    margin-bottom: 3rem;
}
h1{
    font-family: "Inter";
    font-size: 35px;
}
.hl{
    width: 100%;
    height: 2px;
    margin-top: -1.5rem;
    background-color: lightgray;
    border-radius: 1px;
}
.addComment{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
}
.send{
    width: 25px;
    height: 25px;
}
.icon{
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: -3.4rem;
}
input{
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: none;
    font-size: 15px;
    background-color: lightgray;
    padding-left: 30px;
}
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.no_comments{
    width: 100%;
    margin-top: 20px;
    color: gray;
    display: flex;
    font-size: 20px;
    justify-content: center;
}
</style>