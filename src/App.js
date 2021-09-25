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
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe cumque quisquam nisi iusto placeat id atque veniam adipisci!",
            projectUrl: "https://netflix-clone-99d0a.web.app/",
            image: "images/netflix.jpg"
        },
        {
            title: "Covid-19 Tracker",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe cumque quisquam nisi iusto placeat id atque veniam adipisci!",
            projectUrl: "https://covid19-tracker-f002d.web.app/",
            image: "images/covid.jpg"
        },
        {
            title: "Amazon Clone",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse saepe cumque quisquam nisi iusto placeat id atque veniam adipisci!",
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
