import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box,  styled} from '@mui/material'
import { Theme } from "../Theme";

const IconLink = styled('a')({
    marginRight: '4px',
    color:'white',
    //color: Theme.colors.primary1,
    '&:hover': {
      cursor: 'pointer',
      color: 'white',
    },
  })

const Icons = () => {
  return (
    <Box sx={{ mt:"10px", marginRight: '32px' }}>
    <IconLink href="https://github.com/alisonqiu">
      <GitHubIcon fontSize="large" />
    </IconLink>
    <IconLink href="https://www.linkedin.com/in/alison-qiu/">
      <LinkedInIcon fontSize="large" />
    </IconLink>
    <IconLink href="https://www.instagram.com/alisonqiu4/">
      <InstagramIcon fontSize="large" />
    </IconLink>
  </Box>
  )
}

export default Icons