import './navbar.scss'
import LoginIcon from '@mui/icons-material/Login';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';

function Navbar() {
    return <div className='navbar'>
        <div className="logo">
            <h2>ToMaTO</h2>
        </div>

        <ul>
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to=""> Menu</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link to="Cart">Cart</Link>
            </li>
        </ul>
        <div className="tk">
            <input type="text" />
            <button>
                <SearchSharpIcon />
            </button>

        </div>

        <div className="icon">
            <Link to="Sigin"> <LoginIcon fontSize="large" /></Link>

        </div>
    </div>

}

export default Navbar