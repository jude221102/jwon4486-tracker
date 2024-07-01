document.addEventListener('DOMContentLoaded', function() {
    // Object to map section links to their corresponding container IDs
    const sections = {
        'home-link': 'main-container',
        'recipes-link': 'all-recipes',
        'favourites-link': 'favourites-section',
    };

    // Load recipe data from localStorage
    function loadRecipeData() {
        const savedRecipeData = JSON.parse(localStorage.getItem('recipeData'));
        if (savedRecipeData) {
            Object.assign(recipeData, savedRecipeData);
        }
    }

    // Save recipe data to localStorage
    function saveRecipeData() {
        localStorage.setItem('recipeData', JSON.stringify(recipeData));
    }

    // Call loadRecipeData on page load
    loadRecipeData();

    // Set to store favourite recipes
    const favourites = new Set();

    // Function to toggle favourite status of a recipe
    function toggleFavourite(event, element) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent

        const recipe = element.closest('.recipe');
        const recipeId = recipe.getAttribute('data-recipe-id');

        if (favourites.has(recipeId)) {
            favourites.delete(recipeId);
            updateFavoriteIcons(recipeId, false);
            removeFavourite(recipeId);
        } else {
            favourites.add(recipeId);
            updateFavoriteIcons(recipeId, true);
            addFavourite(recipe);
        }
        saveFavourites(); // Save favourites to localStorage
    }

    // Function to update favourite icons
    function updateFavoriteIcons(recipeId, isFavourite) {
        document.querySelectorAll(`.recipe[data-recipe-id="${recipeId}"] .favorite-button`).forEach(button => {
            if (isFavourite) {
                button.classList.add('filled');
                button.innerHTML = '&#9733;';
            } else {
                button.classList.remove('filled');
                button.innerHTML = '&#9734;';
            }
        });
    }

    // Function to add a recipe to the favourites section
    function addFavourite(recipe) {
        const favouritesContainer = document.getElementById('favourites-container');
        const existingRecipe = favouritesContainer.querySelector(`.recipe[data-recipe-id="${recipe.getAttribute('data-recipe-id')}"]`);

        if (!existingRecipe) {
            const clone = recipe.cloneNode(true);
            clone.querySelector('.favorite-button').classList.add('filled');
            clone.querySelector('.favorite-button').innerHTML = '&#9733;';
            clone.querySelector('.favorite-button').setAttribute('onclick', 'toggleFavourite(event, this)');
            favouritesContainer.appendChild(clone);
        }
    }

    // Function to remove a recipe from the favourites section
    function removeFavourite(recipeId) {
        const favouritesContainer = document.getElementById('favourites-container');
        const recipe = favouritesContainer.querySelector(`.recipe[data-recipe-id="${recipeId}"]`);
        if (recipe) {
            favouritesContainer.removeChild(recipe);
        }
    }

    // Event listener for navigation bar links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.navbar a').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            document.querySelectorAll('.container, #all-recipes, #favourites-section').forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(sections[this.id]).classList.add('active');
        });
    });

    // Save favourites to localStorage
    function saveFavourites() {
        localStorage.setItem('favourites', JSON.stringify(Array.from(favourites)));
    }

    // Load favourites from localStorage
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    savedFavourites.forEach(recipeId => {
        favourites.add(recipeId);
        updateFavoriteIcons(recipeId, true);
        const recipe = document.querySelector(`.recipe[data-recipe-id="${recipeId}"]`);
        if (recipe) {
            addFavourite(recipe);
        }
    });

    // Save progress to localStorage
    function saveProgress(progress) {
        localStorage.setItem('progress', progress);
    }

    // Load progress bar state from localStorage
    const savedProgress = parseInt(localStorage.getItem('progress'), 10) || 0;
    const progressBarInner = document.querySelector('.progress-bar-inner');
    progressBarInner.setAttribute('data-progress', savedProgress);
    progressBarInner.style.width = `${savedProgress}%`;
    progressBarInner.textContent = `${savedProgress} pts`;

    // Object to store recipe data
    const recipeData = {
        1: {
            name: "California Roll",
            time: "45 mins",
            difficulty: "Medium",
            points: 5,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add crab, avocado, and cucumber.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Crab",
                "1 Avocado",
                "1 Cucumber",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        2: {
            name: "Spicy Tuna Roll",
            time: "30 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Mix tuna with chili sauce.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add the spicy tuna mixture.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Tuna",
                "2 tbsp Chili sauce",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        3: {
            name: "Salmon Avocado Roll",
            time: "35 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add salmon and avocado.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Salmon",
                "1 Avocado",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        4: {
            name: "Philadelphia Roll",
            time: "40 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add cream cheese, salmon, and cucumber.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Cream cheese",
                "1 cup Salmon",
                "1 Cucumber",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        5: {
            name: "Inari Sushi",
            time: "20 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Fill tofu pockets with the rice.",
                "Serve with soy sauce."
            ],
            ingredients: [
                "1 cup Tofu",
                "2 cups Rice",
                "Soy sauce",
                "1 tbsp Sugar"
            ]
        },
        6: {
            name: "Tamago Nigiri",
            time: "25 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Make a sweet Japanese omelette (tamago).",
                "Cut the tamago into slices.",
                "Place the tamago slices on top of small rice balls.",
                "Serve with soy sauce."
            ],
            ingredients: [
                "2 Eggs",
                "2 cups Rice",
                "Soy sauce",
                "1 tbsp Sugar"
            ]
        },
        7: {
            name: "Salmon Nigiri",
            time: "30 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Cut fresh salmon into slices.",
                "Place the salmon slices on top of small rice balls.",
                "Serve with soy sauce."
            ],
            ingredients: [
                "1 cup Salmon",
                "2 cups Rice",
                "Soy sauce"
            ]
        },
        8: {
            name: "Shrimp Nigiri",
            time: "25 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Cook the shrimp and remove the shells.",
                "Place the shrimp on top of small rice balls.",
                "Serve with soy sauce."
            ],
            ingredients: [
                "1 cup Shrimp",
                "2 cups Rice",
                "Soy sauce"
            ]
        },
        9: {
            name: "Tuna Nigiri",
            time: "30 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Cut fresh tuna into slices.",
                "Place the tuna slices on top of small rice balls.",
                "Serve with soy sauce."
            ],
            ingredients: [
                "1 cup Tuna",
                "2 cups Rice",
                "Soy sauce"
            ]
        },
        10: {
            name: "Tuna Mayo Maki",
            time: "30 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Mix tuna with mayo.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add the tuna mayo mixture.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Tuna",
                "2 tbsp Mayo",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        11: {
            name: "Cucumber Maki",
            time: "15 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add cucumber slices.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 Cucumber",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        12: {
            name: "Salmon Maki",
            time: "20 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add salmon slices.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Salmon",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        13: {
            name: "Tamago Maki",
            time: "20 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Make a sweet Japanese omelette (tamago).",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add tamago slices.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "2 Eggs",
                "2 cups Rice",
                "4 sheets Seaweed",
                "1 tbsp Sugar"
            ]
        },
        14: {
            name: "Tuna Maki",
            time: "25 mins",
            difficulty: "Medium",
            points: 4,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add tuna slices.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 cup Tuna",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        },
        15: {
            name: "Avocado Maki",
            time: "15 mins",
            difficulty: "Easy",
            points: 3,
            instructions: [
                "Cook the rice according to package instructions.",
                "Mix the rice with vinegar, sugar, and salt.",
                "Place a sheet of seaweed on a bamboo mat.",
                "Spread the rice evenly over the seaweed.",
                "Add avocado slices.",
                "Roll the bamboo mat to form the roll.",
                "Cut the roll into pieces and serve."
            ],
            ingredients: [
                "1 Avocado",
                "2 cups Rice",
                "4 sheets Seaweed"
            ]
        }
    }

    function displayRecipeDetails(recipeId) {
        const recipe = recipeData[recipeId];
        if (recipe) {
            document.getElementById('modal-recipe-image').src = document.querySelector(`.recipe[data-recipe-id="${recipeId}"] img`).src;
            document.getElementById('modal-recipe-name').textContent = recipe.name;
            document.getElementById('recipe-time').textContent = `${recipe.time} (${recipe.points} points)`;
            document.getElementById('recipe-difficulty').textContent = `${recipe.difficulty} (${recipe.points} points)`;
            document.getElementById('recipe-points').textContent = recipe.points;
            document.getElementById('complete-task-button').setAttribute('data-points', recipe.points);

            const instructionsList = document.getElementById('recipe-instructions');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });

            const ingredientsList = document.getElementById('recipe-ingredients');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            const modal = document.getElementById('recipe-modal');
            modal.style.display = "block";
            document.getElementById('go-back-arrow').classList.add('visible');
        }
    }

    document.querySelectorAll('.recipe').forEach(recipe => {
        recipe.addEventListener('click', function(event) {
            const recipeId = this.getAttribute('data-recipe-id');
            displayRecipeDetails(recipeId);
        });

        const favoriteButton = recipe.querySelector('.favorite-button');
        favoriteButton.addEventListener('click', function(event) {
            toggleFavourite(event, this);
        });
    });

    // Function to go back from the modal
    function goBack() {
        document.getElementById('recipe-modal').style.display = "none";
        document.getElementById('go-back-arrow').classList.remove('visible');
        document.querySelector('.close-button').style.display = 'block'; // Show the close button again
    }

    // Attach goBack function to the go-back-arrow element
    document.getElementById('go-back-arrow').onclick = goBack;

    // Function to search recipes
    function searchRecipes() {
        const input = document.getElementById('search-bar').value.toLowerCase();
        const recipes = document.querySelectorAll('.recipe');

        recipes.forEach(recipe => {
            const recipeName = recipe.querySelector('h3').textContent.toLowerCase();
            if (recipeName.includes(input)) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    }

    // Attach searchRecipes function to the search bar input event
    document.getElementById('search-bar').addEventListener('input', searchRecipes);

    // Function to complete a task and update progress
    document.getElementById('complete-task-button').addEventListener('click', function() {
        const points = parseInt(this.getAttribute('data-points'), 10);
        const currentProgress = parseInt(progressBarInner.getAttribute('data-progress'), 10);
        const newProgress = currentProgress + points;

        progressBarInner.setAttribute('data-progress', newProgress);
        progressBarInner.style.width = `${newProgress}%`;
        progressBarInner.textContent = `${newProgress} pts`;

        saveProgress(newProgress); // Save progress to localStorage
    });

    // Function to close the modal
    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('recipe-modal').style.display = 'none';
        document.getElementById('go-back-arrow').classList.remove('visible');
    });

    // Save recipe data to localStorage on page load
    saveRecipeData();

    // Function to update the progress bar
    document.addEventListener('DOMContentLoaded', () => {
        let points = 0;
        const progressBarInner = document.getElementById('progress-bar-inner');
    
        function updateProgressBar() {
            if (points >= 100) {
                points = 0; // Reset points
            }
            progressBarInner.style.width = points + '%';
            progressBarInner.textContent = points + ' pts';
        }
    
        // Example function to increment points
        function incrementPoints(value) {
            points += value;
            updateProgressBar();
        }
    
        // Simulate points increment every second
        setInterval(() => {
            incrementPoints(10); // Increment points by 10
        }, 1000); // Update every second
    });
