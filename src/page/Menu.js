import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MenuList } from '../data/data';
import React from 'react';

const Menu = () => {
    return (
        <div >
            <Box sx={{display:'flex', flexWrap:'wrap' , justifyContent:'center'}}>
                {
                    MenuList.map(menu => (
                        <Card sx={{maxWidth:"390px",display:"flex" ,m:2}}>
                            <CardActionArea>
                                <CardMedia sx={{minHeight:'400px'}}component={'img'} src={menu.image} alt={menu.name} ></CardMedia>
                                <CardContent>
                                    <Typography variant='h5' gutterBottom component={'div'}>
                                        {menu.name}
                                    </Typography>
                                    <Typography 
                                    variant='body2'
                                    >{menu.description} </Typography>
                                    <Typography variant='p'>
                                     Price: ৳{ menu.price
                                        }
                                    </Typography>
                                </CardContent>
                                
                            </CardActionArea>
                        </Card>

                    ))
                }
            </Box>
        </div>
    );
};

export default Menu;