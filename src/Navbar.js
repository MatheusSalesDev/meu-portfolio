import React, {useState} from 'react';
import Toggler from './Toggler';
import {Link, useLocation} from 'react-router-dom';
import {Box} from "@mui/material";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/sobre',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active) && "active"}
                         sx={{borderImageSource: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            <p style={{padding: '0.5rem 0'}}>{link.name}</p>
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}
