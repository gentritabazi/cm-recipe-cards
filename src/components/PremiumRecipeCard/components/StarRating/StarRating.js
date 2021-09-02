import StarHalfIcon from "@/assets/recipe-card/star-half.svg";
import StarGoldIcon from "@/assets/recipe-card/star-gold.svg";
import StarGreyIcon from "@/assets/recipe-card/star-grey.svg";

export default {
  name: "StarRating",

  components: { StarHalfIcon, StarGoldIcon, StarGreyIcon },

  props: {
    rating: {
      type: Number,
      default: 0,
    },
    ratingsCount: {
      type: Number,
      default: 1,
    },
    showRatingsCount: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    starCount() {
      // Ensure rating is between 0 and 5
      let rating = Math.min(Math.max(parseFloat(this.rating), 0), 5);

      return Math.round(rating * 2) / 2;
    },
  },
};
