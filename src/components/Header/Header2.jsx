import './Header.css'
import { Link } from 'react-router-dom'
import search from './image/search.png'
import heart from './image/heart.png'
import lock from './image/lock.png'

export const Header2 = () => {
    return (
        <>
        <div className="mainHeader">
            <img id='logo' src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" />
            <nav className='nav2'>
                <Link className='link2'>MEN</Link>
                <Link className='link2'>WOMEN</Link>
                <Link className='link2'>MOBILE COVER</Link>
            </nav>
            <div className="inputBox">
            <img id='search' src={search} alt="" />
               <input id='input' type="text" placeholder='Search By Products' />
            </div>
            <div className="loginBox">
                <Link className='link3' to='/login'>LOGIN</Link>
                <img id='heart' src={heart} alt="" />
                <img id='lock' src={lock} alt="" />
            </div>
        </div>
        </>
    )
}