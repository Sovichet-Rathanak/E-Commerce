import { defineStore } from "pinia";

export const useBannerStore = defineStore('banners',{
    state: () =>{
        return{
            banners: {
                sneakerBanner:{
                    image:[
                        './src/assets/images/Banner/SneakerBanner/spiderman.jpg',
                        './src/assets/images/Banner/SneakerBanner/sambas_banner.jpg',
                        './src/assets/images/Banner/SneakerBanner/lostandfound.jpg',
                        './src/assets/images/Banner/SneakerBanner/panda.jpg',
                        './src/assets/images/Banner/SneakerBanner/Onitsuka.jpg',
                    ]
                },
                accessoryBanner:{
                    image:[
                        './src/assets/images/Banner/AccessoriesBanner/aespa3.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/aespa4.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/newjeans.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/nct.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/illit.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/lessera.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/RIIZE.jpeg',
                        './src/assets/images/Banner/AccessoriesBanner/straykids.jpg',
                        './src/assets/images/Banner/AccessoriesBanner/ateez.jpeg',
                    ]
                },
                menswearBanner:{
                    image:[
                        './src/assets/images/Banner/MenswearBanner/Louis_Vuitton.jpg',
                        './src/assets/images/Banner/MenswearBanner/Gucci.jpg',
                        './src/assets/images/Banner/MenswearBanner/Gucci1.jpg',
                        './src/assets/images/Banner/MenswearBanner/Dior1.jpg',
                        './src/assets/images/Banner/MenswearBanner/valentino.jpg',
                        './src/assets/images/Banner/MenswearBanner/Balenciaga.jpg',


                    ]
                },
                womenswearBanner:{
                    image:[
                        './src/assets/images/Banner/WomenswearBanner/aespa3.jpg',
                        './src/assets/images/Banner/WomenswearBanner/aespa4.jpg',
                        './src/assets/images/Banner/WomenswearBanner/newjeans.jpg',
                        './src/assets/images/Banner/WomenswearBanner/nct.jpg',
                        './src/assets/images/Banner/WomenswearBanner/illit.jpg',
                        './src/assets/images/Banner/WomenswearBanner/lessera.jpg',
                        './src/assets/images/Banner/WomenswearBanner/RIIZE.jpeg',
                        './src/assets/images/Banner/WomenswearBanner/straykids.jpg',
                        './src/assets/images/Banner/WomenswearBanner/ateez.jpeg',
                    ]
                },
                collectiblesBanner:{
                    image:[
                        './src/assets/images/Banner/CollectiblesBanner/aespa3.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/aespa4.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/newjeans.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/nct.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/illit.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/lessera.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/RIIZE.jpeg',
                        './src/assets/images/Banner/CollectiblesBanner/straykids.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/ateez.jpeg',
                    ]
                },
            }
        }
    }
})
