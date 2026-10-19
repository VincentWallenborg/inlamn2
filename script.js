//data
const recipes = [
    {
        "title": "Fluffy Buttermilk Pancakes",
        "time": "20 min",
        "img": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=640&h=480&fit=crop",
        "category": "Breakfast",
        "description": "Thick, soft pancakes with crisp golden edges. The buttermilk gives them a slight tang and keeps the crumb tender, while a short rest for the batter makes them rise properly in the pan. Serve with butter, maple syrup and whatever berries you have at home.\n\nIngredients (serves 4): 250 g plain flour, 2 tbsp sugar, 2 tsp baking powder, 1/2 tsp baking soda, 1/2 tsp salt, 400 ml buttermilk, 2 eggs, 50 g melted butter, extra butter for frying.\n\nMethod:\n1. Whisk the flour, sugar, baking powder, baking soda and salt in a large bowl.\n2. Whisk the buttermilk, eggs and melted butter in another bowl, then stir into the dry ingredients until just combined. A few lumps are fine.\n3. Let the batter rest for 5 minutes.\n4. Melt a little butter in a pan over medium heat and add a ladle of batter per pancake.\n5. Fry for 2-3 minutes until bubbles appear on the surface, flip and fry 1-2 minutes more.\n6. Serve warm with butter, maple syrup and berries."
    },
    {
        "title": "Avocado Toast with Poached Egg",
        "time": "10 min",
        "img": "https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?w=640&h=480&fit=crop",
        "category": "Breakfast",
        "description": "Toasted sourdough topped with roughly mashed avocado, lemon and chili flakes, finished with a soft poached egg. It takes ten minutes and keeps you full until lunch. A pinch of flaky salt on top makes all the difference.\n\nIngredients (serves 2): 2 slices sourdough bread, 1 ripe avocado, 2 eggs, 1 tbsp lemon juice, 1 tbsp white vinegar, chili flakes, flaky salt, black pepper.\n\nMethod:\n1. Bring a pan of water to a gentle simmer and add the vinegar.\n2. Mash the avocado with the lemon juice, salt and pepper, leaving it a little chunky.\n3. Crack each egg into a cup, slide it into the water and poach for 3 minutes. Lift out with a slotted spoon and drain on paper.\n4. Toast the bread and spread the avocado on top.\n5. Place an egg on each slice and finish with chili flakes, flaky salt and pepper."
    },
    {
        "title": "Overnight Oats with Berries",
        "time": "5 min",
        "img": "https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?w=640&h=480&fit=crop",
        "category": "Breakfast",
        "description": "Stir together oats, yogurt, milk and chia seeds in the evening and breakfast is ready when you wake up. The oats turn creamy overnight without any cooking. Top with fresh berries, honey and a handful of toasted nuts.\n\nIngredients (serves 2): 100 g rolled oats, 200 ml milk, 150 g plain yogurt, 1 tbsp chia seeds, 1 tbsp honey, a pinch of salt, 150 g mixed berries, a handful of toasted nuts.\n\nMethod:\n1. Mix the oats, milk, yogurt, chia seeds, honey and salt in a bowl.\n2. Divide between two jars, cover and refrigerate for at least 6 hours or overnight.\n3. Stir in the morning and add a splash of milk if the oats are too thick.\n4. Top with berries, nuts and a little extra honey."
    },
    {
        "title": "Classic Caesar Salad",
        "time": "15 min",
        "img": "https://images.unsplash.com/photo-1746211108786-ca20c8f80ecd?w=640&h=480&fit=crop",
        "category": "Lunch",
        "description": "Crisp romaine, crunchy garlic croutons and plenty of parmesan, tossed in a creamy dressing with lemon and anchovy. The dressing is whisked together in a couple of minutes and tastes far better than anything from a bottle. Add grilled chicken to make it a full meal.\n\nIngredients (serves 2): 1 large head romaine lettuce, 2 slices day-old bread, 4 tbsp olive oil, 1 garlic clove, 2 anchovy fillets, 3 tbsp mayonnaise, 1 tbsp lemon juice, 1 tsp Dijon mustard, 40 g grated parmesan, black pepper.\n\nMethod:\n1. Cut the bread into cubes and fry in 2 tbsp olive oil over medium heat until golden and crisp. Season with salt.\n2. Mash the garlic and anchovies to a paste, then whisk with the mayonnaise, lemon juice, mustard, remaining olive oil and half the parmesan.\n3. Tear the lettuce into bite-size pieces and toss with the dressing.\n4. Top with the croutons, the rest of the parmesan and plenty of black pepper."
    },
    {
        "title": "Roasted Tomato Soup",
        "time": "40 min",
        "img": "https://images.unsplash.com/photo-1762647420988-5080acf33988?w=640&h=480&fit=crop",
        "category": "Lunch",
        "description": "Roasting the tomatoes with garlic and onion first gives this soup a deep, slightly sweet flavour. Everything is then blended smooth with stock and a splash of cream. Serve with a grilled cheese sandwich for dipping.\n\nIngredients (serves 4): 1 kg ripe tomatoes, 1 yellow onion, 4 garlic cloves, 3 tbsp olive oil, 500 ml vegetable stock, 100 ml cream, 1 tsp sugar, salt, pepper, fresh basil.\n\nMethod:\n1. Heat the oven to 220°C.\n2. Halve the tomatoes and cut the onion into wedges. Spread on a baking tray with the unpeeled garlic, drizzle with olive oil and season with salt and pepper.\n3. Roast for 25 minutes until soft and slightly charred.\n4. Squeeze the garlic out of its skins and put everything in a pot with the stock and sugar. Simmer for 5 minutes.\n5. Blend until smooth, stir in the cream and adjust the seasoning.\n6. Serve with basil leaves on top."
    },
    {
        "title": "Chicken Pesto Wrap",
        "time": "15 min",
        "img": "https://images.unsplash.com/photo-1666819615040-eff5e52c778a?w=640&h=480&fit=crop",
        "category": "Lunch",
        "description": "A quick wrap filled with sliced chicken, basil pesto, mozzarella, sun-dried tomatoes and rocket. It works just as well cold in a lunchbox as it does warm from a hot pan. Use leftover roast chicken to make it even faster.\n\nIngredients (serves 2): 2 large tortillas, 2 cooked chicken breasts, 3 tbsp basil pesto, 125 g mozzarella, 6 sun-dried tomatoes, 2 handfuls rocket, salt, pepper.\n\nMethod:\n1. Slice the chicken, mozzarella and sun-dried tomatoes.\n2. Spread the pesto over the tortillas.\n3. Layer the chicken, mozzarella, tomatoes and rocket down the middle and season with salt and pepper.\n4. Fold in the sides and roll up tightly.\n5. For a warm wrap, toast it seam-side down in a dry pan for 2 minutes per side until the cheese melts.\n6. Cut in half and serve."
    },
    {
        "title": "Buttermilk Roast Chicken",
        "time": "1 h 15 min",
        "img": "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=640&h=480&fit=crop",
        "category": "Dinner",
        "description": "A butterflied chicken marinated in buttermilk, rosemary, garlic and black pepper, then roasted until the skin is deeply golden. The marinade tenderizes the meat and carries the flavour all the way through. Let it sit in the fridge overnight and dinner needs nothing more than the oven.\n\nIngredients (serves 4): 1 whole chicken (about 1.5 kg), 500 ml buttermilk, 4 garlic cloves, 2 tbsp chopped fresh rosemary, 1 tbsp honey, 1 tbsp salt, 1 tbsp crushed black pepper, 2 tbsp olive oil.\n\nMethod:\n1. Butterfly the chicken: cut along both sides of the backbone with kitchen scissors, remove it and press the bird flat.\n2. Crush the garlic and mix with the buttermilk, rosemary, honey, salt and pepper. Pour over the chicken in a large bag or dish.\n3. Marinate in the fridge for at least 4 hours, or up to two days.\n4. Heat the oven to 200°C. Lift the chicken out of the marinade, let it drip off and place skin-side up in a roasting tin. Drizzle with olive oil.\n5. Roast for 45-50 minutes until the skin is golden and the juices run clear (75°C in the thickest part of the thigh).\n6. Rest for 10 minutes before carving."
    },
    {
        "title": "Smash Burger",
        "time": "25 min",
        "img": "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=640&h=480&fit=crop",
        "category": "Dinner",
        "description": "Thin beef patties pressed hard into a very hot pan so the edges turn dark and crisp. Stacked with melted cheese, pickles and a simple burger sauce in a soft toasted bun. Fast, messy and better than most takeaway burgers.\n\nIngredients (serves 4): 600 g ground beef (about 20% fat), 8 slices cheddar, 4 burger buns, 1 yellow onion, sliced pickles, 3 tbsp mayonnaise, 1 tbsp ketchup, 1 tbsp mustard, 1 tbsp chopped pickles, salt, pepper, oil for frying.\n\nMethod:\n1. Mix the mayonnaise, ketchup, mustard and chopped pickles into a sauce.\n2. Divide the beef into 8 loose balls of about 75 g each. Do not season or press them yet.\n3. Toast the buns cut-side down in a pan and set aside.\n4. Heat a cast-iron pan until smoking hot with a thin layer of oil. Add two balls at a time and press them flat with a spatula as hard as you can.\n5. Season with salt and pepper and fry for about 90 seconds until the edges are dark and crisp.\n6. Flip, place a slice of cheese on each patty and fry 45 seconds more.\n7. Build each burger with sauce, two patties, thinly sliced onion and pickles."
    },
    {
        "title": "Creamy Mushroom Pasta",
        "time": "30 min",
        "img": "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=640&h=480&fit=crop",
        "category": "Dinner",
        "description": "Mushrooms fried until properly browned, then simmered with garlic, thyme, white wine and cream. A ladle of pasta water brings the sauce together so it clings to every strand. Finish with parmesan and lots of black pepper.\n\nIngredients (serves 4): 400 g tagliatelle, 500 g mushrooms, 2 tbsp butter, 1 tbsp olive oil, 3 garlic cloves, 1 tsp fresh thyme leaves, 100 ml dry white wine, 250 ml cream, 50 g grated parmesan, salt, black pepper.\n\nMethod:\n1. Cook the pasta in well-salted water until al dente. Save a cup of the pasta water before draining.\n2. Slice the mushrooms and fry in the butter and oil over high heat for 8-10 minutes without stirring too often, until well browned.\n3. Add the chopped garlic and thyme and fry for 1 minute.\n4. Pour in the wine and let it reduce by half.\n5. Add the cream and simmer for 3-4 minutes until slightly thickened. Season with salt and pepper.\n6. Toss the pasta in the sauce with the parmesan and enough pasta water to make it glossy.\n7. Serve with extra parmesan and black pepper."
    },
    {
        "title": "World's Best Chocolate Cake",
        "time": "50 min",
        "img": "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=640&h=480&fit=crop",
        "category": "Dessert",
        "description": "A dark, moist chocolate cake made in one bowl, with hot coffee in the batter to bring out the cocoa. It is covered in a glossy chocolate frosting that sets just enough to slice cleanly. The cake stays soft for days, if it lasts that long.\n\nIngredients (serves 10): 250 g plain flour, 350 g sugar, 75 g cocoa powder, 2 tsp baking soda, 1 tsp baking powder, 1 tsp salt, 2 eggs, 240 ml buttermilk, 120 ml neutral oil, 2 tsp vanilla extract, 240 ml hot coffee. Frosting: 200 g dark chocolate, 200 ml cream, 30 g butter.\n\nMethod:\n1. Heat the oven to 175°C and grease and line two 20 cm cake tins.\n2. Whisk the flour, sugar, cocoa, baking soda, baking powder and salt in a large bowl.\n3. Add the eggs, buttermilk, oil and vanilla and whisk until smooth.\n4. Stir in the hot coffee. The batter will be thin.\n5. Divide between the tins and bake for 30-35 minutes, until a skewer comes out clean. Cool completely.\n6. For the frosting, heat the cream until just simmering and pour over the chopped chocolate and butter. Stir until smooth and let it cool until spreadable.\n7. Sandwich the cakes with frosting and cover the top and sides with the rest."
    },
    {
        "title": "Lemon Cheesecake",
        "time": "30 min",
        "img": "https://images.unsplash.com/photo-1589361471339-16b852481424?w=640&h=480&fit=crop",
        "category": "Dessert",
        "description": "A no-bake cheesecake with a buttery biscuit base and a light, fresh lemon filling. It only needs half an hour of work and then a few hours in the fridge to set. Top with lemon zest or a spoonful of berry compote.\n\nIngredients (serves 8): 200 g digestive biscuits, 100 g melted butter, 500 g cream cheese, 100 g icing sugar, 300 ml whipping cream, zest and juice of 2 lemons, 1 tsp vanilla extract.\n\nMethod:\n1. Crush the biscuits to fine crumbs and mix with the melted butter.\n2. Press firmly into the base of a 20 cm springform tin and chill while you make the filling.\n3. Beat the cream cheese, icing sugar, lemon zest, lemon juice and vanilla until smooth.\n4. Whip the cream to soft peaks and fold it into the cream cheese mixture.\n5. Spread the filling over the base and smooth the top.\n6. Refrigerate for at least 4 hours, preferably overnight, before releasing from the tin.\n7. Decorate with lemon zest or berries."
    },
    {
        "title": "Swedish Cinnamon Buns",
        "time": "2 h",
        "img": "https://images.unsplash.com/photo-1609126979532-0f514232d1a8?w=640&h=480&fit=crop",
        "category": "Dessert",
        "description": "Soft cardamom dough rolled up with butter, sugar and cinnamon, then baked until golden and sprinkled with pearl sugar. Most of the time is spent waiting for the dough to rise. Best eaten warm with a cup of coffee.\n\nIngredients (makes about 20): Dough: 300 ml milk, 100 g butter, 25 g fresh yeast, 85 g sugar, 1/2 tsp salt, 2 tsp ground cardamom, 500 g plain flour. Filling: 100 g soft butter, 85 g sugar, 2 tbsp ground cinnamon. Topping: 1 beaten egg, pearl sugar.\n\nMethod:\n1. Melt the butter, add the milk and warm to 37°C. Crumble the yeast into a bowl and dissolve it in the liquid.\n2. Add the sugar, salt, cardamom and most of the flour. Knead for 10 minutes until smooth and elastic, adding more flour only if needed.\n3. Cover and let rise for 45 minutes, until doubled in size.\n4. Mix the filling ingredients to a paste.\n5. Roll the dough into a rectangle of about 30 x 50 cm, spread with the filling and roll up from the long side.\n6. Cut into 20 slices and place in paper cases on a baking tray. Cover and let rise for 30 minutes.\n7. Heat the oven to 225°C. Brush the buns with egg, sprinkle with pearl sugar and bake for 8-10 minutes until golden."
    }
]


const hamburgerM = document.querySelector(".hamburger");
const phoneNav = document.querySelector(".phoneNav");
const category = document.getElementById("category");
const filterButton = document.querySelector(".filterButton");

//hamburger meny
function hamburgerMenyToggle() {
    if (getComputedStyle(phoneNav).display === "flex") {
        phoneNav.style.display = "none";
    } else {
        phoneNav.style.display = "flex";
    }
}
hamburgerM.addEventListener("click", hamburgerMenyToggle);

function createRecepieCard(title, timeA, desc, pic) {
    const recepiePageS = document.querySelector(".recepiePage");

    //Skapar div
    const newDiv = document.createElement("div");
    newDiv.classList.add("recipeCard");
    recepiePageS.appendChild(newDiv);

    //Skapar bild
    const cardPic = document.createElement("img");
    cardPic.classList.add("cardPic");
    cardPic.src = pic;
    newDiv.appendChild(cardPic);

    //Skapar titel
    const titleName = document.createElement("h2");
    titleName.classList.add("recipeName");
    titleName.textContent = title;
    newDiv.appendChild(titleName);

    //skapar infon
    const info = document.createElement("p");
    info.classList.add("info");
    info.textContent = desc;
    newDiv.appendChild(info);

    //skapar knappen readMore
    const readMore = document.createElement("button");
    readMore.classList.add("readMore");
    readMore.textContent = "Read more";
    newDiv.appendChild(readMore);

    //Lägger till X
    const cross = document.createElement("img");
    cross.classList.add("cross");
    cross.src = "assets/icons/x-solid.png";
    newDiv.appendChild(cross);


    //Lägger till tiden
    const time = document.createElement("p");
    time.classList.add("recipeTime");
    time.innerHTML = `<span><img src="assets/icons/clock-solid.png" alt="timeIcon"></span> ${timeA}`;
    newDiv.appendChild(time);

    //Bestämmer vad som ska visas
    function readMoreToggle() {
        if (getComputedStyle(cardPic).display === "none") {
            info.style.display = "none";
            cardPic.style.display = "inline";
            titleName.style.display = "block";
            time.style.display = "block";
            readMore.innerHTML = "Read more"
        } else {
            cardPic.style.display = "none";
            titleName.style.display = "none";
            time.style.display = "none";
            info.style.display = "block";
            readMore.innerHTML = "Go back"
            
        }
    }
    //tar bort kortet
    function removeCard () {
        const index = recipes.findIndex(recipe => recipe.title === title);
        if (index !== -1) {
            recipes.splice(index, 1);
        }
        newDiv.remove();
    }

    // tar bort kortet
    cross.addEventListener("click", removeCard);

    //Byter mellan readMore och framsidan
    readMore.addEventListener("click", readMoreToggle);


}


//Filtrerar vilka recept som ska visas
function showCardInData(){
    document.querySelectorAll('.recipeCard').forEach(recipeCard => recipeCard.remove());    
    for (let recipe of recipes) {
        const categoryFilter = document.querySelector("#category").value;
        if (recipe.category === categoryFilter || recipe.category === "own") {
            createRecepieCard(recipe.title, recipe.time, recipe.description, recipe.img);

        } else if (categoryFilter === ""){
            createRecepieCard(recipe.title, recipe.time, recipe.description, recipe.img);
        }
    }

}


//Skapar användarens egna recept
const form = document.getElementById("addForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    //hämtar datan
    const title = document.getElementById("fTitle").value;
    const time = document.getElementById("fTime").value;
    const description = document.getElementById("fDescription").value;
    const file = document.getElementById("fFile").files[0];
    const imageUrl = file ? URL.createObjectURL(file) : "";

    //skapar obj
    const userRecepie = {
        "title": title,
        "time": time,
        "img": imageUrl,
        "category": "own",
        "description": description
    }
    
    //lägger till receptet först i listan av recept
    recipes.unshift(userRecepie)
    showCardInData()
});

filterButton.addEventListener("click", showCardInData)
showCardInData()

