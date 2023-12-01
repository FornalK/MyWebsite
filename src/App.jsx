import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from "react-responsive";
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

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1760px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1440px) and (max-width: 1759px)' });
  const isLaptopL = useMediaQuery({ query: '(min-width: 1024px) and (max-width: 1439px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  let texts_size = 62;
  let texts_box_height = 530;
  let texts_box_width = '50%';
  let texts_box_margin_top = '8%'
  let ava_size = 250;
  let space_size = 50;
  let project_columns = 3;
  let img_width = 460;
  let img_height = 300;

  if (isBigScreen) {
    texts_size = 56;
    texts_box_height = 490;
    texts_box_width = '60%';
  } else if (isLaptopL) {
    texts_size = 40;
    texts_box_height = 346;
    texts_box_width = '60%';
    texts_box_margin_top = '10%'
    ava_size = 220
    space_size = 40
    img_width = 320;
    img_height = 208;
  } else if (isLaptop) {
    texts_size = 28;
    texts_box_height = 246;
    texts_box_width = '60%';
    texts_box_margin_top = '12%'
    ava_size = 190
    space_size = 30
    img_width = 320;
    img_height = 208;
    project_columns = 2;
  } else if (isMobile) {
    texts_size = 14;
    texts_box_height = 128;
    texts_box_width = '60%';
    texts_box_margin_top = '30%'
    ava_size = 150
    space_size = 20
    img_width = 240;
    img_height = 156;
    project_columns = 1;
  }

  return (
    <Box>
      <ScrollButton direction="down"/>
      <div className="top-of-page" style={{height: 920}}>
        <Zoom in={start} style={{ transitionDelay: start ? '300ms' : '0ms' }}>
          <div className="texts_home" style={{minHeight: texts_box_height, width: texts_box_width, marginTop: texts_box_margin_top}}>
            <AnimatedText text={t('Hi')} delay={400} styleNumber={0} speed={50} size={texts_size} />
            <AnimatedText text={t('Welcome')} delay={1400} styleNumber={0} speed={50} size={texts_size} />
            <div style={{height: space_size}}></div>
            <AnimatedText text={t('If')} delay={2250} styleNumber={1} speed={50} size={texts_size} />
            <AnimatedText text={t('and')} delay={3100} styleNumber={1} speed={50} size={texts_size} />
            <AnimatedText text={t('the')} delay={3850} styleNumber={1} speed={50} size={texts_size} />
          </div>
        </Zoom>
        <Avatar avaNum={0} avaSize={ava_size}/>
      </div>

      <div className="bottom-of-page" style={{height: 920, marginTop: 20}}>
        <ScrollButton direction="up"/>
        <div className="cards">
          <ProjectCardList columns={project_columns} imgWidth={img_width} imgHeight={img_height}/>
        </div>
      </div>
    </Box>
  );
}

export default App;
