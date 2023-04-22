import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPEID = 'GET_RECIPEID'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_DIETS = 'GET_DIETS'
export const CREATE_RECIPE = 'CREATE_RECIPE'


export function getAllRecipes() {

    return (dispatch) => {
        return axios('http://localhost:3001/recipes/')
        .then(res => dispatch({
            type: GET_RECIPES,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No se encontraron recetas');
        });
    }

}


export function getByName (name){
    return (dispatch) => {
        return axios(`http://localhost:3001/recipes?name=${name}`)
        .then(res => dispatch({
            type: GET_BY_NAME,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No existe esa receta');
        });
        
    }
}

export function getRecipeById(idRecipe) {
    return(dispatch) => {
        return axios(`http://localhost:3001/recipes/${idRecipe}`)
        .then(res => dispatch({
            type: GET_RECIPEID,
            payload: res.data
        }))
        .catch(error => {
            
            alert('No existe ese ID');
        });
    }
}




  export const getDiets = () => {
    return(dispatch) => {
        return axios("http://localhost:3001/diets")
        .then(res => dispatch({
            type: GET_DIETS,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se encontraron dietas');
        });
    }
  }


  export const createRecipe = (form) => {

    return(dispatch) => {
        return axios.post('http://localhost:3001/recipes/', form)
        .then(res => dispatch({
            type: CREATE_RECIPE,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se puede crear la receta');
        });
    }

  }




// export const filterBySource = () => {
//     dispatch({
//         type: 'FILTER_BY_SOURCE',

//     })
// }