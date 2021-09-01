import PremiumRecipeCard from "@/components/PremiumRecipeCard";

export default {
  name: "Home",

  components: {
    PremiumRecipeCard,
  },

  data: () => ({
    recipes: ["Premium", "recipes", "list", "goes", "here"],
  }),
};
