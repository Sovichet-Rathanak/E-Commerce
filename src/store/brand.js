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
                        "./src/assets/images/BrandLogo/SneakerBrand/Yeezy.png",
                    ],
                    brand_name:["Jordan","Converse", "Vans", "Yeezy"]
                },
                accessoryBrand:{
                    logo:[
                        "./src/assets/images/BrandLogo/AccessoryBrand/Hermes.png",
                        "./src/assets/images/BrandLogo/AccessoryBrand/Chanel.png",
                        "./src/assets/images/BrandLogo/AccessoryBrand/LV.png",
                        "./src/assets/images/BrandLogo/AccessoryBrand/Dior.png",
                        "./src/assets/images/BrandLogo/AccessoryBrand/Goyard.png"
                    ],
                    brand_name:["Hermés","Chanel", "Louis Vuitton", "Dior","Goyard"]
                },
                menswearBrand:{
                    logo:[
                      "./src/assets/images/BrandLogo/MenswearBrand/Dior-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Hermes-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Prada-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Valentino-Logo.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Ck.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/Balenciga.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/Gucci.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/Lacoste.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/LV.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/Rushberry.jpg",
                      "./src/assets/images/BrandLogo/MenswearBrand/tommy.png",
                      "./src/assets/images/BrandLogo/MenswearBrand/Essential.jpg",
                    ],
                    brand_name:["Dior","Hermes","Prada", "Valentino","Calvin klein","Balenciaga","Gucci","Lacoste","Louis Vuiton","Rushberry","Tommy","Essential Fear of God"]
                },
                womenswearBrand:{
                    logo:[
                        "./src/assets/images/BrandLogo/Womenwear/D&G.jpg",
                        "./src/assets/images/BrandLogo/Womenwear/Dior.jpg",
                        "./src/assets/images/BrandLogo/Womenwear/PRADA.jpg",
                        "./src/assets/images/BrandLogo/Womenwear/Valentino.jpg",
                        "./src/assets/images/BrandLogo/Womenwear/Alaïa.png",
                        "./src/assets/images/BrandLogo/Womenwear/Celine.png",
                        "./src/assets/images/BrandLogo/Womenwear/miu_miu.png",
                        "./src/assets/images/BrandLogo/Womenwear/Oscar de la Renta.png",
                        "./src/assets/images/BrandLogo/Womenwear/Chloé.png"
                    ],
                brand_name:["Docle & Gabbana","Dior", "Prada", "Valentino", "Alaïa", "Celine","Miu Miu", "Oscar de la Renta", "Chloé" ]
                },
                collectibleBrand:{
                    logo:[
                        "./src/assets/images/BrandLogo/CollectibleArtist/aespaBrand.jpg",
                        "./src/assets/images/BrandLogo/CollectibleArtist/newjeansBrand.jpg",
                        "./src/assets/images/BrandLogo/CollectibleArtist/lesserafim.jpg",
                        "./src/assets/images/BrandLogo/CollectibleArtist/seventeen.jpg",
                        "./src/assets/images/BrandLogo/CollectibleArtist/illit.jpg",
                        "./src/assets/images/BrandLogo/CollectibleArtist/riize.png"
                    ],
                    brand_name:["aespa","NewJeans","LESSERAFIM","SEVENTEEN","ILLIT","RIIZE"]
                },
            }
        }
    },
})
