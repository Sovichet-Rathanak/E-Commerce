import { defineStore } from "pinia";

export const useBrandStore = defineStore('brands',{
    state: () => {
        return{
            brands:{
                sneakerBrand:{
                    logo:[
                        "./src/assets/images/BrandLogo/SneakerBrand/Jordan.png",
                        "./src/assets/images/BrandLogo/SneakerBrand/Converse.png",
                        "./src/assets/images/BrandLogo/SneakerBrand/Vans.png",
                        "./src/assets/images/BrandLogo/SneakerBrand/Yeezy.png"
                    ],
                    brand_name:["Jordan","Converse", "Vans", "Yeezy"]
                },
                accessoryBrand:{
                    logo:[

                    ],
                    brand_name:[]
                },
                menswearBrand:{
                    logo:[
                      "./src/assets/images/BrandLogo/MenswearBrand/Dior-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Hermes-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Prada-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Valentino-Logo.png"
                    ],
                    brand_name:["Dior","Hermes","Prada", "Valentino"]
                },
                womenswearBrand:{
                    logo:[],
                    brand_name:[]
                },
                collectibleBrand:{
                    logo:[
                        "./src/assets/images/BrandLogo/CollectibleArtist/aespaBrand.jpg", 
                        "./src/assets/images/BrandLogo/CollectibleArtist/newjeansBrand.jpg", 
                        "./src/assets/images/BrandLogo/CollectibleArtist/illit.jpg", 
                        "./src/assets/images/BrandLogo/CollectibleArtist/enhypenBrand.jpg"
                    ],
                    brand_name:["AESPA","NEWJEANS","ILLIT","ENHYPEN"]
                },
            }
        }
    },
    actions:{
    }
})
