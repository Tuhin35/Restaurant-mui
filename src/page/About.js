import React from 'react';
import { Box, Typography } from '@mui/material'

const About = () => {
    return (

        <Box sx={{
            my:15,
            p:2,
            textAlign:"center",
            "& h4":{
                   fontWeight:"bold",my:2,
                   fontSize:"2rem"
            },
            "& p":{
                   textAlign:"justify"
            },
            "@media (max-width:600px)":{
                mt:0
            }
        }}>
            <Typography variant='h4'>
                welcome to my restaurant
            </Typography>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Incidunt nesciunt dolore laudantium vitae numquam minus 
                 accusantium minima nisi necessitatibus optio ullam voluptate 
                 illum quasi quo molestias explicabo, ipsum vel quos sequi quidem
                  qui non, quisquam nulla? Saepe sed perferendis quis incidunt
                   recusandae, cupiditate aliquid officia similique et quas eveniet
                    ut autem nemo debitis dolorum. Dolore, totam voluptate consequatur
                     eveniet veniam, ratione eum explicabo molestias illum, odit
                      aspernatur fugiat optio eligendi aliquid. Perspiciatis
                       obcaecati enim, assumenda modi repellendus iste soluta 
                       similique tempora impedit repudiandae? Fugit ab fuga 
                        cum eius doloribus repellendus aliquid libero at! 
                        Exercitationem earum distinctio quas modi eum.
            </p>
            <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Incidunt nesciunt dolore laudantium vitae numquam minus 
                 accusantium minima nisi necessitatibus optio ullam voluptate 
                 illum quasi quo molestias explicabo, ipsum vel quos sequi quidem
                  qui non, quisquam nulla? Saepe sed perferendis quis incidunt
                   recusandae, cupiditate aliquid officia similique et quas eveniet
                    ut autem nemo debitis dolorum. Dolore, totam voluptate consequatur
                     eveniet veniam, ratione eum explicabo molestias illum, odit
                      aspernatur fugiat optio eligendi aliquid. Perspiciatis
                       obcaecati enim, assumenda modi repellendus iste soluta 
                       similique tempora impedit repudiandae? Fugit ab fuga 
                        cum eius doloribus repellendus aliquid libero at! 
                        Exercitationem earum distinctio quas modi eum.
            </p>

        </Box>

    );
};

export default About;