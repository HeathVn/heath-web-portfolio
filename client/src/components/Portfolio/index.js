import React from 'react'

import './Portfolio.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  {CardActionArea}  from '@mui/material';
import { Grid } from '@material-ui/core';

import CryptoConnect from '../Portfolio/images/CryptoConnect.jpeg'
import Wavy from '../Portfolio/images/wavy.mp4'
import Jluxxe from '../Portfolio/images/jluxxe.mp4'


const Portfolio = () => {
    return (
        <>
          <div className="con">

          <br></br>
          <h1 className="port">Portfolio</h1>

          <Grid container justify="center" spacing="1" style={{marginLeft:40}}>
               
                
             <Grid id="card" item justify="center" xs={12} sm={6} md={4} lg={6} >
                     <Card sx={{ maxWidth: 800, marginTop:10 }}>
           <CardActionArea style={{display:'inline',border:'1px solid white'}}>
             <CardMedia
               component="img"
               height="440"
               width="500"
               image= {CryptoConnect}
               alt="Crypto Connect Course Project"
             />
             <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: CryptoCurrency 
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Network Application Development Course Project
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: NodeJS, EJS, MongoDB/Mongoose, REST API
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: 
              </CardContent>
           </CardActionArea>
          </Card>

                    </Grid>  

                    <Grid id="card2" item justify="center" xs={12} sm={6} md={4} lg={6} >
                     
                      <Card sx={{ maxWidth: 800,marginTop:10 }}>
           <CardActionArea style={{display:'inline',border:'1px solid white'}}>
             <CardMedia
               component="iframe"
               height="440"
               width="500"
               src= {Wavy}
               alt="Crypto Connect Course Project"
               allow="autoPlay"
               
             />
             <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: WavyBabyProductions 
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Personal Project/ Client Website Build
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: Bootstrap, ReactJS, Github
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: 
              </CardContent>
           </CardActionArea>
          </Card>
                    </Grid>  
                



         <Grid id="card3" item justify="center" xs={12} sm={6} md={4} lg={6} >
                     
                     <Card sx={{ maxWidth: 800,marginTop:10 }}>
          <CardActionArea style={{display:'inline',border:'1px solid white'}}>
            <CardMedia
              component="iframe"
              height="440"
              width="500"
              src= {Jluxxe}
              alt="Crypto Connect Course Project"
              allow="autoPlay"
              muted={true}
            />
            <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: Jluxxe Hair
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Shopify Client Website Build/ Customization
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: Shopify, Liquid.js
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: 
              </CardContent>
          </CardActionArea>
         </Card>
                   </Grid> 


                   <Grid  item justify="center" xs={12} sm={6} md={4} lg={6} >
                     
                     <Card sx={{ maxWidth: 800,marginTop:10 }}>
          <CardActionArea style={{display:'inline',border:'1px solid white'}}>
            <CardMedia
              component="iframe"
              height="440"
              width="500"
              src= ""
              alt="Crypto Connect Course Project"
              allow="autoPlay"
              muted={true}
            />
            <CardContent style={{backgroundColor:'black', color:'white'}}>
               Project Name: HvLegacyDesigns
             </CardContent>
             <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Purpose: Personal React Project
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Tools: ReactJS, CommerceJS, NodeJS
              </CardContent>
              <CardContent style={{backgroundColor:'black', color:'white',borderTop:'2px solid white'}}>
               Source: 
              </CardContent>
          </CardActionArea>
         </Card>
                   </Grid> 
            </Grid>


          

         
          </div>
        </>
    )
}

export default Portfolio
