import React from 'react'
// import Home from '../pages/Home'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        // <div
        <nav className='text-white w-full justify-between sticky top-0'>
            <li className='flex gap-x-4  bg-purple-600 pt-2'>
                <ul className='hover:underline'>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <b>Home</b>
                    </Link>
                </ul>
                <ul className='hover:underline'>
                    <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                        <b>About</b>
                    </Link></ul>
                <ul className='hover:underline'>
                    <Link to="/contactus" style={{ textDecoration: "none", color: "white" }}>
                        <b>Contact Us</b>
                    </Link></ul>
            </li>
        </nav>
        // </div>
    )
}

export default Navbar
