import './App.css';
import Logo from './components/Logo';
import profile from './images/profile.svg';
import bag from './images/bag.svg';

const navbarItems = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
const navbarIcons = [profile, bag]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Logo></Logo>
                <ul className='navbar'>
                    { navbarItems.map ( (navbarItem) => (
                        <li className='navbar-item'><p>{navbarItem}</p></li>
                    ) ) }
                </ul>

                <ul className='navbar-icons'>
                    { navbarIcons.map( (icon) => (
                      <li className="icon"><img src={icon}></img></li>
                    )) }
                </ul>
      </header>
    </div>
  );
}

export default App