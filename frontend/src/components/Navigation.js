import { useEffect, useState } from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);
    const [screenSize, setScreenSize] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        setScreenSize({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })

        console.log('i am here in set Dimension', screenSize.dynamicWidth);

        if (screenSize.dynamicWidth > 640) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }

    useEffect(() => {
        if (screenSize.dynamicWidth > 640) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    }, [])

    // useEffect(() => {
    //     window.addEventListener('resize', () => setDimension);

    //     return (() => {
    //         window.removeEventListener('resize', () => setDimension);
    //     })
    // }, [screenSize])

    function showHideMenu() {
        setShowNav(!showNav);
    };


    return (
        <div className="nav">
            <div className='nav_title'>
                <div className='barSection'>
                    <input type={'checkbox'} id={'check'} value={showNav} onChange={() => showHideMenu()} />
                    <label htmlFor="check" className="checkBtn">
                        {
                            showNav
                                ? <FontAwesomeIcon icon={faXmark} />
                                : <FontAwesomeIcon icon={faBars} />
                        }

                    </label>
                </div>


                <label className="logo">
                    M-Shop
                </label>
            </div>


            <nav style={{ opacity: showNav ? 1 : 0, transform: showNav ? 'scaleY(1)' : 'scaleY(0)' }}>
                {
                    showNav &&
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHome} />
                            <Link to='/'>
                                HomePage
                            </Link>
                        </li>
                        <li>
                            <Link className="active" to='/products'>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                About
                            </Link>
                        </li>
                    </ul>
                }
            </nav>

        </div>
    );
}