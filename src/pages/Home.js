import SidebarCateg from '../components/SidebarCateg'
import Popular from '../components/Popular'
import Veg from '../components/Veg'
import Navbar from '../components/Navbar'
import React from 'react'
import Search from '../components/Search'
import '../index.css'
function Home() {
    return (
        <div>
            <Navbar />
            <Search />
            {/* <div className='sidebar fixed'> */}
                <SidebarCateg />
            {/* </div> */}
            <Popular />
            <Veg />
        </div>

    )
}

export default Home
