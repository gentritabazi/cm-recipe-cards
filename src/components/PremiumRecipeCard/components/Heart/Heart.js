import HeartIcon from "@/assets/recipe-card/heart.svg";
import HeartFullIcon from "@/assets/recipe-card/heart-full.svg";

export default {
  components: { HeartIcon, HeartFullIcon },

  name: "Heart",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};
