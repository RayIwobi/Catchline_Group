import { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import catchlogo from './assets/icons/catchlogo.png'
import { NavLink } from 'react-router-dom'



function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    //close menu when clicking outsdie
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={catchlogo} alt='catchlogo' className='catchlogo' />
                </div>

                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <ul
                    ref={menuRef}
                    className={`menu ${isOpen ? "open" : ""}`}
                >
                    <NavLink to='/'><li onClick={() => setIsOpen(false)}>Home</li></NavLink>
                    <NavLink to='/about'><li onClick={() => setIsOpen(false)}>About Catchline</li></NavLink>
                    <NavLink to='/services'><li onClick={() => setIsOpen(false)}>Our Services</li></NavLink>
                    <NavLink to='/programmes'><li onClick={() => setIsOpen(false)}>Programmes</li></NavLink>
                    <NavLink to='/business-school'><li onClick={() => setIsOpen(false)}>Business School</li></NavLink>
                    <NavLink to='/communities'><li onClick={() => setIsOpen(false)}>Communities</li></NavLink>
                    <NavLink to='/insights'><li onClick={() => setIsOpen(false)}>Insights</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
