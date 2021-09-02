import MacroDots from "@/components/PremiumRecipeCard/components/MacroDots";
import StarRating from "@/components/PremiumRecipeCard/components/StarRating";
import EnergyUnit from "@/components/PremiumRecipeCard/components/EnergyUnit";
import RecipeDuration from "@/components/PremiumRecipeCard/components/RecipeDuration";

export default {
  name: "RecipeOfTheDayCard",

  components: {
    MacroDots,
    StarRating,
    EnergyUnit,
    RecipeDuration,
  },

  props: {
    title: {
      type: String,
      default: "This is default recipe title",
    },
    rating: Number,
    liked: Boolean,
    imageUrl: String,
    carbs: Number,
    protein: Number,
    fats: Number,
    durationMinutes: Number,
    energyValue: Number,
    energyUnitType: String,
  },

  computed: {
    imageStyle() {
      return {
        "background-image": `url(${this.imageUrl})`,
      };
    },
  },
};
