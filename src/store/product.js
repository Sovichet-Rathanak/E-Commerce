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
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/HermesVertD-Eau/detail2.png',
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
                {
                    brand_name: "Hermés",
                    product_name: "Matte White Niloticus Crocodile",
                    price: "$145,000 Starting",
                    product_id: "HM_30P",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/HermesMatteWhiteNilo/detail2.png',
                    ],
                    description: `Hermes Matte White Niloticus Crocodile Mimalaya Birkin known as a wearable piece of art, a status symbol, and a testament to unparalleled luxury handbag. This exquisite piece is one of the most coveted and prestigious handbags in the world, a symbol of ultimate luxury and exclusivity. 
                                The interior is lined with supple leather in a matching or complementary hue, designed to protect valuables while maintaining a luxurious feel.

                                The bag is adorned with palladium or gold-plated hardware, depending on the specific model, enhancing its luxurious aesthetic. Moderate oxidation throughout the exotic skin exterior and to handles. Signature hardware elements include the turn-lock closure, Hermès-engraved padlock, and matching keys housed in a leather clochette.
                                The Himalaya Birkin is one of the rarest Hermès handbags, produced in extremely limited quantities due to the meticulous craftsmanship and scarcity of high-quality crocodile skins.`,
                    tags: ["new"], 
                    productSizes: [
                        {size: 'S', price: 145000},
                        {size: 'M', price: 175000},
                        {size: 'L', price: 200000},
                        {size: 'XL', price: 250000},
                    ]
                },
                {
                    brand_name: "Chanel",
                    product_name: "Cream White Quilted Caviar",
                    price: "$11,900 Starting",
                    product_id: "CC_25W",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/ChanelCreamWhite/detail2.png',
                    ],
                    description: `Chanel Cream White Quilted Caviar Small Classic Double Flap Bag Gold Hardware absolute masterpiece of an iconic and sophisticated piece that embodies timeless elegance and the unparalleled craftsmanship synonymous with Chanel. This exquisite piece is a treasure in the world of luxury handbags. 
                                Crafted from quilted caviar leather, the bag is renowned for its durability and textured finish, making it resistant to scratches while maintaining its luxurious appearance.
                                The interior features a second flap with a snap closure, protecting the main compartment and adding an extra layer of security.

                                Lined in burgundy leather, a signature detail of the Classic Flap, the interior includes a main compartment, a slip pocket, and a lipstick slot for practical organization.
                                The Chanel Cream White Quilted Caviar Small Classic Double Flap Bag is a timeless investment piece, celebrated for its iconic design and exceptional quality.`,
                    tags: ["new"], 
                    productSizes: [
                        {size: 'S', price: 11900},
                        {size: 'M', price: 25000},
                        {size: 'L', price: 30000},
                        {size: 'XL', price: 50000},
                    ]
                },
                {
                    brand_name: "Hermés",
                    product_name: "Gris Meyer Madame",
                    price: "$31,800 Starting",
                    product_id: "HG_24M",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/HermesGrisMeyer/detail2.png',
                    ],
                    description: `Gris Meyer Madame Birkin 30 Sellier Gold Hardware absolute masterpiece of understated elegance and classic, embodying timeless luxurious and masterful craftsmanship. 
                                This exquisite piece is a treasure in the world of luxury handbags. The interior is lined with matching soft leather, providing a luxurious feel and protecting valuables.
                                The handbag  includes a slip pocket and a zippered pocket, clochette, lock, keys, felt, dust bag and box, offering practical organization for everyday items.

                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty, and embodying the artistry and heritage of the Hermès brand.`,
                    tags: ["new"], 
                    productSizes: [
                        {size: 'S', price: 31800},
                        {size: 'M', price: 50000},
                        {size: 'L', price: 86000},
                        {size: 'XL', price: 99000},
                    ]
                },
                {
                    brand_name: "Chanel",
                    product_name: "Pink Quilted Aged",
                    price: "$8,000 Starting",
                    product_id: "CP_20Q",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/ChanelPinkQuilted/detail2.png',
                    ],
                    description: `The Chanel Pink Quilted Aged Calfskin Chain Around Single Flap Bag is a stunning and unique piece that blends Chanel’s timeless elegance with a modern, edgy twist. 
                                Designed for fashion-forward individuals, this handbag is both luxurious and versatile. 
                                
                                This bag is crafted from aged calfskin, offering a distinctive textured appearance that is both durable and stylish. 
                                The soft pink color is feminine yet bold, making it a standout piece. It exudes warmth and versatility, perfect for adding a pop of color to your outfits.
                                The bag is adorned with warm gold-tone hardware that complements the pink leather beautifully.
                                This Chanel Single Flap Bag is perfect for clients seeking a standout yet versatile accessory. Its pink hue, luxurious aged calfskin, and bold chain accents make it a statement piece that’s both timeless and contemporary. `,
                    tags: ["recommended"], 
                    productSizes: [
                        {size: 'S', price: 8000},
                        {size: 'M', price: 10000},
                        {size: 'L', price: 25000},
                        {size: 'XL', price: 40000},
                    ]
                },
                {
                    brand_name: "Chanel",
                    product_name: "Black Quilted Lambskin",
                    price: "$4,000 Starting",
                    product_id: "CB_20L",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQuilted/detail2.png',
                    ],
                    description: `The Chanel Black Quilted Lambskin Boy Bucket Bag with Aged Gold Hardware is a modern, edgy reinterpretation of Chanel's classic elegance, designed for those who love a mix of sophistication and contemporary style. This versatile handbag is perfect for clients seeking an iconic statement piece that’s both functional and chic. 
                                This bag is crafted from aged calfskin, offering a distinctive textured appearance that is both durable and stylish. The material has a slightly distressed look, adding character and a touch of vintage charm.
                                
                                The classic diamond quilting, a hallmark of Chanel, enhances the bag’s timeless appeal while adding depth and texture.
                                A unique design element, the chain detailing runs around the edges of the bag, adding a bold, contemporary touch that sets it apart from traditional Chanel styles.
                                The Chanel Black Quilted Lambskin Boy Bucket Bag is edgy reinterpretation of Chanel's classic elegance, designed for those who love a mix of sophistication and contemporary style.`,
                    tags: ["recommended"], 
                    productSizes: [
                        {size: 'S', price: 4000},
                        {size: 'M', price: 6000},
                        {size: 'L', price: 7500},
                        {size: 'XL', price: 8400},
                    ]
                },
                {
                    brand_name: "Dior",
                    product_name: "Light Blue Alligator",
                    price: "$10,000 Starting",
                    product_id: "DL_22B",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/image6.jpeg',
                    ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/DiorLightBlueAll/detail2.png',
                    ],
                    description: `The Christian Dior Light Blue Alligator Mini Lady Dior with Light Gold Hardware, 2022 is an exquisite blend of elegance, luxury, and artisanal craftsmanship. 
                                This handbag, a signature from the House of Dior, represents timeless sophistication and exclusivity, making it a cherished piece for discerning collectors and fashion enthusiasts.

                                Crafted from premium-grade alligator leather, the bag showcases a natural, glossy texture with a refined pattern unique to each piece, emphasizing its rarity and luxury.
                                The soft, serene light blue shade exudes sophistication and femininity, making it a versatile choice for both day and evening wear. This delicate color is perfect for adding a subtle touch of elegance to any outfit.
                                The interior is lined with plush suede, adding an extra layer of luxury while protecting your belongings. A small slip pocket offers convenient storage for smaller items.
                                The Christian Dior Light Blue Alligator Mini Lady Dior is more than just a handbag—it’s a wearable work of art that symbolizes prestige, elegance, and timeless style.`,
                    tags: ["recommended"], 
                    productSizes: [
                        {size: 'S', price: 10000},
                        {size: 'M', price: 12000},
                        {size: 'L', price: 30000},
                        {size: 'XL', price: 55000},
                    ]
                },
                {
                    brand_name: "Louis Vuitton",
                    product_name: "Virgil Abloh Yellow",
                    price: "$7,300 Starting",
                    product_id: "LV_50A",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/image6.jpeg',
                        
                         ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/LVVirgilAbloh/detail2.png',
                    ],
                    description: `The Louis Vuitton Virgil Abloh Yellow Leather Everyday LV Keepall Bandoulière 50 with Silver Hardware is a bold, contemporary reinterpretation of Louis Vuitton's iconic travel bag. 
                                Designed by the late Virgil Abloh, this standout piece showcases his revolutionary approach to luxury, blending timeless craftsmanship with vibrant, streetwear-inspired aesthetics.
                                
                                The bag is adorned with a subtle embossed LV Monogram design, giving it a distinctive yet understated texture while paying homage to Louis Vuitton’s heritage.            
                                The polished silver hardware contrasts beautifully with the bold yellow leather, adding a contemporary and sleek touch.
                                he interior is lined with a soft, durable fabric in a complementary tone, ensuring practicality and style.
                                The Louis Vuitton Virgil Abloh Yellow is a perfect fusion of practicality, bold design, and luxury. Its standout color, spacious functionality, and unique branding make it ideal for those who want to express their style through their accessories.`,
                    tags: ["recommended"], 
                    productSizes: [
                        {size: 'S', price: 7300},
                        {size: 'M', price: 8500},
                        {size: 'L', price: 10000},
                        {size: 'XL', price: 20000},
                    ]
                },
                {
                    brand_name: "Hermés",
                    product_name: "Ardoise & Vert Peppermint",
                    price: "$38,000 Starting",
                    product_id: "HA_25V",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/HermesArdoise/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/image6.jpeg',
                         ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/HermesArdoise/detail2.png',
                    ],
                    description: `The Hermès Ardoise and Vert Peppermint Epsom and Black Tadelakt Casaque Étoilée Kelly is a striking masterpiece that seamlessly blends timeless Hermès craftsmanship with modern artistic flair. This handbag embodies elegance, exclusivity, and impeccable attention to detail. 
                                The main body of the bag is crafted from Epsom leather, known for its lightweight durability and fine-grained texture. This leather holds its shape beautifully, making it ideal for the structured Sellier style.
                                
                                The external stitching of the Sellier style gives the bag a clean and angular silhouette, emphasizing its architectural beauty.
                                The iconic Hermès turn-lock closure, engraved with “Hermès Paris,” secures the bag while serving as a hallmark of the brand’s exquisite design.
                                The interior is lined with supple leather, providing a luxurious finish. It features a slip pocket and a zipped pocket for added organization of modern luxury.`,
                    tags: ["collab"], 
                    productSizes: [
                        {size: 'S', price: 38000},
                        {size: 'M', price: 44000},
                        {size: 'L', price: 70000},
                        {size: 'XL', price: 90000},
                    ]
                },
                {
                    brand_name: "Goyard",
                    product_name: "Green Goyardine Canvas",
                    price: "$4,550 Starting",
                    product_id: "GG_23G",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/image6.jpeg',
                         ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/GoyardGreenGoyardine/detail2.png',
                    ],
                    description: `The Goyard Green Goyardine Canvas and Chevroches Calfskin Saïgon Souple Mini Bag is a chic and iconic piece that merges Goyard’s rich heritage with contemporary design. 
                                Combining exceptional craftsmanship with practicality, this mini bag is a perfect companion for modern lifestyles.
                                The bag features the iconic Goyardine canvas, a lightweight and durable material adorned with the signature chevron motif. This hand-painted pattern is a hallmark of Goyard’s legacy, representing unparalleled craftsmanship and sophistication.
                                
                                The structured accents and trims are crafted from luxurious Chevroches calfskin, a smooth, supple leather known for its refined texture and durability.
                                The structured leather top handle allows for hand-held carrying, adding a polished and classic touch.
                                The Goyard Green Goyardine Canvas and Chevroches Calfskin Saïgon Souple Mini Bag is a symbol of understated luxury and timeless design.`,
                    tags: ["collab"], 
                    productSizes: [
                        {size: 'S', price: 4550},
                        {size: 'M', price: 6000},
                        {size: 'L', price: 7300},
                        {size: 'XL', price: 8700},
                    ]
                },
                {
                    brand_name: "Louis Vuitton",
                    product_name: "Brown Monogram Coated",
                    price: "$4,000 Starting",
                    product_id: "LVB_21M",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/image6.jpeg',
                         ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/LVBrownMonogram/detail2.png',
                    ],
                    description: `Brown Monogram Coated Canvas Passy Handbag is an exquisite blend of timeless craftsmanship and modern elegance. Crafted from the iconic brown monogram-coated canvas, this piece is a celebration of Louis Vuitton's heritage, instantly recognizable and beloved by fashion enthusiasts worldwide.
                                The handbag showcases Louis Vuitton's iconic monogram print on durable, coated canvas, ensuring longevity and a sophisticated look.
                                
                                Accented with luxurious gold hardware, the bag adds a touch of opulence, perfectly complementing the monogram design.
                                Lined with a soft, premium fabric, the bag includes multiple interior pockets, ensuring organization and easy access to smaller items.
                                This Louis Vuitton Passy Handbag is more than just an accessory; it’s an investment in timeless luxury.`,
                    tags: ["collab"], 
                    productSizes: [
                        {size: 'S', price: 4000},
                        {size: 'M', price: 5000},
                        {size: 'L', price: 6200},
                        {size: 'XL', price: 8000},
                    ]
                },
                {
                    brand_name: "Chanel",
                    product_name: "Black Quilted Lambskin",
                    price: "$7,100 Starting",
                    product_id: "CB_24L",
                    product_type: "accessories",
                    product_status: "Available For Pre-order",
                    thumbNail: "/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image1.jpeg",
                    productImages: [
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image1.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image2.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image3.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image4.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image5.jpeg',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/image6.jpeg',
                         ],
                    detailImages:[
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/detail1.png',
                        '/src/assets/images/DetailImage/Accessories/ChanelBlackQLamb/detail2.png',
                    ],
                    description: `Chanel Black Quilted Lambskin Pearl Crush Flap Bag is an embodiment of the timeless elegance and innovative design that Chanel is renowned for. This exquisite piece, part of Chanel's 2024 collection, combines iconic details with a modern twist, making it a must-have addition for fashion connoisseurs.
                                It's crafted from sumptuous lambskin leather, the bag features Chanel's signature diamond quilting pattern, exuding sophistication and timeless charm.
                    
                                The standout feature of this bag is its adjustable chain strap adorned with the "Pearl Crush" mechanism—a brushed gold spherical bead that slides along the chain, allowing for easy length adjustments.
                                The flap opens to a sleek and well-organized interior, lined in a matching leather or fabric. It includes a slip pocket for essentials like cards or keys.
                                The Pearl Crush Flap Bag is a reimagined classic, blending Chanel's heritage with a touch of modern innovation, making it a perfect statement piece for any wardrobe.
                                This Chanel Black Quilted Lambskin Pearl Crush Flap Bag is a handbag—it's a statement of sophistication, luxury, and impeccable taste. Whether you're looking to elevate your personal style or invest in a timeless piece, this bag is a flawless choice.`,
                    tags: ["collab"], 
                    productSizes: [
                        {size: 'S', price: 7100},
                        {size: 'M', price: 8000},
                        {size: 'L', price: 9400},
                        {size: 'XL', price: 12000},
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
            womanswears: [
              {
                brand_name: "Bottega Veneta",
                product_name: "Adalyn A-line Collared Neck Twill Mini Dress",
                price: '$299',
                product_type: "womenswear",
                product_id: "adalyn-a-line-collared-neck-twill-mini-dress",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes1/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes1/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes1/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes1/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes1/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes1/image5.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes1/detail1.png',
                    '/src/assets/images/DetailImage/Womenswears/clothes1/detail2.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "S", price: 299},
                        {size: "M", price: 299},
                        {size: "L", price: 299},
                        {size: "XL", price: 299},
                        {size: "XXL", price: 299},
                    ]
              },
              {
                brand_name: "Miu Miu",
                product_name: "Jacquard knit vest & arm warmers",
                price: '$199',
                product_type: "womenswear",
                product_id: "jacquard-knit-vast",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes3/image6.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes3/image8.jpg',

                ],
                detailImages:[],
                description: `This outfit features a cozy and stylish oversized white cable-knit sweater with a deep V-neckline, combining comfort and elegance. The sweater is adorned with a small black metal embellishment near the chest, adding a modern and edgy touch to the classic knit design. It also includes contrasting black stripe details on the sleeves, creating a sporty yet chic vibe. Paired with a neutral-toned mini skirt, this ensemble balances warmth and femininity, making it perfect for casual or semi-formal settings.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "S", price: 199},
                        {size: "M", price: 199},
                        {size: "L", price: 199},
                        {size: "XL", price: 199},
                        {size: "XXL", price: 199},
                    ]
              },
              {
                brand_name: "Alaïa",
                product_name: "Bow High-end Waist Mid-length Cape Woolen Coat",
                price: '$199',
                product_type: "womenswear",
                product_id: "bow-high-end-waist-mid-length-cap-woolen-coat",
                product_status: "Available For Pre-order",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes16/image9.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image9.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image10.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes16/detail1.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["new"],
                    productSizes: [
                        {size: "S", price: 199},
                        {size: "M", price: 199},
                        {size: "L", price: 199},
                        {size: "XL", price: 199},
                        {size: "XXL", price: 199},
                    ]
              },
              {
                brand_name: "Oscar de la Renta",
                product_name: "Magot drapping off shoulder pencil dress",
                price: '$99',
                product_type: "womenswear",
                product_id: "drapping-off-shoulder-dress",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image7.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes9/detail1.jpg',
                ],
                description: ``,
                    tags: ["new"],
                    productSizes: [
                        {size: "S", price: 99},
                        {size: "M", price: 99},
                        {size: "L", price: 99},
                        {size: "XL", price: 99},
                        {size: "XXL", price: 99},
                    ]
              },
              {
                brand_name: "Valentino",
                product_name: "Unique Super Good-looking Old Leather Jacket",
                price: '$139',
                product_type: "womenswear",
                product_id: "leather-jacket",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes7/image3.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image7.jpg',

                ],
                detailImages:[

                ],
                description: `This outfit combines edgy and vintage vibes with an oversized distressed black leather jacket featuring bold stitching, utility pockets, and straps for an industrial feel. It's paired with a black pleated skirt for a feminine-grunge touch, accessorized with layers and high boots, creating a bold, rebellious aesthetic.`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "S", price: 699},
                        {size: "M", price: 699},
                        {size: "L", price: 699},
                        {size: "XL", price: 699},
                        {size: "XXL", price: 699},
                    ]
              },
              {
                brand_name: "Carolina Herrera",
                product_name: "White Waist Dress",
                price: '$299',
                product_type: "womenswear",
                product_id: "white-waist-dress",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes5/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image9.jpg',

                ],
                detailImages:['/src/assets/images/DetailImage/Womenswears/clothes5/image1.jpg',],
                description: `This white dress exudes elegance and vintage charm with its Peter Pan collar, soft bow tie, sheer sleeves, and lace accents. The flowing A-line silhouette adds grace, while subtle accessories, a black chain-strap handbag, and sleek black shoes complete the timeless look, perfect for formal or romantic occasions.`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "S", price: 299},
                        {size: "M", price: 299},
                        {size: "L", price: 299},
                        {size: "XL", price: 299},
                        {size: "XXL", price: 299},
                    ]
              },
              {
                brand_name: "Docle & Gabbana",
                product_name: "Skyblue Stand Collar Wool Long Coat",
                price: '$119',
                product_type: "womenswear",
                product_id: "skyblue-long-coat",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes8/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image9.jpg',


                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes8/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/detail2.jpg',
                ],
                description: `This minimalistic outfit showcases a sky-blue long coat with a high collar, subtle buttons, and oversized pockets for a sophisticated touch. Paired with straight dark trousers, a black chain-strap handbag, and a tucked-in scarf, it balances warmth and elegance, perfect for a polished winter look.`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "S", price: 119},
                        {size: "M", price: 119},
                        {size: "L", price: 119},
                        {size: "XL", price: 119},
                        {size: "XXL", price: 119},
                    ]
              },
              {
                brand_name: "Dior",
                product_name: "Light Yellow Halter Neck Shirt/Shorts",
                price: '$269',
                product_type: "womenswear",
                product_id: "light-yellow-halter-neck-shirt-shorts",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes10/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/image7.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes10/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes10/detail2.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["recommended"],
                    productSizes: [
                        {size: "S", price: 269},
                        {size: "M", price: 269},
                        {size: "L", price: 269},
                        {size: "XL", price: 269},
                        {size: "XXL", price: 269},
                    ]
              },
              {
                brand_name: "Prada",
                product_name: "Soft fur short duffle girly jacket & pleated mini skirt",
                price: '$269',
                product_type: "womenswear",
                product_id: "duffle-girly-jacket-pleated-mini-skirt",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes11/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes11/image9.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes11/detail1.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "S", price: 269},
                        {size: "M", price: 269},
                        {size: "L", price: 269},
                        {size: "XL", price: 269},
                        {size: "XXL", price: 699},
                    ]
              },
              {
                brand_name: "Valentino",
                product_name: "Waist see-through rolled skirt style camisole dress",
                price: '$119',
                product_type: "womenswear",
                product_id: "Waist see-through rolled skirt style camisole dress",
                product_status: "Available For Pre-order",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes12/image2.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image9.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes12/image10.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes12/detail1.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "S", price: 119},
                        {size: "M", price: 119},
                        {size: "L", price: 119},
                        {size: "XL", price: 119},
                        {size: "XXL", price: 119},
                    ]
              },
              {
                brand_name: "Miu Miu",
                product_name: "White Nine-tailed Fur Ball Knitted Cape",
                price: '$169',
                product_type: "womenswear",
                product_id: "white-nie-tailed-fur-ball-knitted-cape",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes13/image3.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes13/image9.jpg',

                ],
                detailImages:[],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "S", price: 169},
                        {size: "M", price: 169},
                        {size: "L", price: 169},
                        {size: "XL", price: 169},
                        {size: "XXL", price: 169},
                    ]
              },
              {
                brand_name: "Alaïa",
                product_name: "First Love Overture Double Princess Dress/Fur Coat",
                price: '$139',
                product_type: "womenswear",
                product_id: "princess-dress",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes14/image3.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes14/image6.jpg',

                ],

                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                    tags: ["collab"],
                    productSizes: [
                        {size: "S", price: 139},
                        {size: "M", price: 139},
                        {size: "L", price: 139},
                        {size: "XL", price: 139},
                        {size: "XXL", price: 139},
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
