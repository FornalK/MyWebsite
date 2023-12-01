import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
    { img: photo1, title: "cos", subtitle: "cos2"}, 
    { img: photo2, title: "cos", subtitle: "cos2"}, 
    { img: photo3, title: "cos", subtitle: "cos2"}, 
    { img: photo4, title: "cos", subtitle: "cos2"}, 
    { img: photo5, title: "cos", subtitle: "cos2"}, 
    { img: photo6, title: "cos", subtitle: "cos2"}
];

export default function ProjectCardList({columns, imgWidth, imgHeight}) {
  return (
    <div style={{
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '700px'
    }}>
        <ImageList sx={{ width: 'auto', height: 'auto' }} cols={columns} gap={8}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                style={{
                    width: imgWidth,
                    height: imgHeight
                }}
                src={item.img}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                sx={{height: '30%'}}
                title={item.title}
                subtitle={item.subtitle}
                actionIcon={
                <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                >
                    <InfoIcon />
                </IconButton>
                }
            />
            </ImageListItem>
        ))}
        </ImageList>
    </div>
  );
}