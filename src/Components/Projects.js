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
import icon2 from '../images/tailwind-cinema.png'
import icon3 from '../images/trackit19.png'

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
                        <ProjectsH2>Tailwind Cinema</ProjectsH2>
                        <ProjectsP>A responsive movie selector web app using Front-end technologies such as Next.js and Tailwind CSS to improve visual effect and loading time</ProjectsP>
                        <ProjectsLink>
                            <LinksP><a href='https://tailwind-cinema.vercel.app/' target="_blank" rel='noreferrer'>Website</a></LinksP>
                            <LinksP><a href='https://github.com/CanniJr/tailwind-cinema' target="_blank" rel='noreferrer'>Source Code</a></LinksP>
                        </ProjectsLink>
                    </ProjectsCard>
                    <ProjectsCard>
                        <ProjectsIcon src={icon3} />
                        <ProjectsH2>Trackit - 19</ProjectsH2>
                        <ProjectsP>This application lets users track live cases of the coronavirus (Covid - 19), the recoveries and deaths by countries.</ProjectsP>
                        <ProjectsLink>
                            <LinksP><a href='https://trackit-19.web.app/' target="_blank" rel='noreferrer'>Website</a></LinksP>
                            <LinksP><a href='https://github.com/CanniJr/trackit-19' target="_blank" rel='noreferrer'>Source Code</a></LinksP>
                        </ProjectsLink>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>
       </>
    )
}

export default Projects
