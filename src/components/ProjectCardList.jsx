import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo11 from '../assets/project1.png'
import photo22 from '../assets/project2.png'
import photo33 from '../assets/project3.png'
import photoEmpty from '../assets/emptyProj.png'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import styles from './ProjectCardList.module.css'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from "react-responsive";

const itemData = [
    { img: photo1, img2: photo11, title: "Proj1Title", subtitle: "Proj1Subtitle", pr_num: 0}, 
    { img: photo2, img2: photo22, title: "Proj2Title", subtitle: "Proj2Subtitle", pr_num: 1}, 
    { img: photo3, img2: photo33, title: "Proj3Title", subtitle: "Proj3Subtitle", pr_num: 2}, 
    { img: photoEmpty, title: "ProjEmptyTitle", subtitle: "", pr_num: 3}, 
    { img: photoEmpty, title: "ProjEmptyTitle", subtitle: "", pr_num: 4}, 
    { img: photoEmpty, title: "ProjEmptyTitle", subtitle: "", pr_num: 5}
];

export default function ProjectCardList({columns, imgWidth, imgHeight, listMaxHeight}) {
  const isLaptopOrSmaller = useMediaQuery({ query: '(max-width: 1023px)' });
  let numOfProjects = isLaptopOrSmaller ? 4 : 6
   
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [prNum, setPrNum] = useState(0);
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
            {itemData.slice(0, numOfProjects).map((item) => (
                item.subtitle != "" ? (
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
                    title={t(item.title)}
                    subtitle={t(item.subtitle)}
                />
                </ImageListItem> ): (
                <ImageListItem key={item.img}>
                <img
                    className={styles.projectImgEmpty}
                    style={{
                        width: imgWidth,
                        height: imgHeight,
                    }}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"

                />
                <ImageListItemBar
                    className={styles.projectDesc}
                    sx={{
                        height: '30%', 
                        "& .MuiImageListItemBar-titleWrap": { opacity: 0.5 }, //styles for title
                        "& .MuiImageListItemBar-title": { color: '#FFF' }, //styles for title
                    }}
                    title={t(item.title)}
                    subtitle={t(item.subtitle)}
                />
                </ImageListItem> )
            ))}
            </ImageList>
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
        >
            <ProjectCard img={itemData[prNum].img2} imgAlt={itemData[prNum].title} prNum={prNum}/>
        </Backdrop>
    </>
  );
}