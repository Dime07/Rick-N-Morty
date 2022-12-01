import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar(){

    const navbar = {
        padding: '5px 210px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    const menu = {
        display: 'flex',
        flexWrap: 'wrap',
        textDecoration: 'none'
    }

    const menuItem = {
        textDecoration: 'none',
        listStyleType: 'none',
        marginLeft: '24px',
        fontWeight: '600'
    }


    return(
        <nav style={navbar}>
            <img src={logo} alt="Rick and morty black logo" />
            <ul style={menu}>
                <Link to="/">
                    <li style={menuItem}>
                        Characters
                    </li>
                </Link>
                <Link to="/search">
                    <li style={menuItem}>
                        Search
                    </li>
                </Link>
                <Link to="/about-us">
                    <li style={menuItem}>
                        About us
                    </li>
                </Link>
            </ul>
        </nav>
    )
}