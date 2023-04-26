import {CREATE_RECIPE, FILTER_BY_DIETS, FILTER_BY_ORIGIN, GET_BY_NAME, GET_DIETS, GET_RECIPEID, GET_RECIPES, GO_BACK, ORDER_BY_ALPHABET, ORDER_BY_HEALTHSCORE} from "./actions"

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
                filtered: payload
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

        
        let filtered
        
        if(state.filtered.length > 0){
           filtered = payload === 'All'? state.recipes :
            state.filtered.filter((r) => {
            
            if(payload === 'Api' && !(isNaN(r.id))){
              return true;
            }

              if(payload === 'BDD' && isNaN(r.id)){
                return true;
              }

              

              
           
          })
        }else{
            filtered = payload === 'All'? state.recipes :
            state.recipes.filter((r) => {
            
                if(payload === 'Api' && !(isNaN(r.id))){
                  return true;
                }
    
                  if(payload === 'BDD' && isNaN(r.id)){
                    return true;
                  }

                
               
              })
    
        }

          if(filtered.length > 0){
          return {
            ...state,
            filtered: filtered
          }
        }else{
            alert('No hay recetas con ese origen')
            return {
                ... state
            }
        }



        case FILTER_BY_DIETS:

        let filteredDiets

        if(state.filtered.length > 0){
            filteredDiets = payload === 'All'? state.recipes :
            state.filtered.filter(
                (r) => r.diets.includes(payload)
              );
             
  
        }else{
            filteredDiets = payload === 'All'? state.recipes :
             filteredDiets = state.recipes.filter(
              (r) => r.diets.includes(payload)
            );

        }

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

        let orderalphabet

        if(state.filtered.length > 0){
           orderalphabet = payload === "A-Z"? state.filtered.sort((a, b) => a.title.localeCompare(b.title))
                        : state.filtered.sort((a, b) => b.title.localeCompare(a.title))

        

        }else{
           orderalphabet = payload === "A-Z"? state.recipes.sort((a, b) => a.title.localeCompare(b.title))
                     : state.recipes.sort((a, b) => b.title.localeCompare(a.title))

           


        }


        if(orderalphabet.length > 0){
            return{
                ... state,
                filtered: orderalphabet
            }
        }else{
            return{
                ... state
            }
        }


        case ORDER_BY_HEALTHSCORE:


        let orderhealthscore

        if(state.filtered.length > 0){
            orderhealthscore = payload === "Ascendente"
                        ? state.filtered.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1))
                       : state.filtered.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1))

        return {
            ... state,
            filtered: orderhealthscore,
        }               
        }else{

            orderhealthscore = payload === "Ascendente"
                        ? state.recipes.sort((a, b) => (a.healthScore < b.healthScore ? -1 : 1))
                       : state.recipes.sort((a, b) => (a.healthScore > b.healthScore ? -1 : 1))

        return {
            ... state,
            filtered: orderhealthscore,
        }               

        }





    

      
       



    

           

        default: 
        return state    
    }

}

export default reducer