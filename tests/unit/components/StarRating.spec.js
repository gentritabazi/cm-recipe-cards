import { shallowMount } from "@vue/test-utils";
import StarRating from "@/components/PremiumRecipeCard/components/StarRating";

describe("StarRating.vue", () => {
  it("has stars", () => {
    const wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 3,
      },
    });

    expect(wrapper.find(".stars").exists()).toBe(true);
  });

  it("has star-gold", () => {
    const wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 3,
      },
    });

    expect(wrapper.find(".star-gold").exists()).toBe(true);
  });

  it("renders the component with five stars", () => {
    const wrapper = shallowMount(StarRating, {
      propsData: {
        rating: 0,
        ratingsCount: 200,
      },
    });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll("img").length).toBe(5);
    });
  });
});
