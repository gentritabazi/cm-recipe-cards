module.exports = () => ({
  user: {
    firstName: "Jon",
    lastName: "Doe",
    email: "jon.doe@carbmanager.com",
    energyUnits: "calories" // "calories" or "kJ"
  },
  recipes: [
    {
      id: "1",
      isPremium: true,
      isPublished: true,
      isDeleted: false,
      status: "ok",
      title:
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
      images: [
        {
          id: "1:img",
          url:
            "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
        }
      ],
      rating: {
        count: 200,
        score: 4.5
      },
      details: {
        units: {
          proteins: "g",
          carbs: "g",
          fats: "g",
          energy: "kJ",
          ca: "mg",
          mg: "mg",
          fe: "mg"
        },
        nutrients: {
          proteins: 22,
          carbs: 13,
          fats: 8,
          ca: 16,
          mg: 20,
          fe: 10
        },
        energy: 774
      },
      preparationTimeMinutes: 25
    },
    {
      id: "2",
      isPremium: false,
      isPublished: true,
      isDeleted: false,
      status: "ok",
      title: "Keto Italian Beef With Cabbage Noodles",
      images: [
        {
          id: "2:img",
          url:
            "https://images.carbmanager.com/iy_RNlrfD46W7L2oo9pKeyjEHhKVF6wB4lom28_Y_0M/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2ZhNzI5ZjA5LTgyN2ItZGY4NC03ZGMxLWQ1ZDMyZjExMTg2OC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0yNWQyNjBjMy1jNzI0LTQ3MmUtYTJkZS05YWM0Mzg2ZGIyNzA"
        }
      ],
      rating: {
        count: 150,
        score: 5
      },
      details: {
        units: {
          proteins: "g",
          carbs: "g",
          fats: "g",
          energy: "kcal",
          ca: "mg",
          mg: "mg",
          fe: "mg"
        },
        nutrients: {
          proteins: 17,
          carbs: 9,
          fats: 6,
          ca: 10,
          mg: 22,
          fe: 10
        },
        energy: 600
      },
      preparationTimeMinutes: 15
    },
    {
      id: "3",
      isPremium: true,
      isPublished: true,
      isDeleted: false,
      status: "ok",
      title: "Low Carb Philly Cheesesteak Skillet",
      images: [
        {
          id: "1:img",
          url:
            "https://images.carbmanager.com/eEExUfrZDpNN99-qk6mECRJiBXHFc6p6XZ1EGIKnZGU/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ"
        }
      ],
      rating: {
        count: 13,
        score: 3
      },
      details: {
        units: {
          proteins: "g",
          carbs: "g",
          fats: "g",
          energy: "kJ",
          ca: "mg",
          mg: "mg",
          fe: "mg"
        },
        nutrients: {
          proteins: 19,
          carbs: 14,
          fats: 12,
          ca: 16,
          mg: 20,
          fe: 10
        },
        energy: 995
      },
      preparationTimeMinutes: 120
    },
    {
      id: "4",
      isPremium: true,
      isPublished: true,
      isDeleted: false,
      status: "ok",
      title: "Keto Blueberry Muffins",
      images: [
        {
          id: "4:img",
          url:
            "https://images.carbmanager.com/PfL76sQSoPQ-KU9dUY6wFPGVyaqG8Ja3UH_qUCsYIg4/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JmMDZiMjViLWM2YmQtNTk0OS01OGJhLTUwNzE3ZGZlMDM1Zi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1lZDkyYjMxMC0wMDVlLTQyM2YtYWMxMC00MjQ4MDRiYThhNzI"
        }
      ],
      rating: {
        count: 44,
        score: 4.5
      },
      details: {
        units: {
          proteins: "g",
          carbs: "g",
          fats: "g",
          energy: "kcal",
          ca: "mg",
          mg: "mg",
          fe: "mg"
        },
        nutrients: {
          proteins: 30,
          carbs: 7,
          fats: 8,
          ca: 16,
          mg: 20,
          fe: 10
        },
        energy: 421
      },
      preparationTimeMinutes: 30
    }
  ]
});
