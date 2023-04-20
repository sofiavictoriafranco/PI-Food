export default function validate(form) {

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

