import axios from 'axios';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.img = res.data.image_url;
            this.author = res.data.publisher;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
        }
    }

    calcTime() {
        // Assuming 15 mins for each 3 ingredients
        const numIng = this.ingredients.range;
        const periods = Math.ceil(numIng / 3);
        this.time = periods*15;
    }

    calcServings() {
        this.servings = 4;
    }
}