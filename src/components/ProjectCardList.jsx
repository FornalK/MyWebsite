import { Container } from '@mui/material';
import ProjectCard from "./ProjectCard";
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'

function ProjectCardList() {
    const images = [photo1, photo2, photo3, photo4, photo5, photo6];
    const cards = images.map((photo) => 
        <ProjectCard key={photo} img={photo} cardHeight={300}/>
    );

    return (
        <Container maxWidth="xl" >
            <div id="XD" style={{margin: 'auto'}}>
                {cards}
            </div>
        </Container>
    );
}

export default ProjectCardList;