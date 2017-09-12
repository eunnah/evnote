# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



guest_user = User.create!(username: "guest", password: "password")
notebook1 = Notebook.create!(title: "Scone Recipes", author_id: guest_user.id,
description: "All kinds of recipes for one of our favorite baked goods of all time!")
Notebook.create!(title: "Making pizza", author_id: guest_user.id,
description: "All the recipes you need to make pizza from scratch")
Notebook.create!(title: "Soups", author_id: guest_user.id,
description: "Every kind of soup recipe for every kind of mood and weather")
Notebook.create!(title: "Paris", author_id: guest_user.id,
description: "Travel tips, places to go, things to eat")
Notebook.create!(title: "Seoul", author_id: guest_user.id,
description: "Things to do in this amazing city")
Notebook.create!(title: "Children's books", author_id: guest_user.id,
description: "My favorite children's books that every adult should reread")
Notebook.create!(title: "Cookies", author_id: guest_user.id,
description: "A collection of the top-rated cookie recipes")
Notebook.create!(title: "Chocolate cake", author_id: guest_user.id,
description: "My favorite chocolate cake recipes")
Notebook.create!(title: "Historical Fiction", author_id: guest_user.id,
description: "Top books for one of my favorite genres")
Notebook.create!(title: "Travel planning", author_id: guest_user.id,
description: "Tracking the countries I've visited to date and the new places on my bucketlist")
Note.create!(title: "Brunch Scones",
body: "Recipe By:BIANCA123
I enjoy scones with morning tea or just an afternoon snack. Serve warm with clotted cream and strawberry jam.

Ingredients
1 3/4 cups all-purpose flour
4 teaspoons baking powder
5 tablespoons unsalted butter
5 tablespoons white sugar

2/3 cup whole milk
1/2 cup currants
1 egg yolk, beaten
Directions
Preheat oven to 400 degrees F (200 degrees C). Lightly grease a baking sheet or line with baking parchment.
Sift flour and baking powder into a medium bowl. Rub butter and sugar into flour to form a fine crumble. Make a well in center, and add milk and currants. Knead gently together, being careful not to over mix. Dough will be sticky.
On a generously floured surface, roll out dough to 3/4 inch thickness. Stamp out 2 1/2 inch rounds with a plain pastry cutter. Transfer to prepared pan, and brush tops with egg yolk. Allow to stand for 15 minutes.

Bake in preheated oven until risen and lightly golden on top, 12 to 15 minutes. Remove to a rack to cool.",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Hazelnut Chocolate Chip Scones",
body: "Delicious 'pick-me-up-snack' any time of the day for chocolate chip lovers.
Ingredients
2 cups all-purpose flour
1/3 cup packed brown sugar
1 1/2 teaspoons baking powder
1/2 teaspoon baking soda
1/4 teaspoon salt
6 tablespoons unsalted butter, chilled

1/2 cup buttermilk
1 egg
1 1/2 teaspoons almond extract
1 cup semisweet chocolate chips
1/2 cup chopped hazelnuts
Directions
Preheat oven to 400 degrees F (205 degrees C). Lightly butter a 9 inch diameter circle in the center of a baking sheet.
In a large bowl, stir together flour, brown sugar, baking powder, baking soda, and salt. Cut the butter into 1/2 inch cubes, and distribute evenly over flour mixture. With a pastry blender or two knives, cut butter into the flour mixture. Stir together buttermilk, egg, and extract; add to the flour mixture, and stir to combine. Stir in the chocolate chips and hazelnuts. The dough will be sticky.
Spread the dough into an 8 inch diameter circle on the baking sheet. Cut with a serrated knife into 8 wedges.
Bake for 17 to 19 minutes, or until the top in lightly browned. Cool on baking sheet for 5 minutes. Transfer scones to the wire rack to cool, and cut into wedges. Serve warm, or cool completely and store in airtight container.
",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Easy Cheese and Garlic Scones",
body: "This is my favorite, very simple, recipe for savory scones. They are wonderful served hot, spread with a little butter, and eaten alongside a steamy hot soup. It's important not to over handle these scones, as they will be heavy and tough.

Ingredients
2 cups self-rising flour
2 tablespoons butter
1 pinch salt

1/2 cup shredded Cheddar cheese
1 clove garlic, minced
1 cup milk
Directions
Preheat oven to 425 degrees F (220 degrees C). Lightly grease a baking sheet.
In a large bowl, sift together flour and salt. Rub in butter lightly with finger tips until mixture resembles coarse breadcrumbs. Stir in cheese and garlic. Make a well in the center of the mixture and pour in the milk, reserving 1 teaspoon for a glazing the scones. Gently mix, just until combined.
Turn out onto a lightly floured board and knead briefly and lightly. Be careful not to overwork the dough. Press out dough to form a 1 inch thick round. Cut into 8 wedges. Place on prepared tray and brush with reserved milk.
Bake in preheated oven for 10 to 20 minutes, or until light brown. Serve hot or let cool on a wire rack.
",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Grandma Johnson's Scones",
body: "A basic scone recipe that really does the trick. Tried and tested through 3 generations of kids. Simply the best anywhere!

Ingredients
1 cup sour cream
1 teaspoon baking soda
4 cups all-purpose flour
1 cup white sugar
2 teaspoons baking powder

1/4 teaspoon cream of tartar
1 teaspoon salt
1 cup butter
1 egg
1 cup raisins (optional)
Directions
In a small bowl, blend the sour cream and baking soda, and set aside.
Preheat oven to 350 degrees F (175 degrees C). Lightly grease a large baking sheet.
In a large bowl, mix the flour, sugar, baking powder, cream of tartar, and salt. Cut in the butter. Stir the sour cream mixture and egg into the flour mixture until just moistened. Mix in the raisins.
Turn dough out onto a lightly floured surface, and knead briefly. Roll or pat dough into a 3/4 inch thick round. Cut into 12 wedges, and place them 2 inches apart on the prepared baking sheet.
Bake 12 to 15 minutes in the preheated oven, until golden brown on the bottom.
",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Simple Scones", body: "Make a holiday breakfast -- or afternoon tea -- really special with these sweet bakery treats.

Ingredients
2 cups all-purpose flour
1/3 cup sugar
1 teaspoon baking powder
1/4 teaspoon baking soda
1/2 teaspoon salt

8 tablespoons unsalted butter, frozen
1/2 cup raisins (or dried currants)
1/2 cup sour cream
1 large egg
Directions
Adjust oven rack to lower-middle position and preheat oven to 400 degrees.
In a medium bowl, mix flour, 1/3 cup sugar, baking powder, baking soda and salt. Grate butter into flour mixture on the large holes of a box grater; use your fingers to work in butter (mixture should resemble coarse meal), then stir in raisins.
In a small bowl, whisk sour cream and egg until smooth.
Using a fork, stir sour cream mixture into flour mixture until large dough clumps form. Use your hands to press the dough against the bowl into a ball. (The dough will be sticky in places, and there may not seem to be enough liquid at first, but as you press, the dough will come together.)
Place on a lightly floured surface and pat into a 7- to 8-inch circle about 3/4-inch thick. Sprinkle with remaining 1 tsp. of sugar. Use a sharp knife to cut into 8 triangles; place on a cookie sheet (preferably lined with parchment paper), about 1 inch apart. Bake until golden, about 15 to 17 minutes. Cool for 5 minutes and serve warm or at room temperature.
", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Scones", body: "This is a very simple recipe for scones. You can customize them by adding dried fruit or nuts. Half and half can also be substituted for milk if you wish.
Ingredients
3 cups all-purpose flour
1/2 cup white sugar
5 teaspoons baking powder
1/2 teaspoon salt

3/4 cup butter
1 egg, beaten
1 cup milk
Directions
Preheat oven to 400 degrees F (200 degrees C). Lightly grease a baking sheet.
In a large bowl, combine flour, sugar, baking powder, and salt. Cut in butter. Mix the egg and milk in a small bowl, and stir into flour mixture until moistened.
Turn dough out onto a lightly floured surface, and knead briefly. Roll dough out into a 1/2 inch thick round. Cut into 8 wedges, and place on the prepared baking sheet.
Bake 15 minutes in the preheated oven, or until golden brown.
", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "World's Best Scones! From Scotland to the Savoy to the U.S.", body:
"My grandmother is Scottish and her family made GREAT scones.... In search of the best scone recipe in the world I have adapted their recipe with my own touches and with the famous scone recipe from the world renowned Savoy hotel in London. I now believe I have adapted the BEST SCONE RECIPE IN THE WORLD!
Ingredients
1 3/4 cups all-purpose flour
4 teaspoons baking powder
1/4 cup white sugar
1/8 teaspoon salt
5 tablespoons unsalted butter

1/2 cup dried currants or raisins
1/2 cup milk
1/4 cup sour cream
1 egg
1 tablespoon milk
Directions
Preheat the oven to 400 degrees F (200 degrees C).
Sift the flour, baking powder, sugar and salt into a large bowl. Cut in butter using a pastry blender or rubbing between your fingers until it is in pea sized lumps. Stir in the currants. Mix together 1/2 cup milk and sour cream in a measuring cup. Pour all at once into the dry ingredients, and stir gently until well blended. Overworking the dough results in terrible scones!
With floured hands, pat scone dough into balls 2 to 3 inches across, depending on what size you want. Place onto a greased baking sheet, and flatten lightly. Let the scones barely touch each other. Whisk together the egg and 1 tablespoon of milk. Brush the tops of the scones with the egg wash. Let them rest for about 10 minutes.
Bake for 10 to 15 minutes in the preheated oven, until the tops are golden brown, not deep brown. Break each scone apart, or slice in half. Serve with butter or clotted cream and a selection of jams - or even plain.",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Chef John's Scones", body:
"This recipe is very slightly adapted from one by someone called Friendlyfood on Allrecipes, who claims it was adapted from a version made at the Savoy Hotel in London. I have to say, I am very impressed. It was light, tender, moist and very delicious.

Ingredients
1 3/4 cups all-purpose flour
1/4 cup white sugar
4 teaspoons baking powder
1/8 teaspoon salt
5 tablespoons unsalted butter

1/2 cup milk
1/4 cup sour cream
1/3 cup dried currants
1 egg, lightly beaten
1 tablespoon milk
Directions
Preheat oven to 400 degrees F (200 degrees C).
Whisk flour, white sugar, baking powder, and salt in a mixing bowl. Cut in butter with a knife or pastry blender until the mixture resembles coarse crumbs.
Stir together 1/2 cup milk, sour cream, and currants in a small bowl; stir into flour mixture with a fork until just moistened and holding together.
Transfer dough to a lightly floured surface and pat into rectangle.
Fold the rectangle in thirds. Turn dough a half turn, gather any crumbs, flatten back into a rectangle, and repeat. Cut into eight pieces and place each scone on a silicone baking mat.
Whisk egg and 1 tablespoon milk together in a small bowl; brush mixture on top of each scone.
Bake scones in the preheated oven until risen and golden brown, about 15 minutes. Remove and transfer to cooling rack.
",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Light as a Feather Scones", body:
"Flaky and light, these scones are perfect for snacking or for breakfast. Made from ingredients you probably have on hand, they can be a special treat any time and are one of my favorite breakfast recipes to have with tea or coffee.

Ingredients
cooking spray
2 cups sifted all-purpose flour
1/4 cup white sugar
1 teaspoon baking powder
1/4 teaspoon salt
5 tablespoons unsalted butter, cubed

3/4 cup reduced-fat vanilla yogurt
1 egg, beaten
1 teaspoon vanilla extract
1 tablespoon milk
1 tablespoon white sugar
Directions
Preheat oven to 400 degrees F (200 degrees C). Spray a baking sheet with cooking spray.
Mix flour, 1/4 cup sugar, baking powder, and salt in a bowl. Add butter and mix with fingers until coarse crumbs form. Gently mix yogurt, egg, and vanilla extract into flour mixture until dough is just combined.
Turn the dough out onto a lightly floured surface and knead briefly, for five or six turns. Pat or roll the dough out into a 1-inch thick round. Cut into 8 wedges and place onto the prepared baking sheet. Brush each wedge with milk and sprinkle with remaining 1 tablespoon sugar.
Bake in the preheated oven until lightly browned, about 15 minutes. Serve warm or cool completely and store in an airtight container.
",
author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "Coffee Shop Pumpkin Scones", body: "
After eating a delicious pumpkin scone from my favorite coffee shop, I went home and played around with a base recipe until I came up with what I believe to be a fabulous copy!

Ingredients
Scones:
2 1/4 cups all-purpose flour
3/4 cup white sugar
1 tablespoon baking powder
1 teaspoon ground cinnamon
1/2 teaspoon salt
1/2 teaspoon ground nutmeg
1/4 teaspoon ground cloves
1/4 teaspoon ground ginger
3 tablespoons cold butter

3 tablespoons shortening
3/4 cup canned pumpkin
1 egg
2 tablespoons half-and-half
Glaze:
1 cup confectioners' sugar
2 tablespoons milk
1/4 teaspoon ground cinnamon
1/4 teaspoon pumpkin pie spice
Directions
Preheat oven to 425 degrees F (220 degrees C). Grease a baking sheet.
Mix flour, white sugar, baking powder, 1 teaspoon cinnamon, salt, nutmeg, cloves, and ginger together in a large bowl; cut in butter and shortening using a pastry cutter or 2 knives until mixture is crumbly.
Mix pumpkin, egg, and half-and-half together in a separate bowl; stir into flour mixture just until combined. Turn dough onto a floured work surface and shape into a 1/2-inch-thick square. Cut dough into pizza-like wedges and arrange on the prepared baking sheet.
Bake in the preheated oven until lightly browned, 10 to 15 minutes. Transfer scones to a wire rack to cool.
Whisk confectioners' sugar, milk, 1/4 teaspoon cinnamon, and pumpkin pie spice together in a bowl; drizzle over scones.
", author_id: guest_user.id, notebook_id: notebook1.id)
Tag.create!(name: "food")
Tagging.create!(tag_id: Tag.first.id, note_id: Note.first.id)
