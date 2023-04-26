
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecipe } from "../../redux/actions"
import { getDiets } from "../../redux/actions"
import style from './Form.module.css'



const Form = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])


    const diets = useSelector(state => state.diets)


    const [diet, setDiet] = useState([])

    

    const [form, setForm] = useState({
        title:'',
        summary:'',
        healthScore: 0,
        instructions:'',
        image:'',
        recipeDiets:[]

    })

    const [errors, setErrors] = useState({

        title:'',
        summary:'',
        healthScore: '',
        instructions:'',
        image:'',
        recipeDiets: []

    })

    function validate(form) {

        const errors = {}
       
        const titleRegex = /^[A-Za-z\s]+$/
        const url = /(https?:\/\/.*\.(?:png|jpeg|jpg))/i;
      
      
         if (!titleRegex.test(form.title) || form.title === '') {
          
              errors.title = "Debe contener solo letras y espacios, no puede estar vacio"
           
          } 
          
        
        
          if (!titleRegex.test(form.summary) || form.summary === '') {
          
            errors.summary = "Debe contener solo letras y espacios, no puede estar vacio"
         
        } 
        
      
        
        if (!titleRegex.test(form.instructions) || form.instructions === '') {
          
            errors.instructions = "Debe contener solo letras y espacios, no puede estar vacio"
         
        } 


        if (!url.test(form.image)) {
            errors.image = "Debe ser una URL";
          }

        if(form.healthScore <= 0){
            errors.healthScore = 'Debe ser un numero mayor a 0'
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


    const mapDiets = () => {
        const filtered = diets.filter((d) => !diet.includes(d.title));
        return filtered.map((d, i) => {
          return (
              <option value={d.title} key={i}>
              {d.title}
            </option>
          );
        });
      };

      const dietHandler = (event) => {
        if(event.target.value){
          setDiet([...diet, event.target.value]);
          setForm({...form, recipeDiets: [...diet, event.target.value]})
         
          
        }
      };


    const submitHandler = async (event) => {
        event.preventDefault()

        if (
            !errors.title &&
            !errors.summary &&
            !errors.healthScore &&
            !errors.instructions &&
            
            diet.length >= 1
            ) {
              dispatch(createRecipe(form));
              alert('Receta creada')
            }else{
              alert('Los campos deben ser correctos y estar completos')
            }
        
    }

   


    return(
        <div className={style.div}>
        <form onSubmit={submitHandler} >  

        <div className={style.form}>

            <div className={style.div2}>
                <label className={style.label}>Title </label>
                <input type='text' value={form.title} onChange={changeHandler} name="title"/>
                <span>{errors.title}</span>

            </div>

            <div className={style.div2}>
                <label className={style.label} >Summary </label>
                <input type='text' value={form.summary} onChange={changeHandler} name="summary"/>
                <span>{errors.summary}</span>
                
            </div>

            <div className={style.div2}>
                <label className={style.label} >Health Score </label>
                <input type='number' value={form.healthScore} onChange={changeHandler} name="healthScore"/>
                <span>{errors.healthScore}</span>
                
            </div>

            <div className={style.div2}>
                <label className={style.label} >Instructions </label>
                <input type='text' value={form.instructions} onChange={changeHandler} name="instructions"/>
                <span>{errors.instructions}</span>
                 
            </div>

            <div className={style.div2}>
                <label className={style.label} >Image </label>
                <input type='text' value={form.image} onChange={changeHandler} name="image"/>
                <span>{errors.image}</span>
                 
            </div>

            <div>


        <label  >Diets: </label>
        <select  onChange={dietHandler} name="diets">
        <option value="default" >Selecciona las dietas</option>
          {mapDiets()}
        </select >
        
        
            </div>

            <button className={style.myButton} type='submit'>CREATE</button>

            </div>

        

      

        </form>
        </div>
    )
}

export default Form