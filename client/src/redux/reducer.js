

const initialState = {
    recipes:[],
    diets:[]
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        case "GET_RECIPES":
            return {
                ... state,
                recipes: payload
            }


        default: 
        return state    
    }

}

export default reducer