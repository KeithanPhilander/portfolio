import React from 'react'
import Project from './Project/Project'
import "./Portfolio.css"

const Portfolio = ({ projects }) => {
    return (
        <div id="work" className="portfolio">
            <h2 className="section__title">Projects</h2>
            <div className="portfolio__projects">
                {
                    projects.map(project => (
                        <Project key={project.title} project={project} />
                    ))
                }
            </div>
        </div >
    )
}

export default Portfolio
