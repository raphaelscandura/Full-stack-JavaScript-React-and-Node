import logo from '../../images/logo.svg';                  
import './index.css';

function Logo(){
    return (
        <div className="logo">
          <img src={logo} alt="Scandura Books" />
          <p> <strong>Scandura</strong> Books</p>
        </div>
    )
}

export default Logo;