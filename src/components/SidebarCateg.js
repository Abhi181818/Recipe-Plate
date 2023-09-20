import React from 'react'
import '../index.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiCroissant, GiIndianPalace } from 'react-icons/gi'
import Sticky from 'react-stickynode';
function SidebarCateg() {
    return (
        <div style={{ margin: "0% 15%" }} >
            <Sticky>
                <Sidebar backgroundColor="#17284c" className='sidebar-categ sticky top-0' style={{ marginLeft: "-300px", marginTop: "20px", paddingLeft: "20px" ,position:"sticky"}}>
                    <Menu>
                        <SubMenu label="Top Cuisines" style={{ color: "white", fontFamily: "Andika" }}>
                            <Link to="/cuisine/indian">
                                <MenuItem><GiIndianPalace />Indian</MenuItem>
                            </Link>
                            <Link to="/cuisine/american">
                                <MenuItem style={{ fontFamily: "Andika" }}><FaHamburger />American</MenuItem>
                            </Link>
                            <Link to="/cuisine/french">
                                <MenuItem style={{ fontFamily: "Andika" }}><GiCroissant />French</MenuItem>
                            </Link>
                            <Link to="/cuisine/italian">
                                <MenuItem style={{ fontFamily: "Andika" }}><FaPizzaSlice />Italian</MenuItem>
                            </Link>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </Sticky>
        </div>
    )
}

export default SidebarCateg
