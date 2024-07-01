# Sushi Recipe Webpage

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Development Documentation](#development-documentation)
- [License](#license)

## **Introduction**
This project is a web application that showcases various sushi recipes. Users can browse through different categories, mark their favorite recipes, and view detailed information about each recipe.

## **Features**
- **Home Section**: Displays a welcome message and a progress bar.
- **Recommendations**: Shows a list of recommended sushi recipes.
- **This Week's Favourite**: Highlights the favorite recipes of the week.
- **Seasonal Specials**: Displays special sushi recipes for the current season.
- **All Recipes**: Allows users to search and view all available recipes.
- **Favourites Section**: Users can mark recipes as favorites and view them in a dedicated section.
- **Recipe Details**: Clicking on a recipe shows detailed information in a modal.

## **Installation**
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/sushi-recipe-webpage.git
    ```
2. Navigate to the project directory:
    ```bash
    cd sushi-recipe-webpage
    ```
3. Open `index.html` in your preferred web browser.

## **Usage**
- **Browse Recipes**: Navigate through different sections using the navbar.
- **Mark as Favorite**: Click the star button on a recipe to mark it as a favorite.
- **View Details**: Click on a recipe to view detailed information in a modal.
- **Search Recipes**: Use the search bar in the "All Recipes" section to find specific recipes.

## **Contributing**
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## **Development Documentation**

### **Overview**

This project is a web application that displays various sushi recipes, allows users to mark their favorite recipes, and provides detailed instructions and ingredients for each recipe. The application is built using HTML, CSS, and JavaScript.

### **Development Process**

#### **Initial Setup**

1. **Project Initialization**: The project was initialized with a basic HTML structure, including a navigation bar and sections for home, recipes, and favorites.
2. **CSS Styling**: Custom CSS was added to style the navigation bar, recipe cards, and modal for recipe details.
3. **JavaScript Functionality**: JavaScript functions were implemented to handle user interactions, such as toggling favorite recipes, displaying recipe details in a modal, and searching for recipes.

#### **Iterations and Improvements**

1. **Recipe Data Management**: Initially, recipe data was hardcoded in the HTML. This was later refactored to use a JavaScript object to store recipe data, making it easier to manage and update.
2. **Favorite Recipes**: The functionality to mark recipes as favorites was enhanced by using a Set to store favorite recipe IDs, ensuring efficient addition and removal of favorites.
3. **Progress Bar**: A progress bar was added to track the user's progress in completing recipes. This involved updating the progress bar's width and text content based on the user's actions.
4. **Search Functionality**: A search bar was implemented to allow users to filter recipes by name. This involved adding an event listener to the search bar and dynamically updating the displayed recipes based on the search query.
5. **Modal Enhancements**: The recipe modal was enhanced to display detailed information about the selected recipe, including ingredients and instructions. This involved dynamically updating the modal content based on the selected recipe.

#### **Lessons Learned and Best Practices**

1. **Modular Code**: Keeping the JavaScript code modular and organized made it easier to manage and extend the functionality. Using functions for specific tasks (e.g., `toggleFavourite`, `showRecipeDetails`) improved code readability and maintainability.
2. **Efficient Data Management**: Storing recipe data in a JavaScript object allowed for more efficient data management and updates. This approach can be extended to fetch data from an external API in the future.
3. **User Experience**: Ensuring a seamless user experience was a priority. This involved handling edge cases, such as preventing event propagation when toggling favorites and ensuring the modal closes correctly.
4. **CSS Flexbox**: Using CSS Flexbox for layout management provided a flexible and responsive design, making it easier to align elements and create a consistent layout across different screen sizes.

### **Application Configuration and Deployment**

#### **Prerequisites**

- A web server (e.g., Apache, Nginx) or a local development server (e.g., Live Server for VSCode)
- Basic knowledge of HTML, CSS, and JavaScript

#### **Setup and Configuration**

1. **Clone the Repository**: Clone the project repository to your local machine.
    ```sh
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Open the Project**: Open the project directory in your preferred code editor.

3. **Start the Server**: If using a local development server, start the server to serve the HTML file.
    - For Live Server in VSCode, right-click on `index.html` and select "Open with Live Server".

4. **Access the Application**: Open your web browser and navigate to `http://localhost:5500` (or the appropriate URL for your server).

#### **Deployment**

1. **Build the Project**: Ensure all files are correctly linked and there are no errors in the console.
2. **Upload to Server**: Upload the project files to your web server using FTP/SFTP or a deployment tool.
3. **Configure Server**: Ensure the server is configured to serve the HTML file as the default document.
4. **Test Deployment**: Open the deployed URL in a web browser to ensure the application is working as expected.

### **Future Improvements and Extensions**

1. **API Integration**: Integrate with an external API to fetch recipe data dynamically, allowing for real-time updates and a larger recipe database.
2. **User Authentication**: Implement user authentication to allow users to save their favorite recipes across sessions.
3. **Responsive Design**: Enhance the responsive design to ensure a seamless experience on mobile devices.
4. **Recipe Ratings**: Add a rating system for recipes, allowing users to rate and review recipes.
5. **Advanced Search**: Implement advanced search functionality, allowing users to filter recipes by ingredients, difficulty, and preparation time.

### **Image Sources and Points**

- **California Roll**: 
  - ![California Roll](https://www.flickr.com/photos/142107170@N05/34749544431/in/photolist-UWGuUp-5LJDmv-bqQUTJ-7FzHi5-atHCv7-CsQSCx-dFhfrm-7iUoWA-rnU9Lq-3d9Uta-fsB1mV-HRxjUN-8Xe52y-9tRiY2-8Xb4F4-VWCRJc-2jAyYRG-dUAMFP-bEb6Sr-239REDj-4ak1GK-2mbSrfq-6zAEFb-9DZQP-PGpmp5-8tfnZh-6hLRAC-99TX6t-S1wRfZ-G9USyQ-CBfGFN-dbaQ34-ai3ZE6-8cP3iM-2oQXjKU-4vvZCc-GAASny-aEccJo-2iEy4v6-6JyHrB-epuoP6-xFbEYH-6X5nMe-J4jezC-ccX8jy-2hLne1y-6uzfyQ-8wVny-2d6KjVF-7ri6GC)
- **Spicy Tuna Roll**: 
  - ![Spicy Tuna Roll](https://www.flickr.com/photos/30352692@N05/3366313524/in/photolist-68teJm-LEDud-LaH6C-68oY3e-7CAEre-LXDFw-4FUqB9-gkKPR-QPNf1j-6tjR3c-xo6Ln-nZY87Q-2jM8aMf-amY6LS-54jivU-5Zrr1t-YD4xZk-k8ApY2-bCTXTt-2jk5HX3-BhSmq-6u1Eex-7zYmmH-7CS361-brJUiz-2kY4Z9V-cnmezU-9a2yEx-6tjRak-iGfZeD-8aZWut-cu9YgL-BFbGdk-2mPEfw-8dXCy3-dj55ju-7ewZ2M-9qqXQ8-nCyMXg-ephZc3-nNEx2S-CJD9br-2m3cPcg-9ncABA-4EQWwL-7YXYon-9enTam-bbsEBZ-6GCiXW-2mj9goz)
- **Salmon Avocado Roll**: 
  - ![Salmon Avocado Roll] (https://unsplash.com/photos/a-close-up-of-sushi-N5r1MGJQN1E)
  - **Philadelphia Roll**: 
  - ![Philadelphia Roll](https://www.pexels.com/search/cucumber%20sushi/)
- **Inari Sushi**:
  - ![Inari Sushi](https://www.flickr.com/photos/34348707@N03/4375142830/in/photolist-7EBKx5-8KkL68-4pPXco-dYtdY4-aJzFsH-5kShyt-578qm1-4MLdXu-eYW12J-c6ypzC-p9X3V-2iDvLUa-yYVKH-4dH6ao-3GJwjt-47hQj9-4eXWUi-ihFbG-6bqRFr-briQbr-bEKcyB-fsp6Y-4QrPhP-7KHF3U-3G5vur-7dWLvV-9iSahV-8Y3vG9-2hSGRbF-8Bm5u8-bEKZuZ-47hQho-jMYBbi-5QtMfu-2gBESfB-GV3tM-4aACXn-6Umn9e-bEKmGH-J4p6j-3WswzB-3JMteb-aQrehp-71v5sC-VbdHrd-bEKoGD-2mU2TSD-8wSXqS-2krSWzd-5ZLYc8)
- **Tamago Nigiri**:
  - ![Tamago Nigiri](https://www.flickr.com/photos/crustabakes/6814393628/in/photolist-boaxPj-UwmZ8A-6CahNa-9TYNkV-bkw2fg-5NWEJ3-F8uAW-oceJo8-91EZgs-GxrzL-8geeHe-7zQur8-4aLze7-S23CS8-hwrPX-hwrY7-8jHY7U-Lm8wg-x7saYW-7zQu5Z-XnzaYv-KJizLN-izKZym-9GoLk-uYPpG-4eBh1t-7Wkige-7gKvx3-bbYf4T-snf3Hg-bTCcqi-rx1WHb-2W1eyB-6Zv7qy-dDuDSy-vDwM9d-7cWmyK-PADbtC-8drg9f-2iktmhi-8piMgA-846aAt-2e4ggWq-kZhTpw-8dnZjx-6hAePJ-51eq24-6hw4DH-2dW5xaN-6hw4kn)
- **Salmon Nigiri**:
  - ![Salmon Nigiri](https://www.pexels.com/photo/sushi-in-woman-fingers-16266744/)
- **Shrimp Nigiri**:
  - ![Shrimp Nigiri](https://www.pexels.com/search/Inari%20Sushi/)
- **Tuna Nigiri**:
  - ![Tuna Nigiri](https://www.flickr.com/photos/acme/11570951665/in/photolist-iCu9ND-egj5MX-9tovU6-9qsVyf-zaKwak-b12oqT-275mYqV-93Tp1n-v3N4sP-7WUUCH-ehW4iU-5SFBz-9kTT7E-pqZimy-dm9BmD-acB1Fg-23RhrnH-dymhrf-9iCKPR-bBMiqS-Teymr4-LEqWUQ-dfAEr1-94kZFg-pJMc8B-bLf6PK-9zh8oy-bCBhnn-qJdf79-x925PW-9rjZvi-N1UdRo-bWvJwE-48QP9b-J5gjUk-fuA39t-bNa47X-7Z9S5F-c6P8Dy-9yw5dx-bn42Ah-mW8Ltq-cBc3eh-Twpanb-bzXS1g-efyfpo-8roDfU-96JUse-2ekqJGK-2gz3v7)
- **Tuna Mayo Maki**:
  - ![Tuna Mayo Maki](https://www.flickr.com/photos/charlesbradleyrich/8401120270/in/photolist-dNnWnd-m4yBd-9NiJjA-7u6FoT-2eiDg-YVkHme-6KgRhk-69zjDb-2AKoJt-74d1QG-5dJyWx-67oNfJ-iXJpQS-871q1A-5dJyAH-8WWPPx-4UhYXZ-5LKxDk-aZdNZ8-68KFsS-4TDN7f-9x3m8F-5pupE3-9WDkP-5iCArj-WYg8s-9eiQTf-97xQn1-HkZ2D-GpFC6-bQXhAH-KvHzcH-9fYMVB-Ew443D-8C8skQ-7ZfP9P-8W2S6f-97uRbt-7hX2H7-8VYNSr-9bobhV-9bob14-9brbhQ-YVkFuP-9KVk5t-7DiHyr-bA6gVB-8WZQRd-u3XvPK-acqSk2)
- **Cucumber Maki**:
  - ![Cucumber Maki](https://www.flickr.com/photos/abb/5659812957/in/photolist-9C92d2-9pPJuK-a1jMDA-JMHGa-nxZDj7-fBtmJK-bbBPo-Ja8aY-9f1Mhp-zpFtKJ-HYjNB9-nSeoB1-F1rtCF-nDLsrm-KhqjhE-2k1mmGN-6DFJKp-jUuALf-2hFu7BM-2nEWx3N-zG7AJb-7AkYWa-geUkN-6tYCHa-2nGH6Z6-2nEayt8-2nEjKKv-8uy8wj-5fL2Bv-zruiC-784koj-2nKKoy3-25MWTf-nMiCeS-2nHwMvj-9yznYB-Wu7mch-a2GHTr-6h7Nqz-4wiyYq-2hNvoYf-BQPmQ-RoS57m-oE9scj-nUUa4p-8GudhM-5Xoxug-2nK24TF-9aYNb9-j4C972)
- **Salmon Maki**: 
  - ![Salmon Maki](https://www.pexels.com/photo/a-chopsticks-with-sushi-roll-7717517/)
- **Tamago Maki**: 
  - ! [Tamago Maki] (https://www.flickr.com/photos/crustabakes/6814393628/in/photolist-boaxPj-UwmZ8A-6CahNa-9TYNkV-bkw2fg-5NWEJ3-F8uAW-oceJo8-91EZgs-GxrzL-8geeHe-7zQur8-4aLze7-S23CS8-hwrPX-hwrY7-8jHY7U-Lm8wg-x7saYW-7zQu5Z-XnzaYv-KJizLN-izKZym-9GoLk-uYPpG-4eBh1t-7Wkige-7gKvx3-bbYf4T-snf3Hg-bTCcqi-rx1WHb-2W1eyB-6Zv7qy-dDuDSy-vDwM9d-7cWmyK-PADbtC-8drg9f-2iktmhi-8piMgA-846aAt-2e4ggWq-kZhTpw-8dnZjx-6hAePJ-51eq24-6hw4DH-2dW5xaN-6hw4kn) 
- **Tuna Maki**: 
  - ![Tuna Maki](https://www.pexels.com/photo/rolls-made-with-traditional-ingredients-6249505/)
- **Avocado Maki**: 
  - ![Avocado Maki](https://unsplash.com/photos/a-piece-of-sushi-on-chopsticks-with-a-piece-of-avocado-72sxZOJgI8M)



