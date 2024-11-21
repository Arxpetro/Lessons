
const form = document.querySelector("#search-cocktails");
const input = document.querySelector("#search-input");
const divResults = document.querySelector("#results");

async function getCocktails(name) {
    const query = name.trim(); // remove blank spaces 
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    if(!response.ok){
        throw new Error ('Error fetching cocktails');
    }
    const data = await response.json();
    return data.drinks;
}

function displayCocktails(cocktails){
    divResults.innerHTML = "";

    if(!cocktails){
        const noResults = document.createElement('p');
        noResults.innerText = "No resuts found";
        divResults.append(noResults);
        return;
    }

    cocktails.forEach((cocktail)=> {
        const cocktailCard = document.createElement("div");

        const cocktailName = document.createElement("h3");
        cocktailName.innerText = cocktail.strDrink;

        const cocktailImg = document.createElement("img");
        cocktailImg.src = cocktail.strDrinkThumb;
        cocktail.alt = "cocktail";

        const ingredientList = document.createElement("ol");
        for( let i = 1; i <= 15; i++){
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];

            if(ingredient && measure){
                const item = document.createElement("li");
                item.innerText = ingredient + ' - ' + measure;
                ingredientList.append(item);
            }
        }
        
        const instructions = document.createElement('p');
        instructions.innerText = cocktail.strInstructions;

        cocktailCard.append(cocktailName, cocktailImg, ingredientList,instructions);
        cocktailCard.style.width ="700px";
        cocktailCard.style.border ="3px solid rgb(232 190 138)";
        cocktailCard.style.padding ="20px";

        divResults.append(cocktailCard);
    });

}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    try {
        const cocktails = await getCocktails(input.value);
        displayCocktails(cocktails);
    }catch(err){
        console.log(err.message);
        
    }
})


const random = document.querySelector("#random");

random.onclick = async () => {
    divResults.innerHTML = "";
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    if(!response.ok){
        throw new Error ('Error getting random cocktail');
    }
    const data = await response.json();
    const cocktail = data.drinks[0]; ///!

    const drinkDiv = document.createElement("div");

    const cocktailName = document.createElement("h3");
    cocktailName.innerText = cocktail.strDrink;

    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktail.alt = "cocktail";

    const ingredientList = document.createElement("ol");

    for( let i = 1; i <= 15; i++){
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];

        if(ingredient && measure){
            const item = document.createElement("li");
            item.innerText = ingredient + ' - ' + measure;
            ingredientList.append(item);
        }
    }
    
    const instructions = document.createElement('p');
    instructions.innerText = cocktail.strInstructions;

    const closeBtn = document.createElement("span");
    closeBtn.onclick =() => {
        closeBtn.parentElement.style.display = "none";
    }
    closeBtn.innerHTML = "&times;";
    closeBtn.style.float = "right";
    drinkDiv.append(closeBtn);
    drinkDiv.append(cocktailName, cocktailImg, ingredientList,instructions);
    drinkDiv.style.width ="700px";
    drinkDiv.style.border ="3px solid rgb(232 190 138)";
    drinkDiv.style.padding ="20px";

    divResults.append(drinkDiv);

}



















