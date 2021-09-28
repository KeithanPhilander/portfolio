import React from 'react'

import { Navbar, Home, Portfolio, Contact, Footer } from "./components"
import "./App.css"

const App = () => {

    const metaData = {
        title: "Portfolio - Keithan Philander",
        mainImage: "images/illustration.png",
        contactImage: ""
    }

    const projectData = [
        {
            title: "Netflix Clone",
            description: "A simple netflix clone built with React. I used TMDB api and an npm package called movie-trailer. You can scroll through all the latest movies and series and watch the trailers.",
            projectUrl: "https://netflix-clone-99d0a.web.app/",
            image: "images/netflix.jpg"
        },
        {
            title: "Covid-19 Tracker",
            description: "A covid-19 tracker built with React, disease.sh, leaflet, material-ui and chartjs. You can view current covid stats both local and international.",
            projectUrl: "https://covid19-tracker-f002d.web.app/",
            image: "images/covid.jpg"
        },
        {
            title: "Amazon Clone",
            description: "An E-Commerce site built with React and material-ui. It's a clone of the popular Amazon website. You can signup/login and add and remove items from your cart.",
            projectUrl: "https://clone-eb3bc.web.app/",
            image: "images/amazon.jpg"
        }
    ]

    return (
        <>
            <div className="wrapper">
                <Navbar />
                <main className="content">
                    <Home metaData={metaData} />
                    <Portfolio projects={projectData} />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>

    )
}

export default App
