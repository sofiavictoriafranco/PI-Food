import {Link} from 'react-router-dom'
import style from './NavBar.module.css'



const NavBar = (props) => {
    return(
        <div className={style.mainContainer}>

            <Link to= '/home'>Home</Link>
            <Link to= '/create'>Form</Link>

            <form onChange={props.handleChange}>
                <input placeholder='Busqueda' type='search'/>
                <button type='submit' onClick={props.handleSubmit}>Buscar</button>
            </form>

        


        </div>
    )
}

export default NavBar