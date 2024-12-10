import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBolt } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import iconoLogo from "../images/DH.ico";
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {

  const { dispatch, state } = useContext(ContextGlobal)

  return (
    <nav className={state.theme}>
    
      <div className='logo'>
        <img src={iconoLogo} alt='Icono Digital' />
        <span>ODONTO</span>
      </div>
        <div className='nav-bar-icon'>
        <div className='nav-links'>
          <Link to="/">Inicio</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/Contact">Contacto</Link>
        </div>
        <div className='theme-switcher'>
          <input type="checkbox" class="checkbox" id="checkbox" onClick={() => { dispatch({ type: 'changeTheme' }) }}/>
            <label for="checkbox" class="label">
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faBolt} />
              <div class='ball'/>
            </label>
        </div>
        </div>
    </nav>
  )
}

export default Navbar