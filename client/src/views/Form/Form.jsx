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

    function validate(form) {

        const errors = {}
       
        const titleRegex = /^[A-Za-z\s]+$/
      
      
         if (!titleRegex.test(form.title) || form.title === '') {
          
              errors.title = "Debe contener solo letras y espacios, no puede estar vacio"
           
          } 
          
        
        
          if (!titleRegex.test(form.summary) || form.summary === '') {
          
            errors.summary = "Debe contener solo letras y espacios, no puede estar vacio"
         
        } 
        
      
        
        if (!titleRegex.test(form.instructions) || form.instructions === '') {
          
            errors.instructions = "Debe contener solo letras y espacios, no puede estar vacio"
         
        } 

        if(isNaN(form.healthScore)){
            errors.healthScore = 'Debe ser un numero'
        }


        

        return errors
      
      
          }
    
    




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


    const submitHandler = async (event) => {
        event.preventDefault()

       
            const response = await axios.post('http://localhost:3001/recipes/', form)
            alert('Creado')
        
    }


    return(
        <form onSubmit={submitHandler}>  

            <div>
                <label>Title </label>
                <input type='text' value={form.title} onChange={changeHandler} name="title"/>
                <span>{errors.title}</span>

            </div>

            <div>
                <label>Summary </label>
                <input type='text' value={form.summary} onChange={changeHandler} name="summary"/>
                <span>{errors.summary}</span>
                
            </div>

            <div>
                <label>Health Score </label>
                <input type='number' value={form.healthScore} onChange={changeHandler} name="healthScore"/>
                <span>{errors.healthScore}</span>
                
            </div>

            <div>
                <label>Instructions </label>
                <input type='text' value={form.instructions} onChange={changeHandler} name="instructions"/>
                <span>{errors.instructions}</span>
                
            </div>

            <button type='submit'>CREATE</button>

        

      

        </form>
    )
}

export default Form