# Carb Manager Dev Assignment

## Design

**Card:**

<img src=".github/PremiumRecipeCard.png" width="500">

**Hover:**

20% opacity white fill when hovering over the card.

<img src=".github/Hover.png" width="500">

**Figma Link:**

[https://www.figma.com/file/Hv0bOihxG5M40ASYsFBrVR/Interview-Assignment?node-id=0%3A1](https://www.figma.com/file/Hv0bOihxG5M40ASYsFBrVR/Interview-Assignment?node-id=0%3A1)

---

## Assignment Requirements:

### Data

- The data is served by a local HTTP server listening on `http://127.0.0.1:3000`. There are 2 endpoints:
  - `http://127.0.0.1:3000/recipes` - returns recipes data. Recipes may contain energy information in `kcal` or in `kJ`. 1 `kcal` = 4.184 `kJ`.
  - `http://127.0.0.1:3000/user` returns user settings. The object contains the `energyUnits` field which may be either `calories` or `kJ`. Use this field to determine user preferences for energy units display.
- Data fixtures are defined in `./server/db.js`. Do not modify them.
- The server is configured to respond with HTTP error 500 sometimes. Take it into account.
- Use that data to render a list of premium recipe cards.

### UI

- Translate the design as closely as possible to custom CSS. We've also provided hover styles for you to replicate.
- Use SVG-s for the custom icons. These can be grabbed from the Figma file.
- Make sure the Recipe title gets truncated after 2 lines
- The star ratings should be able to work with half-stars.
- If a recipe duration is longer than 60 minutes, the format should be `x hr x min`
- Make sure that energy information is displayed based on user settings (either as `calories` or `kJ`)

### Interactions

- The whole card will be clickable. Make sure that the event is working properly.
- Because the whole card is clickable, the "heart" icon in the top right won't be interactive. Instead, it should be empty or filled in depending on a certain prop value.

### Tests

There is a `PremiumRecipeCard.spec.js` file which you can use to write some tests. These tests are completely up to you. Try to come up with some useful test cases.

**Hint:** The calorie -> kilojoules conversion will be a good test case to make sure the conversion is working properly.

### Other Notes

- **Clone** the repo (not fork) to get started. Please don't create everything with just one commit. We would love to see how you structure your commits.
- Don't feel like you have to stay within the placeholder files. If you want to create some helper/utility functions, go ahead and create the appropriate file/folders for that.
- Feel free to use any tool, library or tune the project (including the setup files) to fit your needs. 
- If you see any elements inside of this Recipe Card design that could be useful to re-use in other areas, feel free to split them out into their own sub components.
- Macro dots
  - Red: Carbs
  - Blue: Protein
  - Yellow: Fats
- If you are unclear about something or want to run something by the team, please feel free to reach out. We like to get a sense of how you would work/collaborate on a real task.
- Send us over the GitHub URL when you are complete so we can check it out!

### Reusability

Keep in mind that there may be other variations of the Recipe Card design. Take a look at this **Recipe of the Day** card design:

<img src=".github/ROTD.png" width="500">

Don't build out this component (unless you have extra time), but please explain how you would build out this `<RecipeOfTheDay>` component with maximum code re-use from the `<PremiumRecipeCard>`, as they mostly share the same data props with just a tweaked design.

You can send that over to us via email/Slack when you are done with the assignment, or you can just include it in the README file, whatever works best!

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development.

```
yarn serve
```

### Run your unit tests

```
yarn test:unit
```
