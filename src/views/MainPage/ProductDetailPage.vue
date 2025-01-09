<template>
    <body>
        <ProductImage 
            v-if="product"
            :images="product.productImages"
            :brandname="product.brand_name"
            :productname="product.product_name"
            :price_tag="product.price"
            :productSizes="product.productSizes"
            :productId="product.product_id"
        />
        <ProductDetail
            v-if="product"
            :brandname="product.brand_name"
            :productname="product.product_name"
            :description="product.description"
            :detailImages="product.detailImages"
        />
        <RatingComponent v-if="product"></RatingComponent>
        <comment_section v-if="product"></comment_section>
    </body>
</template>

<script>
import { useProductStore } from '@/store/ProductStore/product';
import { useRoute } from 'vue-router';
import ProductImage from '@/components/DetailComponent/ProductImage.vue';
import ProductDetail from '@/components/DetailComponent/ProductDetail.vue'
import { mapState } from 'pinia';
import comment_section from '@/components/DetailComponent/comment_section.vue';
import RatingComponent from '@/components/DetailComponent/RatingComponent.vue';
import { onMounted } from 'vue';

export default {
    components: {
        ProductImage,
        ProductDetail,
        comment_section,
        RatingComponent
    },
    setup(){
        const route = useRoute();
        const productStore = useProductStore();

        onMounted(() => {
            if (Object.keys(productStore.productsByCategory).length === 0) {
                productStore.populateProductsByCategory();
            }
        });

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
