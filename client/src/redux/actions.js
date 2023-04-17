import axios from 'axios'


export function getAllRecipes() {

    return (dispatch) => {
        return axios('http://localhost:3001/recipes/')
        .then(res => dispatch({
            type:'GET_RECIPES',
            payload: res.data
        }))
    }

}