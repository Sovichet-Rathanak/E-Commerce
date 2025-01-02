<template>
    <div class="comment-section">
        <h1>Comments</h1>
        <div class="hl"></div>
        <div class="addComment">
            <img src="/src/assets/images/testimg1.jpg" alt="pfp">
            <input v-model="newComment" type="text" placeholder="Leave a comment...">
            <button @click="addCmt" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path></svg>
            </button>
        </div>
        <comment_component :key="index" v-for="(comment, index) in comments"    
            :username="comment.username"
            :rating="comment.rating"
            :comment="comment.comment"
        ></comment_component>
    </div>
</template>

<script>
import comment_component from './comment_component.vue';
export default {
    name: "comment-section",
    components:{
        comment_component
    },
    data(){
        return{
            newCmt: "",
            comments: [
                {
                    username: "John Doe",
                    rating: 4,
                    comment: "This is a comment"
                },
                {
                    username: "John Doe",
                    rating: 4,
                    comment: "This is a comment"
                }
            ]
            }
    },
    methods:{
        addCmt() {
            if (this.newComment.trim() === "") return; 
            
            this.comments.push({
                username: "Anonymous",
                rating: 5, 
                comment: this.newComment
            });

            this.newComment = ""; 
        }
    }
}
</script>

<style scoped>
.comment-section{
    gap: 1rem;
    display: flex;
    flex-direction: column;
}
h1{
    font-family: "Inter"
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

.icon svg{
    width: 20px;
    height: 30px;
}
.icon{
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: -3.4rem;
}
input{
    width: 50%;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: lightgray;
    padding-left: 30px;
}
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>