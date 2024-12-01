<template>
  <div>
    <div class="articleSection">
            <ArticleCardComponent 
            v-for="articleCard in articleCards"
            :key="articleCard" 
            :article_image="articleCard.article_image"
            :article_title="articleCard.article_title"
            />
    </div>

    <div class="magazineSection">
            <MagazineCardComponent
            v-for="MagazineCard in MagazineCards" 
            :key="MagazineCard" 
            :Magazine_image="MagazineCard.Magazine_image"
            :Magazine_title="MagazineCard.Magazine_title"
            />
    </div>
</div>
  
</template>

<script>
import ArticleCardComponent from "@/components/ArticleCardComponent.vue";
import MagazineCardComponent from "@/components/MagazineCardComponent.vue";

export default {
    components: {
        ArticleCardComponent,
        MagazineCardComponent,
    },

    data (){
        return {
            articleCards: [
                {
                    article_image:"/src/assets/image/articleImage1.jpg", 
                    article_title:"The best dupes and look alike handbags for the Dior saddle bag, Diorama and miss Dior bag"
                },

                {
                    article_image:"/src/assets//image/articleImage1.jpg", 
                    article_title:"The best dupes and look alike handbags for the Dior saddle bag, Diorama and miss Dior bag"
                },
            ],
            MagazineCards: [
                {
                    Magazine_image:"/src/assets//image/magazine1.jpg", 
                    Magazine_title:"DANIELLE (NEWJEANS) - MARIE CLAIRE (MAY 2024)"
                },

                {
                    Magazine_image:"/src/assets//image/magazine2.jpg", 
                    Magazine_title:"Barbara Palvin Smolders in 'What Sexy Now' by Greg Swales"
                },

                {
                    Magazine_image:"/src/assets//image/magazine3.jpg", 
                    Magazine_title:"Urassaya Sperbund Throughout the Years in Vogue"
                },
            ],
            
        };
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.articleSection, .magazineSection{
    display: flex;
    font-family: "Inter";
    margin: 10px 25px 50px 40px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 7rem;
  z-index: 1;
}

.header h1 {
  color: white;
  margin: 0;
  font-family: "Inter";
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 40px;
}

.header_nav {
  display: flex;
  gap: 3rem;
  position: absolute;
  right: 3rem;
}

.header_nav button {
  background-color: transparent;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}

.nav_container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 3.6rem;
  border-top: 1.5px solid white;
  gap: 5rem;
}

.nav_container button{
  background-color: transparent;
  font-size: 20px;
  color: #949494;
  border: none;
  font-family: "Inter";
  font-weight: bold;
}

.nav_container button:hover{
  color: white;
  cursor: pointer;
}
</style>
