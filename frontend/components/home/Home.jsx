import React from 'react'

import HeroSection from './HeroSection'
import CenterHero from './CenterHero'
import JourneySteps from './Journey'
import NavigatePages from './NavigatePages'



const Home = () => {
    return (
        <div>
            <HeroSection />
            <CenterHero />
            <JourneySteps />
            <NavigatePages />
    
        </div>
    )
}

export default Home