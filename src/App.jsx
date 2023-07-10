import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import AnimatedText from './components/AnimatedText';
import ScrollButton from './components/ScrollButton';
import ProjectCardList from './components/ProjectCardList';

const texts = [
  "Hi! Your Web Designer here.",
  "Welcome to my website.",
  "If you want to see my works",
  "and projects, please click",
  "the button below."
]

function App() {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <ScrollButton direction="down"/>
    <ScrollButton direction="up"/>
    <Grid container spacing={1}>
      <Grid xs={12} sm={12} md={9} lg={7} xl={7}>
        <div className="top-of-page" style={{height: 920}}>
          <div className="texts" style={{paddingTop: 10}}>
            <AnimatedText text={texts[0]} delay={500} styleNumber={0} />
            <AnimatedText text={texts[1]} delay={1600} styleNumber={0} />
            <div style={{height: 50}}></div>
            <AnimatedText text={texts[2]} delay={2780} styleNumber={1} />
            <AnimatedText text={texts[3]} delay={3780} styleNumber={1} />
            <AnimatedText text={texts[4]} delay={4780} styleNumber={1} />
          </div>
        </div>
      </Grid>
      <Grid md={3} lg={5} xl={5}>
        <div className="top-of-page" style={{height: 920}}>
          <div>XDD</div>
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
