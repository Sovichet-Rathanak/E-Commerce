import { defineStore } from "pinia";

export const useWomenswearStore = defineStore("womenswearStore",{
    state: () => ({
        products: [
            {
                category: "womenswear",
                brand_name: "Celine",
                product_name: "Blue Shoulder Hook And Loop Knit Sweater",
                price: '$299',
                product_type: "womenswear",
                product_id: "Blue-Shoulder-Hook-And-Loop-Knit-Sweater",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes2/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/image7.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail3.jpg',
                ],
                description: `A lightweight lavender knit sweater with a stylish open-weave design, adding a soft and airy feel. Its relaxed fit and sheer texture make it perfect for layering over delicate dresses or tops, creating an effortlessly chic look.`,
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
                category: "womenswear",
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
                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes2/detail3.jpg',
                ],
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
                category: "Womenswear",
                brand_name: "Alaïa",
                product_name: "Bow High-end Waist Mid-length Cape Woolen Coat",
                price: '$499',
                product_type: "womenswear",
                product_id: "bow-high-end-waist-mid-length-cap-woolen-coat",
                product_status: "Available For Pre-order",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes16/image9.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image9.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/image4.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes16/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/detail2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes16/detail2.jpg',
                ],
                description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
                creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
                a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
                the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
                this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
                tags: ["new"],
                productSizes: [
                    {size: "S", price: 499},
                    {size: "M", price: 499},
                    {size: "L", price: 499},
                    {size: "XL", price: 499},
                    {size: "XXL", price: 499},
                    {size: "S", price: 499},
                    {size: "M", price: 499},
                    {size: "L", price: 499},
                    {size: "XL", price: 499},
                    {size: "XXL", price: 499},
                ]
            },
            {
                category: "womenswear",
                brand_name: "Valentino",
                product_name: "Unique Super Good-looking Old Leather Jacket",
                price: '$439',
                product_type: "womenswear",
                product_id: "leather-jacket",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes7/image3.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes7/image7.jpg',
                ],
                tags: ["new"],
                productSizes: [
                    {size: "S", price: 439},
                    {size: "M", price: 439},
                    {size: "L", price: 439},
                    {size: "XL", price: 439},
                    {size: "XXL", price: 439},
                ]
            },
            {
                category: "womenswear",
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
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image7.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image8.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes5/image9.jpg',

                ],
                detailImages:['/src/assets/images/DetailImage/Womenswears/clothes5/detail.jpg',],
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
                category: "womenswear",
                brand_name: "Docle & Gabbana",
                product_name: "Skyblue Stand Collar Wool Long Coat",
                price: '$119',
                product_type: "womenswear",
                product_id: "skyblue-long-coat",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes8/image6.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image5.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes8/image6.jpg',
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
                category: "womenswear",
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
              category: "womenswear",
              brand_name: "Oscar de la Renta",
              product_name: "Light Blue Knit Cardigan",
              price: '$299',
              product_type: "womenswear",
              product_id: "light-blue-knit-cardigan",
              product_status: "Available Instock",
              thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg",
              productImages: [
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image3.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image2.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image6.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image7.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/detail2.jpg',

              ],
              detailImages:[
                  '/src/assets/images/DetailImage/Womenswears/clothes9/detail1.jpg',
              ],
              description: `A cozy light blue knit cardigan featuring delicate openwork patterns and charming bow accents on the pockets. Its soft, oversized design adds a touch of elegance and warmth, perfect for a casual or semi-formal outfit`,
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
              category: "womenswear",
              brand_name: "Oscar de la Renta",
              product_name: "Light Blue Knit Cardigan",
              price: '$299',
              product_type: "womenswear",
              product_id: "light-blue-knit-cardigan",
              product_status: "Available Instock",
              thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg",
              productImages: [
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image3.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image2.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image6.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/image7.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes9/detail2.jpg',

              ],
              detailImages:[
                  '/src/assets/images/DetailImage/Womenswears/clothes9/detail1.jpg',
              ],
              description: `A cozy light blue knit cardigan featuring delicate openwork patterns and charming bow accents on the pockets. Its soft, oversized design adds a touch of elegance and warmth, perfect for a casual or semi-formal outfit`,
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
            category: "womenswear",
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
                '/src/assets/images/DetailImage/Womenswears/clothes11/image8.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes11/image10.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes11/image10.jpg',

            ],
            detailImages:[
                '/src/assets/images/DetailImage/Womenswears/clothes11/detail1.jpg',
            ],
            description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
            creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
            a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
            the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
            this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
            tags: ["new", "recommended", "collab"],
                productSizes: [
                    {size: "S", price: 269},
                    {size: "M", price: 269},
                    {size: "L", price: 269},
                    {size: "XL", price: 269},
                    {size: "XXL", price: 699},
                ]
            },
            {
            category: "womenswear",
            brand_name: "Valentino",
            product_name: "Waist see-through rolled skirt style camisole dress",
            price: '$119',
            product_type: "womenswear",
            product_id: "Waist see-through rolled skirt style camisole dress",
            product_status: "Available For Pre-order",
            thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes12/image2.jpg",
            productImages: [
                '/src/assets/images/DetailImage/Womenswears/clothes12/image1.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image3.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image4.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image1.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image3.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image4.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes12/image2.jpg',
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
            tags: ["new", "recommended", "collab"],
                productSizes: [
                    {size: "S", price: 119},
                    {size: "M", price: 119},
                    {size: "L", price: 119},
                    {size: "XL", price: 119},
                    {size: "XXL", price: 119},
                ]
            },
            {
            category: "womenswear",
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
                '/src/assets/images/DetailImage/Womenswears/clothes13/image3.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes13/image5.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes13/image7.jpg',
                '/src/assets/images/DetailImage/Womenswears/clothes13/image8.jpg',

            ],
            detailImages:['/src/assets/images/DetailImage/Womenswears/clothes13/image9.jpg',],
            description: `This outfit features a sophisticated black dress with a polished and elegant design. The dress is accented by a sharp white pointed collar,
            creating a striking contrast against the black fabric and adding a formal touch. The fitted bodice enhances the silhouette, while the pleated skirt introduces
            a subtle yet stylish volume, blending refinement with a playful edge. Decorative flap-style pockets near the waist provide a tailored detail, contributing to
            the dress's structured appearance. The long sleeves maintain a sleek and modest look, perfect for professional or formal settings. Paired with a chic black handbag,
            this ensemble exudes timeless elegance and is ideal for occasions that demand a classy and polished style.`,
            tags: ["new", "recommended", "collab"],
                productSizes: [
                    {size: "S", price: 169},
                    {size: "M", price: 169},
                    {size: "L", price: 169},
                    {size: "XL", price: 169},
                    {size: "XXL", price: 169},
                ]
            },
            {
            category: "womenswear",
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
            tags: ["new", "recommended", "collab"],
                productSizes: [
                    {size: "S", price: 139},
                    {size: "M", price: 139},
                    {size: "L", price: 139},
                    {size: "XL", price: 139},
                    {size: "XXL", price: 139},
                ]
            },

            {
              category: "womenswear",
              brand_name: "Celine",
              product_name: "Blue Shoulder Hook And Loop Knit Sweater",
              price: '$299',
              product_type: "womenswear",
              product_id: "Blue-Shoulder-Hook-And-Loop-Knit-Sweater",
              product_status: "Available Instock",
              thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes2/image4.jpg",
              productImages: [
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image4.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image1.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image2.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image3.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image5.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image6.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/image7.jpg',

              ],
              detailImages:[
                  '/src/assets/images/DetailImage/Womenswears/clothes2/detail1.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/detail2.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes2/detail3.jpg',
              ],
              description: `A lightweight lavender knit sweater with a stylish open-weave design, adding a soft and airy feel. Its relaxed fit and sheer texture make it perfect for layering over delicate dresses or tops, creating an effortlessly chic look.`,
              tags: ["recommended", "collab"],
                  productSizes: [
                      {size: "S", price: 299},
                      {size: "M", price: 299},
                      {size: "L", price: 299},
                      {size: "XL", price: 299},
                      {size: "XXL", price: 299},
                  ]
            },
            {
              category: "womenswear",
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

              ],
              detailImages:[],
              description: `This outfit features a cozy and stylish oversized white cable-knit sweater with a deep V-neckline, combining comfort and elegance. The sweater is adorned with a small black metal embellishment near the chest, adding a modern and edgy touch to the classic knit design. It also includes contrasting black stripe details on the sleeves, creating a sporty yet chic vibe. Paired with a neutral-toned mini skirt, this ensemble balances warmth and femininity, making it perfect for casual or semi-formal settings.`,
              tags: ["recommended", "collab"],
                  productSizes: [
                      {size: "S", price: 199},
                      {size: "M", price: 199},
                      {size: "L", price: 199},
                      {size: "XL", price: 199},
                      {size: "XXL", price: 199},
                  ]
            },
            {
              category: "Womenswear",
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
              tags: ["recommended", "collab"],
                  productSizes: [
                      {size: "S", price: 199},
                      {size: "M", price: 199},
                      {size: "L", price: 199},
                      {size: "XL", price: 199},
                      {size: "XXL", price: 199},
                  ]
            },
            {
                category: "womenswear",
                brand_name: "Valentino",
                product_name: "Unique Super Good-looking Old Leather Jacket",
                price: '$439',
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
                tags: ["recommended", "collab"],
                    productSizes: [
                        {size: "S", price: 439},
                        {size: "M", price: 439},
                        {size: "L", price: 439},
                        {size: "XL", price: 439},
                        {size: "XXL", price: 439},
                    ]
            },

            {
              category: "womenswear",
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
                  '/src/assets/images/DetailImage/Womenswears/clothes5/image7.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes5/image8.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes5/image9.jpg',

              ],
              detailImages:['/src/assets/images/DetailImage/Womenswears/clothes5/detail.jpg',],
              description: `This white dress exudes elegance and vintage charm with its Peter Pan collar, soft bow tie, sheer sleeves, and lace accents. The flowing A-line silhouette adds grace, while subtle accessories, a black chain-strap handbag, and sleek black shoes complete the timeless look, perfect for formal or romantic occasions.`,
                  tags: ["new", "collab"],
                  productSizes: [
                      {size: "S", price: 299},
                      {size: "M", price: 299},
                      {size: "L", price: 299},
                      {size: "XL", price: 299},
                      {size: "XXL", price: 299},
                  ]
            },
            {
              category: "womenswear",
              brand_name: "Docle & Gabbana",
              product_name: "Skyblue Stand Collar Wool Long Coat",
              price: '$119',
              product_type: "womenswear",
              product_id: "skyblue-long-coat",
              product_status: "Available Instock",
              thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes8/image6.jpg",
              productImages: [
                  '/src/assets/images/DetailImage/Womenswears/clothes8/image4.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes8/image1.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes8/image2.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes8/image3.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes8/image5.jpg',
              ],
              detailImages:[
                  '/src/assets/images/DetailImage/Womenswears/clothes8/detail1.jpg',
                  '/src/assets/images/DetailImage/Womenswears/clothes8/detail2.jpg',
              ],
              description: `This minimalistic outfit showcases a sky-blue long coat with a high collar, subtle buttons, and oversized pockets for a sophisticated touch. Paired with straight dark trousers, a black chain-strap handbag, and a tucked-in scarf, it balances warmth and elegance, perfect for a polished winter look.`,
                  tags: ["new", "collab"],
                  productSizes: [
                      {size: "S", price: 119},
                      {size: "M", price: 119},
                      {size: "L", price: 119},
                      {size: "XL", price: 119},
                      {size: "XXL", price: 119},
                  ]
            },
            {
              category: "womenswear",
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
                  tags: ["new", "collab"],
                  productSizes: [
                      {size: "S", price: 269},
                      {size: "M", price: 269},
                      {size: "L", price: 269},
                      {size: "XL", price: 269},
                      {size: "XXL", price: 269},
                  ]
            },
            {
                category: "womenswear",
                brand_name: "Oscar de la Renta",
                product_name: "Light Blue Knit Cardigan",
                price: '$299',
                product_type: "womenswear",
                product_id: "light-blue-knit-cardigan",
                product_status: "Available Instock",
                thumbNail: "/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg",
                productImages: [
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image3.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image4.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image6.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/image7.jpg',

                ],
                detailImages:[
                    '/src/assets/images/DetailImage/Womenswears/clothes9/detail1.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/detail2.jpg',
                    '/src/assets/images/DetailImage/Womenswears/clothes9/detail3.jpg',
                ],
                description: `A cozy light blue knit cardigan featuring delicate openwork patterns and charming bow accents on the pockets. Its soft, oversized design adds a touch of elegance and warmth, perfect for a casual or semi-formal outfit`,
                    tags: ["new", "collab"],
                    productSizes: [
                        {size: "S", price: 299},
                        {size: "M", price: 299},
                        {size: "L", price: 299},
                        {size: "XL", price: 299},
                        {size: "XXL", price: 299},
                    ]
            },

        ],
    }),

});
