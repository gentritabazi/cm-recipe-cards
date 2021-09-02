import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      title: "Low Carb Philly Cheesesteak Skillet",
      rating: 3.5,
      ratingsCount: 230,
      liked: true,
      imageUrl:
        "https://images.carbmanager.com/eEExUfrZDpNN99-qk6mECRJiBXHFc6p6XZ1EGIKnZGU/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ",
      carbs: 50,
      protein: 19,
      fats: 7,
      recipeDurationMinutes: 60,
      energyValue: 320,
      energyUnitType: "calories",
    },
  });

  it("has ecipe-image", () => {
    expect(wrapper.find(".recipe-image").exists()).toBe(true);
  });

  it("has recipe-details", () => {
    expect(wrapper.find(".recipe-details").exists()).toBe(true);
  });

  it("render title", () => {
    expect(wrapper.find(".recipe-title").text()).toBe("Low Carb Philly Cheesesteak Skillet");
  });
});
