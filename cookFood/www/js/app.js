// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('foodApp', ['ionic'])

  .controller('indexController', function($scope, $ionicPopover){



    /*popover*/
    $ionicPopover.fromTemplateUrl('views/popover/credit.html', {
      scope: $scope
    })
      .then(function (popover) {
        $scope.popover = popover;
      });
    $scope.openHelp = function($event) {
      $scope.popover.show($event);
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });


    /*popover*/
  })


  .factory('recipeDetails', function () {
    return [
      {
        dish: 'Nargisi Koftay',
        category: 'Beef & Mutton Recipes',
        ingrd: ['Beef', 'Egg', 'Gram grind', 'Poppy seeds (grind)', 'Green chillies (chopped)', 'green Coriander', 'bunch(chopped)', 'Onion(chopped)', 'Ginger Garlic paste', 'Garam masala pwd', 'Red Chilli powder', 'Salt', 'Oil', 'Onion(finely sliced)', 'Ginger Garlic paste', 'Red Chilli pwd', 'Tumreric pwd', 'Coriander pwd', 'Gram masala pwd', 'mace & Nutmeg pwd', 'Yogurt', 'Oil', 'Salt', 'Tomato', 'Green chillies'],
        ingrnQty: ['Beef minced 1/2kg', 'Eggs hard bOiled 3', 'Gram grind 1tsp', ' Poppy seeds (grind)1tsp', 'Green chillies 4,5(chopped)', 'green Coriander', 'bunch(chopped)', 'Onion 1small(chopped)', 'Ginger Garlic paste 1tbsp', 'Garam masala pwd 1tsp', 'Red Chilli powder 1tsp', 'Salt to taste', 'Egg 1 for fry', 'Oil for fry 1/2cup', 'Onions 4(finely slIced)', 'Ginger Garlic paste 4tbsp', 'Red chilli pwd 2tsp', 'Tumreric pwd 1/2tsp', 'Coriander pwd 4tbsp', 'Gram masala pwd 1tsp', 'mace & Nutmeg pwd 1/2tsp', 'Yogurt 1/2cup', 'Oil 1cup', 'Tomato 1', 'Green chillies 2,3'],
        Recipe: 'Kofty - Mix all ingredients in mince,dived mixture into 3 part. Cover boiled eggs with mince make smooth oval shape. Dip in beated egg and fry in oil. Let it cool put in freezer for 15 mins then with a sharp knife cut koftay vertically into 2 parts keep aside. Gravy - Heat oil fry onions till golden brown put out from oil and spread on paper and grind. Add ginger garlic paste in oil fry it add red chilli pwd, salt, turmeric, coriender pwd. Fry it properly add yogurt and grind onion nutmeg & mace pwd. Cook till gravi become thick. Now put all Koftay in gravi let it warm on lower flame for 5mins,pour gravi in serving dish and keep all koftay on the gravi. Garnish with tomatoes and green chillies. Serve hot with naan or chapati.',
        dishImg: './img/nargisiKoftay.png',
        dishTime: '90',
        matchingIngrd: 0
      },
      {
        dish: 'Fry Keema',
        category: 'Beef & Mutton Recipes',
        ingrd: ['Beef mince', 'Mutton mince', 'Tomatoes', 'Garam masala powder', 'Salt', 'Dry Coriander (fried and grounded)', 'White Cumin seeds (fried and grounded)', 'Turmeric powder', 'Red Chilli powder', 'Ginger Garlic paste', 'Oil', 'Ginger flakes', 'Green chillies', 'Coriander'],
        ingrnQty: ['Beef mince', 'or Mutton mince', 'Tomatoes – 3 ', 'Garam masala powder – 1 tsp', 'Salt – to taste', 'Dry Coriander (fried and grounded) – 1 tbsp', 'White Cumin seeds (fried and grounded) – 1 tbsp', 'Turmeric powder – ½ tsp', 'Red Chilli powder – 1 ½ tsp', 'Ginger Garlic paste – 1 ½ tbsp', 'Oil – ½ cup', 'Ginger flakes – as required', 'Green chillies', 'Coriander – as required'],
        Recipe: 'Take a pan or wok, put oil and heat it up. Now add chopped onion and fry until light brown, and then add ginger garlic paste and fry. Then ad salt, red chilli powder, turmeric powder and chopped tomatoes and fry well. Now add fried cumin seeds and dry coriander along with mince and cook well. Then add water and cover and let it cook till mince is done and the water dries. Then add garam masala powder and mix well and garnish with ginger flakes, green chillies and fresh coriander. Serve with tandoori paratha.',
        dishImg: './img/fryKeema.jpg',
        dishTime: '75',
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Malai Tikka',
        category: 'Chicken Recipes',
        ingrd: ['Lemon juIce', 'Salt', 'Chicken', 'Yogurt', 'Butter', 'Cream', 'Ginger and Clove Paste', 'Green Cardamoms, Seeds only', 'Ground Cumin', 'Freshly Grated Nutmeg', 'Green Finger Chillies', 'Vegetable Oil', 'Cheddar Cheese'],
        ingrnQty: ['1 tsp Lemon juIce', '1/2 tsp Salt', '2 boneless and skinless Chicken breasts , approx 310g (11 oz), cut into 2cm (4/5 inch) pieces', '2 tbsp Greek-style natural unsweetened yogurt', '30g (1 oz) Butter', '1 tbsp double Cream', '1tbsp adrak lahsun ka masala (see below)', '3 green Cardamoms, seeds only', '1/2 tsp ground cumin', '1/2 tsp freshly grated Nutmeg', '2 green finger chillies, finely chopped', '1 tbsp vegetable Oil', '2 tbsp Cheddar cheese, finely grated'],
        Recipe: 'Sprinkle lemon juice and salt over the chicken pieces, cover and set aside. Mix the yogurt, half the butter, the cream, adrak lahsun ka masala, cardamoms, cumin, nutmeg, chillies, the oil, and cheese and blend into a smooth paste. Pour over the chicken, making sure it is all well coated, and marinate the meat for 1 hour, covered, in the refrigerator. Soak 4 – 6 wooden skewers in cold water for 15 minutes to prevent them burning. Skewer the chicken and barbecue, or grill under a preheated grill, for 10 minutes on each side until light brown and cooked through, or simply bake in a preheated 180°C / 350°F / gas mark 4 oven for 15 minutes or until the chicken is cooked. Halfway through cooking, baste with the remaining butter (melted). Serve hot or cold on the skewers with zeers rice or khasta roti.',
        dishImg: './img/chickenMalaiTikka.jpg',
        dishTime: '55',
        matchingIngrd: 0
      },
      {
        dish: 'Boat Pizza',
        category: 'Chinese',
        ingrd: ['Flour', 'Salt', 'Yeast', 'Sugar', 'Oil', 'Dry Milk Powder', 'Water', 'Chicken', 'Turmeric Powder', 'Red Chili Flakes', 'Soya Sauce', 'Salt', 'Chinese Salt', 'Chili Garlic Sauce', 'Coriander Powder', 'Garam Masala', 'Red Chilli Powder', 'Oil'],
        ingrnQty: ['Flour 2 cups', 'Salt ¾ tsp', 'Instant Yeast 2 tsp', 'Sugar 1 tsp', 'Oil 2 tbsp', 'Dry Milk powder 2 tbsp', 'Warm Water as required...', '1 Chicken breast (cut it into small cubes)', 'Turmeric powder 1/2 tsp', 'Red chili flakes 1+1/2 tsp', 'Soya sauce 2 tbsp', 'Salt to taste', 'Chinese Salt 1/4th tsp', 'Chili Garlic sauce 1 tbsp', 'Coriander powder 1 tsp', 'Garam masala 1/2 tsp', 'Red Chilli powder 1/2 tsp', 'Oil 1/4 cup'],
        Recipe: 'For pizza dough. Mix together flour, salt, yeast, sugar, oil, milk, and knead to smooth dough with warm water. Leave to rise covered for 30 mintz to 1 hour. For chicken mixture. Heat oil add chicken and turmeric powder... Cook on high heat and add rest of the masalas.. Cook on high heat until chicken done n leave oil. For Mayo dressing for each boat. 1 1/2 tbsp mayo 1/2 tsp garlic powder 1 tsp oil Method. Mix it well ... And it’s ready. Me filled it in piping bag using small hole nozzle... U can serve it on side... Other Ingredients: Chopped tomatoes and onions... Cheese of your choice. Red chili flakes to sprinkle on top... Give shape of boat... corners should be thick... making lite cuts on corners with back of the spoon. Add chicken, cheese and vegz. Bake for 20 mints or until cheese done... temp at 200C. Sprinkle red chili flakes and mayo dressing on the top ',
        dishImg: './img/BoatPizza.jpg',
        dishTime: '75',
        matchingIngrd: 0
      },
      {
        dish: 'Cheese Cake with Peanut Butter Ganache',
        category: 'Desserts',
        ingrd: ['Biscuits', 'Butter', 'Cream Cheese', 'Milk Pack Cream', 'Caster Sugar', 'Condense Milk', 'Yogurt', 'Vanilla Essence', 'Gelatin', 'Chocolate', 'Cream', 'Peanut', 'Butter', 'Caster Sugar', 'Walnut For Decoration'],
        ingrnQty: ['2 half rolls oreos', '100 gm Butter', '8 oz Cream cheese', '2 packets nestle Milk pack Cream', '1 cup caster Sugar', '1 tin 14 ounce condense Milk', '1 small pack nestle yogurt (plz don t use any other)', 'Few drops vanilla Essence', '2 tbsp gelatin', '100 gm dark Chocolate', '1 cup Cream', '1 cup peanut Butter', '1 cup caster Sugar', 'Walnut for decoration'],
        Recipe: 'Chop oreos in a food processor to make crumbs mix with melted butter and press onto the bottom of loose cake pan and set in refrigerater to get cool. First dissolve 2 tbsp of gelatim in hot water and mix well, set aside. Now keep cream cheese in a room temperature and beat with an electric beater till soft add sugar and beat again. Add yogurt, condense milk and vanilla essence and beat well. Beat cream in another bowl and add in cheese mixture and beat again. Now pour dissolved gelatin in cheese mixture and fold well and pour all the filling over biscuit base and keep in refrigerator overnight to set the cake. To make ganche: melt chocolate, peanut butter and sugar and cream in a double boiler and mix well and pour little cooled mixture over cake. Sprikle chopped walnuts and set in fridge to set. Serve chill.',
        dishImg: './img/CheeseCakewithPeanutButterGanache.jpg',
        dishTime: '70',
        matchingIngrd: 0
      },
      {
        dish: 'Zarda',
        category: 'Rice Recipe',
        ingrd: ['Rice', 'Sugar', 'Water', 'Ghee', 'Green Cardamom', 'Clove', 'Coconut Slices', 'Khoya', 'Almonds Sliced', 'Pistachio Sliced', 'Ashrafis Sliced', 'Liquid Food Color'],
        ingrnQty: ['Basmati RIce 1/2 Kg', 'Sugar 1/2 Kg', 'Water 8 Cup', 'Ghee 1/2 Cup', 'Green Cardamom 6', 'Clove 6', 'Coconut SlIces 1/2 Cup', 'Khoya 1 Cup', 'Almonds SlIced 2 Tbsp', 'Pistachio SlIced 2 Tbsp', 'Ashrafis SlIced Red 2 Tbsp', 'Ashrafis SlIced Green 2 Tbsp', 'Red Color Few Drops', 'Green Color Few Drops', 'Yellow Color Few Drops'],
        Recipe: 'Soak 1/2 kg rice for half an hour, boil 8 cups water with salt, 6 green cardamoms and 6 cloves. Add rice and cook till nearly done, drain and keep aside. In a pan put 1/2 cup of ghee with 1 cup water and 1/2 kg sugar and cook, stirring until the sugar dissolves and turns into a thick syrup. When the syrup starts to boil add in boiled rice along with 2 tbsp sliced almonds and 2 tbsp sliced pistachios. Cover pan and cook on a medium flame, open lid after 5 minutes, when the syrup starts to dry, lower flame add in all the three colors, simmer for 10 minutes. Lastly sprinkle 1 cup Khoya and 2 tbsp green and red color.',
        dishImg: './img/Zarda.jpg',
        dishTime: '60',
        matchingIngrd: 0
      },
      {
        dish: ' Chicken Burger',
        category: 'Chicken',
        ingrd: ['Chicken', 'Bread', 'Black Pepper', 'White Pepper', 'Soya Sauce', 'Green Chillies', 'Salt', 'Chinese Salt', 'Onion'],
        ingrnQty: ['Chicken breast boneless 1', 'Bread slices 1', 'Black pepper 1/2 tsp', 'White pepper 1/2 tsp', 'Soya sauce 2 tbsp', 'Green chillies 3', 'Salt to taste', 'Chinese Salt 1/2 tsp', 'Onion 1 medium'],
        Recipe: 'Chop green chillies n bread slice in food processor. Keep it aside.now chop onion in processor (chopper). Then make small pieces of boneless chicken n put them in chopper. Chop the chicken to make mince. In a bowl add all the ingredients (chicken mince, bread and chillies, chopped onion, and all the seasoning. Mix well. Put the mixture in fridge for half an hour then make patty n shallow fry it. Now make burgers and add salad, mayo or ketchup according to your choice and enjoy it.',
        dishImg: './img/ChickenBurger.jpg',
        dishTime: '40',
        matchingIngrd: 0
      },
      {
        dish: 'Green Chicken Tikka',
        category: 'Chicken Recipe',
        ingrd: ['Chicken', 'Milk', 'Yogurt', 'Green Jalapeno Peppers', 'Salt', 'Lemon Juice', 'Oil'],
        ingrnQty: ['Chicken: 1 lbs', 'Milk: 1/4 Cup', 'Yogurt: 2 Tablespoon', 'Green Jalapeno Peppers: 4', 'Salt: to your taste', 'Lemon JuIce: 2 tablespoon', 'Oil: 2 tablespoon'],
        Recipe: 'Add chicken and all the ingredients in a in the bowl expect Oil. Marinate for about 2 hours and then add 2 tablespoon oil in the pan and add your marinated chicken in the pan and let it cook until chicken is little brown as you can see in the pic. Please do share your views and enjoy this recipe.',
        dishImg: './img/GreenChickenTikkaRecipe.jpg',
        dishTime: '150',
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Fry',
        category: 'Chicken Recipe',
        ingrd: ['Chicken', 'Ginger', 'Garlic', 'Green chilli', 'Coconut', 'Curry leaves', 'Onion', 'Corainder leaves', 'Turmeric powder', 'Red chilli powder', 'Coriander power', 'Black pepper powder', 'Lemon juice', 'Salt'],
        ingrnQty: ['Boneless Chicken -500gms - slIced into small pieces', 'Ginger- small piece-', 'Garlic -one -', 'Green chilli 3-4', 'Coconut -1/4th', 'Curry leaves', 'Onion - preferebly small ones 10 to 12', 'Corainder leaves', '1/2 Teaspoon of Turmeric powder', '3-4 spoons of red chilly powder', '3 spoons of Coriander power', '1 table spoon black pepper powder', '1 Lemon juIce', 'Salt to taste'],
        Recipe: 'Clean the chicken and slice into small pieces. Marinate with ingrediants mentioned at sr.no.5 and keep it for one hour. cook the chicken with little water till it becomes soft. Heat a thick bottom pan, pour 4 to 5 tablespoon of oil, (prefereably Coconut oil) put the chopped coconut pieces, ginger, garlic, green chilly and curry leaves sourte till golden brown. Now add the cooked chicken and sourte till it becomes crispy and dry. Garnish with onions fried golden brown and coriander leaves and serve hot.',
        dishImg: './img/ChickenFry.jpg',
        dishTime: '150',
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Nuggets',
        category: 'Chinese',
        ingrd: ['Chicken boneless', 'Salt', 'Ted Chili Powder', 'Mustard Powder', 'White Pepper', 'Lemon Juice', 'Roster Sauce', 'Green Chili', 'Soya Sauce', 'Green Coriander', 'Flour', 'Egg', 'Oil', 'Water', 'Baking Powder', 'Oil', 'Bread Crumbs'],
        ingrnQty: ['Chicken boneless 1/2 kg', 'Salt 1 tsp (to taste)', 'Ted chili powder 1/2 tsp', 'Mustard powder 1/2 tsp', 'White pepper 1/2 tsp', 'Lemon juice 1 tbsp', 'Roster sauce 1 tbsp', 'Green chili 1 tsp', 'Soya sauce 1 tbsp', 'Green Coriander 1 tbsp', 'Flour 1 cup', 'Egg whites 2', 'Oil 2 tbsp', 'Water as required', 'Baking powder 1/2 tsp', 'Oil for frying', 'Bread crumbs for coating'],
        Recipe: 'Make mince of chicken n mix all ingredients in it. Rest it for 30 minutes. Mix flour,baking powder,egg whites,oil,water n make a smooth batter. It should not too thin. Now shape the minced chicken with wet hands. First roll them in flour then dip in batter n coat with bread crumbs. Keep it in refrigerate for 20 minutes. Deep fry till golden n serve with ketchup.',
        dishImg: './img/ChickenNuggets.jpg',
        dishTime: '25',
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Shawarma',
        category: 'Chinese',
        ingrd: ['Chicken', 'Mixed Spice', 'Cardamoms', 'Salt', 'Black Pepper Powder', 'Yogurt', 'Malt Vinegar', 'Vegetable Oil', 'Yogurt', 'Tahini Sauce', 'Garlic (Lehsan) (minced)', 'Salt', 'Black Pepper Powder', 'Lemon Juice', 'Fresh Parsley (chopped)', 'Olive Oil', 'Bread', 'Tomatoes', 'Onion', 'Lettuce'],
        ingrnQty: ['8 Chicken Thighs (boneless)', '1 tsp. Mixed SpIce', '¼ tsp. Cardamoms', 'Salt (to taste)', 'Black Pepper Powder', '¼ cup Plain Yogurt', '½ cup Malt Vinegar', '1 tbsp. Vegetable Oil', '¼ cup Plain Yogurt', '½ cup Tahini Sauce', '½ tsp. Garlic (Lehsan) (minced)', 'Salt (to taste)', 'Black Pepper Powder', '2 tbsp. Lemon Juice', '1 tbsp. Fresh Parsley (chopped)', '1 tbsp. Olive Oil', '8 Pita Bread Rounds', '4 medium Tomatoes (thinly slIced)', '½ cup Onion (slIced)', '4 cups Lettuce (shredded)'],
        Recipe: 'In a glass baking dish, mix together malt vinegar, ¼ cup plain yogurt , vegetable oil, mixed spice, cardamom, salt and pepper. Place the chicken thighs into the mixture and turn to coat. Cover and marinate in the refrigerator for at least 4 hours or overnight. Preheat oven to 350 degrees F (175 degrees C). In a small bowl, mix together the tahini, ¼ cup plain yogurt , garlic, lemon juice, olive oil, and parsley. Season with salt and pepper, taste, and adjust flavors if desired. Cover and refrigerate. Cover chicken and bake in the marinade for 30 minutes, turning once. Uncover, and cook for an additional 5 to 10 minutes, or until chicken is browned and cooked through. Remove from the dish, and cut into slices. Place sliced chicken, tomato, onion, and lettuce inside of pita breads. Roll up, and top with the tahini sauce. Note: Preparation Time: 10 Minutes, Cooking Time: 40 Minutes, Ready In: 4 Hours And 50 Minutes',
        dishImg: './img/ChickenShawarma.jpg',
        dishTime: '480',
        matchingIngrd: 0
      },
      {
        dish: 'Zinger Burger',
        category: 'Chinese',
        ingrd: ['Chicken', 'Iceberg Lettuce', 'Eggs', 'Flour', 'Corn flour', 'Mustard powder', 'Baking powder', 'Cheese slices', 'Hot sauce', 'Mayonnaise', 'Hot Milk', 'Flour', 'Sugar', 'White pepper', 'Salt', 'Buns', 'Oil'],
        ingrnQty: ['Chicken fillets: 4 to 5 pieces', 'Iceberg Lettuce: 4 to 5 leaves', 'Eggs: 4 pieces', 'Plain flour: 1/2 cup', 'Corn flour 1/2: cup', 'Mustard powder: 1 Teaspoon', 'Baking powder: 1 Teaspoon', 'Cheese slIces: 4 to 5 pieces', 'Hot sauce: As required', 'Mayonnaise: As required', 'Hot Milk: 1 cup', 'Flour: 1 tablespoon', 'Chicken cube: 1 piece', 'Sugar: 1 Teaspoon', 'White pepper: 1 Teaspoon', 'Salt: As per your taste', 'Buns: 4 to 6 pieces', 'Oil: As required'],
        Recipe: 'Whisk all the eggs in a bowl and place aside. Add crumbled chicken cube to flour. Add chicken cube flour with other dry ingredients in another bowl and mix them. Smear dry ingredients all over the chicken and soak them in the beaten eggs. Repeat the process 3 to 4 times. Fry the chicken until it takes golden brown color. Now take the bun and cut from the middle, toast both sides of bun in the oiled pan and pour hot milk and mayonnaise. Place the chicken fillets, pour hot sauce, iceberg lettuce, cheese slices and close the bun. Wow, your spicy burger is ready! ',
        dishImg: './img/ZingerBurger.jpg',
        dishTime: '50',
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Biryani Recipe',
        category: 'Rice Recipe',
        ingrd: ['Rice', 'Chicken', 'Onion', 'Yoghurt', 'Ginger paste', 'Garlic paste', 'Green chilli paste', 'Tomato puree', 'Red Chilli powder', 'Turmeric powder', 'Cumin powder (roasted)', 'Cardamom powder', 'Garam masala powder', 'Milk', 'Saffron', 'Coriander powder', 'Green Coriander leaves', 'Water', 'Oil', 'Salt'],
        ingrnQty: ['2 cups Basmati- RIce', '3/4kg Chicken pieces', 'Onion 3 large slIced', '1 cup Yoghurt', '1 tsp Ginger paste', '1/2 tsp Garlic paste', '1 tsp Green chilli paste', '1/2 cup Tomato puree', '2 tsp Red Chilli powder', '1 tsp Turmeric powder', '1 tsp Cumin powder (roasted)', '1/2 tsp Cardamom powder', '2 tsp Garam masala powder', '1/2 cup Milk', 'A pinch Saffron', '1 tsp Coriander powder', 'Green Coriander leaves 2 tbsp, chopped', 'Water 3 1/2 cups', '7 tbsp Oil', 'Salt as required'],
        Recipe: 'Make a mixture with tomato yoghurt, puree, green chilli paste, ginger garlic paste, red chilli powder, roasted cumin powder, turmeric powder, garam masala powder, coriander powder and salt. Take the chicken and marinade it in the same mixture. Let it rest for 3-4 hours. Put oil in a pan, heat it and fry onions till they turn golden brown. Now, to this add the marinated chicken and cook the entire mixture for 10 mints. After that in a pressure cooker, take the rice and add 3 1/2 cups of water to it. Also, take the saffron, mix with the milk and add to the rice. Lastly, add the cardamom powder and the chicken pieces, along with the marinade. Mix all the ingredients gently, cover with the cooker lid and pressure cook for 1 whistle.',
        dishImg: './img/ChickenBiryaniRecipe.jpg',
        dishTime: '90',
        matchingIngrd: 0
      },
      {
        dish: 'Tawa Kaleji',
        category: 'Beef & Mutton Recipes',
        ingrd: ['Beef liver', 'Mutton liver', 'Salt', 'Ginger and Garlic paste', 'Red chili powder', 'Turmeric powder', 'Cumin (toasted, crushed)', 'Coriander (toasted, crushed)', 'Black pepper (toasted, crushed)', 'All spice powder', 'Red chili(crushed)', 'Onion', 'Green chili', 'Fresh green Coriander', 'Tomatoes', 'Dry Fenugreek', 'Oil', 'Lemon juice'],
        ingrnQty: ['1 kg Beef or Mutton liver', 'Salt to taste', '2 tbsp Ginger and Garlic paste', 'Red chili powder 1 tsp or to taste', 'Turmeric powder ½ tsp', 'Cumin 1 tsp (toasted, crushed)', 'Coriander 1 tsp (toasted, crushed)', 'Black pepper 1 tsp (toasted, crushed)', 'All spIce powder ¼ tsp', 'Red chili 1 tsp (crushed)', 'Onion 2 finely chopped', 'Green chili 4 (thinly slIced)', 'Fresh green Coriander 2 tbsp finely chopped', 'Tomatoes 250 gm finely chopped', 'Dry Fenugreek ¼ tsp', 'Oil ½ cup', 'Lemon juIce of 1'],
        Recipe: 'Cut liver into little cubes. Marinate it in ginger garlic paste, turmeric powder, red chili powder, crushed cumin, crushed coriander seed, crushed black pepper, all spice powder, chopped onion, dry fenugreek, crushed chilies, finely chopped tomatoes, lemon juice, oil and salt. Heat a griddle or frying pan and grease it. Put the marinated liver on to the hot pan. Stir fry till the liver is cooked and the spices are well combined. Sprinkle some chopped green chili, sliced ginger and chopped green coriander leaves on top. Now serve hot Tawa Kalaiji with naan, chapatti or paratha. ',
        dishImg: './img/tawaKaleji.jpg',
        dishTime: 75,
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Zafrani Pulao',
        category: 'Rice Recipes',
        ingrd: ['Coriander Seeds (Sabut Dhania)', 'Cumin seeds (Sabut Zeera)', 'Salt', 'Fennel seeds (Saunf)', 'Onion', 'Turmeric Powder (Haldi)', 'Saffron (Zafran)', 'Plum (Alou Bukhara)', 'Garlic', 'Chicken', 'Green chilli', 'Rice', 'SpIces Mixture (Gram Masala)', 'Badiyan Flower (Star Aniseed)'],
        ingrnQty: ['Coriander Seeds (Sabut Dhania)— 1 ½ Teaspoonful', 'Cumin seeds (Sabut Zeera)— 1 ½ Teaspoonful', 'Salt— to the taste', 'Fennel seeds (Saunf)— 1 ½ Teaspoonful', 'Onion—2 bulbs', 'Turmeric Powder (Haldi)— ½ Teaspoonful', 'Saffron (Zafran)— 1 packet (5 gram)', 'Plum (Alou Bukhara)— 100 gram', 'Garlic—2 heads', 'Chicken— ½ kg', 'Green chilli— 6 bulbs', 'Rice— 2 cup', 'SpIces Mixture (Gram Masala)— as per requirement', 'Badiyan Flower (Star Aniseed)—6 heads'],
        Recipe: 'Make fine slice of onion. Take a cloth, and add 1 ½ teaspoonful coriander seeds, 1 ½ teaspoonful cumin seeds, & 1 ½ teaspoonful fennel seed on it. Enclose of all three items in the sac (potli) of the cloth. Take a pan, put half cup oil, heat it up, and then add sliced onion and the sac (potli). When onion becomes soft, add all the ground garlic (4 bulbs) in it. Fry it for some moments, then put cinnamon stick (Dar Cheeni), cumin powder (Zeera), Green cardamom (Chotti Elaichi ), Black cardamom (Badi Elaichi), whole Black pepper (Sabut Kali Mirch), Bay leaf (Tez Pat). Mix the whole Masala you have made and then add chicken and mix it well. Cut 3-4 green chilies from middle and put into the Mutton. Add ½ spoon of turmeric powder (Haldi) and salt in chicken and fry it for 1 or 2 minutes. Now water (1 ½ glasses), cover and let it be cooked. When water starts boiling, reduce the flame. When chicken is fried, add rice and half cup water in it. When rice becomes tender and water is evaporated, add a plum and saffron in it. When rice is cooked take out the dish and make a garnish of green coriander (sabz Dhania). Tasty Chicken Zafrani Pulao is ready.',
        dishImg: './img/chickenZafraniPulao.jpg',
        dishTime: '55',
        matchingIngrd: 0
      },
      {
        dish: 'Coffee Munch',
        category: 'Desserts',
        ingrd: ['Cream', 'Condensed Milk', 'Coffee', 'Biscuits', 'Fruit Cake', 'Chocolate Chips'],
        ingrnQty: ['2 packs Cream', '400gms condensed Milk', '2 tsps Coffee', 'Marie biscuits', 'Fruit cake', 'Chocolate Chips'],
        Recipe: 'Mix cream and condensed milk in a bowl. Beat it till it thickens. Add 2tsps of coffee in 2cups of hot water. In a separate bowl make a layer of Marie biscuits dipped in coffee(step 3). Add a layer of cream n milk mixture (step 2). Add a layer of Marie biscuits and then fruit cake dipped in coffee.Repeat. Sprinkle chocolate chips',
        dishImg: './img/CoffeeMunch.jpg',
        dishTime: '15',
        matchingIngrd: 0
      },
      {
        dish: 'Dal Sandwich',
        category: 'Chinese',
        ingrd: ['Moong dal', 'Salt', 'Red Chilli powder', 'Turmeric powder', 'Red chilli', 'Oil', 'Mustard seeds', 'Garam masala powder', 'Bread slices', 'Potato', 'Tomatoes', 'Onion', 'Beet Root', 'Coriander Chutney', 'Margarine', 'Butter', 'Salt', 'Red Chilli powder', 'Black Pepper Powder', 'Oil', 'Fresh Coriander', 'Nylon Sev', 'Chaat masala'],
        ingrnQty: ['1 cup Moong dal (soaked in 2 cups Water)', 'Salt as per taste', '1/2 tsp red Chilli powder', '1/4 tsp Turmeric powder', '1 whole dried red chilli', '1/2 tsp vegetable Oil', '1/2 tsp Mustard seeds', '1/4 tsp Garam masala powder', 'For making Sandwich you need', '8 Bread slIces (brown or white)', '1 medium size potato (bOiled and peeled)', '2 small size Tomatoes thinly chopped', '1 medium size onion', '1 beet root (bOiled and peeled)', '4 tbsp Coriander chutney', '2 tbsp Margarine or Butter', 'Salt as per taste', '1/2 tsp red Chilli powder', '1/2 tsp black pepper powder', '2 tbsp vegetable Oil', 'Fresh Coriander chopped', 'Nylon Sev (store bought)', 'Chaat masala to taste'],
        Recipe: 'Heat the pressure cooker and add soaked dal, water, salt, red chilli powder and turmeric powder. Mix well, cover the cooker with its lid and pressure cook dal for 4-5 whistles. Uncover and mash completely, add water if required. Now leave dal to boil on medium low flame. The consistency of dal must thick enough to make the sandwich. Heat the oil in a saucepan, add mustard seeds, curry leaves and dried red chilli.Allow to splutter and pour directly over the boiling dal. Finally stir with garam masala powder and keep aside. Cut the potatoes, tomatoes, onion and beetroot in thin round slices. Place all the bread slices on flat chopping board. Apply butter and coriander chutney on each and every bread slice. Place few rounds of potatoes, beetroot, tomato and onion on 4 bread slices. Sprinkle little bit of salt and cover with another 4 buttery bread slices. Heat the tawa and drizzle some oil. Place the sandwiches on heating tawa and toast them on medium high flame until turn into nice golden brownin color. Allow them to cook on low flame and put a pressure upon the sandwiches. Arrange each toast on individual serving plate, cut into 4-6 pieces, drop few spoons of dal (dal must be piping hot), sprinkle the spices, coriander and nylon sev. Serve immediately. Tips: You can put the slices of cucumber and capsicum inside the bread slices. Serve this sandwich immediately, else will become soggy. You can top it with grated cheese for making more yummy. These sandwiches can be made in the oven or toast maker also.',
        dishImg: './img/DalSandwich.jpg',
        dishTime: '45',
        matchingIngrd: 0
      },
      {
        dish: 'Sandwiches',
        category: 'Chinese',
        ingrd: ['Potatoes', 'Coriander leaves', 'Turmeric powder', 'Garlic paste', 'Tomato sauce', 'Lemon juice', 'Salt', 'Bread'],
        ingrnQty: ['1 kg bOiled and mashed Potatoes', '1 bunch Coriander leaves', '1/2 tsp Turmeric powder', '1 tsp Garlic paste', 'Tomato sauce for garnish', '4 tbsp of Lemon juIce', '1 tsp Salt', 'Bread slIces (as required)'],
        Recipe: 'Mix all the ingredients except tomato sauce and bread slices, together and make small kebabs. Place a kebab on a slice, apply ketchup then place another slice on it and then place it in a sandwich maker. Chat pati sandwiches are ready to eat.',
        dishImg: './img/Sandwiches.jpg',
        dishTime: '20',
        matchingIngrd: 0
      },
      {
        dish: 'Spicy Crispy Chicken Cutlets with Hot Sauce',
        category: 'Chinese',
        ingrd: ['Frozen Burger Patty', 'Bread', 'Mayonnaise', 'Salt', 'Black Pepper', 'Eggs', 'Salad Leaf'],
        ingrnQty: ['Frozen Burger Patty 2', 'Bread slices 6', 'Mayonnaise 6 to 7 tbsp or as required', 'Salt 1/4 tsp or according to your taste', 'black pepper 1/4 tsp', 'eggs 2 boiled', 'salad leaf'],
        Recipe: 'Shallow fry the frozen patty as directed on its box. Let it cool. now chop that patty finely with knife. Add mayonnaise,salt & black pepper in chopped patty & make a thick mixture. Boil eggs & cut them into slices. Toast bread slices, first apply the patty mixture on bread slice. Cover it with second slice then put egg pieces on second slice n sprinkle some black pepper. Cover it with third slice.add salad leaf if u want.',
        dishImg: './img/DifferentStyleClubSandwich.jpg',
        dishTime: '25',
        matchingIngrd: 0
      },
      {
        dish: 'Green Chicken Tikka',
        category: 'Chicken Recipe',
        ingrd: ['Chicken', 'Milk', 'Yogurt', 'Green Jalapeno Peppers', 'Salt', 'Lemon Juice', 'Oil'],
        ingrnQty: ['Chicken: 1 lbs', 'Milk: 1/4 Cup', 'Yogurt: 2 Tablespoon', 'Green Jalapeno Peppers: 4', 'Salt: to your taste', 'Lemon JuIce: 2 tablespoon', 'Oil: 2 tablespoon'],
        Recipe: 'Add chicken and all the ingredients in a in the bowl expect Oil. Marinate for about 2 hours and then add 2 tablespoon oil in the pan and add your marinated chicken in the pan and let it cook until chicken is little brown as you can see in the pic. Please do share your views and enjoy this recipe.',
        dishImg: './img/GreenChickenTikkaRecipe.jpg',
        dishTime: '150',
        matchingIngrd: 0
      },
      {
        dish: 'Keema Stuffed Naan',
        category: 'Naan & Bread Recipes',
        ingrd: ['Flour', 'Oil', 'Yeast', 'Salt', 'Sugar', 'Curd', 'Water', 'Butter', 'Beef minced', 'Onion', 'Ginger Garlic paste', 'Red chili powder', 'Salt', 'Garam masala', 'Turmeric powder', 'Green chilies', 'Green Coriander', 'Oil', 'Crushed red chili', 'Chopped green Coriander', 'White cumin'],
        ingrnQty: ['Flour 2cups', 'Oil	¼ cup',  'Yeast	1 tbsp', 'Salt	½ tsp', 'Sugar 2 tsp', 'Curd 2tbsp', 'Warm Water as required', 'Butter 2 tbsp', 'Beef minced 250 grams', 'Small sized onion 1', 'Ginger Garlic paste 2tsp', 'Red chili powder ½ tsp', 'Salt ½ tsp', 'Tara Garam masala 1tsp', 'Turmeric powder	¼ tsp', 'Green chilies	3-4', 'Green Coriander	¼ cup', 'Oil 2-3 tbsp', 'Crushed red chili ½ tsp', 'Chopped green Coriander ½ tsp', 'White cumin ¼ tsp'],
        Recipe: 'For filling heat oil in a pan and fry 1 onion. Add 250 grams minced beef and 2 tsp of garlic ginger paste and allow to fry. Then add ½ tsp red chili powder,1/2 tsp of salt, 1tsp tara garam masala,1/4 tsp. Turmeric powder, ½ tsp crushed red chili and ¼ tsp white cumin powder in it. When meat is tender then add ¼ cup green coriander and 3-4 chilies. Now allow to cool. For making dough take 2 cups of flour,1 tbsp of instant yeast ,1/2 tsp salt,2 tsp sugar,2 tbsp of curd and some water and cover it. Then make small balls and with help of rolling pin flattened the balls. Then fill the centre with prepared filling and make it again in shape of ball. Now again flattened the balls with help of your hands and cover for some time. Now fry or bake in oven 210 degree. In last brush the butter and dish out.',
        dishImg: './img/keemaStuffedNaan.jpg',
        dishTime: 75,
        matchingIngrd: 0
      },
      {
        dish: 'Mozzarella Sticks',
        category: 'Chinese',
        ingrd: ['Mozzarella Block', 'Flour', 'Egg', 'Bread Crumbs', 'Honey', 'Dijon Mustard Paste', 'Salt', 'Pepper'],
        ingrnQty: ['Mozzarella block 500 gms', 'Flour', 'Egg liquid of 4 eggs (can be replaced with flour batter)', 'Bread crumbs', 'Honey 100 ml', 'Dijon mustard paste 30 ml', 'Salt', 'Pepper'],
        Recipe: 'Dressing : In a mixing bowl. Add honey, mustard salt and pepper and whisk. Mozzarella stick : 1. Cut battons (fish finger size) of cheese 2. Dust with flour, dip in seasoned egg liquid and coat with bread crumbs. If you want to omit eggs, make liquid batter of flour and water and coat with bread crumbs. 3. Deep fry and serve hot with chilled honey mustard dip. Mango salsa or Marinara sauce also serves well with it.',
        dishImg: './img/MozzarellaSticks.jpg',
        dishTime: '75',
        matchingIngrd: 0
      },
      {
        dish: 'Mango Ice Cream',
        category: 'Desserts',
        ingrd: ['Fresh Cream', 'Condense Milk', 'Evaporated Milk', 'Food color', 'Mango Essence'],
        ingrnQty: ['Fresh Cream 200 gram', 'Condense Milk 140 grams', 'Evaporated Milk 160 gram', 'Food color 1/2 Tea spoon', 'Mango Essence 1 Tea spoon'],
        Recipe: 'Beat fresh cream in a bowl till it convert into very thick form. put food color & mango essence in it & beat again. Beat evaporated milk in another bowl very well then pour condense milk in it and beat again. Pour this milk mixture in cream mixture then beat again. Pour this mixture in an air tight container then put it into freezer for 7-8 hours. If you want to add some pieces of mango o you mix it after 4-5 hours of freezing then put it again into freezer. Enjoy your home made delicious mango ice cream.',
        dishImg: './img/MangoIceCream.jpg',
        dishTime: '480',
        matchingIngrd: 0
      },
      {
        dish: 'Mughlai Shahi Tukday',
        category: 'Desserts',
        ingrd: ['Bread', 'Milk', 'Water', 'Sugar', 'Food Colour', 'Almonds', 'Pista', 'Ceshewnuts', 'Condense Milk', 'Cream', 'Oil'],
        ingrnQty: ['10 Bread slices', '2 cups Milk', '2 cups Water', '1 1/2 cup Sugar', '1/2 tsp Orange food colour', '1 cup chopped Almonds, pista and ceshewnuts', '4 tbsp condense Milk', '4 tbsp Cream', 'Oil to toast Bread slIces'],
        Recipe: 'First toast bread slices from both sides with oil or ghee. To make sugar syrup, mix water and milk and cook low heat till milk reduces, add sugar and cook till sugar dissolves. Add orange colour and mix well. Now put bread slices in the flatten pyrex dish and pour all milk mixture. Sprinkle nuts. In another bowl, mix condense milk and cream well and spread over shahi tukras to give it rich aroma. Just try, they will be very delicious.',
        dishImg: './img/MughlaiShahiTukday.jpg',
        dishTime: '100',
        matchingIngrd: 0
      },
      {
        dish: 'Mutton Yakhni Pulao',
        category: 'Rice Recipes',
        ingrd: ['Mutton', 'Basmati Rice', 'Salt', 'Fennel seed (saunf)', 'Ginger', 'Cloves', 'Black pepperCorns', 'Cinnamon stick', 'Bay leaf', 'Green Cardamom powder', 'Black Cardamom', 'Ghee', 'Cumin seeds (Zeera)', 'Green chilies stemmed', 'Cup Mutton stock', 'Yogurt'],
        ingrnQty: ['1/2 kg Mutton 1 inch pieces', '1.5 cup Basmati rIce', 'Salt to taste', '1 tblsp Fennel seed (saunf)', '1/2" piece Ginger (Adrak)', '3 to 4 Cloves', '10 Black pepperCorns', '1" stick Cinnamon stick', '2 Bay leaf', '1/2 tsp Green Cardamom powder', '2 Black Cardamom', '4 tblsp Ghee', '1/2 tblsp Cumin seeds (Zeera)', '3 Green chilies stemmed', '3 cup Mutton stock', '1 cup Yogurt'],
        Recipe: 'Soak rice in three cups of water for half an hour. Drain and set aside. Mix with salt, fennel, ginger, green cardamom powder in mixer with yogurt and make a paste then add cloves, black peppercorns, cinnamon, bay leaves and black cardamom and marinate mutton in this for 30 minutes. Heat ghee in a pan. Add cumin seeds, sauté for a few seconds. Add the mutton along with marinade and mix well. Cook on high flame for few min, reduce flame, place lid and cook for 10 to 15 min (depend on pieces size) or till the mutton is three fourth cooked. Add stock and bring to a boil. Add salt if needed, reduce heat and add the strained basmati rice. Cover with lid and cook on low flame till the rice and chicken are cooked. This could take approx 15 min. when water almost dry and rice cooked, wait 10 min but do not remove lid. Its called "Dam" Serve hot with Raita and salad.',
        dishImg: './img/MughlaiShahiTukday.jpg',
        dishTime: 120,
        matchingIngrd: 0
      },
      {
        dish: 'Chicken Strips Recipe',
        category: 'Chinese',
        ingrd: ['Chicken', 'Salt', 'Black pepper', 'Soy Sauce', 'Vinegar', 'Flour', 'Sesame Seeds'],
        ingrnQty: ['Chicken stripes half kg', 'Salt as required', 'black pepper to taste', 'Soy sauce n Vinegar for marination', 'mix plain flour with Sesame Seeds for coating'],
        Recipe: 'wash chicken stripes thoroughly. Mix 1 table spoon vinegar nd 1 table spoon soy sauce. Add salt n black pepper. Add chicken strips in the mixture n set aside for 30 minutes. Heat oil in pan. Coat each strip in plain flour n sesame seeds. Fry until golden. Serve hot with ketchup or chili sauce',
        dishImg: './img/ChickenStripsRecipe.jpg',
        dishTime: '50',
        matchingIngrd: 0
      },
      {
        dish: 'Sandwiches',
        category: 'Chinese',
        ingrd: ['Potatoes', 'Coriander leaves', 'Turmeric powder', 'Garlic paste', 'Tomato sauce', 'Lemon juice', 'Salt', 'Bread'],
        ingrnQty: ['1 kg bOiled and mashed Potatoes', '1 bunch Coriander leaves', '1/2 tsp Turmeric powder', '1 tsp Garlic paste', 'Tomato sauce for garnish', '4 tbsp of Lemon juIce', '1 tsp Salt', 'Bread slIces (as required)'],
        Recipe: 'Mix all the ingredients except tomato sauce and bread slices, together and make small kebabs. Place a kebab on a slice, apply ketchup then place another slice on it and then place it in a sandwich maker. Chat pati sandwiches are ready to eat.',
        dishImg: './img/Sandwiches.jpg',
        dishTime: '20',
        matchingIngrd: 0
      },
      {
        dish: 'Shami Kabab',
        category: 'Beef & Mutton Recipes',
        ingrd: ['Beef',	'Split Chickpeas (Chana ki Daal)', 'Ginger', 'Garlic', 'Whole Red Chillies', 'Green Chillies', 'Hot SpIce Powder', 'Eggs', 'Salt', 'Oil'],
        ingrnQty: ['Boneless Beef - 500 grams',	'Split Chickpeas (Chana ki Daal): 250 grams', '1 Small Ginger',	'Garlic: 8 Cloves', 'Whole Red Chillies: 8 pcs', 'Green Chillies: 6 pcs', 'Hot SpIce Powder: a pinch',	'Eggs: 2 pcs',	'Salt: To taste', 'Oil'],
        Recipe: 'First of all boil the meat, pulses and all other spices together in a pot. Now grind the ingredients very well in a food processor. After grinding the stuff, make patties of the batter with your hands. Add oil in a pan and fry the patties. Kababs are ready. Have them traditional Pakistani way; enjoy with coriander(dhania) chutney or tomato ketchup. ',
        dishImg: './img/shamiKabab.jpg',
        dishTime: 75,
        matchingIngrd: 0
      },
      {
        dish: 'Spicy Crispy Chicken Cutlets with Hot Sauce',
        category: 'Chinese',
        ingrd: ['Chicken', 'Green chillies', 'Cheese', 'Ground Pepper', 'Coriander leaves', 'Oregano', 'Corn Flour', 'Eggs', 'Breadcrumbs', 'Salt', 'Oil'],
        ingrnQty: ['Boiled shredded Chicken (500 grams)', 'Green chillies-4 (minced)', 'Cheddar cheese-2 cubes (grated)', 'Ground pepper-1 tablespoon', 'Coriander leaves (chopped)-1 cup', 'Oregano-1 tablespoon (optional)', 'Corn Flour-2 tablespoons', 'Eggs-2 (beaten)', 'Breadcrumbs-2 cups', 'Salt as per taste', 'Oil-half a pan for deep frying'],
        Recipe: 'Boil the chicken with pepper and then shred it with your fingers. If you have taken boneless chicken then you need to boil it for just about 4-5 minutes and your shredding job will be easier. If you have not taken boneless chicken then choose pieces like the leg or breast that has more meat. Now pour all the cutlet spices like pepper, coriander leaves, green chillies, salt and oregano (if you are using it) in a mixing bowl with the chicken and mix it well. Grate cheese over it and stir to mix. Mix corn flour with 2 tablespoons of water and pour it into the mix. Mix the the ingredients into a thick consistency and form flat cutlets out of it.Beat eggs in a flat bottom bowl and heat oil in a deep pan. Spread out the bread crumbs on a sheet of kitchen paper. Dip the cutlets in beaten eggs and then roll them in the bread crumbs. Deep fry the cutlets on low flame until they are cooked well. You can serve these spicy crispy chicken cutlets with mayonnaise or hot chilli sauce enjoy',
        dishImg: './img/SpicyCrispyChickenCutletswithHotSauce.jpg',
        dishTime: '45',
        matchingIngrd: 0
      },
      {
        dish: 'Strawberry-Chocolate Trifile',
        category: 'Desserts',
        ingrd: ['Food Cake', 'Butter', 'Softened', 'Eggs', 'Water', 'Cooking Spray', 'Fat Milk', 'Gluten-Free Vanilla Instant Pudding Mix', 'Frozen Reduced-Calorie Whipped', 'Chambord', 'Strawberries', 'Chocolate Syrup'],
        ingrnQty: ['1 (15-ounce) package gluten-free devils food cake mix (such as Betty Crocker)', '1/2 cup unSalted Butter, softened.', '3 large eggs.', '1 cup Water.', 'Cooking spray.', '2 1/2 cups 1% low-fat Milk.', '1 (1-ounce) package gluten-free vanilla instant pudding mix.', '1 1/2 (8-ounce) containers frozen reduced-calorie whipped.', 'topping, thawed and divided.', '1/4 cup Chambord (raspberry-flavoured liqueur; optional)', '3 cups strawberries, slIced.', '2 tablespoons Chocolate syrup.'],
        Recipe: 'reheat oven to 350°. Prepare cake mix according to package directions, using unsalted butter, eggs, and 1 cup water. Pour batter into an 8-inch square metal baking pan coated with cooking spray.  Bake at 350° for 38 minutes or until a wooden pick inserted in center comes out clean. Cool in pan 10 minutes. Remove from pan; cool completely on a wire rack. Combine milk and pudding mix in a medium bowl, stirring with a whisk 2 minutes. Cover and chill 5 minutes. Fold in 1 container whipped topping. Cut cake into 1-inch squares. Layer half of cake in bottom of a 4-quart trifle bowl. Brush cake with 2 tablespoons liqueur, if desired; spread half of pudding mixture over cake. Layer half of strawberries over pudding. Reserve 1/4 cup of remaining whipped topping. Top strawberries with remaining 1 1/4 cups whipped topping. Repeat layers with remaining cake, liqueur, if desired, pudding mixture, and strawberries. Cover and chill 8 hours. Dollop center of trifle with reserved 1/4 cup whipped topping, and drizzle with chocolate syrup just before serving. Note:You can also serve this trifle in individual glasses. You may need to cut the 1-inch cubes of cake into smaller pieces, and then just layer in the ingredients, creating two layers. Top each with a dollop of whipped topping; drizzle with chocolate sauce',
        dishImg: './img/StrawberryChocolateTrifile.jpg',
        dishTime: '15',
        matchingIngrd: 0
      },
      {
        dish: 'Tandoori Chicken',
        category: 'Chicken Recipes',
        ingrd: ['Skinned Chicken', 'Lemon Juice', 'Garlic Clove', 'Ginger', 'Chilli', 'Water', 'Yogurt', 'Grouna Cumin (Jeera)', 'Garam masala', 'Paprika', 'Salt', 'Food Colour', 'Melted Ghee', 'Lemon Wedges', 'Onion'],
        ingrnQty: ['4 skinned Chicken Quarters', '2 tblsp Lemon Juice ', '1 Garlic Clove (Lasun)', '1 inch piece peeled and coarsely chopped Fresh Ginger (Adrak)', '1 Green chilli (Hari mirch)', '1 tblsp Water', '4 tblsp Natural Yogurt (Dahi)', '1 tsp Grouna Cumin (Jeera)', '1 tsp Garam masala', '1 tsp Paprika', '1 tsp Salt (Namak)', 'A few drop of Yellow Food Colouring', '2 tblsp melted Ghee', 'Lemon Wedges', 'Onion (Pyaj) rings'],
        Recipe: 'Make 3-4 cuts in each chicken quarter using a knife. Put the chicken in an oven proof dish. Combine lemon juice. Rub it into the incisions. Cover it. Let it marinate for about 30 minutes. Combine garlic, ginger and green chilli and water in a blender. Grind to make a smooth paste like mixture. Combine the paste to yoghurt, ground cumin, garam masala, paprika, salt, food colouring and the melted ghee. Mix all the ingredients well. Spread them over marinated chicken pieces. Coat the pieces with the yoghurt marinade. Cover it. Let it marinate at room temperature for about 5 hours. Turn once or twice maximum. Place chicken in a oven at 325 F. Let it roast for 1 hour. Bast frequently and turn once. The chicken should be tender and most of the marinade should be evaporated. Then grill the chicken over hot charcoal. Garnish it with lemon wedges and onion rings.',
        dishImg: './img/tandooriChicken.jpg',
        dishTime: 300,
        matchingIngrd: 0
      },
      {
        dish: 'Coffee Munch',
        category: 'Desserts',
        ingrd: ['Cream', 'Condensed Milk', 'Coffee', 'Biscuits', 'Fruit Cake', 'Chocolate Chips'],
        ingrnQty: ['2 packs Cream', '400gms condensed Milk', '2 tsps Coffee', 'Marie biscuits', 'Fruit cake', 'Chocolate Chips'],
        Recipe: 'Mix cream and condensed milk in a bowl. Beat it till it thickens. Add 2tsps of coffee in 2cups of hot water. In a separate bowl make a layer of Marie biscuits dipped in coffee(step 3). Add a layer of cream n milk mixture (step 2). Add a layer of Marie biscuits and then fruit cake dipped in coffee.Repeat. Sprinkle chocolate chips',
        dishImg: './img/CoffeeMunch.jpg',
        dishTime: '15',
        matchingIngrd: 0
      },
      {
        dish: 'Zinger Burger',
        category: 'Chinese',
        ingrd: ['Chicken', 'Iceberg Lettuce', 'Eggs', 'Flour', 'Corn flour', 'Mustard powder', 'Baking powder', 'Cheese slices', 'Hot sauce', 'Mayonnaise', 'Hot Milk', 'Flour', 'Sugar', 'White pepper', 'Salt', 'Buns', 'Oil'],
        ingrnQty: ['Chicken fillets: 4 to 5 pieces', 'Iceberg Lettuce: 4 to 5 leaves', 'Eggs: 4 pieces', 'Plain flour: 1/2 cup', 'Corn flour 1/2: cup', 'Mustard powder: 1 Teaspoon', 'Baking powder: 1 Teaspoon', 'Cheese slIces: 4 to 5 pieces', 'Hot sauce: As required', 'Mayonnaise: As required', 'Hot Milk: 1 cup', 'Flour: 1 tablespoon', 'Chicken cube: 1 piece', 'Sugar: 1 Teaspoon', 'White pepper: 1 Teaspoon', 'Salt: As per your taste', 'Buns: 4 to 6 pieces', 'Oil: As required'],
        Recipe: 'Whisk all the eggs in a bowl and place aside. Add crumbled chicken cube to flour. Add chicken cube flour with other dry ingredients in another bowl and mix them. Smear dry ingredients all over the chicken and soak them in the beaten eggs. Repeat the process 3 to 4 times. Fry the chicken until it takes golden brown color. Now take the bun and cut from the middle, toast both sides of bun in the oiled pan and pour hot milk and mayonnaise. Place the chicken fillets, pour hot sauce, iceberg lettuce, cheese slices and close the bun. Wow, your spicy burger is ready! ',
        dishImg: './img/ZingerBurger.jpg',
        dishTime: '50',
        matchingIngrd: 0
      }
      /*
       { dish: 'Sandwitch',
       pIngr: ['Egg', 'Bread'],
       sIngr: ['Salt', 'Oil', 'Blackpepper'],
       Recipe: ['Fry the egg', 'Place on bread', 'Use salt', 'Eat and enjoy']
       },
       { dish: 'Frech Toast',
       pIngr: ['Egg', 'Bread'],
       sIngr: ['sugar', 'Oil'],
       Recipe: ['Mash the egg with sugar', 'Dip the bread', 'Fry that dipped slice', 'Eat and enjoy']
       },
       { dish: 'Frech Toast',
       pIngr: ['Egg', 'Flour'],
       sIngr: ['sugar', 'Oil'],
       Recipe: ['Mash the egg with sugar', 'Dip the bread', 'Fry that dipped slice', 'Eat and enjoy']
       }*/

    ];
  })




  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.style('striped').position('bottom');

    $stateProvider
      .state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: 'views/tabs/tabs.html'
      })
      .state('tabs.cookByIngr', {
        url: '/cookByIngr',
        views: {
          'cookByIngr-tab': {
            templateUrl: 'views/cookByIngr/cookByIngr.html',
            controller: 'cookByIngrController'
          }
        }
      })
      .state('tabs.cookByRecip', {
        url: '/cookByRecip',
        views: {
          'cookByRecip-tab': {
            templateUrl: 'views/cookByRecip/cookByRecip.html',
            controller: 'cookByRecipController'
          }
        }
      })
      .state('tabs.availRecepie', {
        url: '/cookByRecip',
        views: {
          'cookByIngr-tab': {
            templateUrl: 'views/availRecepie/availRecepie.html',
            controller: 'availRecepieController'
          }
        }
      })
      .state('recipe', {
        url: '/recipe/:partyID',
        controller: 'recipeController',
        templateUrl: 'views/recipe/recipe.html'
      })
      .state('recipeByRecipeSelection', {
        url: '/recipeByRecipeSelection/:recepID',
        controller: 'recipeByRecipeSelectionController',
        templateUrl: 'views/recipeByRecipeSelection/recipeByRecipeSelection.html'
      })

      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: 'views/home/home.html'
      })

      .state('credits', {
        url: '/credits',
        controller: 'creditsController',
        templateUrl: 'views/credits/credits.html'
      });

    $urlRouterProvider
      .otherwise('/home');
  })











.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
