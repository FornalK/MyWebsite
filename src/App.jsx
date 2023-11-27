import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import AnimatedText from './components/AnimatedText';
import ScrollButton from './components/ScrollButton';
import ProjectCardList from './components/ProjectCardList';
import Avatar from './components/Avatar';
import { useTranslation } from 'react-i18next'
import Zoom from '@mui/material/Zoom';

const start = true;

function App() {
  const { t } = useTranslation();
  console.log(localStorage.getItem("lang"));
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <ScrollButton direction="down"/>
          <Grid xs={12} sm={12} md={9} lg={7} xl={7}>
            <div className="top-of-page" style={{height: 920}}>
              <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
                <div className="texts_home" style={{paddingTop: 10}}>
                  <AnimatedText text={t('Hi')} delay={400} styleNumber={0} speed={50} size={62} />
                  <AnimatedText text={t('Welcome')} delay={1400} styleNumber={0} speed={50} size={62} />
                  <div style={{height: 50}}></div>
                  <AnimatedText text={t('If')} delay={2250} styleNumber={1} speed={50} size={62} />
                  <AnimatedText text={t('and')} delay={3100} styleNumber={1} speed={50} size={62} />
                  <AnimatedText text={t('the')} delay={3850} styleNumber={1} speed={50} size={62} />
                </div>
              </Zoom>
            </div>
          </Grid>
          <Grid md={3} lg={5} xl={5}>
            <div className="top-of-page" style={{height: 920}}>
              <Avatar ava_num={0}/>
            </div>
          </Grid>
        </Grid>
        
        <div className="bottom-of-page" style={{height: 920, marginTop: 20}}>
          <ScrollButton direction="up"/>
          <div className="cards" style={{marginTop: 190}}>
            <ProjectCardList />
          </div>
        </div>
      </Box>
  );
}

export default App;
