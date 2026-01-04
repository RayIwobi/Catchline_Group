import { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import catchlogo from './assets/icons/catchlogo.png'


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
                    <li onClick={() => setIsOpen(false)}>Home</li>
                    <li onClick={() => setIsOpen(false)}>About Catchline</li>
                    <li onClick={() => setIsOpen(false)}>Our Services</li>
                    <li onClick={() => setIsOpen(false)}>Programmes</li>
                    <li onClick={() => setIsOpen(false)}>Business School</li>
                    <li onClick={() => setIsOpen(false)}>Communities</li>
                    <li onClick={() => setIsOpen(false)}>Insights</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
