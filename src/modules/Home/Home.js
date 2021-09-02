import PremiumRecipeCard from "@/components/PremiumRecipeCard";
import axiosClient from "@/utils/axios-client";
import { appConfig } from "@/config/app";
import CMLogoIcon from "@/assets/general/cm-logo.svg";

export default {
  name: "Home",

  components: {
    PremiumRecipeCard,
    CMLogoIcon,
  },

  data: () => ({
    recipes: [],
  }),

  async mounted() {
    await this.getRecipes();
  },

  methods: {
    async getRecipes() {
      await axiosClient
        .get(appConfig.BACKEND_URL + "/recipes")
        .then((response) => {
          this.recipes = this.filterOnlyPremiumRecipe(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterOnlyPremiumRecipe(recipes) {
      return recipes.filter((recipe) => recipe.isPremium);
    },
    onRecipeClick() {
      alert("Recipe clicked!");
    },
  },
};
