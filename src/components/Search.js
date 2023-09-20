import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate('/search/' + input)
    }
    return (
        <form onSubmit={handleOnSubmit} className='flex items-center justify-center'>
            <input className=' sticky outline-none focus:auto shadow-2xl bg-black hover:bg-gray-700 text-white hover:border-solid text-center mt-3 w-1/2 h-12 border rounded-4 text-bold' type='text' placeholder="&#xF002; Search Recipie" style={{ fontFamily: "Andika,FontAwesome", fontSize: "1.2rem", fontWeight: "800" ,textTransform:"capitalize"}} value={input} onChange={(e) => setInput(e.target.value)}>
            </input>
        </form>
    )
}

export default Search
