import Heart from "./components/Heart/";
import TrophyIcon from "@/assets/recipe-card/trophy.svg";
import StarRating from "./components/StarRating";
import RecipeDuration from "./components/RecipeDuration";
import EnergyUnit from "./components/EnergyUnit";
import MacroDots from "./components/MacroDots";

export default {
  name: "PremiumRecipeCard",

  components: {
    Heart,
    TrophyIcon,
    StarRating,
    RecipeDuration,
    EnergyUnit,
    MacroDots,
  },

  props: {
    title: {
      type: String,
      default: "This is default recipe title",
    },
    rating: Number,
    ratingsCount: Number,
    liked: Boolean,
    imageUrl: {
      type: String,
      default: "",
    },
    carbs: Number,
    protein: Number,
    fats: Number,
    recipeDurationMinutes: Number,
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
