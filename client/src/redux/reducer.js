import {CREATE_RECIPE, FILTER_BY_DIETS, FILTER_BY_ORIGIN, GET_BY_NAME, GET_DIETS, GET_RECIPEID, GET_RECIPES} from "./actions"

const initialState = {
    recipes:[],
    diets:[],
    detail: {},
    recipesfilter: [],
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
               

            }

        case FILTER_BY_ORIGIN:

        const filtered = state.recipes.filter((r) => {
            
            if(payload === 'Api' && r.created === false){
              return true;
            }else if(payload === 'BDD' && r.created === true){
              return true;
            }else{
              return false;
            }
          })
          return {
            ...state,
            recipes: filtered
          }



          case FILTER_BY_DIETS:
            const filteredDiets = state.recipes.filter(
              (r) => r.diets.includes(payload)
            );

            if(filteredDiets.length > 0){
            return {
              ...state,
              recipes: filteredDiets,
            };
        }else{
             alert('No hay recetas con esa dieta')
             return{
                ... state
             }
        }

           

        default: 
        return state    
    }

}

export default reducer