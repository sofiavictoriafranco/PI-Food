import axios from "axios"
import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
        title:'',
        summary:'',
        healthScore: 0,
        instructions:'',

    })

    const [errors, setErrors] = useState({

        title:'',
        summary:'',
        healthScore: 0,
        instructions:'',

    })




    const changeHandler = (event) => {

        const property = event.target.name;
        const value = event.target.value;

       

        setForm({
            ... form,
            [property]: value,
        })

        setErrors(validate({
            ... form,
            [property]:value
        }))
    }

    const validate = (form) => {

  const errors = {};
 
  const titleRegex = /^[A-Za-z\s]+$/

  if (!titleRegex.test(form.title)) {
    errors.title = "title debe ser string";
  }

  if(form.title === ''){
    errors.title = "no puede estar vacio"
  }
 
  
  if (form.summary === '') {
    errors.summary = "no puede estar vacio";
  }

  if (form.instructions ===  '') {
    errors.instructions = "no puede estar vacio";
  }
  return errors;


    }

    const submitHandler = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('http://localhost:3001/recipes/', form)
            alert(response)
        } catch (error) {
            alert(error)
        }
    }


    return(
        <form onSubmit={submitHandler}>  

            <div>
                <label>Title </label>
                <input type='text' value={form.title} onChange={changeHandler} name="title"/>
                {errors.title && <span>{errors.title}</span>}

            </div>

            <div>
                <label>Summary </label>
                <input type='text' value={form.summary} onChange={changeHandler} name="summary"/>
                {errors.summary && <span>{errors.summary}</span>}
                
            </div>

            <div>
                <label>Health Score </label>
                <input type='number' value={form.healthScore} onChange={changeHandler} name="healthScore"/>
                {errors.healthScore && <span>{errors.healthScore}</span>}
                
            </div>

            <div>
                <label>Instructions </label>
                <input type='text' value={form.instructions} onChange={changeHandler} name="instructions"/>
                {errors.instructions && <span>{errors.instructions}</span>}
                
            </div>

           

        <button type='submit'>SUBMIT</button>


        </form>
    )
}

export default Form