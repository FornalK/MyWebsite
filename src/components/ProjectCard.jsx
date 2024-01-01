import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next'

export default function ProjectCard({img, imgAlt, prNum}) {
  const { t } = useTranslation();

  const isLaptopOrLower = useMediaQuery({ query: '(max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isShort = useMediaQuery({ query: '(max-height: 920px)' });


  let cardMediaHeight = 'auto'
  let cardContentHeight = 'auto'
  let cardWidth = '60%'


  if (isLaptopOrLower) {
    cardWidth = '90%'
  } else if (isShort) {
    cardWidth = '50%'
  }

  if (isMobile) {
    cardWidth = '90%'
  }

  return (
    <Card sx={{ width: cardWidth, maxHeight: '91%', boxShadow: '0px 0px 80px 14px rgba(65, 74, 114, 1)', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
      <CardMedia
        component="img"
        image={img}
        alt={imgAlt}
        sx={{ maxWidth: '100%', height: '50%'}}
      />
      <CardContent sx={{height: '50%', backgroundColor: 'primary.main'}}>
        <Typography gutterBottom variant="h5" component="div">
          {t(imgAlt)}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {prNum == 0 && <div>
            {t("Proj1Desc")} 
            <div style={{margin: '8px 0px'}}>
            <a style={{textDecoration: 'none'}} href="https://github.com/FornalK/Kacper/blob/master/videoDynamicsV9/main.py">{t("Proj1Program")}</a>
            </div>
            {t("Proj1Articles")} 
            <span> </span>
            <a style={{textDecoration: 'none'}} href="https://www.sciencedirect.com/science/article/pii/S1877050923016319">link1</a> 
            <span> </span>
            <a style={{textDecoration: 'none'}} href="https://ieeexplore.ieee.org/abstract/document/10305923">link2</a>
          </div>}

          {prNum == 1 && <div>
            {t("Proj2Desc")} 
            <div style={{margin: '8px 0px'}}>
            {t("Proj2Desc2")} 
            </div>
            <div style={{margin: '8px 0px'}}>
            <a style={{textDecoration: 'none'}} href="https://github.com/mglinska/fiszki">{t("Proj2Program")}</a>
            </div>
          </div>}

          {prNum == 2 && <div>
            {t("Proj3Desc")} 
            <div style={{margin: '8px 0px'}}>
            {t("Proj3Desc2")} 
            </div>
            <div style={{margin: '8px 0px'}}>
            <a style={{textDecoration: 'none'}} href="https://github.com/zm46704/IPZ-2021-22">{t("Proj3Program")}</a>
            </div>
          </div>}
        </Typography>
      </CardContent>
    </Card>
  );
}