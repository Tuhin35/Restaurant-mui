import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
const Contact = () => {
    return (
      
       <div>
        <Box sx={{my:5, ml:10, 
       "&h4":{
        fontWeight:"bold",mb:2
       }
       }}>
        <Typography variant='h4'>
          Contact My Restaurant
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
       </Box>
       <Box sx={{
        m:3,
        width:'600px', ml:10,
        "@media (max-width:600px)":{
          width:"300px"
        }
       }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact tavle'>
            <TableHead>
             <TableRow>
              <TableCell sx={{bgcolor:'black',  fontWeight:"bold", color:'white'}}  align='center' >
                Contact Details
              </TableCell>
             </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{color:"red",pt:1}} />8245621 (Tool free)
            </TableCell>
            </TableRow>
              
           
           <TableRow>
           <TableCell>
              <MailOutlineIcon sx={{color:"green",pt:1}} />raihan35-559@diu.edu.bd
            </TableCell>
           </TableRow>
           <TableRow>
           <TableCell>
              <AddIcCallIcon sx={{color:"skyblue",pt:1}} />01867514649
            </TableCell>
           </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
       </Box>
      
       </div>
    );
};

export default Contact;