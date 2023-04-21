import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPEID = 'GET_RECIPEID'
export const GET_BY_NAME = 'GET_BY_NAME'


export function getAllRecipes() {

    return (dispatch) => {
        return axios('http://localhost:3001/recipes/')
        .then(res => dispatch({
            type: GET_RECIPES,
            payload: res.data
        }))
    }

}


export function getByName (name){
    return (dispatch) => {
        return axios(`http://localhost:3001/recipes?name=${name}`)
        .then(res => dispatch({
            type: GET_BY_NAME,
            payload: res.data
        }))
    }
}

// export function getRecipeById(idRecipe) {
//     return(dispatch) => {
//         return axios(`http://localhost:3001/recipes/${idRecipe}`)
//         .then(res => dispatch({
//             type: GET_RECIPEID,
//             payload: res.data
//         }))
//     }
// }

// export const filterBySource = () => {
//     dispatch({
//         type: 'FILTER_BY_SOURCE',

//     })
// }