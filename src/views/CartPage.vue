<template>
    <body>
        <CartItem></CartItem>
    </body>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
export default{
    components:{
        CartItem
    }
}
</script>

<style scoped>
    h1{
        border: 1px solid green;
    }

    body{
        font-family: "Inter";
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-inline: 7rem;
    }
</style>