import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    border-top: 1px solid lightgrey;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    margin: 10px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    height: 400px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectsLink = styled.div`
    border-top: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LinksP = styled.p`
    margin-right: 15px;
`

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
    margin-top: -60px;
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ProjectsH2 = styled.h2`
    font-weight: 2rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 12px;
    text-align: center;
`
