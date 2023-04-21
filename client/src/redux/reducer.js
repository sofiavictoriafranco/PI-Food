import {GET_BY_NAME, GET_RECIPEID, GET_RECIPES} from "./actions"

const initialState = {
    recipes:[],
    diets:[]
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

        // case GET_RECIPEID:
        //     return{

        //     }


        default: 
        return state    
    }

}

export default reducer