import {CREATE_RECIPE, FILTER_BY_DIETS, FILTER_BY_ORIGIN, GET_BY_NAME, GET_DIETS, GET_RECIPEID, GET_RECIPES, ORDER_BY_ALPHABET, ORDER_BY_HEALTHSCORE} from "./actions"

const initialState = {
    recipes:[],
    diets:[],
    detail: {},
    filtered: [],
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
            
            if(payload === 'Api' && !(isNaN(r.id))){
              return true;
            }

              if(payload === 'BDD' && isNaN(r.id)){
                return true;
              }
           
          })

          if(filtered.length > 0){
          return {
            ...state,
            filtered: filtered
          }
        }else{
            alert('No hay recetas con ese origen')
        }



        case FILTER_BY_DIETS:
            const filteredDiets = state.recipes.filter(
              (r) => r.diets.includes(payload)
            );

            if(filteredDiets.length > 0){
            return {
              ...state,
              filtered: filteredDiets,
            };
        }else{
             alert('No hay recetas con esa dieta')
             return{
                ... state
             }
        }



        case ORDER_BY_ALPHABET:

        state.filtered = [... state.recipes]

            return {
                ...state,
                filtered:
                  payload === "A-Z"
                    ? state.filtered.sort((a, b) => a.title.localeCompare(b.title))
                    : state.filtered.sort((a, b) => b.title.localeCompare(a.title)),
              };


        case ORDER_BY_HEALTHSCORE:

        state.filtered = [... state.recipes]
            
            return {
                  ...state,
                  filtered:
                    payload === "Ascendente"
                      ? state.filtered.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1))
                      : state.filtered.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1)),
                };



    

           

        default: 
        return state    
    }

}

export default reducer