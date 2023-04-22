import {CREATE_RECIPE, GET_BY_NAME, GET_DIETS, GET_RECIPEID, GET_RECIPES} from "./actions"

const initialState = {
    recipes:[],
    diets:[],
    detail: {},
    recipesBDD: [],
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        case GET_RECIPES:
            return {
                ... state,
                recipes: payload
            }


        case GET_BY_NAME:
            return {
                ... state,
                recipes: payload
            }

        case GET_RECIPEID:
            return{

                ... state,
                detail: payload

            }

        case GET_DIETS:
            return{
                ... state,
                diets: payload,

            }

        case CREATE_RECIPE:
            return{
                ... state,
                recipes: [... state.recipes, payload],
                recipesBDD: [... state.recipesBDD, payload]

            }


        default: 
        return state    
    }

}

export default reducer