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
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from './ProjectCardList.module.css'

const itemData = [
    { img: photo1, title: "Project1", subtitle: "Short description", pr_num: 0}, 
    { img: photo2, title: "Project2", subtitle: "Short description", pr_num: 1}, 
    { img: photo3, title: "Project3", subtitle: "Short description", pr_num: 2}, 
    { img: photo4, title: "Project4", subtitle: "Short description", pr_num: 3}, 
    { img: photo5, title: "Project5", subtitle: "Short description", pr_num: 4}, 
    { img: photo6, title: "Project6", subtitle: "Short description", pr_num: 5}
];

export default function ProjectCardList({columns, imgWidth, imgHeight, listMaxHeight}) {

  const [open, setOpen] = useState(false);
  const [prNum, setPrNum] = useState(null);
  let project_num = null;
  const handleClose = () => {
    setOpen(false);
    setOpen(null);
  };
  const handleOpen = (pr_num) => {
    setPrNum(pr_num);
    setOpen(true);
  };
  return (
    <>
        <div style={{
            margin: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}>
            <ImageList sx={{ width: 'auto', maxHeight: listMaxHeight }} cols={columns} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img} onClick={() => handleOpen(item.pr_num)}>
                <img
                    className={styles.projectImg}
                    style={{
                        width: imgWidth,
                        height: imgHeight,
                        cursor: 'pointer'
                    }}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"

                />
                <ImageListItemBar
                    className={styles.projectDesc}
                    sx={{
                        height: '30%', 
                        cursor: 'pointer',
                        "& .MuiImageListItemBar-titleWrap": { opacity: 0.5 }, //styles for title
                        "& .MuiImageListItemBar-titleWrap:hover": { opacity: 1 }, //styles for title
                        "& .MuiImageListItemBar-title": { color: '#FFF' }, //styles for title
                        "& .MuiImageListItemBar-subtitle": { color: '#ffb303' }, //styles for title
                          
                    }}
                    title={item.title}
                    subtitle={item.subtitle}
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        >
            <ProjectCard img={itemData[prNum].img} imgAlt={itemData[prNum].title} cardWidthP={200} cardHeightP={200}/>
        </Backdrop>
    </>
  );
}