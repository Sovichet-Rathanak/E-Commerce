import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state:() => ({
        productsByCategory: {
            sneakers: [
                {
                    brand_name: "Air Jordan 1 Retro High",
                    product_name: "Yellow Ochre",
                    price: "$133 Starting",
                    product_id: "AJ1_YLO",
                    product_type: "sneaker",
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
                    description: `Step into the perfect blend of classic and contemporary with this remastered Air Jordan 1. The bold interplay of Yellow Ochre and deep black creates a striking contrast against the smooth, tumbled Sail leather, delivering a look that's as clean as it is sophisticated. 
                                Every detail has been thoughtfully refined, from the premium materials to the vintage-inspired branding, evoking a sense of timelessness. This is where heritage meets innovation—a seamless 
                                fusion of old-school charm and modern design. With a finish as smooth as MJ's signature fadeaway, this AJ1 stands as a true testament to the legacy of greatness, designed for those who appreciate
                                both tradition and bold, fresh style.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "US 4", price: 177},
                        {size: "US 5", price: 142},
                        {size: "US 6", price: 148},
                        {size: "US 7", price: 181},
                        {size: "US 8", price: 133},
                        {size: "US 9", price: 195},
                        {size: "US 10", price: 206},
                        {size: "US 11", price: 286},
                        {size: "US 12", price: 245},
                        {size: "US 13", price: 216},
                        {size: "US 14", price: 209},
                    ]
                },
                {
                    brand_name: "SB Dunk Low",
                    product_name: "Yuto x Wolf Grey",
                    price: "$201 Starting",
                    product_id: "SBD_Yuto",
                    product_type: "sneaker",
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
                    tags: ["new"],
                    productSizes: [
                        {size: "US 4", price: 201},
                        {size: "US 5", price: 211},
                        {size: "US 6", price: 263},
                        {size: "US 7", price: 276},
                        {size: "US 8", price: 274},
                        {size: "US 9", price: 311},
                        {size: "US 10", price: 319},
                        {size: "US 11", price: 363},
                        {size: "US 12", price: 341},
                        {size: "US 13", price: 399},
                        {size: "US 14", price: 385},
                    ]
                },
                {
                    brand_name: "Air Jordan 1 High OG",
                    product_name: "Spiderman Next Chapter",
                    price: '$94 Starting',
                    product_type: "sneaker",
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
                    tags: ["new","recommended", "collab"],
                    productSizes: [
                        {size: "US 4", price: 177},
                        {size: "US 5", price: 142},
                        {size: "US 6", price: 148},
                        {size: "US 7", price: 181},
                        {size: "US 8", price: 133},
                        {size: "US 9", price: 195},
                        {size: "US 10", price: 206},
                        {size: "US 11", price: 286},
                        {size: "US 12", price: 245},
                        {size: "US 13", price: 216},
                        {size: "US 14", price: 209},
                    ]
                },
                {
                    brand_name: "New Balance",
                    product_name: "Nimbus Cloud 574 Core",
                    price: "$60 Starting",
                    product_type: "sneaker",
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
                    description: `The most New Balance shoe ever says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform 
                                for revolutionary technology, or as a premium materials showcase. This unassuming, unpretentious versatility is exactly what launched the 574 into the ranks of all-time greats. 

                                As hybrid road/trail design built on a wider last than the previous generation’s narrow racing silhouettes, the 574 offered a uniquely versatile mix of new, different, uncomplicated, rugged, durable, and 
                                comfortable that was adopted as a closet staple across the globe. That’s why today, the 574 is synonymous with the boundary defying New Balance style, and worn by anyone. With the 574 for kids, the same 
                                style inspiration is pared down for growing feet.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "US 4", price: 60},
                        {size: "US 5", price: 64},
                        {size: "US 6", price: 71},
                        {size: "US 7", price: 71},
                        {size: "US 8", price: 72},
                        {size: "US 9", price: 73},
                        {size: "US 10", price: 72},
                        {size: "US 11", price: 82},
                        {size: "US 12", price: 83},    
                        {size: "US 13", price: 82},
                        {size: "US 14", price: 88},
                    ]
                },
            ],
            accessories: [
                {
                    brand_name: "Hermés",
                    product_name: "Vert D'eau Birkins",
                    price: "$23,000 Starting",
                    product_id: "HB_40E",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/image6.jpeg',
                    ],
                    detailImages:[

                    ],
                    description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.

                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                    tags: ["new"],
                    productSizes: [
                        {size: 'S', price: 23000},
                        {size: 'M', price: 25000},
                        {size: 'L', price: 30000},
                        {size: 'XL', price: 100000},
                    ]
                },
            ],
            collectibles: [
                {
                    brand_name: "NewJeans",
                    product_name: "NewJeans 1st EP 'New Jeans' Weverse Albums ver.",
                    price: "$8.93 Starting",
                    product_id: "NewJeans_EP1",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/NewJeans/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/NewJeans/image1.png',
                        '/src/assets/images/DetailImage/Collectibles/NewJeans/image2.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/NewJeans/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/NewJeans/image4.png',
                        '/src/assets/images/DetailImage/Collectibles/NewJeans/image5.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["new"],
                    productSizes: [
                        {size: "Normal", price: 8.93},
                        {size: "Rare", price: 12},
                        {size: "Premium", price: 25},
                    ]
                },
                {
                    brand_name: "LESSERAFIM",
                    product_name: "4th Mini Album 'CRAZY' (Set)",
                    price: "$48.21 Starting",
                    product_id: "Lesserafim_Crazy",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/Lesserafim/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/Lesserafim/image1.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/Lesserafim/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/Lesserafim/image4.png',
                    ],
                    description: `Not many can claim to be the first. Yuto Horigome is one of the few. Crafted to the champion's specs, the Nike SB Dunk Low x Yuto brings you a skate-worthy design that taps into the places where he first 
                                developed his craft. Delivering the gold standard of skate shoes (and marked with Yuto's family crest), it lets you glide between casually spinning tricks on vert and going big in the streets—just like Yuto.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "Normal", price: 48.21},
                        {size: "Rare", price: 59.5},
                        {size: "Premium", price: 80},
                    ]
                },
                {
                    brand_name: "ILLIT",
                    product_name: "2nd Mini Album 'I'LL LIKE YOU' (Random)",
                    price: '$15.82 Starting',
                    product_type: "collectible",
                    product_id: "ILLT_I'll like you",
                    product_status: "Available Instock",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/Illit/image1.png",
                    productImages: [
                        "/src/assets/images/DetailImage/Collectibles/Illit/image1.png",
                        "/src/assets/images/DetailImage/Collectibles/Illit/image6.png",
                    ],
                    detailImages:[
                        "/src/assets/images/DetailImage/Collectibles/Illit/image2.png",
                        "/src/assets/images/DetailImage/Collectibles/Illit/image3.png",
                        "/src/assets/images/DetailImage/Collectibles/Illit/image4.png",
                    ],
                    description: `You don't need a cape to take flight—just your AJ1s. You know, the ones seen on Miles in "Spider-Man: Across the Spider-Verse", exclusively in cinemas. This fresh take on the iconic Chicago 
                                colourway boasts a mix of materials, including lustrous leather and soft suede. The world is waiting, so step on in.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "Normal", price: 15.82},
                        {size: "Rare", price: 28.95},
                        {size: "Premium", price: 35.25},
                    ]
                },
                {
                    brand_name: "SEVENTEEN",
                    product_name: "12th Mini Album 'SPILL THE FEELS' (Set)",
                    price: "$50.92 Starting",
                    product_type: "collectible",
                    product_id: "SEVENTEEN_12TH Mini Album",
                    product_status: "Available Instock",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/Seventeen/image1.png",
                    productImages: [
                        "/src/assets/images/DetailImage/Collectibles/Seventeen/image1.png",            
                    ],
                    detailImages:[
                        "/src/assets/images/DetailImage/Collectibles/Seventeen/image2.png",
                        "/src/assets/images/DetailImage/Collectibles/Seventeen/image3.png",
                        "/src/assets/images/DetailImage/Collectibles/Seventeen/image4.png",
                        "/src/assets/images/DetailImage/Collectibles/Seventeen/image5.png",
                    ],
                    description: `The most New Balance shoe ever says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform 
                                for revolutionary technology, or as a premium materials showcase. This unassuming, unpretentious versatility is exactly what launched the 574 into the ranks of all-time greats. 

                                As hybrid road/trail design built on a wider last than the previous generation’s narrow racing silhouettes, the 574 offered a uniquely versatile mix of new, different, uncomplicated, rugged, durable, and 
                                comfortable that was adopted as a closet staple across the globe. That’s why today, the 574 is synonymous with the boundary defying New Balance style, and worn by anyone. With the 574 for kids, the same 
                                style inspiration is pared down for growing feet.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "Normal", price: 50.92},
                        {size: "Rare", price: 64},
                        {size: "Premium", price: 71},
                    ]
                },
                {
                    brand_name: "Irene",
                    product_name: "The 1st Mini Album [Like A Flower] (Mirror Ver.)",
                    price: "$24.35 Starting",
                    product_id: "irene_1st_mini_album",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/irene/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/irene/image1.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/irene/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/irene/image3.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "Normal", price: 24.35},
                        {size: "Rare", price: 35},
                        {size: "Premium", price: 53.60},
                    ]
                },
                {
                    brand_name: "gfriend",
                    product_name: "[OFFLINE FANSIGN] Special Album 'Season of Memories'",
                    price: "$15.41 Starting",
                    product_id: "gfriend_fansign",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/gfriend/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/gfriend/image1.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/gfriend/image2.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "Normal", price: 15.41},
                        {size: "Rare", price: 22.60},
                        {size: "Premium", price: 35.93},
                    ]
                },
                {
                    brand_name: "BAEKHYUN",
                    product_name: "DICON VOLUME N°25 BAEKHYUN (SET)",
                    price: "$126.93 Starting",
                    product_id: "baek_dicon",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/baekhyun/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/baekhyun/image1.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/baekhyun/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/baekhyun/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/baekhyun/image4.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "Normal", price: 126.93},
                        {size: "Rare", price: 152},
                        {size: "Premium", price: 188},
                    ]
                },
                {
                    brand_name: "TWS",
                    product_name: "OFFICIAL LIGHT STICK",
                    price: "$40.18 Starting",
                    product_id: "TWS_lightstick",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/TWS/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/TWS/image1.png',
                        '/src/assets/images/DetailImage/Collectibles/TWS/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/TWS/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/TWS/image4.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/TWS/image6.png',
                        '/src/assets/images/DetailImage/Collectibles/TWS/image7.png',
                        '/src/assets/images/DetailImage/Collectibles/TWS/image5.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "Normal", price: 40.18},
                        {size: "Rare", price: 60.92},
                        {size: "Premium", price: 80.25},
                    ]
                },
                {
                    brand_name: "KATESEYE",
                    product_name: "SIS (Soft Is Strong) Set",
                    price: "$29.19 Starting",
                    product_id: "KATESEYE_SIS",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/katseye/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/katseye/image1.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/katseye/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/katseye/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/katseye/image4.png',
                        '/src/assets/images/DetailImage/Collectibles/katseye/image6.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "Normal", price: 29.19},
                        {size: "Rare", price: 32},
                        {size: "Premium", price: 50},
                    ]
                },
                {
                    brand_name: "LESSERAFIM",
                    product_name: "[LE SSERAFIM x JANSPORT] Highlands Mini Pack",
                    price: "$65.78 Starting",
                    product_id: "Lessera_Jansport",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/lesseraCollab/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image1.png',
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image4.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image6.png',
                        '/src/assets/images/DetailImage/Collectibles/lesseraCollab/image7.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "Normal", price: 65.78},
                        {size: "Rare", price: 89},
                        {size: "Premium", price: 94},
                    ]
                },
                {
                    brand_name: "NewJeans",
                    product_name: "NewJeans X MURAKAMI PLUSH KEYRING",
                    price: "$24.60 Starting",
                    product_id: "NewJeans_MURAKAMI",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/jeanzCollab/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image1.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image4.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image5.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image6.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image7.png',

                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanzCollab/image8.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "Normal", price: 24.60},
                        {size: "Rare", price: 45},
                        {size: "Premium", price: 67},
                    ]
                },
                {
                    brand_name: "NewJeans",
                    product_name: "NewJeans Light Stick",
                    price: "$40.18 Starting",
                    product_id: "NewJeans_lightstick",
                    product_type: "collectible",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Collectibles/jeanz/image1.png",
                    productImages: [
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image1.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image3.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image5.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image6.png',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image2.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image4.png',
                        '/src/assets/images/DetailImage/Collectibles/jeanz/image7.png',
                    ],
                    description: `NewJeans' debut album blends fresh sounds with bold energy, 
                    delivering a mix of catchy pop, R&B, and electronic influences. With standout 
                    tracks that showcase the group's unique style, the album captures their youthful 
                    spirit and musical versatility, making a powerful statement in the K-pop scene. 
                    A must-listen for fans of innovative and genre-defying music!`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "Normal", price: 40.18},
                        {size: "Rare", price: 70.98},
                        {size: "Premium", price: 99.99},
                    ]
                },
            ],
        },
        selectedProduct: null,
        selectedSize: null,
    }),
    getters:{
        getProductsByTag(state) {
            return function(tag) {
                const allProducts = Object.values(state.productsByCategory).flat(); //get all the array within or productByCategory object and store it as one array
                return allProducts.filter(product => product.tags?.includes(tag)).slice(0, 4); //filter and only display 4
            };
        },

        getProductByType(state){
            return function(type){
                const allProducts = Object.values(state.productsByCategory).flat();
                return allProducts.filter(product => product.type?.includes(type));
            }
        },

        getProductByTypeAndTag(state) {
            return function (tag, type) {
                const allProducts = Object.values(state.productsByCategory).flat();
                console.log('All Products:', allProducts);

                const filteredProducts = allProducts.filter(function (product) {
                    return product.tags.includes(tag) && product.product_type == type;
                });
                console.log('Filtered Products:', filteredProducts);
                return filteredProducts;
            }
        },
    },
    actions: {
        selectedProduct(category, productId) {
            this.selectedProduct = this.products[category]?.find(
                (product) => product.product_id === productId
            );
        },
        selectSize(size) {
            this.selectedSize = size;
        },
    },    
})
