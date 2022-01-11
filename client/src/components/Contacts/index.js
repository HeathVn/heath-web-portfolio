import React from 'react'


import {Card, CardMedia, CardContent,CardActions,Typography, IconButton} from '@material-ui/core';
import {BsGithub} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { Grid } from '@material-ui/core';

import './styles.css';

const Contacts = () => {
    return (
        <>
        
            <div className="scl">

              <Grid  container justify="center" spacing={4}>
               
                
                    <Grid item justify="center" xs={12} sm={6} md={4} lg={3} >
                     
                      <Card className="socials" style={{backgroundColor: "black", borderRadius: 25}}>
                       <div style={{border:'2px solid white', margin: 5, borderRadius: 25, backgroundColor: "black"}}>
                           <IconButton >
                            <a href="https://github.com/HeathVn"><BsGithub className="scButton" style={{color:'white'}}/></a>
                           </IconButton>

                       
                           <IconButton >
                           <a href="https://www.linkedin.com/in/heath-vonn-s-b1b942120"><AiFillLinkedin className="scButton2" style={{color:'white'}}/></a>
                           </IconButton>
                           <br></br>
                           <Typography style={{display:'inline',fontFamily:'cursive', fontWeight:'bold', fontSize:30, color:'white'}}>Heathvonn Styles</Typography>
                       </div>
                      </Card>
                    </Grid>  

                   
                
              </Grid>
                
            </div>
            
        </>
    )
}

export default Contacts
