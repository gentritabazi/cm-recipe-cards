import PremiumRecipeCard from "@/components/PremiumRecipeCard";
import RecipeOfTheDayCard from "@/components/RecipeOfTheDayCard";
import axiosClient from "@/utils/axios-client";
import { appConfig } from "@/config/app";
import CMLogoIcon from "@/assets/general/cm-logo.svg";

export default {
  name: "Home",

  components: {
    PremiumRecipeCard,
    CMLogoIcon,
    RecipeOfTheDayCard,
  },

  data: () => ({
    recipes: [],
    authenticatedUser: {},
    recipeOfTheDay: {},
    isRecipeOfTheDayReady: false,
  }),

  async mounted() {
    await this.getAuthenticatedUser();
    await this.getRecipes();
  },

  methods: {
    async getAuthenticatedUser() {
      await axiosClient
        .get(appConfig.BACKEND_URL + "/user")
        .then((response) => {
          this.authenticatedUser = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getRecipes() {
      await axiosClient
        .get(appConfig.BACKEND_URL + "/recipes")
        .then((response) => {
          this.recipes = this.filterOnlyPremiumRecipe(response.data);
          this.recipeOfTheDay = this.filterRecipeOfTheDay(response.data)[0] ?? {};
          this.isRecipeOfTheDayReady = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterOnlyPremiumRecipe(recipes) {
      return recipes.filter((recipe) => recipe.isPremium);
    },
    filterRecipeOfTheDay(recipes) {
      return recipes.filter((recipe) => recipe.isPremium != true);
    },
    onRecipeClick() {
      alert("Recipe clicked!");
    },
  },
};
