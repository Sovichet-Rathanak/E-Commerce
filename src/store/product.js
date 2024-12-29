import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state:() => ({
        productsByCategory: {
            sneakers: [
                {
                    brand_name: "Air Jordan 1 High OG Chicago",
                    product_name: "Lost and Found",
                    price: 239,
                    product_id: "AJ1_LNF",
                    product_status: "Available In Stock",
                    thumbNail: "./src/assets/images/AJ1HighLost_Found.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image1.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image3.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image4.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image5.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image6.png',
                    ],
                    tags: ["new"]
                },
                {
                    brand_name: "Air Jordan 1 Retro High",
                    product_name: "Yellow Ochre",
                    price: 139,
                    product_id: "AJ1_YOL",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Sneakers/YellowOchre/image1.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image2.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image3.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image4.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image5.jpg',
                    ],
                    tags: ["new"]
                },
                {
                    brand_name: "Air Jordan 1 High OG Chicago",
                    product_name: "Lost and Found",
                    price: 239,
                    product_id: "AJ1_LNF",
                    product_status: "Available In Stock",
                    thumbNail: "./src/assets/images/AJ1HighLost_Found.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image1.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image3.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image4.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image5.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image6.png',
                    ],
                    tags: ["new"]
                },
                {
                    brand_name: "Air Jordan 1 High OG Chicago",
                    product_name: "Lost and Found",
                    price: 239,
                    product_id: "AJ1_LNF",
                    product_status: "Available In Stock",
                    thumbNail: "./src/assets/images/AJ1HighLost_Found.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image1.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image3.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image4.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image5.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image6.png',
                    ],
                    tags: ["new"]
                },
                {
                    brand_name: "Air Jordan 1 High OG Chicago",
                    product_name: "Lost and Found",
                    price: 239,
                    product_id: "AJ1_LNF",
                    product_status: "Available In Stock",
                    thumbNail: "./src/assets/images/AJ1HighLost_Found.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image1.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image3.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image4.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image5.png',
                        '/src/assets/images/DetailImage/Sneakers/AJ1LostandFound/image6.png',
                    ],
                    tags: ["new"]
                },
            ]
        }
    }),
    getters:{
        getProductsByTag(state) {
            return function(tag) {
                const allProducts = Object.values(state.productsByCategory).flat();
                return allProducts.filter(product => product.tags?.includes(tag)).slice(0, 4);
            };
        },
    },
})