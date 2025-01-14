import { defineStore } from "pinia";

export const useMenswearStore = defineStore("menswearStore", {
  state: () => ({
    products: [
      {
        category: "menswear",
        brand_name: "CE-Overdye",
        product_name: "Causaul Pant Beige",
        price: "$800",
        product_id: "CE_pant",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Pants/CE1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Pants/CE1.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/CE2.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/CE3.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/CE4.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/CE5.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                            sophistication and versatility, making it an extraordinary addition to any collection.

                            Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                            hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab"],
        productSizes: [
          { size: "S", price: 800 },
          { size: "M", price: 800 },
          { size: "L", price: 800 },
          { size: "XL", price: 800 },
        ],
      },
      {
        category: "menswear",
        brand_name: "CE-Overdye",
        product_name: "Duck Zip Jacket Beige",
        price: "$800",
        product_id: "CE_Jacket",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Sweater/CE_J1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Sweater/CE_J1.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CE_J2.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CE_J3.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CE_J4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                            sophistication and versatility, making it an extraordinary addition to any collection.

                            Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                            hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["new"],
        productSizes: [
          { size: "S", price: 800 },
          { size: "M", price: 800 },
          { size: "L", price: 800 },
          { size: "XL", price: 800 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Cav Empt",
        product_name: "Channel Encoding Crew Neck",
        price: "$600",
        product_id: "Channel_Encoding",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Sweater/CavS1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Sweater/CavS1.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CavS2.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CavS3.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/CavS4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                            sophistication and versatility, making it an extraordinary addition to any collection.

                            Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                            hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["new"],
        productSizes: [
          { size: "S", price: 700 },
          { size: "M", price: 700 },
          { size: "L", price: 700 },
          { size: "XL", price: 700 },
        ],
      },

      {
        category: "menswear",
        brand_name: "Versace",
        product_name: "Collana Punk T-shirt",
        price: "$230",
        product_id: "Versace_90s",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Shirt/Ver1.jpg",
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
        tags: ["collab"],
        productSizes: [
          { size: "S", price: 230 },
          { size: "M", price: 230 },
          { size: "L", price: 230 },
          { size: "XL", price: 230 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Balenciaga",
        product_name: "logo-print T-shirt",
        price: "$1009",
        product_id: "Balenciaga_Logo",
        product_type: "menswear",
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
        tags: ["recommended"],
        productSizes: [
          { size: "S", price: 1009 },
          { size: "M", price: 1009 },
          { size: "L", price: 1009 },
          { size: "XL", price: 1009 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Versace",
        product_name: "University embroidered T-shirt",
        price: "$500",
        product_id: "Versace_Uni",
        product_type: "menswear",
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
        tags: ["recommended"],
        productSizes: [
          { size: "S", price: 500 },
          { size: "M", price: 500 },
          { size: "L", price: 500 },
          { size: "XL", price: 500 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Valentino Garavani",
        product_name: "graphic-print short-sleeve shirt",
        price: "$1111",
        product_id: "sleeve shirt",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Shirt/sleeve1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Shirt/sleeve1.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/sleeve2.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/sleeve3.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/sleeve4.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/sleeve5.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.

                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab"],
        productSizes: [
          { size: "S", price: 1111 },
          { size: "M", price: 1111 },
          { size: "L", price: 1111 },
          { size: "XL", price: 1111 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Gucci",
        product_name: "Logo-print bermuda shorts",
        price: "$800",
        product_id: "Gucci_Bermuda",
        product_type: "menswear",
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
        tags: ["collab", "new"],
        productSizes: [
          { size: "S", price: 800 },
          { size: "M", price: 800 },
          { size: "L", price: 800 },
          { size: "XL", price: 800 },
        ],
      },
      {
        category: "menswear",
        brand_name: "AAPE",
        product_name: "Logo varsity jacket",
        price: "$1300",
        product_id: "varsity_AAPE",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Jacket/AAPE1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Jacket/AAPE1.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/AAPE2.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/AAPE3.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/AAPE4.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/AAPE5.jpg",
        ],
        detailImages: [],
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
        category: "menswear",
        brand_name: "Christian Dior Pre-Owned",
        product_name: "1970s check-pattern",
        price: "$1168",
        product_id: "CheckPattern",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Dior/Dior1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Dior/Dior1.jpg",
          "/src/assets/images/DetailImage/Menswears/Dior/Dior2.jpg",
          "/src/assets/images/DetailImage/Menswears/Dior/Dior3.jpg",
          "/src/assets/images/DetailImage/Menswears/Dior/Dior4.jpg",
          "/src/assets/images/DetailImage/Menswears/Dior/Dior5.jpg",
        ],
        detailImages: [],
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
        category: "menswear",
        brand_name: "Peace and After",
        product_name: "cotton shirt",
        price: "$999",
        product_id: "cotton-shirt",
        product_type: "menswear",
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
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.

                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab", "recommended"],
        productSizes: [
          { size: "S", price: 999 },
          { size: "M", price: 999 },
          { size: "L", price: 999 },
          { size: "XL", price: 999 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Peace and After",
        product_name: "cargo track pants",
        price: "$845",
        product_id: "cargo_pants",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Pants/Cargo1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Pants/Cargo1.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cargo2.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cargo3.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cargo4.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cargo5.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                              sophistication and versatility, making it an extraordinary addition to any collection.

                              Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                              hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["recommended"],
        productSizes: [
          { size: "S", price: 845 },
          { size: "M", price: 845 },
          { size: "L", price: 845 },
          { size: "XL", price: 845 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Handmade",
        product_name: "Handmade cotto heart Jacket",
        price: "$545",
        product_id: "HumanMade",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Jacket/Human-Made1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Jacket/Human-Made1.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/Human-Made2.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/Human-Made3.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/Human-Made4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                                sophistication and versatility, making it an extraordinary addition to any collection.

                                Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                                hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["new", "collab"],
        productSizes: [
          { size: "S", price: 545 },
          { size: "M", price: 545 },
          { size: "L", price: 545 },
          { size: "XL", price: 545 },
        ],
      },

      {
        category: "menswear",
        brand_name: "WTAPS",
        product_name: "WTAPS-Armstrong Trouser",
        price: "$500",
        product_id: "Armstrong_pants",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Pants/WTAPS1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Pants/WTAPS1.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/WTAPS2.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/WTAPS3.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/WTAPS4.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/WTAPS5.jpg",
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
        category: "menswear",
        brand_name: "Kapital",
        product_name: "kapital-12oz-Denim 5p",
        price: "$499",
        product_id: "kapital_denim",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Pants/Kapital1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Pants/Kapital1.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Kapital2.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Kapital3.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Kapital4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                            sophistication and versatility, making it an extraordinary addition to any collection.

                            Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                            hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab"],
        productSizes: [
          { size: "S", price: 499 },
          { size: "M", price: 499 },
          { size: "L", price: 499 },
          { size: "XL", price: 499 },
        ],
      },

      {
        category: "menswear",
        brand_name: "Sacai",
        product_name: "Cotton Poplin Shirt Off",
        price: "$417",
        product_id: "sacai_sweater",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Shirt/Sacai-cotton1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Shirt/Sacai-cotton1.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/Sacai-cotton2.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/Sacai-cotton3.jpg",
          "/src/assets/images/DetailImage/Menswears/Shirt/Sacai-cotton4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                    sophistication and versatility, making it an extraordinary addition to any collection.

                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                    hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab", "recommended", "new"],
        productSizes: [
          { size: "S", price: 417 },
          { size: "M", price: 417 },
          { size: "L", price: 417 },
          { size: "XL", price: 417 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Sacai",
        product_name: "Sponge Sweat x Nylon Twill Pullover",
        price: "$200",
        product_id: "sacai",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Sweater/Sacai-Sponge1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Sweater/Sacai-Sponge1.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/Sacai-Sponge2.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/Sacai-Sponge3.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/Sacai-Sponge4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                  sophistication and versatility, making it an extraordinary addition to any collection.

                  Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                  hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab", "recommended", "new"],
        productSizes: [
          { size: "S", price: 200 },
          { size: "M", price: 200 },
          { size: "L", price: 200 },
          { size: "XL", price: 200 },
        ],
      },
      {
        category: "menswear",
        brand_name: "HAVEN-Alpine",
        product_name: "Pullover-Polartec-High-Loft-Stone",
        price: "$600",
        product_id: "HAVEN_sweater",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN1.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN2.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN3.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN4.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN7.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN8.jpg",
        ],
        detailImages: [
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN5.jpg",
          "/src/assets/images/DetailImage/Menswears/Sweater/HAVEN6.jpg",
        ],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                    sophistication and versatility, making it an extraordinary addition to any collection.

                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                    hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab", "recommended", "new"],
        productSizes: [
          { size: "S", price: 600 },
          { size: "M", price: 600 },
          { size: "L", price: 600 },
          { size: "XL", price: 600 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Cav Empt",
        product_name: "Flannel Pant",
        price: "$100",
        product_id: "Cav-Empt_pant",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Pants/Cav1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Pants/Cav1.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cav2.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cav3.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cav4.jpg",
          "/src/assets/images/DetailImage/Menswears/Pants/Cav5.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                    sophistication and versatility, making it an extraordinary addition to any collection.

                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                    hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["recommended", "new"],
        productSizes: [
          { size: "S", price: 100 },
          { size: "M", price: 100 },
          { size: "L", price: 100 },
          { size: "XL", price: 100 },
        ],
      },

      {
        category: "menswear",
        brand_name: "Arcteyx-Atom",
        product_name: "Hoodie M whiteout",
        price: "$222",
        product_id: "Channel_Encoding",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Hoodie/Atom1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Hoodie/Atom1.jpg",
          "/src/assets/images/DetailImage/Menswears/Hoodie/Atom2.jpg",
          "/src/assets/images/DetailImage/Menswears/Hoodie/Atom3.jpg",
          "/src/assets/images/DetailImage/Menswears/Hoodie/Atom4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of
    "/src/assets/images/DetailImage/Menswears/Hoodie/Atom1.jpg",understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                    sophistication and versatility, making it an extraordinary addition to any collection.

                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                    hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["recommended", "new"],
        productSizes: [
          { size: "S", price: 222 },
          { size: "M", price: 222 },
          { size: "L", price: 222 },
          { size: "XL", price: 222 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Stone Island",
        product_name: "Ghost Piece Merino Wool Jacket",
        price: "$168",
        product_id: "Stone",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail: "/src/assets/images/DetailImage/Menswears/Jacket/St1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Jacket/St1.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/St2.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/St3.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/St4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of
    "/src/assets/images/DetailImage/Menswears/Hoodie/Atom1.jpg",understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                    sophistication and versatility, making it an extraordinary addition to any collection.

                    Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                    hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["recommended", "new"],
        productSizes: [
          { size: "S", price: 168 },
          { size: "M", price: 168 },
          { size: "L", price: 168 },
          { size: "XL", price: 168 },
        ],
      },
      {
        category: "menswear",
        brand_name: "Stadium Jaket",
        product_name: "Sponge Sweat x Nylon Twill Pullover",
        price: "$779",
        product_id: "sacai_Jacket",
        product_type: "menswear",
        product_status: "Available For Pre-order",
        thumbNail:
          "/src/assets/images/DetailImage/Menswears/Jacket/NEIGHBOURHOOD1.jpg",
        productImages: [
          "/src/assets/images/DetailImage/Menswears/Jacket/NEIGHBOURHOOD1.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/NEIGHBOURHOOD2.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/NEIGHBOURHOOD3.jpg",
          "/src/assets/images/DetailImage/Menswears/Jacket/NEIGHBOURHOOD4.jpg",
        ],
        detailImages: [],
        description: `Birkin Vert d'Eau—an absolute masterpiece of understated elegance. This exquisite piece is a treasure in the world of luxury handbags. The serene "water green" tone offers a delicate balance of
                  sophistication and versatility, making it an extraordinary addition to any collection.

                  Crafted in Hermès' signature Togo leather, known for its supple texture and resistance to scratches, this Birkin radiates timeless beauty. The harmonious interplay between the Vert d'Eau hue and its palladium
                  hardware elevates its design to an unparalleled level of refinement.`,
        tags: ["collab", "recommended", "new"],
        productSizes: [
          { size: "S", price: 779 },
          { size: "M", price: 779 },
          { size: "L", price: 779 },
          { size: "XL", price: 779 },
        ],
      },
    ],
  }),
});
