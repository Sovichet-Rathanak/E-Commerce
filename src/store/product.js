import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state:() => ({
        productsByCategory: {
            sneakers: [
                {
                    brand_name: "Air Jordan 1 Retro High",
                    product_name: "Yellow Ochre",
                    price: 139,
                    product_id: "AJ1_YLO",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Sneakers/YellowOchre/image1.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image2.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image3.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image4.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image5.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/image6.jpg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/detail1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/YellowOchre/detail2.jpg',
                    ],
                    description: `Step into the perfect blend of classic and contemporary with this remastered Air Jordan 1. The bold interplay of Yellow Ochre and deep black creates a striking contrast against the smooth, 
tumbled Sail leather, delivering a look that's as clean as it is sophisticated. 

Every detail has been thoughtfully refined, from the premium materials to the vintage-inspired branding, evoking a sense of timelessness. This is where heritage meets innovation—a seamless 
fusion of old-school charm and modern design. With a finish as smooth as MJ's signature fadeaway, this AJ1 stands as a true testament to the legacy of greatness, designed for those who appreciate
both tradition and bold, fresh style.`,
                    tags: ["new"]
                },
                {
                    brand_name: "SB Dunk Low",
                    product_name: "Yuto x Wolf Grey",
                    price: 139,
                    product_id: "SBD_Yuto",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Sneakers/Yuto/image1.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image2.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image3.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image4.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image5.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/image6.jpg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Sneakers/Yuto/detail1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/Yuto/detail2.jpg',
                    ],
                    description: `Not many can claim to be the first. Yuto Horigome is one of the few. Crafted to the champion's specs, the Nike SB Dunk Low x Yuto brings you a skate-worthy design that taps into the places where he first 
developed his craft. Delivering the gold standard of skate shoes (and marked with Yuto's family crest), it lets you glide between casually spinning tricks on vert and going big in the streets—just like Yuto.`,
                    tags: ["new"]
                },
                {
                    brand_name: "Air Jordan 1 High OG",
                    product_name: "Spiderman Next Chapter",
                    price: 339,
                    product_id: "AJ1_SPM",
                    product_status: "Available Instock",
                    thumbNail: "/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image1.jpg",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image2.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image3.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image4.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image5.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/image6.jpg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/detail1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/AJ1Spiderman/detail2.jpg',
                    ],
                    description: `You don't need a cape to take flight—just your AJ1s. You know, the ones seen on Miles in "Spider-Man: Across the Spider-Verse", exclusively in cinemas. This fresh take on the iconic Chicago 
colourway boasts a mix of materials, including lustrous leather and soft suede. The world is waiting, so step on in.`,
                    tags: ["new"]
                },
                {
                    brand_name: "New Balance",
                    product_name: "Nimbus Cloud 574 Core",
                    price: 89,
                    product_id: "NB_574",
                    product_status: "Available Instock",
                    thumbNail: "/src/assets/images/DetailImage/Sneakers/NewBalance574/thumbnail_image.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image1.jpg',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image2.jpg',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image3.jpg',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image4.jpg',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image5.jpg',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/image6.jpg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/detail1.png',
                        '/src/assets/images/DetailImage/Sneakers/NewBalance574/detail2.png',
                    ],
                    description: "dasadda",
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