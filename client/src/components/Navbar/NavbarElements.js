import styled from 'styled-components';
import {Link, Link as LinkR} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

import {motion} from 'framer-motion';

export const Nav = styled.nav`

/* #07addb */



background-image: linear-gradient(45deg,#f75616 25%, #ff7d14 25%,#f94327 25%,#ff7d14 25%);

    height: 80px;
    /* margin-top: -80px;  */
    display:flex;
    /* justify-content: center; */
    align-items: center; 
    font-size: 1 rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: 0px;


@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
    display:block;
    justify-content: space-between;  
    height: 80px;
    z-index: 1;
    width: 100%
    padding: 0 24px;
    max-width:1100px;
    margin-left: 0px;
   


`;
export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: left;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
    padding-left: 20px;
    padding-top: 15px;
    position: absolute;
    
`

export const MobileIcon = styled(motion.div)`
    
color: #fff;
font-size: 2rem;
cursor: pointer;
position: absolute;
top:0;
right:0;
margin-right: 17px;
margin-top: 16px;
transform: translate(-120%, 45%);

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        
    }
`
export const MobileIcon2 = styled(Link)`
    
color: #fff;
font-size: 2rem;
cursor: pointer;
position: absolute;
top:0;
right:0;
transform: translate(-180%, 23%);



    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-80%, 23%);
        font-size: 2rem;
        cursor: pointer;
        color: #fff;
        margin-right:60px
        
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 637px;
    position: absolute;
    right: 40px;

    @media screen and (max-width: 768px){
        display:none;
    }

`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    margin-right: 60px;
    text-decoration: none;
    margin-top: 27px;
    cursor: pointer;

/* Adds highlight under the section user is
 currently on when scrolling */

    &.active {
        border-bottom: 3px solid #fff;
    }

`
export const NavLinks2 = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    margin-right: 60px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

/* Adds highlight under the section user is
 currently on when scrolling */

    &.active {
        border-bottom: 3px solid #fff;
    }

`