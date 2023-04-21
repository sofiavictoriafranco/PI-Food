import {GET_BY_NAME, GET_RECIPEID, GET_RECIPES} from "./actions"

const initialState = {
    recipes:[],
    diets:[],
    detail: {},
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


        default: 
        return state    
    }

}

export default reducer