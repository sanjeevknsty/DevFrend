import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ListUtils = ({text}) => {
  return (
<>
          <ListItem
            key={1}
            sx={{
              py: 1,
              px: 1,
              borderRadius: 2,
              gap:2,
              transition:"background-color 0.3s ease, margin-left 0.3s ease",
             '&:hover ':{
                marginLeft:'5px',
                backgroundColor: '#2b2b2b' ,
             }
            //   backgroundColor: item.includes('Senior') ? '#2b2b2b' : 'transparent',
            
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <CheckCircleIcon sx={{ color: '#F4BF37' }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
</>

  )
}

export default ListUtils
