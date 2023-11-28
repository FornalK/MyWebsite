import Card from '@mui/material/Card';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProjectCard({img, imgAlt, cardWidthP, cardHeightP}) {
  const [showDescription, setShowDescription] = useState(false);
    return (
        <Card 
          sx={{
            width: cardWidthP,
            maxHeight: cardHeightP,
            margin: '2px', 
            display: 'inline-block',
            '&:hover': {
              backgroundColor: 'primary.main',
             }
          }}
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height={showDescription ? 190 : cardHeightP} 
              width={cardWidthP}
              image={img}
              alt={imgAlt}
            />
            {showDescription ? <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species.
              </Typography>
            </CardContent> : null}
          </CardActionArea>
        </Card>
    );
}

export default ProjectCard;