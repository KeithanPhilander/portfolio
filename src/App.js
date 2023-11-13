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
        },
        {
            title: "Cannajoy",
            description: "Welcome to CannaJoy, a cutting-edge cannabis experience meticulously crafted with React.",
            projectUrl: "https://cerulean-chebakia-c0dd4c.netlify.app/",
            image: "images/cannajoy.png"
        },
        {
            title: "KNC Branding",
            description: "KNC Branding Studio is a design and manufacturing hub dedicated to providing affordable signage solutions.",
            projectUrl: "https://zen-swirles-fc5d47.netlify.app/",
            image: "images/covid.jpg"
        },
        {
            title: "Sunnyside Demo",
            description: "Welcome to Sunnyside, where creativity meets strategy. We specialize in accelerating brand growth through captivating visuals that speak louder than words.",
            projectUrl: "https://festive-rosalind-3aec0c.netlify.app/",
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
