import { Box, Stack, Text } from '@chakra-ui/layout'
import React from 'react'



import 'bootstrap/dist/css/dashboard.min.css';



const DashboardCard = ({ title, txtid, id, count, icon, func,func2 }, props) => {

    
    return (
        <div className="cardHead p-4 pb-3" onClick={() => func(id,func2)}>
           <Stack flexDirection="row">
           <Box className="text">
               
               <Text style={{fontSize:"20px", fontWeight:"bold"}}>{title}</Text>
               <Text className="count" id={txtid}>{count}</Text>
           </Box>
           <div className="icon">
               <img  src={icon} />
           </div>
           </Stack>
            

        </div>
    )
    
}

export default DashboardCard
