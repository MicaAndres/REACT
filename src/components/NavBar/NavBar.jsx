import './NavBar.css';
import CartWidget from '../fragments/CartWidget/CartWidget';

function NavBar() {
  return (
    <div className='navBar'>
        <>
          <img className='imgLogo' src="assets/images/logo.png" alt="" />
          <h1 className='tituloNav'>COCINITAS DE MADERA</h1>
        </>
        <ul className='ulNav'>
          <li className='liNav1'><a className='styleLinks' href='https://www.google.com/'>Nosotros</a></li>
          <li className='liNav2'><a className='styleLinks' href='https://www.google.com/'>Productos</a></li>
          <li className='liNav4'><a className='styleLinks' href='https://www.google.com/'>Perfil</a></li>
        </ul>
        <CartWidget/>
    </div>
  );
}

export default NavBar;