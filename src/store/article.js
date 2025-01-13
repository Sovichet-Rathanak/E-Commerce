import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articles', {
  state: () => {
    return{
      articles:{
        sneakerArticle: {
          article_titles: [
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",

          ],
          article_images: [
            "./src/assets/images/Articles/travisArticle.jpg",
            "./src/assets/images/Articles/travisArticle.jpg",
            "./src/assets/images/Articles/travisArticle.jpg",
            "./src/assets/images/Articles/travisArticle.jpg",
            "./src/assets/images/Articles/travisArticle.jpg",
            "./src/assets/images/Articles/articlebag.jpg",
          ],

        },



        accessoriesArticle: {
          article_titles: [
            "Hermés Birkin: Kylie Jenner matches her manicure to her $300K Birkin bag",
            "Meghan Markle styles Chanel with Valentino after kids get royal titles",
            "Look: Andrea Brillantes receives a Lady Dior Bag from Dr. Vicki Belo",
            "Louis Vuitton's 'Speedy' is the new A-list It bag: Rihanna, LeBron James",
            "Mouni Roy makes a case for power dressing with her Rs 5.77 lacs Chanel bag",
            "Zendaya fronts 1st Louis Vuitton campaign as brand's new house ambassador-America",

          ],
          article_images: [
            "./src/assets/images/Articles/AccessoriesArticle/hermes.jpg",
            "./src/assets/images/Articles/AccessoriesArticle/chanel1.jpg",
            "./src/assets/images/Articles/AccessoriesArticle/dior1.jpg",
            "./src/assets/images/Articles/AccessoriesArticle/LV1.jpg",
            "./src/assets/images/Articles/AccessoriesArticle/chanel2.jpg",
            "./src/assets/images/Articles/AccessoriesArticle/LV2.jpg",

          ],

        },




        manswearArticle: {
          article_titles: [
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",

          ],
          article_images: [
            "/src/assets/images/Magazine_Man.png",
            "/src/assets/images/MenswearMagazine/Magazine1.jpg",
            "/src/assets/images/MenswearMagazine/Magazine2.jpg",
            "/src/assets/images/MenswearMagazine/Magazine3.jpg",
            "/src/assets/images/MenswearMagazine/Magazine4.jpg",
            "/src/assets/images/MenswearMagazine/Magazine5.jpg",

          ],

        },




        womenwearArticle: {
          article_titles: [
            "Taeyeon is an elegant living portrait for the January 2025 cover of 'Allure'",
            "Jisoo __ Dazed Korea SE September 2025",
            "Step into the world of timeless fashion with our exclusive collection!",

            "Step into the world of timeless fashion with our exclusive collection!",
            "Lorde on the Historic 2025 Grammys, the #MeToo Movement & Loving Cardi B",
            "Urassaya Sperbund Throughout the Years in Vogue",

            "Step into the world of timeless fashion with our exclusive collection!",
            "Liu Yifei covers Marie Claire China by Ziqian",
            "Cover of Elle Hong Kong with Yuko Araki, Magazines _ The FMD",
          ],
          article_images: [
            "/src/assets/images/Magazine/womenswear/Magazine1.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine2.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine3.jpg",

            "/src/assets/images/Magazine/womenswear/Magazine4.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine5.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine6.jpg",

            "/src/assets/images/Magazine/womenswear/Magazine7.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine8.jpg",
            "/src/assets/images/Magazine/womenswear/Magazine9.jpg",
          ],

        },




        collectiblesArticle: {
          article_titles: [
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",
            "Dawn of a New Rage: The Unstoppable Sneaker Reign of Travis Scott - Features",

          ],
          article_images: [
            "src/assets/images/Articles/newjeans.jpg",
            "src/assets/images/Articles/newjeans.jpg",
            "src/assets/images/Articles/newjeans.jpg",
            "src/assets/images/Articles/newjeans.jpg",
            "src/assets/images/Articles/newjeans.jpg",
            "src/assets/images/Articles/newjeans.jpg",
          ],

        },
      }
    }
  }

})
