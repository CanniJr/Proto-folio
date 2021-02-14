import React from 'react';
import { Route, Link} from 'react-router-dom';
import { Button } from './LoneButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
    BtnWrap,
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
                                    <a href='https://drive.google.com/file/d/1nPuOkJmPZiJhR3gRbl7FEXzZopavQ9t8/view?usp=sharing'
                                        download>
                                        My Resume
                                    </a>
                                : null
                                }
                                {id === 'contact' ?
                                    <SocialWrap>
                                        <GitHubIcon style={{ color: 'grey', marginRight: '12px'}}  />
                                        <BookIcon style={{color: 'black', marginRight: '12px'}}/>
                                        <LinkedInIcon color='primary'/>
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
