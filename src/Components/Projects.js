import React from 'react'
import {
    ProjectsContainer,
    ProjectsWrapper,
    ProjectsH1,
    ProjectsH2,
    ProjectsCard,
    ProjectsLink,
    LinksP,
    ProjectsIcon,
    ProjectsP
} from '../StyledComponents/ProjectsElements'
import icon1 from '../images/amaclone.png'
import icon2 from '../images/bnb.png'
import icon3 from '../images/I-tripped.png'

function Projects() {
    return (
        <>
            {/* id='projectCards' */}
            <ProjectsContainer >
                <ProjectsH1>My Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsIcon src={icon1} />
                        <ProjectsH2>Amaclone</ProjectsH2>
                        <ProjectsP>E-commerce website using Google Firebase to host website, store user database, and easy login. Also implemented Stripe to process payments by user.</ProjectsP>
                        <ProjectsLink>
                            <LinksP><a href='https://amaclone01.web.app/' target="_blank" rel='noreferrer'>Website</a></LinksP>
                            <LinksP><a href='https://github.com/CanniJr/Amaclone' target="_blank" rel='noreferrer'>Source Code</a></LinksP>
                        </ProjectsLink>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={icon2} />
                        <ProjectsH2>Airbee-n-bee</ProjectsH2>
                        <ProjectsP>I made this to further improve on React-Hooks and CSS and also to build a well-designed user interface. Hosted on Google Firebase</ProjectsP>
                        <ProjectsLink>
                            <LinksP><a href='https://airbee-n-bee.web.app/' target="_blank" rel='noreferrer'>Website</a></LinksP>
                            <LinksP><a href='https://github.com/CanniJr/airbee-n-n-bee' target="_blank" rel='noreferrer'>Source Code</a></LinksP>
                        </ProjectsLink>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={icon3} />
                        <ProjectsH2>I-Tripped</ProjectsH2>
                        <ProjectsP>This project was the final project from Flatiron School. I implemented JWT auth on the backend using Ruby on Rails, and React Frontend. This project is under construction as I like to fix some features in it but feel free to take a peek at the source code.</ProjectsP>
                        <ProjectsLink>
                            <LinksP>Website</LinksP>
                            <LinksP><a href='https://github.com/CanniJr/I-tripped-FrontEnd' target="_blank" rel='noreferrer'>Source Code</a></LinksP>
                        </ProjectsLink>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
       </>
    )
}

export default Projects
