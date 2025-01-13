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
            "/src/assets/images/Magazine_Man.png",
            "/src/assets/images/Magazine_Man.png",
            "/src/assets/images/Magazine_Man.png",
            "/src/assets/images/Magazine_Man.png",
            "/src/assets/images/Magazine_Man.png",
          ],

        },




        womenwearArticle: {
          article_titles: [
            "Step into the world of timeless fashion with our exclusive collection!",
            "Step into the world of timeless fashion with our exclusive collection!",
            "Step into the world of timeless fashion with our exclusive collection!",
            "Step into the world of timeless fashion with our exclusive collection!",
            "Step into the world of timeless fashion with our exclusive collection!",
            "Step into the world of timeless fashion with our exclusive collection!",
          ],
          article_images: [
            "/src/assets/images/Magazine/Magazine1.jpg",
            "/src/assets/images/Magazine/Magazine2.jpg",
            "/src/assets/images/Magazine/Magazine3.jpg",
            "/src/assets/images/Magazine/Magazine1.jpg",
            "/src/assets/images/Magazine/Magazine1.jpg",
            "/src/assets/images/Magazine/Magazine1.jpg",
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
