import { defineStore } from "pinia";

export const useFilterStore = defineStore('filters', {
  state: () => {
    return{
      FilterVisible: false,
      categories: ["Sneakers","Accessories","Menswear","Womenswear","Collectibles"],
      selectedCat: null,
      filters: {
        Sneakers:{
          Brand:["Nike", "Adidas", "Air Jordan", "New Balance", "Converse", "Vans", "FILA", "Puma", "Rebook", "Onitsuka Tiger", "Sketchers"],
          Price:["Designers", "Below $300", "Below $200", "Below $100", "Below $50"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Accessories:{
          Brand:["Hermes", "Chanel", "Prada", "DIOR", "Goyard", "Louis Vuitton", "GUCCI", "COACH", "Yves Saint Laurent", "Fendi", "Givenchy", "BURBERRY"],
          Price:["Highest to Lowest", "Lowest to Highest"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Menswear:{
          Brand:["Docle & Grabrana", "Dior", "Prada", "Vlentino"],
          Price:["Highest to Lowest", "Lowest to Highest"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Womenswear:{
          Brand:["Docle & Grabrana", "Dior", "Prada", "Valentino"],
          Price:["Highest to Lowest", "Lowest to Highest"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        },
        Collectibles:{
          Brand:["Aespa", "NewJeans", "NCT Wish", "ILLIT", "LE SSERAFIM", "ATEEZ", "Stray Kids", "ITZY", "TXT", "RIIZE", "XG", "TWICE", "IVE", "SEVENTEEN", "ENHYPEN"],
          Price:["Mid"],
          Rating:["Highest to Lowest", "Lowest to Highest"]
        }
      }
    }
  },
  actions:{
    showFilter(index){
      const CurrentCategory = this.categories[index]; //do this to get the filter category we're on
      this.selectedCat = this.filters[CurrentCategory]; //Get the name of the nested object we hover on so we could use it to dynamically display the filter result
      console.log(CurrentCategory);
      console.log("This:" + this.selectedCat)
    }
  }
})
