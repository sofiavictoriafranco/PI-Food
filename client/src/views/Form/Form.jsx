import axios from "axios"
import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
        title:'',
        summary:'',
        healthScore:'',
        instructions:'',

    })

    const [errors, setErrors] = useState({

        title:'',
        summary:'',
        healthScore:'',
        instructions:'',

    })




    const changeHandler = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        validate({
            ... form,
            [property]:value,
        })

        setForm({
            ... form,
            [property]: value,
        })

    }

    const validate = () => {

        if(typeof(form.title) === 'string' || form.title !== '' ){

            setErrors({
                ... errors,
                title:'',
            })
        
        }else{
            setErrors({
                ... errors,
                title:'Hay un error en title',
            })
        }

        if(typeof(form.summary) === 'string' || form.summary !== '' ){

            setErrors({
                ... errors,
                summary:'',
            })
        
        }else{
            setErrors({
                ... errors,
                summary:'Hay un error en summary',
            })
        }

        if(typeof(form.instructions) === 'string' || form.instructions !== '' ){

            setErrors({
                ... errors,
                instructions:'',
            })
        
        }else{
            setErrors({
                ... errors,
                instructions:'Hay un error en instructions',
            })
        }

        if(typeof(form.healthScore) === 'number' || form.healthScore !== '' ){

            setErrors({
                ... errors,
                healthScore:'',
            })
        
        }else{
            setErrors({
                ... errors,
                healthScore:'Hay un error en health score',
            })
        }


    }


    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post('http://localhost:3001/recipes/', form)
        .then(res => alert(res))
        .catch(err => alert(err))
        
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
                <input type='text' value={form.healthScore} onChange={changeHandler} name="healthScore"/>
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