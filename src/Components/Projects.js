import React from 'react'
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectsH2,
    ProjectsCard,
    ProjectsIcon,
    ProjectsP
} from '../StyledComponents/ProjectsElements'

function Projects() {
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon src={icon1} />
                        <ProjectsH2>Project 1</ProjectsH2>
                        <ProjectsP>Blablblablabla</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={icon2} />
                        <ProjectsH2>Project 2</ProjectsH2>
                        <ProjectsP>Blablblablabla</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={icon3} />
                        <ProjectsH2>Project 3</ProjectsH2>
                        <ProjectsP>Blablblablabla</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
       </>
    )
}

export default Projects
