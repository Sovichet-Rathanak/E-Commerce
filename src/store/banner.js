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
                        './src/assets/images/Banner/MenswearBanner/gucci1.jpg',
                        './src/assets/images/Banner/MenswearBanner/Dior1.jpg',
                        './src/assets/images/Banner/MenswearBanner/Valentino.jpg',
                        './src/assets/images/Banner/MenswearBanner/Balenciaga.jpg',
                    ]
                },
                womenswearBanner:{
                    image:[
                        './src/assets/images/Banner/WomenswearBanner/WomenwearBanner3.png',
                        './src/assets/images/Banner/WomenswearBanner/WomenwearBanner2.png',
                        './src/assets/images/Banner/WomenswearBanner/WomenwearBanner5.png',
                        './src/assets/images/Banner/WomenswearBanner/WomenwearBanner4.png',
                        './src/assets/images/Banner/WomenswearBanner/WomenwearBanner1.png',
                    ]
                },
                collectiblesBanner:{
                    image:[
                        './src/assets/images/Banner/CollectiblesBanner/aespa.jpeg',
                        './src/assets/images/Banner/CollectiblesBanner/twice.jpg',
                        './src/assets/images/Banner/CollectiblesBanner/nctdream.jpeg',
                        './src/assets/images/Banner/CollectiblesBanner/illit.jpeg',
                        './src/assets/images/Banner/CollectiblesBanner/bibi.jpeg',
                        './src/assets/images/Banner/CollectiblesBanner/riize.png',
                        './src/assets/images/Banner/CollectiblesBanner/enhypen.jpg',
                    ]
                },
            }
        }
    }
})
