import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
export const Navbar = () => {
  return (
    <header >
        <nav className='navBar'>
          <>
            <img className='imgLogo' src="/images/logo.png" alt="Logo de la marca" />
            <h1 className='tituloNav'>COCINITAS DE MADERA</h1>
          </>
          <ul className='ulNav'>
              <Link to='/' className='liNav'>
                <li >Home</li>
              </Link>

              <Link to='/categoria/cocinita' className='liNav'>
                <li>Cocinitas</li>
              </Link>

              <Link to='/categoria/heladera' className='liNav'>
                <li>Heladeras</li>
              </Link>

              <li>
                <CartWidget/>
              </li>
          </ul>
        </nav>
    </header>
  )
}