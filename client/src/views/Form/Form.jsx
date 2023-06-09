
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
          
        
        
          if (form.summary === '') {
          
            errors.summary = "No puede estar vacio"
         
        } 
        
      
        
        if (form.instructions === '') {
          
            errors.instructions = 'No puede estar vacio'
         
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
       
        return diets.map((d, i) => {
            const checked = diet.includes(d.title);
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={d.title}
                name={d.title}
                value={d.title}
                onChange={dietHandler}
                checked={checked}
              />
              <label htmlFor={d.title}>{d.title}</label>
            </div>
          );
        });
      };

      const dietHandler = (event) => {
        const dietValue = event.target.value;
        const isChecked = event.target.checked;
      
        if (isChecked) {
          
          setDiet([...diet, dietValue]);

          setForm({...form, recipeDiets: [...diet, dietValue]})
      
         
        
        } else {
         
          const updatedDiet = diet.filter((d) => d !== dietValue);

          setDiet(updatedDiet);
      
          
          setForm({
            ... form,
            recipeDiets: form.recipeDiets.filter((d) => d !== dietValue),
        })
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
      
          {mapDiets()}
      
        
        
            </div>

            <button className={style.myButton} type='submit'>CREATE</button>

            </div>

        

      

        </form>
        </div>
    )
}

export default Form