<template>
    <body>
        <ProductImage 
            :images="product.productImages"
            :brandname="product.brand_name"
            :productname="product.product_name"
            :price_tag="product.price"
            :productSizes="product.productSizes"
            :productId="product.product_id"
        />
        <ProductDetail
            :brandname="product.brand_name"
            :productname="product.product_name"
            :description="product.description"
            :detailImages="product.detailImages"
        />
    </body>
</template>

<script>
import { useProductStore } from '@/store/product';
import { useRoute } from 'vue-router';
import ProductImage from '@/components/ProductImage.vue';
import ProductDetail from '@/components/ProductDetail.vue'
import { mapState } from 'pinia';

export default {
    components: {
        ProductImage,
        ProductDetail
    },
    setup(){
        const route = useRoute();
        const productStore = useProductStore();
        return{
            route,
            productStore
        }
    },
    computed:{
        ...mapState(useProductStore, {
            productsByCategory: (state) => state.productsByCategory,
        }),
        prodcutId(){
            return this.route.params.id;
        },
        product(){
            for(const category in this.productsByCategory){
                const found = this.productsByCategory[category].find(
                    (item) => item.product_id === this.prodcutId
                );
                if(found) return found;
            }
            return null;
        }
    },
    methods:{
        logg(){
            console.log(this.product.productSizes)
        }
    }
};
</script>

<style scoped>
    body{
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding-inline: 7rem;
    }
</style>
