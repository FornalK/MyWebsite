import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "react-responsive";

export default function ProjectCard({img, imgAlt, cardWidthP, cardHeightP}) {

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1760px)' });
  const isBigScreenShort = useMediaQuery({ query: '(min-width: 1440px) and (max-width: 1759px) and (max-height: 780px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px) and (max-width: 1759px)' });
  const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isMobileShort = useMediaQuery({ query: '(max-width: 767px) and (max-height: 780px)' });

  if (isBigScreenShort) {
    
  } else if (isBigScreen) {
    
  } else if (isLaptopL) {
    
  } else if (isLaptop) {
    
  } else if (isMobile) {
   
  }

  if (isMobileShort) {
    
  }

  return (
    <Card sx={{ width: '60%', height: '60%', boxShadow: '0px 0px 80px 14px rgba(65, 74, 114, 1)', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <CardMedia
        component="img"
        height="400"
        image={img}
        alt={imgAlt}
        sx={{height: '67%'}}
      />
      <CardContent sx={{height: '33%', backgroundColor: 'primary.main'}}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}