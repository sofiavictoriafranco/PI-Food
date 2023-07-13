import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPEID = 'GET_RECIPEID'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_DIETS = 'GET_DIETS'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const ORDER_BY_ALPHABET = 'ORDER_BY_ALPHABET'
export const ORDER_BY_HEALTHSCORE = 'ORDER_BY_HEALTHSCORE'
export const GO_BACK = 'GO_BACK'


export function getAllRecipes() {

    return (dispatch) => {
        return axios('/recipes/')
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
        return axios(`/recipes?name=${name}`)
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
        return axios(`/recipes/${idRecipe}`)
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
        return axios("/diets")
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
        return axios.post('/recipes/', form)
        .then(res => dispatch({
            type: CREATE_RECIPE,
            payload :res.data

        }))
        .catch(error => {
            
            alert('No se puede crear la receta');
        });
    }

  }


  export const filterByOrigin = (value) => {
    return {
      type: FILTER_BY_ORIGIN,
      payload: value,
    };
  };


  export const filterByDiets = (value) => {
    return {
      type: FILTER_BY_DIETS,
      payload: value,
    };
  };

  export const orderByAlphabet = (value) => {
    return {
      type: ORDER_BY_ALPHABET,
      payload: value,
    };
  };

  export const orderByHealthScore = (value) => {
    return {
      type: ORDER_BY_HEALTHSCORE,
      payload: value,
    };
  };

 







