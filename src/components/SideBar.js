import '../styles/imports/sidebar.scss'
import { IoIosPodium } from 'react-icons/io'
import { BiTimer } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";

function SideBar() {
    return (
        <nav className="sidebar">
            <div className='logo'>
                <h1>Spotify</h1>
            </div>
            <ul className='nav-list'>
                <div className='nav-item'>
                    <IoIosPodium className='icon'/>
                    <li className='nav-text'>Top tracks</li>
                </div>

                <div className='nav-item'>
                    <BsGraphUp className='icon' />
                    <li className='nav-text'>Top artists</li>
                </div>

                <div className='nav-item'>
                    <BiTimer className='icon' />
                    <li className='nav-text'>Latest</li>
                </div>
            </ul>
        </nav>
    )
}

export default SideBar