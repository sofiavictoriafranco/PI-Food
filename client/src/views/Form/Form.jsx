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

        
       
        const titleRegex = /^[A-Za-z\s]+$/
      
        if (typeof form.title !== 'string') {
            setErrors({
              ... errors,
              title: "title debe ser una cadena de texto"
            }) 
          } else if (!titleRegex.test(form.title)) {
            setErrors({
              ... errors,
              title: "title debe contener solo letras y espacios"
            }) 
          } else {
            setErrors({
              ... errors,
              title: '',
            })
          }
          
        
        if (form.summary === '') {
          setErrors({
            ... errors,
            summary: 'no puede estar vacio'
          })
        }else {
            setErrors({
                ... errors,
                summary: '',
            })
        }
      
        if (form.instructions ===  '') {
          setErrors({
            ... errors,
            instructions: 'no puede estar vacio'
          })
        }else {
            setErrors({
                ... errors,
                instructions: '',
            })
        }
       
      
      
          }
    
    




    const changeHandler = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        

        setForm({
            ... form,
            [property]: value,
        })

        validate({
            ... form,
            [property]:value
        })

       
    }


    const submitHandler = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('http://localhost:3001/recipes/', form)
            alert(response)
        } catch (error) {
            alert(error.message)
        }
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