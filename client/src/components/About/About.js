import styled from 'styled-components';


export const HeroContainer = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20 ;
    
    position: fixed;
    z-index:1;
    opacity: 1;
    background: black;
    
`

export const HeroBg = styled.div`
    width:100%;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    justifyContent: center;
    background: linear-gradient(#2193b0 , #6dd5ed);
    
    z-index:-30;
    height: 0vh;
      
    
`

export const VideoBg = styled.div`
    
    width:100%;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    
    

`

export const ImageLeft = styled.div`
    
    width:50vh;
    height:100%;    
    -o-object-fit: cover;
    object-fit: cover;
    
    
    

`