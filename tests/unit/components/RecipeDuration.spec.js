import { shallowMount } from "@vue/test-utils";
import RecipeDuration from "@/components/PremiumRecipeCard/components/RecipeDuration";

describe("RecipeDuration.vue", () => {
  it("Calculates 65 minutes correctly", () => {
    const wrapper = shallowMount(RecipeDuration, {
      propsData: {
        minutes: 65,
      },
    });

    expect(wrapper.find(".recipe-duration").text()).toEqual("1h 5m");
  });

  it("Calculates 100 minutes correctly", () => {
    const wrapper = shallowMount(RecipeDuration, {
      propsData: {
        minutes: 100,
      },
    });

    expect(wrapper.find(".recipe-duration").text()).toEqual("1h 40m");
  });
});
