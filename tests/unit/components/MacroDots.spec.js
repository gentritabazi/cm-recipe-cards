import { shallowMount } from "@vue/test-utils";
import MacroDots from "@/components/PremiumRecipeCard/components/MacroDots";

describe("MacroDots.vue", () => {
  it("has macro-dot-carbs element", () => {
    const wrapper = shallowMount(MacroDots, {});

    expect(wrapper.find(".macro-dot-carbs").exists()).toBe(true);
  });

  it("has macro-dot-protein element", () => {
    const wrapper = shallowMount(MacroDots, {});

    expect(wrapper.find(".macro-dot-protein").exists()).toBe(true);
  });

  it("has macro-dot-fats element", () => {
    const wrapper = shallowMount(MacroDots, {});

    expect(wrapper.find(".macro-dot-fats").exists()).toBe(true);
  });
});
