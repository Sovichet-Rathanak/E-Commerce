<template>
    <div class="rec-container">
        <hgroup>
            <h1 class="recommended">Complete the look</h1>
        </hgroup>
        <div class="card-container">
            <ProductCard class="card" 
                v-for="product in getRandom()"
                :key="product.product_id"
                :productImage="product.thumbNail"
                :brandName="product.brand_name"
                :productName="product.product_name"
                :productStatus="product.product_status"
                :productId="product.product_id"
            />
        </div>
    </div>
</template>

<script>
import { useProductStore } from '@/store/ProductStore/product';
import { onMounted } from "vue";
import ProductCard from '../Card/product_card.vue';

export default{
    components:{
        ProductCard,
    },
    setup(){
        const productStore = useProductStore();

        onMounted(() => {
          productStore.populateProductsByCategory();
          console.log("Product Store: ",productStore)
        });

        return{
            productStore
        }
    },
    computed:{
        getRandom(){
            return() => {
                const productStore = useProductStore();
                console.log(productStore.getRandomProducts());
                return productStore.getRandomProducts();
            }
        }
    },
    methods:{
        goToProductDetailPage(productId) {
            this.productStore.selectedSize = null;
            this.$router.push(`/product/${productId}`);
            console.log(this.productId);
        },
    }
}
</script>

<style scoped>
    .rec-container {
        font-family: "Inter";
        margin-top: 30px;
    }

    .recommended{
        margin: 0;
        font-size: 35px;
    }

    .card-container{
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 30px;
        justify-content: space-around;
        cursor: pointer;
    }
</style>