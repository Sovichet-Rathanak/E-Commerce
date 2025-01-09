import { defineStore } from "pinia";

export const useMenswearStore = defineStore("menswearStore",{
    state: () => ({
        products: [
            {
                brand_name: "Versace",
                product_name: "Collana Punk T-shirt",
                price: "$230",
                product_id: "Versace_90s",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Shirt/Ver1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Shirt/Ver1.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Ver2.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Ver3.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Ver4.jpg",
                ],
                detailImages: [],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                    sophistication and versatility, making it an extraordinary addition to any collection.
    
                                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                    hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["new"],
                productSizes: [
                { size: "S", price: 230 },
                { size: "M", price: 230 },
                { size: "L", price: 230 },
                { size: "XL", price: 230 },
                ],
            },
            {
                brand_name: "Balenciaga",
                product_name: "logo-print T-shirt",
                price: "$1009",
                product_id: "Balenciaga_Logo",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen1.jpg",
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen2.jpg",
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen3.jpg",
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen4.jpg",
                ],
                detailImages: [
                "/src/assets/images/DetailImage/Menswears/Balenciaga/Balen5.jpg",
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["new","recommended"],
                productSizes: [
                { size: "S", price: 1009 },
                { size: "M", price: 1009 },
                { size: "L", price: 1009 },
                { size: "XL", price: 1009 },
                ],
            },
            {
                brand_name: "Versace",
                product_name: "University embroidered T-shirt",
                price: "$500",
                product_id: "Versace_Uni",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver1.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver2.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver3.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver4.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Black_Ver5.jpg",
                ],
                detailImages: [],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["new"],
                productSizes: [
                { size: "S", price: 500 },
                { size: "M", price: 500 },
                { size: "L", price: 500 },
                { size: "XL", price: 500 },
                ],
            },
            {
                brand_name: "Valentino Garavani",
                product_name: "graphic-print short-sleeve shirt",
                price: "$1111",
                product_id: "sleeve shirt",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve1.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve2.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve3.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve4.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/sleeve5.jpg",
                ],
                detailImages: [
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["collab"],
                productSizes: [
                { size: "S", price: 999 },
                { size: "M", price: 999 },
                { size: "L", price: 999 },
                { size: "XL", price: 999 },
                ],
            },
            {
                brand_name: "Gucci",
                product_name: "Logo-print bermuda shorts",
                price: "$800",
                product_id: "Gucci_Bermuda",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short1.jpg",
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short2.jpg",
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short3.jpg",
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short4.jpg",
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short5.jpg",
                ],
                detailImages: [
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short6.jpg",
                "/src/assets/images/DetailImage/Menswears/Gucci/G_Short7.jpg",
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: [ "collab",'new'],
                productSizes: [
                { size: "S", price: 800 },
                { size: "M", price: 800 },
                { size: "L", price: 800 },
                { size: "XL", price: 800 },
                ],
            },
            {
                brand_name: "AAPE",
                product_name: "Logo varsity jacket",
                price: "$1300",
                product_id: "varsity_AAPE",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE1.jpg",
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE2.jpg",
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE3.jpg",
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE4.jpg",
                "/src/assets/images/DetailImage/Menswears/Jacket/AAPE5.jpg",
    
                ],
                detailImages: [
    
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["recommended"],
                productSizes: [
                { size: "S", price: 1300 },
                { size: "M", price: 1300 },
                { size: "L", price: 1300 },
                { size: "XL", price: 1300 },
                ],
            },
                    {
                brand_name: "Christian Dior Pre-Owned",
                product_name: "1970s check-pattern",
                price: "$1168",
                product_id: "CheckPattern",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Dior/Dior1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Dior/Dior1.jpg",
                "/src/assets/images/DetailImage/Menswears/Dior/Dior2.jpg",
                "/src/assets/images/DetailImage/Menswears/Dior/Dior3.jpg",
                "/src/assets/images/DetailImage/Menswears/Dior/Dior4.jpg",
                "/src/assets/images/DetailImage/Menswears/Dior/Dior5.jpg",
    
                ],
                detailImages: [
                "/src/assets/images/DetailImage/Menswears/Jacket/ralph-lauren7.jpg",
                "/src/assets/images/DetailImage/Menswears/Jacket/ralph-lauren8.jpg",
    
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["collab"],
                productSizes: [
                { size: "S", price: 1168 },
                { size: "M", price: 1168 },
                { size: "L", price: 1168 },
                { size: "XL", price: 1168 },
                ],
            },
            {
                brand_name: "Peace and After",
                product_name: "cotton shirt",
                price: "$999",
                product_id: "cotton-shirt",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt1.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt2.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt3.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt5.jpg",
                "/src/assets/images/DetailImage/Menswears/Shirt/Cotton_Shirt4.jpg",
    
                ],
                detailImages: [
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["collab","recommended"],
                productSizes: [
                { size: "S", price: 999 },
                { size: "M", price: 999 },
                { size: "L", price: 999 },
                { size: "XL", price: 999 },
                ],
            },
            {
                brand_name: "Peace and After",
                product_name: "cargo track pants",
                price: "$845",
                product_id: "cargo_pants",
                product_type: "menswears",
                product_status: "Available For Pre-order",
                thumbNail:
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo1.jpg",
                productImages: [
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo1.jpg",
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo2.jpg",
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo3.jpg",
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo4.jpg",
                "/src/assets/images/DetailImage/Menswears/Pants/Cargo5.jpg",
    
                ],
                detailImages: [
                ],
                description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.
    
                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
                tags: ["recommended"],
                productSizes: [
                { size: "S", price: 999 },
                { size: "M", price: 999 },
                { size: "L", price: 999 },
                { size: "XL", price: 999 },
                ],
            },
            ],
    })
})