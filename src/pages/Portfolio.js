import React from 'react'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
const projectARR = [
    {
        title:'DonutApp', 
        github: 'https://github.com/erodriguez541/donutProject', 
        deployed: 'https://erodriguez541.github.io/donutProject/',
        description: 'Find a donut nearby'
    },
    {
        title:'Calendar', 
        github: 'https://github.com/spirithoula/05_calendar', 
        deployed: 'https://spirithoula.github.io/05_calendar/',
        description: 'Work Schedule/Calendar'
    },
    {
        title:'Weather Tracker', 
        github: 'https://github.com/spirithoula/06_weather', 
        deployed: 'https://spirithoula.github.io/06_weather/',
        description: 'Weather Tracker App'
    },
]
    return (
        <div>
            Portfolio
            
            {projectARR.map(item => {
                return (
                    <PortfolioItem project={item} />
                )

            })}
        </div>
    )
}