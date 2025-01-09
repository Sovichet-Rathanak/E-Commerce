import { defineStore } from "pinia";

export const useAccessoryStore = defineStore("accessoryStore",{
    state: () => ({
        products: [
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
                    { size: "S", price: 23000 },
                    { size: "M", price: 25000 },
                    { size: "L", price: 30000 },
                    { size: "XL", price: 100000 },
                ],
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
    })
})