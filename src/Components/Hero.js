import React, {useState} from 'react'
import Desert from '../images/Desert.jpg'
import {Button} from './LoneButton'
import {
    HeroContainer,
    HeroBg,
    ImageBg,
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
                <ImageBg src={Desert} alt='desert me' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Selamat Datang! 🇮🇩</HeroH1>
                <HeroP>Hi! I'm a Full-Stack web developer based in New York City.</HeroP>
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
