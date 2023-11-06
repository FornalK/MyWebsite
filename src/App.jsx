import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import AnimatedText from './components/AnimatedText';
import ScrollButton from './components/ScrollButton';
import ProjectCardList from './components/ProjectCardList';
import Avatar from './components/Avatar';
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation();
  return (
      <Box sx={{ flexGrow: 1 }}>
        <ScrollButton direction="down"/>
        <ScrollButton direction="up"/>
        <Grid container spacing={1}>
          <Grid xs={12} sm={12} md={9} lg={7} xl={7}>
            <div className="top-of-page" style={{height: 920}}>
              <div className="texts" style={{paddingTop: 10}}>
                <AnimatedText text={t('Hi')} delay={300} styleNumber={0} speed={50} size={64} />
                <AnimatedText text={t('Welcome')} delay={1300} styleNumber={0} speed={50} size={64} />
                <div style={{height: 50}}></div>
                <AnimatedText text={t('If')} delay={2150} styleNumber={1} speed={50} size={64} />
                <AnimatedText text={t('and')} delay={3000} styleNumber={1} speed={50} size={64} />
                <AnimatedText text={t('the')} delay={3750} styleNumber={1} speed={50} size={64} />
              </div>
            </div>
          </Grid>
          <Grid md={3} lg={5} xl={5}>
            <div className="top-of-page" style={{height: 920}}>
              <Avatar />
            </div>
          </Grid>
        </Grid>
        
        <div className="bottom-of-page" style={{height: 920, marginTop: 20}}>
          <div className="cards" style={{marginTop: 190}}>
            <ProjectCardList />
          </div>
        </div>
      </Box>
  );
}

export default App;
