import { useState } from "react"

const Form = () => {

    const [form, setForm] = useState({
        title:'',
        summary:'',
        healthScore:'',
        instructions:'',

    })

    const changeHandler = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setForm({
            ... form,
            [property]: value,
        })

    }


    return(
        <form>  

            <div>
                <label>Title </label>
                <input type='text' value={form.title} onChange={changeHandler} name="title"/>

            </div>

            <div>
                <label>Summary </label>
                <input type='text' value={form.summary} onChange={changeHandler} name="summary"/>
                
            </div>

            <div>
                <label>Health Score </label>
                <input type='text' value={form.healthScore} onChange={changeHandler} name="healthScore"/>
                
            </div>

            <div>
                <label>Instructions </label>
                <input type='text' value={form.instructions} onChange={changeHandler} name="instructions"/>
                
            </div>

           

        


        </form>
    )
}

export default Form