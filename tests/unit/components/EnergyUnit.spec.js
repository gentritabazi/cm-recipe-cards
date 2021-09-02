import { shallowMount } from "@vue/test-utils";
import EnergyUnit from "@/components/PremiumRecipeCard/components/EnergyUnit";

describe("EnergyUnit.vue", () => {
  it("correctly calculates 300 calories as 1255 kJ", () => {
    const calories = 300;
    const kJperCalorie = 4.184;
    const wrapper = shallowMount(EnergyUnit, {
      propsData: {
        value: calories,
        unit: "kJ",
      },
    });

    expect(parseInt(wrapper.find(".energy-unit").text())).toEqual(Math.round(kJperCalorie * calories));
  });
});
