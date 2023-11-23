import './navBar.css';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';


const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='leftnavbar'>
                <Link to='/' style={{textDecoration:"none"}}>
                <span className='LTitle'>iamsocial</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className='Searchbox'>
                    <SearchIcon />
                    <input className='InputSearch' type='text' placeholder='Search....'></input>
                </div>
            </div>
            <div className='rightnavbar'>
                <PersonOutlineOutlinedIcon/>
                <MailOutlineOutlinedIcon/>
                <NotificationsNoneOutlinedIcon/>
                <div className='user'>
                    <img className='UserProfile' src=''></img>
                    <span className='UserTitle'>John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;