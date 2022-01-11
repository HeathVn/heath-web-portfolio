import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {GiShop} from 'react-icons/gi'
import {TiDeviceDesktop} from 'react-icons/ti'
import {Nav, NavbarContainer, NavLogo, MobileIcon, MobileIcon2,NavMenu, NavItem,
NavLinks, NavLinks2} from './NavbarElements';
import {motion} from 'framer-motion';

import {Link, Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'

import {AppBar, Toolbar, IconButton, MenuItem, Menu, Typography} from '@material-ui/core';


import "./styles.css";
import { ShoppingCart } from '@material-ui/icons';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import Me from './profileMe.png'


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Navbar = ({totalItems}) => {
   

 const [isOpen, setIsOpen] = useState(false);

 const menuVariants = {

    opened:{
       top:0
    },
    closed:{
      top: "-180vh"
    }
}
   
const iconVariants = {

    opened:{
       rotate:90
    },
    closed:{
        rotate:0
    }
}



    return (

        <>
            <Nav className="navbar">
                <NavbarContainer>
                    <NavLogo 
                    
                    className="logo" to='/'><motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    
                    
                    
                    >Heath's Web Portfolio <TiDeviceDesktop id="flame"/></motion.h3>

                    
                        
                    
                    
                    </NavLogo>
                    <MobileIcon
                    
                      intial={false}
                      variants={iconVariants}
                      animate={isOpen ? "opened" : "closed"}
                      onClick={() => setIsOpen(state => !state)}
                    >
                        <FaBars/>
                    </MobileIcon>

                    

                    

                    <MobileIcon2 
                    
                    
                    to="/cart" aria-label="View Shopping Cart">
                        

                        <StyledBadge
                           className="icon"
                           overlap="circular"
                           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                           variant="dot">
                               <Avatar alt="Heathvonn Styles" src={Me} />
                        </StyledBadge>
                        
                    </MobileIcon2>
                    <NavMenu className="item1">
                        <NavItem >
                            <NavLinks className="items"  to="/about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className="items" to='/portfolio'>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks className="items" to='/contacts'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>


            </Nav>

            <motion.div
                    
                    className="dropdown"
                    intial={false}
                    variants={menuVariants}
                    animate={isOpen ? "opened" : "closed"}
                   >
                       <motion.div className="dropdownList"><Link className="dropdownItems" to="/">About</Link></motion.div>
                       <motion.div className="dropdownList"><Link className="dropdownItems" to="/">Services</Link></motion.div>
                       <motion.div className="dropdownList"><Link className="dropdownItems" to="/">Roadmap</Link></motion.div>
                       <motion.div className="dropdownList"><Link  className="dropdownItems"to="/">Contact</Link></motion.div>
                   </motion.div>
        </>
    );
};

export default Navbar;
