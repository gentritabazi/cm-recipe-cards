import ClockIcon from "@/assets/recipe-card/clock.svg";
import convertMinsToHrsMins from "@/mixins/convert-mins-to-hrs-mins";

export default {
  name: "RecipeDuration",

  mixins: [convertMinsToHrsMins],

  props: {
    minutes: {
      type: Number,
      default: 0,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  components: {
    ClockIcon,
  },

  computed: {
    duration() {
      return this.convertMinsToHrsMins(this.minutes);
    },
  },
};
