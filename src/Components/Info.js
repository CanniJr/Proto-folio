import React from 'react';
// import { Button } from './LoneButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyPDF from '../pages/resume.pdf'
import {
    // BtnWrap,
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    SocialWrap,
    TopLine
} from '../StyledComponents/InfoElements';

function Info({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                {id === 'about' ?
                                    <a href={MyPDF}
                                        download="cannigia_resume.pdf">
                                        Download My Resume
                                    </a>
                                : null
                                }
                                {id === 'contact' ?
                                    <SocialWrap>
                                        <a href='https://github.com/CanniJr'>
                                            <GitHubIcon style={{ color: 'grey', marginRight: '12px'}}  />
                                        </a>
                                        <a href='https://cannigialaluw.medium.com/'>
                                            <BookIcon style={{color: 'black', marginRight: '12px'}}/>
                                        </a>
                                        <a href='https://www.linkedin.com/in/cannigialaluw/'>
                                            <LinkedInIcon color='primary'/>
                                        </a>
                                    </SocialWrap>
                                    : null
                                }
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
        
    )
}

export default Info
