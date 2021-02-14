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
import icon1 from '../images/img-3.svg'
import icon2 from '../images/img-4.svg'
import icon3 from '../images/img-7.svg'

function Projects() {
    return (
        <>
            <ProjectsContainer id='projectCards'>
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon src={icon1} />
                        <ProjectsH2>Amaclone</ProjectsH2>
                        <ProjectsP>E-commerce website using Google Firebase to host website, store user database, and easy login. Also implemented Stripe to process payments by user.</ProjectsP>
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
