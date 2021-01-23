import React, {useState} from 'react'
import Video from '../videos/coding.mp4'
import {Button} from './LoneButton'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrovForward,
    ArrowRight
} from '../StyledComponents/HeroElements'

function Hero() {
    const [hover, sethover] = useState(false)

    const onHover = () => {
        sethover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to my Portfolio</HeroH1>
                <HeroP>Scroll down to see What's up!</HeroP>
                <HeroBtnWrapper>
                    <Button to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        This is me! {hover ? <ArrovForward /> : <ArrowRight/>}  
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
