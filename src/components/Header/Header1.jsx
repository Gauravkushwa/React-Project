import { Link } from "react-router-dom";
import './Header.css'
export const Header1 = () => {
    return (
        <>
         <nav className="nav1">
            <div className="leftLink">
                <Link className="link">Offers</Link>
                <Link className="link">Fanbook</Link>
                <Link className="link">Download App</Link>
                <Link className="link">TriBe MemberShip</Link>
            </div>
            < div className="middleLink">
            </div>
            <div className="rightLink">
                <Link className="link">Contact Us</Link>
                <Link className="link">track Order</Link>
            </div>
         </nav>
        </>
    )
}