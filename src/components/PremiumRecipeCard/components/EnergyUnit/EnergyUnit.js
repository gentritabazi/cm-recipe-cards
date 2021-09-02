import CalsIcon from "@/assets/recipe-card/cals.svg";

export default {
  name: "EnergyUnit",

  components: {
    CalsIcon,
  },

  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    energyValue() {
      return this.formattedUnit === "kJ"
        ? Math.round(4.184 * this.value)
        : this.value;
    },
    formattedUnit() {
      return ["kj", "kilojoule", "kilojoules"].indexOf(
        this.unit.toLowerCase()
      ) > -1
        ? "kJ"
        : "Calories";
    },
  },
};
