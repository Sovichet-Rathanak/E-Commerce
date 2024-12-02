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
                    logo:[],
                    brand_name:[]
                },
                womenswearBrand:{
                    logo:[],
                    brand_name:[]
                },
                collectibleBrand:{
                    logo:[],
                    brand_name:[]
                },
            }
        }
    },
    actions:{
    }
})